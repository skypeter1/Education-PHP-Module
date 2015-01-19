<?php
class DatabaseRepository
{
	const DATABASE_PREFIX = 'consultorio_';
	
	public $db;
	
	public function __construct($db)
	{
		$this->db = $db;
		get_instance()->load->dbforge();
	}
	
	public function create($id, $fixtures = array())
	{
		$database_name = $this->get_db_name($id);
		
		$creation_result = get_instance()->dbforge->create_database($database_name);
		
		$fixtures_result = $this->apply_fixtures($database_name, $fixtures);
		
		return ($creation_result && $fixtures_result);
	}
	
	public function get($id)
	{
		$database_name = $this->get_db_name($id);
		return DBAccessCreator::get_db_access($database_name);
	}
	
	public function drop($id)
	{
		$db_name = $this->get_db_name($id);
		
		$database_access = DBAccessCreator::get_db_access();
		$fixture_executor = new FixtureExecutioner($database_access);

		$fixture_path = dirname(__FILE__)."/../../Fixtures/fixtures/main/100_drop_database.sql";
		$fixture_executor->execute_fixture($fixture_path, $db_name);
	}
	
	protected function get_db_name($id)
	{
		return self::DATABASE_PREFIX.$id;
	}
	
	protected function apply_fixtures($database_name, $fixtures)
	{
		$database_access = DBAccessCreator::get_db_access($database_name);
		$fixture_executor = new FixtureExecutioner($database_access);

		foreach($fixtures as $fixture)
		{
			$fixture_path = dirname(__FILE__)."/../../Fixtures/fixtures/main/$fixture";
			$fixture_executor->execute_fixture($fixture_path, $database_name);
		}
		
		return true;
	}
}