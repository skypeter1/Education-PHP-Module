<?php
class UsersModel extends Model
{
	const USER_ID                   = 'id';
	const USER_EMAIL                = 'email';
	const USER_PASSWORD             = 'password';
	const USER_NAME                 = 'name';
	const USER_ROL                  = 'rol';
	const PROVEEDOR_PAC				= 'proveedor_pac';
	const USER_BLOCKED				= 'blocked';
	
	public $table				= 'users';
	public $entity				= 'User';
	public $concurrency_error	= 'user_concurrency_error';	
	public $error_entity_not_exist	= 'error_user_not_exist';
	public $error_duplicated_entity	= 'error_duplicated_user';
	
	public $search_fields = array('email', 'name', 'rol');

	public $pac_proveedores_property_translation = array("nomcte01" => "nombre", "codcte01" => "id", 
                    "dircte01" => "direccion", "seriedoc01" => "serie",
                    "numautosri01" => "autorizacion", "telcte01" => "telefono",
                    "condpag01" => "condicion_de_pago", "loccte01" => "localidad");
	   
	public $pac_bodegas_property_translation = array("nomtab" => "nombre", "codtab" => "id");
        public $bodegasIds = array();   
        public $bodegasInExistence = array();

	public function update(User $user)
	{
		$errors = $this->validate($user, false);
		$this->check_id_and_version($user, $errors);
		
		$update_password = UserValidator::password($user->password);
		$data = $this->entity_to_row($user, $update_password);
		$data[self::VERSION_FIELD] = $this->get_new_version();
		
		$this->execute_with_optimistic_lock('update', $user, $data);
		
		return $this->row_to_entity($data);
	}
	
	public function block($user, $block = true)
	{
		$data = array(self::USER_BLOCKED => $block,
					  self::VERSION_FIELD => $this->get_new_version());
		
		$this->check_id_and_version($user);
		return $this->execute_with_optimistic_lock('update', $user, $data);
	}

	public function authenticate($email, $password)
	{
		$this->db->where(self::USER_EMAIL, $email);
		$this->db->where(self::USER_PASSWORD, md5($password));
		$this->db->where(self::USER_BLOCKED, false);

		$matches = $this->db->get($this->table)->result_array();
		
		if(empty($matches)) return false;
		
		$user_id = $matches[0][self::USER_ID];
		
		return $this->get($user_id);
	}
	
	public function get_user_by_email($email)
	{
		$this->db->where(self::USER_EMAIL, $email);
		$matches = $this->db->get($this->table)->result_array();
		
		if(!empty($matches))
			return $this->row_to_entity($matches[0]);

		return false;
	}
	
	protected function selected_properties_for_search()
	{
		$fields = parent::selected_properties_for_search();
		$fields_to_remove = array($this->table.".".self::USER_PASSWORD);
		$fields = array_diff($fields, $fields_to_remove);
		
		return $fields;
	}

	protected function entity_to_row(User $user, $add_password = true)
	{
		$row = parent::entity_to_row($user);
		unset($row[self::USER_PASSWORD]);

		if($add_password)
			$row[self::USER_PASSWORD] = md5($user->password);
			
		return $row;
	}
	
	protected function row_to_entity($row)
	{
		$user = parent::row_to_entity($row);
		
		$user->blocked = false;
		if($row[self::USER_BLOCKED])
			$user->blocked = true;
		
		$user->password = null;
		
		return $user;
	}
	
	public function validate(User $user, $validate_password = true)
	{
		return UserValidator::validate($user, $validate_password);
	}
         
        public function get_cursos($current_user_id = null)
	{
            $bodegas_ids = $this->get_user_bodegas_permissions($current_user_id);
            return $bodegas_ids;   
                
        } 
          
	public function get_proveedores($current_user_id = null)
	{  
		$db = DBAccessCreator::get_db_access("benedict_langschool");
		$bodegas_ids = array();
  
		if($current_user_id != null){ 
			$bodegas_ids = $this->get_user_bodegas_permissions($current_user_id);
                        
                }else{
                }               
                  
		$bodegas = $this->get_bodegas($bodegas_ids);
    
		$result = array();  
                
		foreach($bodegas as $one_bodega)
		{
			$db = DBAccessCreator::get_db_access($one_bodega["db_name"]);
			$db->where("catcte01", "1.2");
			$db->select("codcte01, nomcte01, catcte01, emailcte01, dircte01, seriedoc01, numautosri01, telcte01, condpag01, loccte01");
			$proveedores = $db->get("maepag")->result_array();

			foreach($proveedores as $index => $one_proveedor)
			{
				$proveedores[$index] = $this->translate_row_properties($one_proveedor, $this->pac_proveedores_property_translation);
				$proveedores[$index]["nombre_bodega"] = $one_bodega["nombre"];
				$proveedores[$index]["id_bodega"] = $one_bodega["id"];
			}

			$result = array_merge($result, $proveedores);
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

	protected function get_bodegas($bodegas_ids = array())
	{                    
		$benedict_db = DBAccessCreator::get_db_access("benedict_langschool");
//                $benedict_db = DBAccessCreator::get_db_access("benedict");
		  
                $benedict_db->where("numtab", "97");
		$benedict_db->where("codtab <>", "");
		
		if(!empty($bodegas_ids))
			$benedict_db->where_in("codtab", $bodegas_ids);
		
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

	public function get_proveedor_by_profesor($profesor_id)
	{
		$this->db->where("id", $profesor_id);
		$profesor = $this->db->get("users")->result_array();
		$profesor = $profesor[0];

		$proveedores = $this->get_proveedores();

		foreach($proveedores->collection as $proveedor)
		{
			if($profesor["proveedor_pac"] == $proveedor["id"])
			{
				return $proveedor;
			}
		}
	}
}
