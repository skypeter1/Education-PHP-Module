<?php
class MockSuperAdminsModel extends SuperAdminsModel
{
	public $trace = array();
	
	public function __construct()
	{
	}
	
	public function authenticate($username, $password)
	{
		$this->trace[] = "authenticate $username $password";
		if($username == "SuperAdmin" AND $password == "password")
			return $this->get(23);
		if($username == "MyAdmin" AND $password == "admin")
			return $this->get(1);
			
			
		return false;
	}
	
	public function get($admin_id)
	{
		$admin = new SuperAdmin();
		if($admin_id == 23)
		{
			$admin->id = $admin_id;
			$admin->email = "SuperAdmin";
			$admin->password = "password";
		}
		
		if($admin_id == 1)
		{
			$admin->id = $admin_id;
			$admin->email = "admin";
			$admin->password = "admin";
		}
		
		return $admin;
	}
}