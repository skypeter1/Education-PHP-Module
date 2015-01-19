<?php
class AlumnosSetup
{
	public static function create_alumnos()
	{
		self::empty_table("alumnos");
		
		$database_access = DB();
		$fixture_executor = new FixtureExecutioner($database_access);
		
		$fixture_path = dirname(__FILE__)."/../Fixtures/fixtures/main/35_alumnos_table.sql";
		$fixture_executor->execute_fixture($fixture_path, 'educacion_development');

		$fixture_path = dirname(__FILE__)."/../Fixtures/fixtures/testing/35_alumnos_testing.sql";
		$fixture_executor->execute_fixture($fixture_path, 'educacion_development');
	}

	public static function create_matriculas_table()
	{
		self::empty_table("matriculas");
		
		$database_access = DB();
		$fixture_executor = new FixtureExecutioner($database_access);
		
		$fixture_path = dirname(__FILE__)."/../Fixtures/fixtures/main/matriculas_table.sql";
		$fixture_executor->execute_fixture($fixture_path, 'educacion_development');
	}
	
	public static function prepare_alumnos_history()
	{
		self::empty_table("matriculas");
		self::empty_table("alumnos");
		self::empty_table("asistencia");
		self::empty_table("cursos");
		self::empty_table("notas_finales");
		self::empty_table("users");
		self::empty_table("sesiones");

		$database_access = DB();
		$fixture_executor = new FixtureExecutioner($database_access);
		
		$fixture_path = dirname(__FILE__)."/../Fixtures/fixtures/testing/historico_alumnos/alumnos.sql";
		$fixture_executor->execute_fixture($fixture_path, 'educacion_development');
		
		$fixture_path = dirname(__FILE__)."/../Fixtures/fixtures/testing/historico_alumnos/asistencia.sql";
		$fixture_executor->execute_fixture($fixture_path, 'educacion_development');
		
		$fixture_path = dirname(__FILE__)."/../Fixtures/fixtures/testing/historico_alumnos/cursos.sql";
		$fixture_executor->execute_fixture($fixture_path, 'educacion_development');
		
		$fixture_path = dirname(__FILE__)."/../Fixtures/fixtures/testing/historico_alumnos/matriculas.sql";
		$fixture_executor->execute_fixture($fixture_path, 'educacion_development');
		
		$fixture_path = dirname(__FILE__)."/../Fixtures/fixtures/testing/historico_alumnos/notas_finales.sql";
		$fixture_executor->execute_fixture($fixture_path, 'educacion_development');
		
		$fixture_path = dirname(__FILE__)."/../Fixtures/fixtures/testing/historico_alumnos/profesores.sql";
		$fixture_executor->execute_fixture($fixture_path, 'educacion_development');
		
		$fixture_path = dirname(__FILE__)."/../Fixtures/fixtures/testing/historico_alumnos/sesiones.sql";
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

	public static function create_matriculas()
	{
		self::empty_table("matriculas");
		self::create_matriculas_table();
		
		$database_access = DB();
		$fixture_executor = new FixtureExecutioner($database_access);
		
		$fixture_path = dirname(__FILE__)."/../Fixtures/fixtures/testing/create_matriculas.sql";
		$fixture_executor->execute_fixture($fixture_path, 'educacion_development');
	}

	public static function create_matriculas_to_reportes()
	{
		self::empty_table("matriculas");
		self::create_matriculas_table();
		
		$database_access = DB();
		$fixture_executor = new FixtureExecutioner($database_access);
		
		$fixture_path = dirname(__FILE__)."/../Fixtures/fixtures/testing/create_matriculas_to_reportes.sql";
		$fixture_executor->execute_fixture($fixture_path, 'educacion_development');
	}
}