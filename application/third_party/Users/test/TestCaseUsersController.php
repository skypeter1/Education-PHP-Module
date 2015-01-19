<?php
class TestCaseUsersController extends TestCase
{
	protected $cookie = false;
	protected $enviroment_setter;

	public function __construct()
	{
		$this->enviroment_setter = new EnvironmentSetter();
	}
 
	// public function test_block()
	// {
	// 	$this->before_test();

	// 	$this->add_user_to_database("pepe", 'password', true, 1);
	// 	$this->add_user_to_database("juan", 'password', true, 1);
		
	// 	$this->login('juan', 'password');
		
	// 	$url = '/users/block';
		
	// 	$data = array("id" => 1, "blocked" => true, "version" => 1);

	// 	$response = $this->send_curl($url, $data, $this->cookie);

	// 	$users_in_db = $this->get_users_in_db();

	// 	$this->assert_equals("1", $users_in_db[0]['blocked']);
		
	// 	$data = array("id" => 1, "blocked" => false, "version" => $users_in_db[0]['version']);

	// 	$response = $this->send_curl($url, $data, $this->cookie);
	// 	$users_in_db = $this->get_users_in_db();
	// 	$this->assert_equals("0",$users_in_db[0]['blocked']);

	// 	$this->after_test();
	// }

	public function test_get_proveedores()
	{
		InfosacDBSetup::add_user_to_database();
		
		$this->enviroment_setter = new EnvironmentSetter();
		$this->enviroment_setter->set_development_environment();

		PacTablesSetup::insert_proveedores_to_bodegas();
		$test_cookie = CurlSupport::login();

		$url = '/users/get_proveedores';

		$response = CurlSupport::send_curl($url, array(), $test_cookie);
                  
                $this->assert_equals("Pedro Perez", $response["response"]->data->list[0]->nombre);
		$this->assert_equals("Ramon Martinez", $response["response"]->data->list[1]->nombre);
		$this->assert_equals("Aura Rivadeneira", $response["response"]->data->list[2]->nombre);
		$this->assert_equals("Juan Casale", $response["response"]->data->list[3]->nombre);
		$this->assert_equals("Alberto Spencer", $response["response"]->data->list[4]->nombre);

		$this->enviroment_setter->set_testing_environment();
	}	
	 
	protected function send_curl($url, $data = array(), $cookie = false, $wrap_data = true)
	{
//		$base_url = config_item('base_url'); 
                $base_url = 'http://localhost/Workspace/benedict/modulo_educacion';
		$ch = curl_init($base_url.$url);
 
		curl_setopt($ch, CURLOPT_HEADER, 1);
		curl_setopt($ch, CURLOPT_POST, 1);
		curl_setopt($ch, CURLOPT_FAILONERROR,false);
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
		curl_setopt($ch, CURLOPT_FOLLOWLOCATION, false);

		if($cookie)
		curl_setopt($ch, CURLOPT_COOKIE, $cookie);
			
		$post_data = $data;
		if($wrap_data)
		{
			$encoded_data = json_encode($data);
			$post_data = array("data" => $encoded_data);
		}

		curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($post_data));

		$response = curl_exec($ch);

		$exploded_response = explode("\n\r", $response);

		$headers = $exploded_response[0];
		$content = $exploded_response[1];
		$result = array();

		preg_match('/HTTP\/1.1\s(\d{3})/i', $headers, $status);
		$result["status"] = $status[1];

		preg_match_all('|Set-Cookie: (.*);|U', $headers, $matches);
		$result["cookies"] = implode(';', $matches[1]);

		$result["response"] = json_decode($exploded_response[1]);
		$result["full_response"] = $response;

		curl_close($ch);

		return $result;
	}

	protected function setup_database()
	{
		$database_access = DB();
		$fixture_executioner = new FixtureExecutioner($database_access);

		$fixture_path = dirname(__FILE__)."/../../Fixtures/fixtures/main/10_create_database.sql";
		$fixture_executioner->execute_fixture($fixture_path, "educacion_development");
		$fixture_path = dirname(__FILE__)."/../../Fixtures/fixtures/main/20_users_table.sql";
		$fixture_executioner->execute_fixture($fixture_path, "educacion_development");
		$fixture_path = dirname(__FILE__)."/../../Fixtures/fixtures/main/200_activity_log_table.sql";
		$fixture_executioner->execute_fixture($fixture_path, "educacion_development");
	}

	protected function login($user, $password)
	{
		$url = '/logout';
		$response = $this->send_curl($url, array());
		$this->cookie = $response['cookies'];

		$url = '/login';
		$data = array('email' => $user, 'password' => $password);
		$response = $this->send_curl($url, $data, $this->cookie, false);

		$this->cookie = $response['cookies'];
	}

	protected function add_user_to_database($email = 'admin@admin.com', $password = 'admin',$admin = true, $consultorio = 1)
	{
		$database_acces = DBAccessCreator::get_db_access('educacion_development');
		$user_data = array('version' => 1, 'email' => $email, 'password' => md5($password), "rol" => "administrador");
		$database_acces->insert('users', $user_data);
	}
	
	protected function empty_tables()
	{
		$database_access = DB();
		
		try
		{
			$database_access->truncate('educacion_development.users');
			$database_access->truncate('educacion_development.activity_log');
		}
		catch(Exception $exception)
		{
			if ($exception->getCode() != 100)
				throw $exception;
		}
	}	

	protected function before_test()
	{
		$this->empty_tables();
		$this->enviroment_setter->set_development_environment();
		$this->setup_database();
	}

	protected function after_test()
	{
		$this->enviroment_setter->set_previous_environment();
		$this->empty_tables();
	}

	protected function get_users_in_db()
	{
		$database_acces = DBAccessCreator::get_db_access('educacion_development');
		return $database_acces->get('users')->result_array();
	}
}
