<?php 
class PacUserModel extends Model
{
	public $primary_key = 'username';

	public $entity = "PacUser";
	public $table = "usuario";

  public $error_rol_not_configured = "error_rol_not_configured";

	const ROL = "administrador";

	public $property_translation = array("username" => "username", "emailusr" => "email", "nombreusuario" => "name", "UID" => "id");
  public $pac_user_table = "usuario";
  public $local_db;

	public function __construct($db)
	{
    $this->local_db = $db;
    $db = DBAccessCreator::get_db_access("benedict_infosac");
		parent::__construct($db);
	}

  public function search(Search $search = null, $foreign_search_fields = array())
  {

    $this->search_fields = array_merge($this->search_fields, $foreign_search_fields);
    
    if(!is_null($search))
      $this->apply_search($search);

    $this->db->select($this->selected_properties_for_search());
    $db_result = $this->db->get($this->table);

    return $this->db_result_to_collection($db_result);
  }

  public function selected_properties_for_search(){
    return array_keys($this->property_translation);
  }

	protected function row_to_entity($row)
	{
		$entity = new $this->entity();
		foreach($row as $key => $value)
		{
			if(isset($this->property_translation[$key]))
			{
				$key = $this->property_translation[$key];
				$entity->$key = $value;
			}
		}

		$entity->rol = self::ROL;

		return $entity;
	}

	public function get($entity_id = null)
	{
    $this->local_db->where("username", $entity_id);
    $result = $this->local_db->get("pac_users")->result_array();
    if(!isset($result[0]))
			throw new Error(array($this->error_rol_not_configured));

    $local_user = $result[0];
    $pac_user = parent::get($entity_id);

    $pac_user->rol = $local_user["rol"];
    return $pac_user;
	}

}
