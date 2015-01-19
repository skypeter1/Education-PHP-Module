<?php
class MockSuperAuth extends Auth
{
	public $trace = array();
	protected $logged = false;
	
	public function __construct()
	{
	}
	
	public function login()
	{
		$this->logged = true;
	}
	
	public function logout()
	{
		$this->logged = false;
	}
	
	public function check($action)
	{
		$this->trace[] = "check $action";
		return true;
	}
	
	public function get_current_user()
	{
		$superadmin = new SuperAdmin();
		$superadmin->email= "john@gmail.com";
		$superadmin->name = "Super";
		$superadmin->surname = "Admin";
		return $superadmin;
	}
}
