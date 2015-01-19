<?php
class TestCaseDBAccessCreator extends TestCase
{
	protected function set_db_for_testing()
	{
		$database_access = DB();
		$database_access->query("CREATE DATABASE IF NOT EXISTS `my_testing_database`");
	}
	
	protected function drop_database_for_testing()
	{
		$database_access = DB();
		$database_access->query("DROP DATABASE IF EXISTS `my_testing_database`");
	}
	
	public function test_get_db_access()
	{
		$this->set_db_for_testing();
		$db_access_creator = new DBAccessCreator();
		
		$db_name = 'my_testing_database';
		$db = $db_access_creator->get_db_access($db_name);
		
		$this->drop_database_for_testing();
		
		$this->assert_true($db instanceof CI_DB_mysql_driver);
		$this->assert_equals($db_name, $db->database);
	}

}