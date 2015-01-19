<?php
class AlumnosDomain extends Domain
{
	public $models = array("model" => array("modelclass" => "AlumnosModel"));

	public function get_pac_clients()
	{
		return $this->model->get_pac_clients();
	}

	public function get_alumnos_history($alumno_id)
	{
		$cursos = $this->get_cursos_by_alumno($alumno_id);
		$cursos = $this->add_notas_finales($cursos, $alumno_id); 
		$cursos = $this->add_asistencia($cursos, $alumno_id);

		return array_values($cursos);
	}

    public function get_cursos($alumno_id)
    {
        $cursos = $this->get_cursos_by_alumno($alumno_id);

        return array_values($cursos);
    }

	protected function add_asistencia($cursos, $alumno_id)
	{
		$cursos_ids = array_keys($cursos);

		$sesiones_model = new SesionesModel($this->main_db, $this->auth);
		$search = new Search(array(new Filter("curso", $cursos_ids, "WHERE IN"), new Filter("estado", "1", "EQUALS")));
		$sesiones = $sesiones_model->search($search)->collection;

		$sesiones_ids = array_keys($sesiones);

		$asistencias = array();

		if(sizeof($sesiones_ids) > 0)
		{
			$this->main_db->where_in("alumno", $alumno_id);
			$asistencias = $this->main_db->get("asistencia")->result_array();
		}

        $asistencias_by_sesion = array(); 
        foreach($asistencias as $asistencia)
        {
            $asistencias_by_sesion[$asistencia["sesion"]] = $asistencia;
        } 

		$asistencia_by_curso = array();
		foreach($sesiones as &$sesion)
		{
			$curso = $sesion["curso"];
            if(!isset($asistencia_by_curso[$curso]))
                $asistencia_by_curso[$curso] = array();
            
            if(isset($asistencias_by_sesion[$sesion["id"]]))
            {
				if($asistencias_by_sesion[$sesion["id"]]["estado"] != "No asistio")
					$asistencia_by_curso[$curso][] = 1;
				else
					$asistencia_by_curso[$curso][] = 0;
            }
            else
            {
                $asistencia_by_curso[$curso][] = 0;
            }
		}


		foreach($asistencia_by_curso as $curso_id => $asistencia)
		{
			if(isset($cursos[$curso_id]))
			{
				$values = array_count_values($asistencia);

				if(isset($values[1]))
					$cursos[$curso_id]["asistencia"] = number_format(($values[1]/sizeof($asistencia))*100, 1);
			}
		}


		return $cursos;
	}

	protected function add_notas_finales($cursos, $alumno_id)
	{
		$this->main_db->where("alumno", $alumno_id);
		$notas_finales = $this->main_db->get("notas_finales")->result_array();

		foreach($cursos as &$curso)
			$curso["nota_final"] = 0;


		foreach($notas_finales as $nota)
		{
			if(isset($cursos[$nota["curso"]]))
			{
				$curso = &$cursos[$nota["curso"]];
				$curso["nota_final"] = $nota["nota"];
			}
		}

		return $cursos;
	}

	protected function get_cursos_by_alumno($alumno_id)
	{
        $this->main_db->where("alumno", $alumno_id);

		$matriculas = $this->main_db->get("matriculas")->result_array();

		$cursos_ids = array();

		foreach($matriculas as $matricula)
			$cursos_ids[] = $matricula["curso"];

		$cursos_model = new CursosModel($this->main_db, $this->auth);
		$cursos_model->db->where("(estado='Terminado' OR estado='Cursando')");
		$cursos = $cursos_model->get_by_ids($cursos_ids);

		return $cursos->collection;
	}

    protected function clients_result_to_entities($result)
	{
		$entities = array();
		foreach($result->collection as $row)
		{
			$main_entity = $this->row_to_entity($row, "PacClient");
			$entities[] = $main_entity;		
		}
		
		$result->collection = $entities;

		return $result;
	}
}
