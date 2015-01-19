<?php
class FixtureExecutioner
{
	protected $database_access;
	
	public function __construct($database_access)
	{
		$this->database_access = $database_access;
	}
	      
	public function execute_fixture($fixture_path, $db_name)
	{
		$query = $this->get_fixture_content($fixture_path);
		$query = $this->replace_dbname($query, $db_name);
                 
		$this->database_access->query($query);
	}
     	
	protected function replace_dbname($query, $db_name)
	{
		return str_ireplace("{db_name}", $db_name, $query);
	}
	 
	protected function get_fixture_content($fixture_path)
	{        
                return file_get_contents($fixture_path);
                
	}	
}