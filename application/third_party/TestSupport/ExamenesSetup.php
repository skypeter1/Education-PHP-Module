<?php
class ExamenesSetup
{
	public static function create_table()
	{
		self::empty_table("examenes");
		self::empty_table("notas");
		
		$database_access = DB();
		$fixture_executor = new FixtureExecutioner($database_access);
		
		$fixture_path = dirname(__FILE__)."/../Fixtures/fixtures/main/examenes_table.sql";
		$fixture_executor->execute_fixture($fixture_path, 'educacion_development');

		$fixture_path = dirname(__FILE__)."/../Fixtures/fixtures/main/notas_table.sql";
		$fixture_executor->execute_fixture($fixture_path, 'educacion_development');
	}

	public static function create_notas()
	{
		self::create_table();
		self::create_examenes();
		$database_access = DB();
		$fixture_executor = new FixtureExecutioner($database_access);

		$fixture_path = dirname(__FILE__)."/../Fixtures/fixtures/testing/notas_testing.sql";
		$fixture_executor->execute_fixture($fixture_path, 'educacion_development');
	}

	public static function create_examenes()
	{
		self::create_table();
		
		$database_access = DB();
		$fixture_executor = new FixtureExecutioner($database_access);

		$fixture_path = dirname(__FILE__)."/../Fixtures/fixtures/testing/examenes_testing.sql";
		$fixture_executor->execute_fixture($fixture_path, 'educacion_development');
	}

	public static function empty_table($table)
	{
		$database_access = DBAccessCreator::get_db_access('educacion_development');
		try
		{
			$database_access->truncate("educacion_development.$table");
		}
		catch(Exception $exception)
		{
			if ($exception->getCode() != 100)
				throw $exception;
		}
	}
}