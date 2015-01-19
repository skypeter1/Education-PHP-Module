<?php
class TestCaseUsersModel extends TestCase
{
	public function test_class_properties()
	{
		$this->empty_tables();
		$users_model = new TestingUsersModel(DB());
		
		$this->assert_equals('users', $users_model->get_property('table'));
		$this->assert_equals('User', $users_model->get_property('entity'));
	}
	
	public function test_search_excludes_password()
	{
		$database_access = $this->get_database_access();
		$users_model = new UsersModel($database_access);
		
		$this->add_user_to_database("test@mail.com", "password");
		
		$users_collection = $users_model->search(new Search());
		$this->assert_false(isset($users_collection->collection[1]->password));
	}
	
	public function test_update()
	{
		$this->empty_tables();
		$database_access = $this->get_database_access();
		$users_model = new UsersModel($database_access);
		
		$this->add_user_to_database('arya@stark.com');
		
		$user = new User();
		$user->id = 1;
		$user->version = 1;
		$user->email = 'arya@stark.com';
		$user->name = 'new name';
		$user->rol = 'profesor';
		$user->price = '50';
		$user->weekend_price = '50';
		$user->out_academy_price = '50';

		 
		$updated_user = $users_model->update($user);
		$this->assert_true($updated_user instanceof User);

		$users_in_db = $database_access->get('users')->result_array();
		$this->assert_equals('new name', $users_in_db[0]['name']);
		$this->assert_equals(md5('valar morghulis'), $users_in_db[0]['password']);
		$this->assert_equals('profesor',  $users_in_db[0]['rol']);
		$this->assert_false($users_in_db[0]['version'] == '1');
		
		$this->empty_tables();
	}
	
	public function test_error_duplicated_email_on_update()
	{	
		$database_access = $this->get_database_access();
		$users_model = new UsersModel($database_access);
  
		$arya_id = $this->add_user_to_database('arya@stark.com');

		$john_id = $this->add_user_to_database('john@snow.com');

		$user = new User();
		
		$user->id = $arya_id;
		$user->version = '1';
		$user->email = 'john@snow.com';
		$user->password = 'valar morghulis';
		
		$exception_thrown = false;
		try
		{
			$users_model->update($user);
		}
		catch(Error $exception)
		{
			$exception_thrown = true;
		}
		$this->assert_true($exception_thrown);
		
		$this->empty_tables();
	}
	
	public function test_update_password()
	{
		$this->empty_tables();
		$database_access = $this->get_database_access();
		$users_model = new UsersModel($database_access);
		
		$user = new User();
		$user->email = "rob@stark.com";
		$user->password = "valid password";
		$user->name = 'rob';
		$user->rol = 'profesor';
		$user->price = '50';
		$user->weekend_price = '50';
		$user->out_academy_price = '50';
		
		$user = $users_model->create($user);
		$new_password = "new password";
		$user->password = $new_password;
		$users_model->update($user);

		$users_in_db = $database_access->get('users')->result_array();
		$this->assert_equals(md5($new_password), $users_in_db[0]['password']);

		$user->password = "";
		$user->version = $users_in_db[0]['version'];
		$users_model->update($user);

		$users_in_db = $database_access->get('users')->result_array();
		$this->assert_equals(md5($new_password), $users_in_db[0]['password']);

		$this->empty_tables();
	}

	public function test_error_required_id_on_update()
	{
		$database_access = $this->get_database_access();
		$users_model = new UsersModel($database_access);

		$user = new User();
		$user->version = '1';
		$user->consultorio = 1;

		$exception_thrown = false;
		try
		{
			$users_model->update($user);
		}
		catch(Error $exception)
		{
			$exception_thrown = true;
			$this->assert_true(in_array('error_required_id', $exception->errors));
		}
		$this->assert_true($exception_thrown);

		$this->empty_tables();
	}

	public function test_error_required_version_on_update()
	{
		$database_access = $this->get_database_access();
		$users_model = new UsersModel($database_access);
		
		$user = new User();
		$user->id = 1;
		$user->consultorio = 1;

		$exception_thrown = false;
		try
		{
			$users_model->update($user);
		}
		catch(Error $exception)
		{
			$exception_thrown = true;
			$this->assert_true(in_array('error_required_version', $exception->errors));
		}
		$this->assert_true($exception_thrown);

		$this->empty_tables();
	}
	
	public function test_authenticate_successful()
	{
		$database_access = $this->get_database_access();
		$users_model = new UsersModel($database_access);
		
		$this->add_user_to_database("John", "password");
		
		$user = $users_model->authenticate("John", "password");
		$this->assert_true($user instanceof User);
		$this->assert_equals('John', $user->email);
		
		$this->empty_tables();
	}
	
	public function test_authenticate_fail()
	{
		$database_access = $this->get_database_access();
		$users_model = new UsersModel($database_access);
		
		$this->add_user_to_database("John", "password");
		
		$user = $users_model->authenticate("John", "wrong password");
		$this->assert_false($user);
		
		$this->empty_tables();
	}
	
	public function test_authenticate_fails_if_the_user_is_blocked()
	{
		$database_access = $this->get_database_access();
		$users_model = new UsersModel($database_access);
		
		$this->add_user_to_database("John", "password");
		
		$user = new User();
		$user->id = 1;
		$user->version = 1;
		
		$users_model->block($user, true);
		
		$user_id = $users_model->authenticate("John", "password");
		$this->assert_false($user_id);
		
		$this->empty_tables();
	}
	
	public function test_get_user_by_email()
	{
		$this->empty_tables();
		$database_access = $this->get_database_access();
		$users_model = new UsersModel($database_access);
		
		$this->add_user_to_database('email@gmail.com', 'password');
		
		$this->assert_false($users_model->get_user_by_email('other@email.com'));
		
		$user = $users_model->get_user_by_email('email@gmail.com');
		$this->assert_true($user instanceof User);
		$this->assert_equals($user->name, 'arya');
		
		$this->empty_tables();
	}
	
	public function test_block()
	{
		$this->empty_tables();
		$database_access = $this->get_database_access();
		$users_model = new UsersModel($database_access);
		
		$this->add_user_to_database("rob@stark", "password");
		
		$user = $users_model->get(1);
		$this->assert_false($user->blocked);
		
		$users_model->block($user);
		
		$user = $users_model->get(1);
		$this->assert_true($user->blocked);
		
		$users_model->block($user, false);
		$user = $users_model->get(1);
		$this->assert_false($user->blocked);

		$this->empty_tables();
	}
	
	public function test_block_updates_version()
	{
		$this->empty_tables();
		$database_access = $this->get_database_access();
		$users_model = new UsersModel($database_access);
		
		$this->add_user_to_database("rob@stark", "password");
		$first_version = '1';
		
		$user = $users_model->get(1);
		$this->assert_false($user->blocked);
		
		$users_model->block($user);
		
		$user = $users_model->get(1);
		$second_version = $user->version;


		$this->assert_true($second_version != $first_version);

		$users_model->block($user, false);
		$user = $users_model->get(1);
		$third_version = $user->version;
		$this->assert_true($third_version != $second_version);


		$this->empty_tables();
	}
	
	public function test_row_to_entity_does_not_return_password()
	{
		$database_access = $this->get_database_access();
		$users_model = new TestingUsersModel($database_access);
		$row = array('password' => 'my_secret_password', 'blocked' => false);
		$user = $users_model->row_to_entity($row);
		$this->assert_equals(null, $user->password);
	}

	public function test_get_proveedores()
	{
                   
		PacTablesSetup::create_products();
		InfosacDBSetup::setup_database();
		PacTablesSetup::create_bodegas();
		PacTablesSetup::insert_proveedores_to_bodegas();
       
		$db = DBAccessCreator::get_db_access("educacion_development");
		$users_model = new UsersModel($db);
  
		$result = $users_model->get_proveedores(2);
		$this->assert_true($result instanceof EntityCollection);
   
                $this->assert_equals(5, sizeof($result->collection));
                
                
		$this->assert_equals("Pedro Perez", $result->collection[0]["nombre"]);
		$this->assert_equals("Ramon Martinez", $result->collection[1]["nombre"]);
		$this->assert_equals("Aura Rivadeneira", $result->collection[2]["nombre"]);
		$this->assert_equals("Juan Casale", $result->collection[3]["nombre"]);
		$this->assert_equals("Alberto Spencer", $result->collection[4]["nombre"]);

		$this->assert_equals("1001.001", $result->collection[0]["id"]);
		$this->assert_equals("1001.002", $result->collection[1]["id"]);
		$this->assert_equals("1001.003", $result->collection[2]["id"]);
		$this->assert_equals("1002.001", $result->collection[3]["id"]);
		$this->assert_equals("1002.002", $result->collection[4]["id"]);

		$this->assert_equals("Matriz", $result->collection[0]["nombre_bodega"]);
		$this->assert_equals("Matriz", $result->collection[1]["nombre_bodega"]);
		$this->assert_equals("Matriz", $result->collection[2]["nombre_bodega"]);
		$this->assert_equals("Amazonas", $result->collection[3]["nombre_bodega"]);
		$this->assert_equals("Amazonas", $result->collection[4]["nombre_bodega"]);

		$this->assert_equals("01", $result->collection[0]["id_bodega"]);
		$this->assert_equals("01", $result->collection[1]["id_bodega"]);
		$this->assert_equals("01", $result->collection[2]["id_bodega"]);
		$this->assert_equals("02", $result->collection[3]["id_bodega"]);
		$this->assert_equals("02", $result->collection[4]["id_bodega"]);
                             
                 
	}
	
	public function test_get_proveedor_by_profesor()
	{
		UsersSetup::create_users();
		PacTablesSetup::create_products();
		InfosacDBSetup::setup_database();
		PacTablesSetup::create_bodegas();
		PacTablesSetup::insert_proveedores_to_bodegas();

		$db = DBAccessCreator::get_db_access("educacion_development");
		$users_model = new UsersModel($db);

		$result = $users_model->get_proveedor_by_profesor("1");
		
		$this->assert_equals("Juan Casale", $result["nombre"]);
		$this->assert_equals("1002.001", $result["id"]);

	}

	protected function add_user_to_database($email = 'Arya', $password = 'valar morghulis', $name = 'arya', $surname = 'stark', $rol = 'Doctor/a')
	{
		$database_access = DBAccessCreator::get_db_access('educacion_development');
		$user_data = array('email' => $email,
						 'version' => '1',
						 'password' => md5($password),
						 'name' => $name,
						 'rol' => $rol,
						 'blocked' => false);

		$database_access->insert('users', $user_data);
		
		return $database_access->insert_id();
	}
	
	protected function get_database_access()
	{
		$this->setup_database();
		return DBAccessCreator::get_db_access('educacion_development');
	}
	
	protected function setup_database()
	{
		$database_access = DB();
		$fixture_executor = new FixtureExecutioner($database_access);
		
		$fixture_path = dirname(__FILE__)."/../../Fixtures/fixtures/main/10_create_database.sql";
		$fixture_executor->execute_fixture($fixture_path, 'educacion_development');
		
		$fixture_path = dirname(__FILE__)."/../../Fixtures/fixtures/main/20_users_table.sql";
		$fixture_executor->execute_fixture($fixture_path, 'educacion_development');
	}
	
	protected function empty_tables()
	{
		$database_access = DB();
		try
		{
			$database_access->truncate('educacion_development.users');
		}
		catch(Exception $exception)
		{
			if ($exception->getCode() != 100)
				throw $exception;
		}
	}
}
