<?php
class MockUsersModel extends UsersModel
{
	public $trace = array();
	
	public function __construct()
	{
	}
	
	public function authenticate($username, $password)
	{
		$this->trace[] = "authenticate $username $password";
		if($username == "John" AND $password == "password")
			return $this->get(23);
			
		if($username == "admin" AND $password == "admin")
			return $this->get(1);
			
		return false;
	}
	
	public function get($user_id)
	{
		$user = new User();
		if($user_id == 23)
		{
			$user->id = $user_id;
			$user->email = "John";
			$user->password = "password";
			$user->rol = 'medic';
			$user->admin = false;
		}
		
		if($user_id == 1)
		{
			$user->id = $user_id;
			$user->email = "admin";
			$user->password = "admin";
			$user->rol = 'medic';
			$user->admin = true;
		}
		
		return $user;
	}
}