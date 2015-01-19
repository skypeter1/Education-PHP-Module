<?php
class AlumnosModel extends Model
{
  const MATRICULAS_TABLE  = "matriculas";

  public $table = "alumnos";
  public $entity = "Alumno";

  public $pac_clients_property_translation = array("nomcte01" => "nombre", "codcte01" => "id", 
    "emailcte01" => "email", "celular01" => "celular", "dircte01" => "direccion", "telcte01" => "telefono");

  public $search_fields = array("cedula", "nombre", "apodo", "telefono", "celular", "email");

  public function get_pac_clients()
  {
    $db = DBAccessCreator::get_db_access("benedict_langschool");

    $db->like("catcte01", "1.");
    $db->select("nomcte01, catcte01, codcte01, emailcte01, celular01, dircte01, telcte01");
    $result = $db->get("maecte");

    return $this->clients_result_to_collection($result); 
  }

  public function get_matriculas_for_alumno($alumno)
  {
    $this->db->where("alumno", $alumno);
    $db_result = $this->db->get(self::MATRICULAS_TABLE)->result_array();

    $result = new EntityCollection();

    foreach($db_result as $matricula)
    {
      $result->collection[] = $matricula["curso"];
    }

    return $result;
  }

  public function get_alumnos_history($id_alumno)
  {
    $this->db->like('id', $id_alumno);
    return $this->db->get('alumnos')->result_array();
  }

  protected function clients_result_to_collection(CI_DB_result $db_result)
  {
    $entities_collection = new EntityCollection();
    $result_array = array();

    if ($db_result->result_id !== FALSE AND $db_result->num_rows() > 0)
    {
      $db_result->_data_seek(0);
      while ($row = $db_result->_fetch_assoc())
        $result_array[] = $this->translate_product_row($row);
    }

    $entities_collection->collection = $result_array;

    return $entities_collection;
  }

  protected function translate_product_row($row)
  {
    $new_row = array();
    foreach ($row as $property => $value) 
    {
      if(isset($this->pac_clients_property_translation[$property]))
        $new_row[$this->pac_clients_property_translation[$property]] = $value;
    }

    return $new_row;
  }

  protected function get_db_matriculas_relation($alumno)
  {
    $this->db->where("alumno", $alumno);
    $result = $this->db->get(self::MATRICULAS_TABLE)->result_array();
    return $result;
  }

  public function save_matriculas($matriculas)
  {
    $relation = $this->get_relation($matriculas);

    $wanted_inserts = $relation->get_inserts();
    $wanted_deletes = $relation->get_deletes();

    $this->delete_matriculas($wanted_deletes, $matriculas);
    $this->insert_matriculas($wanted_inserts, $matriculas);
  }

  protected function get_relation($matriculas)
  {
    $alumnos = array_keys($matriculas);

    $current_matriculas = $this->get_db_matriculas_relation($alumnos[0]);

    $current_status = $this->transform_matriculas_to_relational_array($current_matriculas);
    //$wanted_status = $this->transform_matriculas_to_relational_array($matriculas);

    $relation = new RelationalData($current_status, $matriculas);

    return $relation;
  }

  protected function transform_matriculas_to_relational_array($matriculas)
  {
    $result = array();

    foreach ($matriculas as $key => $one_matricula) 
    {
      if(!isset($result[$one_matricula["alumno"]]))
        $result[$one_matricula["alumno"]] = array();

      $result[$one_matricula["alumno"]][] = $one_matricula["curso"];
    }

    return $result;
  }

  protected function transform_relational_array_to_matricula($relational_array, $matriculas)
  {
    $result = array();

    foreach($relational_array as $alumno => $cursos)
    {
      foreach($cursos as $index => $curso)
      {
        $result[] = array("alumno" => $alumno, "curso" => $curso);
      }
    }

    return $result;
  }

  protected function delete_matriculas($relational_array, $matriculas)
  {
    if(empty($relational_array)) return false;

    foreach($relational_array as $alumno => $cursos)
    {
      $cursos_ids = implode(",", $cursos);
      $this->db->or_where("(`alumno` = $alumno) AND `curso` IN ($cursos_ids)");
    }

    $this->db->delete(self::MATRICULAS_TABLE);
  }

  protected function insert_matriculas($relational_array, $matriculas)
  {
    $insert = $this->transform_relational_array_to_matricula($relational_array, $matriculas);

    if(!empty($insert))
      $this->db->insert_batch(self::MATRICULAS_TABLE, $insert);
  }

  protected function filter(Filter $filter)
  {
    if($filter->property == "curso")
    {

      $this->db->where("curso", $filter->pattern);
      $this->db->select("alumno");
      $result = $this->db->get("matriculas")->result_array();

      $alumnos_id = array();
      foreach($result as $alumno)
        $alumnos_id[] = $alumno["alumno"];

      if(!empty($result))
        $this->db->where_in("id", $alumnos_id);
      else
        $this->db->where("id", "NULL");

      return;
    }

    parent::filter($filter);
  }

  public function get_alumnos_by_cursos($cursos)
  {
    if(sizeof($cursos) == 0) return array();
    $this->db->where_in("curso", $cursos);
    $this->db->select("alumno");
    $db_result = $this->db->get("matriculas")->result_array();
    $id_alumnos = $this->get_values_from_db_result("alumno", $db_result);

    if(sizeof($id_alumnos) == 0) return array();

    $this->db->where_in("id", $id_alumnos);
    $alumnos = $this->db->get($this->table);
    $alumnos = $this->db_result_to_collection($alumnos);
    return $alumnos->collection;
  }

  protected function get_values_from_db_result($value,$db_result)
  {
    $result = array();
    foreach($db_result as $one_result)
      $result[] = $one_result[$value];

    return $result;
  }
}
