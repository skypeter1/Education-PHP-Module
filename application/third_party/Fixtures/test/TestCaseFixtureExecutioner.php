<?php
class TestCaseFixtureExecutioner extends TestCase
{
	public function test_executioner_replaces_the_dbname_placeholder()
	{
		$database_access = DB();
		$fixture_executioner = new TestingFixtureExecutioner($database_access);
		
		$query = "CREATE DATABASE `{db_name}`;";
		$replaced_query = $fixture_executioner->replace_dbname($query, "my_test_database");
		
		$this->assert_equals("CREATE DATABASE `my_test_database`;", $replaced_query);
	}
	
	public function test_get_fixture_content()
	{
		
		$database_access = DB();
		
		$fixture_executioner = new TestingFixtureExecutioner($database_access);
		
		$prove = $fixture_executioner->get_fixture_content(dirname(__FILE__).'/support/testing_fixture.sql');
		$expected = "CREATE DATABASE  `{db_name}`;";
		
		$this->assert_equals($expected, $prove);
	}
	
	public function test_fixture_execution()
	{
		$database_access = DB();
		$fixture_executioner = new FixtureExecutioner($database_access);
		
		$fixture_path = dirname(__FILE__).'/support/testing_fixture.sql';
		$db_name = "my_fixture_executioner_testing_database";
		$database_access->query("DROP DATABASE IF EXISTS `$db_name`");
		
		$fixture_executioner->execute_fixture($fixture_path, $db_name);
		
		$database_maches = $database_access->query("SELECT SCHEMA_NAME FROM INFORMATION_SCHEMA.SCHEMATA WHERE SCHEMA_NAME = '$db_name'")->result_array();
		$this->assert_true(isset($database_maches[0]));
		$this->assert_equals($db_name, $database_maches[0]["SCHEMA_NAME"]);

		$database_access->query("DROP DATABASE IF EXISTS `$db_name`");
	}
}