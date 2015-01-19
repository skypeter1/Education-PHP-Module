<?php
class CursosDomain extends Domain
{
    public $models = array('model' => array('modelclass' => 'CursosModel'),
        'usersmodel' => array('modelclass' => 'UsersModel'),
        'alumnosmodel' => array('modelclass' => 'AlumnosModel'));

    public $foreign_keys = array('profesor' => array('entity_class' => 'User', 'model' => 'usersmodel'));
    public $foreign_fields_for_global_search = array("users.name");  
    
    public function get_pac_products()
    {
        $current_user = $this->auth->get_current_user();
        return $this->model->get_pac_products($current_user->id);
    }

    public function get_pac_products_for_pagos()
    {
        $current_user = $this->auth->get_current_user();
        return $this->model->get_pac_products($current_user->id, "5.1.02");
    }

    public function get_bodegas() 
    {

        $current_user = $this->auth->get_current_user();
        $result = $this->model->get_bodegas($current_user->id, $current_user);   
        return $result;
    }

    protected function products_result_to_entities($result)
    {
        $entities = array();
        foreach ($result->collection as $row) {
            $main_entity = $this->row_to_entity($row, "PacProduct");
            $entities[] = $main_entity;
        } 

        $result->collection = $entities;

        return $result;
    }

    public function search(Search $search)
    {  
       $current_user = $this->auth->get_current_user();         
       
        if ($current_user->rol=='profesor'){

        }
             
        $search->filters[] = $this->get_bodega_filter();

        return parent::Search($search);   
    }

    protected function get_bodega_filter()
    {
        $bodegas = $this->get_bodegas();
        $bodegas_id = array();
        foreach ($bodegas as $bodega) {
            $bodegas_id[] = $bodega["id"];
        }

        return new Filter("bodega", $bodegas_id, "WHERE IN");
    }

    protected function search_result_to_entities($result)
    {
        $entities = array();
        foreach ($result->collection as $row) {
            $entities[$row["id"]] = $this->process_foreign_objects($row, $row);
        }

        $result->collection = $entities;
        return $result;
    }

    protected function process_foreign_objects($entity, $row)
    {
        foreach ($this->foreign_keys as $foreign_property => $foreign_data) {
            $foreign_row = $this->extract_foreign_data_from_row($row, $foreign_data);
            if ($this->check_entity_permissions($foreign_data['entity_class'])) {
                $foreign_entity = $this->row_to_entity($foreign_row, $foreign_data['entity_class']);
                $entity[$foreign_property] = $foreign_entity;
            }
        }

        return $entity;
    }

    public function get_overview($curso_id)
    {
        $result = array();
        $curso = $this->get($curso_id);
        $result["curso"] = $curso;
        $result["examenes"] = array_values($this->get_examenes_by_curso($curso_id, $curso));
        $result["alumnos"] = array_values($this->get_alumnos_by_curso_with_notas($curso_id));
        return $result;
    }

    protected function get_examenes_by_curso($curso_id, $curso)
    {
        $model = new ExamenesModel($this->main_db);

        $filter = new Filter('curso', $curso_id);
        $order = new Order("id", "asc");
        $search = new Search($filter, null, $order);

        $examenes = $model->search($search);
        $pesos = json_decode($curso->pesos, true);

        $result = array();

        foreach ($examenes->collection as $examen) {
            if (!isset($result[$examen["categoria"]])) {
                $result[$examen["categoria"]] = array();
                $result[$examen["categoria"]]["examenes"] = array();
                $result[$examen["categoria"]]["peso"] = "";

            }

            $result[$examen["categoria"]]["categoria"] = $examen["categoria"];
            $result[$examen["categoria"]]["examenes"][] = $examen;
            if (isset($pesos[$examen["categoria"]]))
                $result[$examen["categoria"]]["peso"] = $pesos[$examen["categoria"]];

        }

        return $result;
    }

    protected function get_alumnos_by_curso_with_notas($curso_id)
    {
        $model = new AlumnosModel($this->main_db);
        $filter = new Filter("curso", $curso_id);
        $search = new Search($filter);

        $result = $model->search($search);

        $result = $this->add_notas_to_alumnos($result->collection, $curso_id);
        $result = $this->add_asistencia_to_alumnos($result, $curso_id);

        return $result;
    }

    protected function add_asistencia_to_alumnos($alumnos, $curso_id)
    {
        $db = DBAccessCreator::get_db_access($this->main_db->database);

        $db->select("id");
        $db->where("curso", $curso_id);

        $sesiones = $db->get("sesiones")->result_array();

        $sesiones_id = array();
        foreach ($sesiones as $sesion)
            $sesiones_id[] = $sesion["id"];

        if (sizeof($sesiones) == 0) return $alumnos;

        $db->where_in("sesion", $sesiones_id);
        $asistencias = $db->get("asistencia")->result_array();

        foreach ($asistencias as $asistencia) {
            if (isset($alumnos[$asistencia["alumno"]])) {
                $alumno = & $alumnos[$asistencia["alumno"]];
                if (!isset($alumno["asistencia"])) $alumno["asistencia"] = 0;

                if ($asistencia["estado"] != "No asistio")
                    $alumno["asistencia"] += 1;

            }
        }

        $number_of_sesions = sizeof($sesiones);

        foreach ($alumnos as &$alumno) {
            if (isset($alumno["asistencia"]))
                $alumno["asistencia"] = number_format(($alumno["asistencia"] / $number_of_sesions) * 100, 1);
            else
                $alumno["asistencia"] = 0;

        }

        return $alumnos;
    }

    protected function add_notas_to_alumnos($alumnos, $curso_id)
    {
        $examenes = $this->get_examenes_ids_by_curso($curso_id);
        $examenes_ids = array_keys($examenes);

        $this->main_db->where_in("examen", $examenes_ids);
        $this->main_db->order_by("examen");

        $notas = array();

        if (sizeof($examenes_ids) > 0)
            $notas = $this->main_db->get("notas")->result_array();

        $new_alumnos = array();

        foreach ($notas as $nota) {
            if (isset($alumnos[$nota["alumno"]]) && isset($examenes[$nota["examen"]])) {
                $alumno = & $alumnos[$nota["alumno"]];
                $examen = $examenes[$nota["examen"]];

                $alumno = $this->get_notas_for_alumno($nota, $examen, $alumno);
            }
        }

        foreach ($alumnos as &$alumno) {
            if (!isset($alumno["notas"]) OR (isset($alumno["notas"]) AND sizeof($alumno["notas"]) != sizeof($examenes))) {
                foreach ($examenes as $examen) {
                    $alumno = $this->get_notas_for_alumno("-", $examen, $alumno);
                }
            }
        }

        foreach ($alumnos as &$alumno) {
            if (isset($alumno["notas"]) AND is_array($alumno["notas"]))
                $alumno["notas"] = array_values($alumno["notas"]);
        }

        return $alumnos;
    }

    protected function get_notas_for_alumno($nota, $examen, $alumno)
    {

        if (isset($alumno["notas"][$examen["categoria"]])) {
            foreach ($alumno["notas"][$examen["categoria"]] as $current_examen) {
                if ($current_examen["id"] == $examen["id"]) return $alumno;
            }
        }

        if (!isset($alumno["notas"])) $alumno["notas"] = array();
        if (!isset($alumno["notas"][$examen["categoria"]])) $alumno["notas"][$examen["categoria"]] = array();

        $examen["nota"] = $nota["nota"];

        $alumno["notas"][$examen["categoria"]][] = $examen;

        return $alumno;
    }

    protected function get_examenes_ids_by_curso($curso_id)
    {
        $examenes_model = new ExamenesModel($this->main_db);
        $examenes_model->db->where("curso", $curso_id);

        $examenes = $examenes_model->search();

        return $examenes->collection;
    }

    public function get_report(Search $search)
    {
        $cursos = $this->search($search);
        $cursos_ids = array_keys($cursos->collection);

        $matriculas = $this->get_group_matriculas_by_curso($cursos_ids);
        $alumnos = $this->alumnosmodel->get_alumnos_by_cursos($cursos_ids);
        foreach ($cursos->collection as &$curso) {
            $curso["alumnos"] = array();
            if (isset($matriculas[$curso["id"]]))
                foreach ($matriculas[$curso["id"]] as $alumno_id)
                    $curso["alumnos"][] = $alumnos[$alumno_id];
        }

        return $cursos;
    }

    protected function get_group_matriculas_by_curso($cursos)
    {
        if (empty($cursos)) return array();

        $this->main_db->where_in("curso", $cursos);
        $db_result = $this->main_db->get("matriculas")->result_array();

        $result = array();
        foreach ($db_result as $matricula) {
            if (!isset($result[$matricula["curso"]]))
                $result[$matricula["curso"]] = array();

            $result[$matricula["curso"]][] = $matricula["alumno"];
        }

        return $result;
    }
}
