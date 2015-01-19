<?php
require_once dirname(__FILE__)."/../../../../../system/libraries/Session.php";
class MockSession extends CI_Session
{
	public $stored_data = array();
	
	public function __construct()
	{
	}
	
	public function set_userdata($key, $value = null)
	{
		if(is_array($key))
		{
			foreach($key as $k => $val)
			{
				$this->set_userdata($k, $val);
			}
			return;	
		}
		$this->stored_data[$key] = $value;
	}
	
	public function userdata($key)
	{
		if(isset($this->stored_data[$key]))
			return $this->stored_data[$key];
	}
}