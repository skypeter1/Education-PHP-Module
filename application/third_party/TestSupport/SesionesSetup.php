<?php
class SesionesSetup
{
	public static function create_table($database = "educacion_development")
	{
		self::empty_table("sesiones", $database);
		
		$database_access = DB();
		$fixture_executor = new FixtureExecutioner($database_access);
		
		$fixture_path = dirname(__FILE__)."/../Fixtures/fixtures/main/sesiones_table.sql";
		$fixture_executor->execute_fixture($fixture_path, $database);

		$fixture_path = dirname(__FILE__)."/../Fixtures/fixtures/main/asistencia_table.sql";
		$fixture_executor->execute_fixture($fixture_path, $database);
	}

	public static function create_sesiones($database = "educacion_development")
	{
		self::create_table($database);

		$database_access = DB();
		$fixture_executor = new FixtureExecutioner($database_access);

		$fixture_path = dirname(__FILE__)."/../Fixtures/fixtures/testing/sesiones_testing.sql";
		$fixture_executor->execute_fixture($fixture_path, $database);

		$fixture_path = dirname(__FILE__)."/../Fixtures/fixtures/testing/asistencia_testing.sql";
		$fixture_executor->execute_fixture($fixture_path, $database);
	}

	public static function create_sesiones_to_reportes()
	{
		self::create_table();

		$database_access = DB();
		$fixture_executor = new FixtureExecutioner($database_access);

		$fixture_path = dirname(__FILE__)."/../Fixtures/fixtures/testing/sesiones_to_reportes_testing.sql";
		$fixture_executor->execute_fixture($fixture_path, 'educacion_development');
	}

	public static function empty_table($table, $database="educacion_development")
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
