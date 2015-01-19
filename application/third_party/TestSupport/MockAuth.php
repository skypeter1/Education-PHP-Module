<?php
class MockAuth extends Auth
{
	public $trace = array();
	public $user_is_admin;
	public $rol;
  public $id;
	protected $logged = false;
	
	public function __construct($admin = true, $rol = "administrador", $id = 2)
	{
		$this->rol = $rol;
		$this->user_is_admin = $admin;
    $this->id = $id;
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
		return $this->generate_user();
	}
	
	protected function generate_user()
	{
		$user = new User();
		$user->id = $this->id;
		$user->consultorio = 1;
		$user->name = "John Smith";
		$user->email= "john@gmail.com";
		$user->rol = $this->rol;
		$user->admin = $this->user_is_admin;
		return $user;
	}
	
}
