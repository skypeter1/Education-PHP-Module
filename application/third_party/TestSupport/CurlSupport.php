<?php
class CurlSupport 
{
	public static function send_curl($url, $data = array(), $cookie = false, $wrap_data = true)
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

	public static function send_login_curl($url, $data = array(), $cookie = false, $wrap_data = true)
	{
		$ch = curl_init($url);

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

	public static function login()
	{
		//self::empty_tables();
		//self::add_user_to_database();
		/*$url = '/authentication/logout';
		$response = self::send_curl($url, array());
		$cookie = $response["cookies"];*/

//		$url = config_item("pac_login_url"); 
                $url = 'http://localhost/Workspace/benedict/login.php';
   
                $data = array('usuario' => 'username', 'userpwd' => '1234');
		$response = self::send_login_curl($url, $data, "", false, false);

		//die(print_r($response["full_response"]));
		return $response['cookies'];    
	}

	public static function add_user_to_database($email = 'john@snow.com', $password = '1234')
	{
		$database_acces = DBAccessCreator::get_db_access('educacion_development');
		$user_data = array('email' => $email, 'password' => md5($password), "rol" => "pac_user");
		$database_acces->insert('users', $user_data);
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
