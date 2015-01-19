<?php
class TestCaseAuthController extends TestCase
{
	public function test_login_successful()
	{
		$this->empty_tables();
		$environment_setter = new EnvironmentSetter();
		$environment_setter->set_development_environment();
		$this->setup_database();
		
		$this->add_user_to_database("John", "password");
		
		$url = '/authentication/login';
		$data = array('password' => 'password', 'email' => 'John');
		
		$response = $this->send_curl($url, $data, false, false);

		$this->assert_equals(302, $response["status"]);
		
		$this->assert_true(strpos($response["cookies"], "ci_session") === 0);
   		
                $base_url = 'http://localhost/Workspace/benedict/modulo_educacion/';
                 
//		$this->assert_equals(config_item('base_url'), $response['redirected_url']);
                $this->assert_equals($base_url, $response['redirected_url']);
  		
		$environment_setter->set_previous_environment();
		$this->empty_tables();
	}
	
	public function test_login_fail()
	{
		$environment_setter = new EnvironmentSetter();
		$environment_setter->set_development_environment();
		$this->setup_database();
		
		$this->add_user_to_database("John", "password");
		
		$url = '/authentication/login';
		$data = array('password' => 'wrong password', 'email' => 'John');
		
		$response = $this->send_curl($url, $data, false, false);
		$this->assert_true($response["status"] == 200);
		
		$decoded_response = json_decode($response["response"]);
		
                $base_url = 'http://localhost/Workspace/benedict/modulo_educacion';
                  
//                $login_url = config_item('base_url').$url;
                $login_url = $base_url.$url;  
                      
		$this->assert_equals($login_url, $response['redirected_url']);
		
		$environment_setter->set_previous_environment();
		$this->empty_tables();
	}
	
	public function test_logged_and_logout()
	{
		$environment_setter = new EnvironmentSetter();
		$environment_setter->set_development_environment();
		$this->setup_database();
		
		$this->add_user_to_database("John", "password");
		
		$url = '/authentication/logged';
		$data = array();
		
		$response = $this->send_curl($url, $data);

		$decoded_response = json_decode($response["response"]);
		$this->assert_false($decoded_response->data);
		
		$session_cookie = $response["cookies"];
		
		$url = '/authentication/login';
		$data = array('password' => 'password', 'email' => 'John');
		$response = $this->send_curl($url, $data, $session_cookie, false);
		$session_cookie = $response["cookies"];
		
		$url = '/authentication/logged';
		$data = array();
		
		$response = $this->send_curl($url, $data, $session_cookie);
		
		$decoded_response = json_decode($response["response"]);
		$this->assert_true($decoded_response->data);
		
		$url = '/authentication/logout';
		$data = array('password' => 'password', 'email' => 'John');
		$response = $this->send_curl($url, $data, $session_cookie);
		$this->assert_equals(302, $response["status"]);
		
                $base_url = 'http://localhost/Workspace/benedict/modulo_educacion/';
                
//		$login_url = config_item('base_url')."login";
                $login_url = $base_url."login"; 
                      
		$this->assert_equals($login_url, $response['redirected_url']);
		
		$session_cookie = $response["cookies"];
		
		$url = '/authentication/logged';
		$data = array();
		
		$response = $this->send_curl($url, $data, $session_cookie);
		$decoded_response = json_decode($response["response"]);
		$this->assert_false($decoded_response->data);
		
		$environment_setter->set_previous_environment();
		$this->empty_tables();
	}
	
	public function test_recover_password()
	{
		$environment_setter = new EnvironmentSetter();
		$environment_setter->set_development_environment();
		$this->setup_database();
		
		$this->add_user_to_database("john@snow.com", "lost password");
		
		$url = '/authentication/recover_password';
		$data = array("email" => "john@snow.com");
		
		$response = $this->send_curl($url, $data, false, false);
		
		$database_access = DBAccessCreator::get_db_access('educacion_development');
		$password_recovery_process = $database_access->get('password_recovery')->result_array();
		$this->assert_equals(1, $password_recovery_process[0]['user_id']);
		$hash = $password_recovery_process[0]['hash'];
		
		$url = '/authentication/reset_password/'.$hash;
		
		$data = array('password' => 'new password', 'repeat_password' => 'new password');
		
		$response = $this->send_curl($url, $data, false, false);

		$this->assert_equals(302, $response['status']);

		$users = $database_access->get('users')->result_array();
		$this->assert_equals(md5('new password'), $users[0]['password']);
		
		$environment_setter->set_previous_environment();
		$this->empty_tables();
	}
	
	public function test_reset_password_shows_404_if_no_hash()
	{
		$environment_setter = new EnvironmentSetter();
		$environment_setter->set_development_environment();
		$this->setup_database();
		
		$url = '/authentication/reset_password';
		
		$response = $this->send_curl($url, array(), false, false);
		$this->assert_equals(404, $response['status']);
		
		$environment_setter->set_previous_environment();
		$this->empty_tables();
	}
	
	public function test_reset_password_shows_404_if_time_expirated()
	{
		$environment_setter = new EnvironmentSetter();
		$environment_setter->set_development_environment();
		$this->setup_database();
		
		$database_access = DBAccessCreator::get_db_access('educacion_development');
		
		$recovery_process =  array('user_id' => 1,
								 'hash' => 'test_hash',
								 'expiration_date' => 0);
		
		$database_access->insert('password_recovery',$recovery_process);
		
		$url = '/authentication/reset_password/test_hash';
		
		$response = $this->send_curl($url, array(), false, false);
		$this->assert_equals(404, $response['status']);
		
		$environment_setter->set_previous_environment();
		$this->empty_tables();
	}
	
	protected function send_curl($url, $data = array(), $cookie = false, $wrap_data = true)
	{
		//$base_url = config_item('base_url');
                $base_url = 'http://localhost/Workspace/benedict/modulo_educacion';
                     
		$ch = curl_init($base_url.$url);

		curl_setopt($ch, CURLOPT_HEADER, true);
		curl_setopt($ch, CURLOPT_POST, true);
		curl_setopt($ch, CURLOPT_FAILONERROR,false);
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
		curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
		
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
		
		$result["response"] = $exploded_response[1];
		$result["redirected_url"] = curl_getinfo($ch, CURLINFO_EFFECTIVE_URL);
		$result['full_response'] = $response;
		
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
		
		$fixture_path = dirname(__FILE__)."/../../Fixtures/fixtures/main/25_password_recovery_table.sql";
		$fixture_executioner->execute_fixture($fixture_path, "educacion_development");
		
		$fixture_path = dirname(__FILE__)."/../../Fixtures/fixtures/main/200_activity_log_table.sql";
		$fixture_executioner->execute_fixture($fixture_path, "educacion_development");
	}
	
	protected function add_user_to_database($email = 'Arya', $password = 'valar morghulis')
	{
		$database_access = DBAccessCreator::get_db_access('educacion_development');
		$user_data = array( 'version' => "1",
							'email' => $email,
							'password' => md5($password),
							'name' => 'arya',
							'rol' => 'profesor');
		$database_access->insert('users', $user_data);
	}
	
	protected function empty_tables()
	{
		$database_access = DB();
		
		try
		{
			$database_access->truncate('educacion_development.password_recovery');
			$database_access->truncate('educacion_development.activity_log');
			$database_access->truncate('educacion_development.users');
		}
		catch(Exception $exception)
		{
			if ($exception->getCode() != 100)
				throw $exception;
		}
	}	
}
