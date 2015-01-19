<?php
class AsistenciaSetup
{
	public static function create_table()
	{
		self::empty_table("asistencia");
		
		$database_access = DB();
		$fixture_executor = new FixtureExecutioner($database_access);
		
		$fixture_path = dirname(__FILE__)."/../Fixtures/fixtures/main/asistencia_table.sql";
		$fixture_executor->execute_fixture($fixture_path, 'educacion_development');
	}

	public static function create_asistencias()
	{
		self::create_table();
		
		$database_access = DB();
		$fixture_executor = new FixtureExecutioner($database_access);
		
		$fixture_path = dirname(__FILE__)."/../Fixtures/fixtures/testing/create_asistencias.sql";
		$fixture_executor->execute_fixture($fixture_path, 'educacion_development');
	}
	
	public static function create_asistencias_to_reportes()
	{
		self::create_table();
		
		$database_access = DB();
		$fixture_executor = new FixtureExecutioner($database_access);
		
		$fixture_path = dirname(__FILE__)."/../Fixtures/fixtures/testing/create_asistencias_to_reportes.sql";
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