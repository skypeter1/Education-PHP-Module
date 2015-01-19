<?php
class CursosModel extends Model
{
  public $table = "cursos";  
  public $entity = "Curso";
  public $search_fields = array("identificador", "nombre", "horas", "fecha_inicio", "fecha_fin", "sucursal");
  public $bodegasIds = array();
  public $bodegasInExistence = array();
  public $current_user_rol;   
  public $current_user;   
  public $pac_products_property_translation = array("desprod01" => "nombre", "codprod01" => "id");
  public $pac_bodegas_property_translation = array("nomtab" => "nombre", "codtab" => "id");

  public function get_pac_products($current_user_id, $category = "1.1.")
  {
    $db = DBAccessCreator::get_db_access("benedict_langschool");
 
    $bodegas_ids = $this->get_user_bodegas_permissions($current_user_id);
    $bodegas = $this->get_procesed_bodegas($bodegas_ids);
     
    $result = array();

    foreach($bodegas as $one_bodega)
    {  
      $db = DBAccessCreator::get_db_access($one_bodega["db_name"]);
      $db->like("catprod01", $category);
      $db->select("codprod01, desprod01, catprod01");
      $products = $db->get("maepro")->result_array();
 
      foreach($products as $index => $one_product)
      {
        $products[$index] = $this->translate_row_properties($one_product, $this->pac_products_property_translation);
        $products[$index]["nombre_bodega"] = $one_bodega["nombre"];
        $products[$index]["id_bodega"] = $one_bodega["id"];
      }

      $result = array_merge($result, $products);
    }

    $collection = new EntityCollection();
    $collection->collection = $result;

    return $collection; 
  }

  protected function get_user_bodegas_permissions($current_user_id)
  {

    $infosac = DBAccessCreator::get_db_access("benedict_infosac");

    $infosac->where("idusu", $current_user_id);
    $infosac->where("idemp", "1172");
    $infosac->select("idbod");
    $bodegas = $infosac->get("empresausuario")->result_array();

    $bodegas_ids = array();
    foreach($bodegas as $one_bodega)
    {
      $id = $one_bodega["idbod"];
      if(strlen($id) == 1)
        $id = "0".$id;

      $bodegas_ids[] = $id; 
    } 
 
    $this->bodegasIds = $bodegas_ids ;
    
    if (empty($this->bodegasIds)){
     
        $benedict_db = DBAccessCreator::get_db_access("benedict_langschool");
        $benedict_db->where("numtab", "97");
        $benedict_db->where("codtab <>"," ");    
        $benedict_db->select("codtab");    
  
        $bodegas_existentes = $this->bodegas_result_to_array($benedict_db->get("maetab"));
        $this->bodegasInExistence = $bodegas_existentes;
        
        if (empty($bodegas_ids)){
            
            foreach($this->bodegasInExistence as $one_bodega)
            {
              $id = $one_bodega["codtab"];
              if(strlen($id) == 1)
                $id = "0".$id;

              $bodegas_ids[] = $id; 
            }
             
            $this->bodegasIds = $bodegas_ids;
              
        }
        
    }
    
     
    return $bodegas_ids; 
  }

  protected function get_procesed_bodegas($bodegas_ids = array())
  {
    $bodegas = array();  
    $benedict_db = DBAccessCreator::get_db_access("benedict_langschool");
    $benedict_db->where("numtab", "97");
   
    if (!empty($this->bodegasIds)){
         
        $benedict_db->where("codtab <>"," ");  
        $benedict_db->where_in("codtab", array_unique($this->bodegasIds));   
        
    }else{
         
        foreach ($this->bodegasInExistence as $bodega){
            $benedict_db->where_not_in("codtab", $bodega['codtab']);     
        }
               
    }  

    $benedict_db->select("codtab, ad7tab, nomtab");
    $bodegas = $this->bodegas_result_to_array($benedict_db->get("maetab"));
       
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
         
    return $result;
  }

  protected function bodegas_result_to_array(CI_DB_result $db_result)
  {

    $result_array = array();

    if ($db_result->result_id !== FALSE AND $db_result->num_rows() > 0)
    {
      $db_result->_data_seek(0);
      while ($row = $db_result->_fetch_assoc())
        $result_array[$row["codtab"]] = $row;
    }

    return $result_array;
  }

  protected function products_result_to_collection(CI_DB_result $db_result, $properties_translations)
  {
    $entities_collection = new EntityCollection();
    $result_array = array();

    if ($db_result->result_id !== FALSE AND $db_result->num_rows() > 0)
    {
      $db_result->_data_seek(0);
      while ($row = $db_result->_fetch_assoc())
        $result_array[] = $this->translate_row_properties($row, $properties_translations);
    }

    $entities_collection->collection = $result_array;

    return $entities_collection;
  }

  protected function translate_row_properties($row, $properties_translations)
  {
    $new_row = array();
    foreach ($row as $property => $value) 
    {
      if(isset($properties_translations[$property]))
        $new_row[$properties_translations[$property]] = $value;
    }

    return $new_row;
  }

  public function validate(Curso $curso)
  {
    return CursosValidator::validate($curso);
  }

  protected function filter_cursos_by_month($curso)
  {
    $curso_month = date("n", $curso["fecha_inicio"]);
    return ( $curso_month == $this->mes_filter );
  } 

    public function search(Search $search = null, $foreign_search_fields = array())
    { 
         
        if (isset($this->current_user->rol)){
            if ($this->current_user->rol == 'profesor'){

            } 
             
        }
        
        if ($search == null) $search = new Search();
        $this->mes_filter = null;

        foreach ($search->filters as $index => $filter) {
            if ($filter->property == "mes") {
                $this->mes_filter = $filter->pattern;
                unset($search->filters[$index]);
            }
        }

        $cursos = parent::search($search, $foreign_search_fields);

        if ($this->mes_filter != null) {
            $cursos->collection = array_filter($cursos->collection, array($this, "filter_cursos_by_month"));
        }
          
        $bodegas = $this->get_procesed_bodegas();
        
        $matriculas = $this->get_matriculas_count();

        foreach ($cursos->collection as &$curso) { 
            $curso["bodega_nombre"] = $bodegas[$curso["bodega"]]["nombre"];
            $curso["matriculas"] = isset($matriculas[$curso["id"]]) ? $matriculas[$curso["id"]] : 0;
    
            $session_sql = 'SELECT COUNT(id) AS SESSIONS_TOTAL, sum(hora_fin - hora_inicio) AS HOURS_TOTAL FROM sesiones WHERE curso = ' . $curso['id'];
            $sessions_query = $this->db->query($session_sql, FALSE);
                   
            $sessions = $sessions_query->result();
            $curso["existent_sessions"] = $sessions[0]->SESSIONS_TOTAL;
            $curso["sessions_avail"] = ($curso['horas'] - $sessions[0]->SESSIONS_TOTAL);
            $curso["total_hours_session"] = $sessions[0]->HOURS_TOTAL;
            $curso["hours_avail"] = $curso['horas'] - $sessions[0]->HOURS_TOTAL;
         
        }

        return $cursos;
    }

  protected function get_matriculas_count()
  {
    $db_result = $this->db->get("matriculas");
    $matriculas = array();


    if ($db_result->result_id !== FALSE AND $db_result->num_rows() > 0)
    {
      $db_result->_data_seek(0);
        
      while ($row = $db_result->_fetch_assoc())
      {
        if(!isset($matriculas[$row["curso"]]))
          $matriculas[$row["curso"]] =  0;

        $matriculas[$row["curso"]] += 1;
      }
    }

    return $matriculas;
  }

  public function save_matriculas_by_curso($matriculas)
  {			

    foreach($matriculas as $curso_id => $alumnos)
    {
      $this->db->where("curso", $curso_id);
      $this->db->delete("matriculas");

      $insertion = $this->prepare_matriculas_for_insert($curso_id, $alumnos);

      if(!empty($insertion))
        $this->db->insert_batch("matriculas", $insertion);
    }
  }

  public function get_by_ids($cursos_ids)
  {	
    if(sizeof($cursos_ids) != 0)
      $this->db->where_in("id", $cursos_ids);
    else
      $this->db->where("id", 0);

    $this->db->select($this->selected_properties_for_search());
    $db_result = $this->db->get($this->table);

    return $this->db_result_to_collection($db_result);
  }

  protected function prepare_matriculas_for_insert($curso_id, $alumnos)
  {
    $result = array();

    foreach($alumnos as $index => $alumno_id)
    {
      $result[$index] = array();
      $result[$index]["curso"] = $curso_id;
      $result[$index]["alumno"] = $alumno_id;
    }

    return $result;
  }
  
  public function get_bodegas($current_user_id, $current_user=null)
  {
    if (!empty($current_user)){
        $this->current_user_rol = $current_user->rol; 
        $this->current_user = $current_user; 
        
    }
          
    $bodegas_ids = $this->get_user_bodegas_permissions($current_user_id);
    $bodegas = $this->get_procesed_bodegas($bodegas_ids);
    
       
    return $bodegas;        
  }

  public function save_pesos($curso_id, $pesos)
  {
    $data = array("pesos" => $pesos);
    $this->db->where("id", $curso_id);
    $this->db->update($this->table, $data);
  }

  public function save_notas_finales($notas_finales)
  {
    $id_cursos = array();
    $id_alumnos = array();

    foreach($notas_finales as $nota)
    {
      $id_cursos[] = $nota["curso"];
      $id_alumnos[] = $nota["alumno"];
    }

    $this->db->where_in("curso", array_unique($id_cursos));
    $this->db->where_in("alumno", array_unique($id_alumnos));
    $this->db->delete("notas_finales");

    $this->db->insert_batch("notas_finales", $notas_finales);

  }

  protected function has_examenes($curso)
  {
    $result = false;
    $this->db->limit(1);
    $this->db->select("id");
    $this->db->where("curso", $curso->id);
    $examenes = $this->db->get("examenes")->result_array();

    if(sizeof($examenes) > 0) $result = true;

    return $result;
  }

  protected function has_sesiones($curso)
  {
    $result = false;
    $this->db->limit(1);
    $this->db->select("id");
    $this->db->where("curso", $curso->id);
    $sesiones = $this->db->get("sesiones")->result_array();

    if(sizeof($sesiones) > 0) $result = true;

    return $result;
  }

  public function delete(Curso $curso)
  {
    if($this->has_sesiones($curso) || $this->has_examenes($curso))
      throw new Error(array("actividades_or_sesiones_atached"));

    parent::delete($curso);

    $this->db->where("curso", $curso->id);
    $this->db->delete("matriculas");

    $this->db->where("curso", $curso->id);
    $this->db->delete("notas_finales");
  }

  public function create(Entity $entity)
  {
    $bodega = $entity->bodega;
    $last_identificador = $this->get_last_identificador($bodega);
    $new_identificador = str_pad($last_identificador + 1, 6, "0", STR_PAD_LEFT);
    $entity->identificador = (int)$bodega."-".$new_identificador;

    return parent::create($entity); 
  }

  public function update(Entity $entity)
  {
    $current_curso = $this->get($entity->id);
    if($current_curso->bodega != $entity->bodega)
    {
      $bodega = $entity->bodega;
      $last_identificador = $this->get_last_identificador($bodega);
      $new_identificador = str_pad($last_identificador + 1, 6, "0", STR_PAD_LEFT);
      $entity->identificador = (int)$bodega."-".$new_identificador;
    }

    return parent::update($entity); 
  }

  protected function get_last_identificador($bodega)
  {
    $this->db->limit(1);
    $this->db->order_by("identificador", "desc");
    $this->db->where("bodega", $bodega);
    $result = $this->db->get($this->table)->result_array();

    if(sizeof($result) == 0)
      return "000000";

    $split = explode("-", $result[0]["identificador"]);
    $identificador = $split[1];

    return $identificador;
  }

    public function get_cursos_by_user ( $user_id )
    {
        $this->db->where('profesor', $user_id);
        // $this->db->select('SELECT * FROM cursos WHERE profesor = 146');
        $db_result = $this->db->get($this->table);

        print_r($db_result);
        echo '<hr>';

        return $this->db_result_to_collection($db_result);
    }
}
