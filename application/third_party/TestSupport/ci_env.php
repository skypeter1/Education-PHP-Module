<?php
define("BASEPATH", dirname(__FILE__).DIRECTORY_SEPARATOR."../../../system/");
define("APPPATH", dirname(__FILE__).DIRECTORY_SEPARATOR."../../../application/");
setlocale(LC_TIME, "es_ES.utf8", "es_ES.UTF-8", "es_ES");

date_default_timezone_set("Europe/Madrid");

require_once BASEPATH."database/DB.php";
require_once BASEPATH."database/DB_forge.php";
require_once BASEPATH."core/Loader.php";
require_once BASEPATH."core/Common.php";
require_once BASEPATH."core/Exceptions.php";
require_once APPPATH."third_party/Exceptions/classes/Exceptions.php";
require_once APPPATH."third_party/Exceptions/classes/Error.php";
require_once APPPATH."third_party/DBAccessCreator/DBAccessCreator.php";

function log_message($level = 'error', $message)
{
}

function load_class($class)
{
	if($class == "Exceptions") $class = "MY_Exceptions";
	return new $class;
}

class Lang
{
	public function load()
	{
	
	}
	
	public function line()
	{
	}
}

class MockController
{
	public $db;
	public $load;
	
	public function __construct()
	{
		$this->db = DB();
		$this->load = new CI_Loader();
		$this->lang = new Lang();
	}
}

$mock_controller = new MockController();

function get_instance()
{
	global $mock_controller;
	
	return $mock_controller;
}