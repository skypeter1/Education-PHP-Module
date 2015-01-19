<?php
class UsersSetup
{
	public static function create_table($database = "educacion_development")
	{
		self::empty_table("users", $database);
		
		$database_access = DB();
		$fixture_executor = new FixtureExecutioner($database_access);
		
		$fixture_path = dirname(__FILE__)."/../Fixtures/fixtures/main/20_users_table.sql";
		$fixture_executor->execute_fixture($fixture_path, $database);
	}

	public static function create_users($database = "educacion_development")
	{
		self::create_table($database);

		$database_access = DB();
		$fixture_executor = new FixtureExecutioner($database_access);

		$fixture_path = dirname(__FILE__)."/../Fixtures/fixtures/testing/20_testing_users.sql";
		$fixture_executor->execute_fixture($fixture_path, $database);
	}

  public static function create_pac_users_table($database = "educacion_development"){
    self::empty_table("pac_users");

		$database_access = DB();
		$fixture_executor = new FixtureExecutioner($database_access);

		$fixture_path = dirname(__FILE__)."/../Fixtures/fixtures/main/pac_users_table.sql";
		$fixture_executor->execute_fixture($fixture_path, $database);
  }

  public static function create_pac_users($database = "educacion_development"){
    self::create_pac_users_table();

		$database_access = DB();
		$fixture_executor = new FixtureExecutioner($database_access);

		$fixture_path = dirname(__FILE__)."/../Fixtures/fixtures/testing/pac_users.sql";
		$fixture_executor->execute_fixture($fixture_path, $database);
  }

	public static function empty_table($table, $database = "educacion_development")
	{
		$database_access = DBAccessCreator::get_db_access($database);
		try
		{
			$database_access->truncate("$database.$table");
		}
		catch(Exception $exception)
		{
			if ($exception->getCode() != 100)
				throw $exception;
		}
	}
}
