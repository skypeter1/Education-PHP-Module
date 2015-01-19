<?php
class TestCaseDatabaseRepository extends TestCase
{
	/*public function test_create()
	{
		$this->destroy_database('consultorio_1');
		$database_access = DB();
		
		$database_repository = new DatabaseRepository($database_access);
		
		$consultorio_id = 1;
		$fixtures = array('70_pacientes_table.sql', '90_visitas_table.sql');
		
		$database_repository->create($consultorio_id, $fixtures);
		
		get_instance()->load->dbutil();
		$this->assert_true(get_instance()->dbutil->database_exists('consultorio_1'));
		
		$this->assert_true(DBAccessCreator::get_db_access('consultorio_1')->table_exists('pacientes'));
		$this->assert_true(DBAccessCreator::get_db_access('consultorio_1')->table_exists('visitas'));
		
		$this->destroy_database('consultorio_1');
	}*/
	
	public function test_get()
	{
		$database_access = DB();
		
		$fixture_executor = new FixtureExecutioner($database_access);
		$fixture_path = dirname(__FILE__)."/../../Fixtures/fixtures/main/10_create_database.sql";
		$fixture_executor->execute_fixture($fixture_path, 'consultorio_23');
		
		$database_repository = new DatabaseRepository($database_access);
		$database = $database_repository->get(23);
		
		$this->assert_true($database instanceof CI_DB_driver);
		$this->assert_equals('consultorio_23', $database->database);
		
		$this->destroy_database('consultorio_23');
	}
	
	public function test_drop()
	{
		$this->destroy_database('consultorio_1');
		$database_access = DB();
		
		$this->create_database('consultorio_1');
		$this->assert_equals('consultorio_1', DBAccessCreator::get_db_access('consultorio_1')->database);
		
		$database_repository = new DatabaseRepository($database_access);
		$database_repository->drop('1');
		
		$exception_thrown = false;
		try
		{
			DBAccessCreator::get_db_access('consultorio_1');
		}
		catch(Exception $exception)
		{
			$exception_thrown = true;
		}
		
		$this->assert_true($exception_thrown);
		
		$consultorio_id = 1;
	}
	
	protected function create_database($database)
	{
		$database_access = DB();
		$fixture_executor = new FixtureExecutioner($database_access);

		$fixture_path = dirname(__FILE__)."/../../Fixtures/fixtures/main/10_create_database.sql";
		$fixture_executor->execute_fixture($fixture_path, $database);	
	}
	
	protected function destroy_database($database)
	{
		$database_access = DB();
		$fixture_executor = new FixtureExecutioner($database_access);

		$fixture_path = dirname(__FILE__)."/../../Fixtures/fixtures/testing/10_drop_database.sql";
		$fixture_executor->execute_fixture($fixture_path, $database);
	}
}
