<?php
class SesionesModel extends Model
{
  public $table = "sesiones";
  public $entity = "Sesion";
   
  public $search_fields = array(
      "fecha",
      "hora_inicio",
      "hora_fin",
      "profesor",
      "curso",
      "incidencias",    
      "observaciones",
      "estado"
      
  );

  const ASISTENCIAS_TABLE = "asistencia";

  public function get_total_hours_by_curso_of_sesion($sesion_id)
  {

        $session_sql = 'SELECT * FROM sesiones WHERE id = ' . $sesion_id;
        $sessions_query = $this->db->query($session_sql, FALSE);
        $sessions = $sessions_query->result();
        $curso_id = $sessions[0]->curso;

        $session_sql = 'SELECT * FROM cursos WHERE id = ' . $curso_id;
        $sessions_query = $this->db->query($session_sql, FALSE);
        $sessions = $sessions_query->result();
        $hours_maxim = $sessions[0]->horas;
        
        $session_sql = 'SELECT sum(hora_fin - hora_inicio) AS HOURS_TOTAL FROM sesiones WHERE curso = ' . $curso_id;
        $sessions_query = $this->db->query($session_sql, FALSE);
        $sessions = $sessions_query->result();
        $sessions[0] -> hours_maxim = $hours_maxim;
        return $sessions;          
           
                
  }
  
  
  public function save_asistencias(array $asistencias)
  {
    $insertion = array();

    foreach($asistencias as $sesion => $alumnos)
    {
      $this->db->where("sesion", $sesion);
      $this->db->delete(self::ASISTENCIAS_TABLE);

      $insertion = array_merge($insertion, $this->prepare_asistencias_for_insertion($sesion, $alumnos));
    }

    if(!empty($insertion))
      $this->db->insert_batch(self::ASISTENCIAS_TABLE, $insertion);
  }

  protected function get_bodega($bodega_id)
  {
    $benedict_db = DBAccessCreator::get_db_access("benedict_langschool");

    $benedict_db->where("numtab", "97");
    $benedict_db->where("codtab", $bodega_id);
    $benedict_db->select("codtab, ad7tab, nomtab");

    $bodegas = $benedict_db->get("maetab")->result_array();

    $result = array();

    foreach($bodegas as $index => $bodega)
    {
      $result[$index] = array();
      $result[$index]["nombre"] = $bodega["nomtab"];
      $result[$index]["id"] = $bodega["codtab"];
      $result[$index]["db_name"] = "";

      $matches = array();
      preg_match_all("/DATABASE=([^;]*)/", $bodega["ad7tab"], $matches);

      if(sizeof($matches[0]) > 0)
        $result[$index]["db_name"] = $matches[1][0];
    }

    return $result[0];

  }

  protected function prepare_asistencias_for_insertion($sesion, $alumnos)
  {
    $result = array();

    foreach ($alumnos as $alumno => $asistencia)
    {
      $result[$alumno] = array("sesion" => $sesion, "alumno" => $alumno,
        "estado" => $asistencia["estado"], "observaciones" => $asistencia["observaciones"]);
    }

    return array_values($result);
  }

  public function get_asistencia_for_sesion($sesion)
  {
    $this->db->where("sesion", $sesion);
    $db_result = $this->db->get(self::ASISTENCIAS_TABLE)->result_array();

    $result = new EntityCollection();

    foreach($db_result as $asistencia)
    {
      $result->collection[] = array("alumno" => $asistencia["alumno"], "estado" => $asistencia["estado"],
        "observaciones" => $asistencia["observaciones"]);
    }

    return $result;
  }

  public function save_pagos($pagos)
  {
    $data_update = array();

    foreach($pagos as $pago)
    {
      $data_update[] = array("id" => $pago, "pagado" => 1);
    }

    $this->db->update_batch("sesiones", $data_update, "id");
  }

  public function check_pac_setup_for_pagos()
  {
    $db = DBAccessCreator::get_db_access("benedict_langschool");

    if(!$this->pac_tables_for_pagos_exists())
      return false;

    $db->where(array('numtab' => '61', 'codtab' => '91'));
    $db->where(array('numtab' => '02', 'codtab' => '20'));
    $db->get('maetab');
    $results = $db->count_all_results();

    return $results > 0;
  }

  public function save_pac_orden_de_compra($data)
  {
    $bodega = $this->get_bodega($data["bodega_destino"]);
//    $db = DBAccessCreator::get_db_access($bodega["db_name"]);
    $db = DBAccessCreator::get_db_access("benedict_langschool");
          
    $id_orden_de_compra = $this->get_orden_de_compra_id($db);

    $db->where('numtab', '61');
    $db->where('codtab', '91');
    $db->update('maetab', array('ad1tab' => $id_orden_de_compra));

    $general_info = array(
      'nopedido30' => $id_orden_de_compra
      ,'codcte30' => $data['proveedor']['id']
      ,'fecpedido30' => date('Y/m/d H:i:s')
      ,'nomcte30' => $data['proveedor']['nombre']
      ,'novend30' => '01'
      ,'localid30' => $data['proveedor']['localidad']
      ,'condpag30' => $data['proveedor']['condicion_de_pago']
      ,'status30' => '01'
      ,'dircte30' => $data['proveedor']['direccion']
      ,'telcte30' => $data['proveedor']['telefono']
      ,'bodega30' => $data['bodega']
      ,'UID' => $data['id_usuario']
      ,'fecdespacho30' => date('Y/m/d')
      ,'fecestado30' => date('Y/m/d H:i:s')
      ,'hisuid' => $data['username']." --> ".$this->get_estado_pedido()." |"
    );

    foreach ($data["productos"] as $key => $producto)
    {
      $producto_info = array(
        'codprod30' => $producto['id']
        ,'ocurren30' => str_pad($key, 2, '0', STR_PAD_LEFT)
        ,'cantped30' => $producto['horas']
        ,'cantafac30' => $producto['horas']
        ,'precuni30' => $producto['valor']
        ,'nomprod30' => $producto['nombre']
        ,'iva30' => $producto['iva']
      );
      $db->insert('maeord30', array_merge($general_info, $producto_info));
    }

    $this->update_maetab($db);

    return $id_orden_de_compra;
  }

  public function get_cursos_to_profesor($id_profesor)
  {
    $this->db->where("profesor", $id_profesor);
    $cursos = $this->db->get("cursos")->result_array();
    return $cursos;
  }

  public function get_sesiones_of_profesor_in_curso($id_cursos, $id_profesor)
  {
    if(sizeof($id_cursos) == 0)
      return array();
    
    
    $this->db->where("sesiones.estado", "1");
    $this->db->select('sesiones.id AS id_sesiones, sesiones.profesor AS id_profesor, sesiones.fecha,
      sesiones.hora_inicio, sesiones.hora_fin, sesiones.curso AS id_curso, users.name AS name_profesor, sesiones.tarifa AS tarifa ');
    $this->db->join('users', 'sesiones.profesor = users.id');
    $this->db->from('sesiones');
    $this->db->where_in('curso', $id_cursos);
    $this->db->or_where('sesiones.profesor', $id_profesor);

    //$sql = $this->db->last_query();

    $result_array = $this->db->get()->result_array();


    foreach($result_array as &$sesion)
    {
      $info_curso = $this->get_curso_info_by_id($sesion["id_curso"]);
      $sesion["horas"] = 0;
      $sesion["valor"] = 0;

      $sesion["identificador_curso"] = $info_curso[0]["identificador"];
      $sesion["name_curso"] = $info_curso[0]["nombre"];
    }
    //$result_array[0]['query'] = $sql;
    return $result_array;
  }

  public function get_cursos_to_alumno($id_alumno = '')
  {
    $this->db->select('cursos.id AS id_curso, cursos.identificador, cursos.nombre');
    $this->db->from('matriculas');
    $this->db->like('alumno', $id_alumno);
    $this->db->join('cursos', 'matriculas.curso = cursos.id');
    return $this->db->get()->result_array();
  }

  public function get_asistencia_alumno($id_alumno)
  {
    return $this->db->query("SELECT * , `asistencia`.`estado` AS 'estado_asistencia'
      , `asistencia`.`observaciones` AS 'observaciones'
      , `sesiones`.`estado` AS 'estado_sesion'
      FROM `asistencia`
        INNER JOIN `sesiones` ON `asistencia`.`sesion` = `sesiones`.`id`
      WHERE `asistencia`.`alumno` LIKE $id_alumno
        AND `sesiones`.`estado` = 1"
      )->result_array();
  }

  public function get_cursos_list()
  {
    $cursos_array = $this->db->get("cursos")->result_array();

    $result_array = array();
    foreach ($cursos_array as $key => $curso)
    {
      $result_array[$curso['id']] = $curso;
    }

    return $result_array;
  }

  protected function get_curso_info_by_id($id_curso)
  {
    $this->db->select("identificador, nombre");
    $this->db->like("id", $id_curso);
    return $this->db->get("cursos")->result_array();
  }

  protected function update_maetab($db)
  {
    $date = array('nomtab' => date('Y/m/d'));

    $db->where('numtab', '02');
    $db->where('codtab', '20');
    $db->update('maetab', $date);
  }

  protected function get_estado_pedido()
  {
    $db = DBAccessCreator::get_db_access("benedict_langschool");

    $db->where('numtab', '49');
    $db->where('codtab', '01');
    $result_array = $db->get('maetab')->result_array();

    return $result_array[0]['nomtab'];
  }

  protected function get_orden_de_compra_id($db)
  {
    $db->where('numtab', '61');
    $db->where('codtab', '91');
    $result_array = $db->get('maetab')->result_array();

    $last_id = number_format($result_array[0]["ad1tab"], 0, '.', '');
    $last_id ++;

    return str_pad($last_id, 7, '0', STR_PAD_LEFT);
  }

  protected function pac_tables_for_pagos_exists()
  {
    $db = DBAccessCreator::get_db_access("benedict_langschool");
    return $db->table_exists("maetab") AND $this->db->table_exists("maeord30");
  }

  protected function filter(Filter $filter)
  {
    if($filter->property == "bodega")
    {

      $db = DBAccessCreator::get_db_access($this->db->database);
      $db->where("cursos.bodega", $filter->pattern);
      $db->select("cursos.id, cursos.bodega");
      $cursos = $db->get("cursos")->result_array();

      $cursos_id = array();
      foreach($cursos as $curso)
        $cursos_id[] = $curso["id"];

      if(!empty($cursos))
        $this->db->where_in("sesiones.curso", $cursos_id);
      else
        $this->db->where("sesiones.id", "NULL");

      return;
    }

    parent::filter($filter);
  }

  public function delete(Sesion $sesion)
  {
    parent::delete($sesion);
    $this->delete_asistencia($sesion);
  }

  protected function delete_asistencia(Sesion $sesion)
  {
    $this->db->where("sesion", $sesion->id);
    $this->db->delete("asistencia");
  }
}
