<?php
class CursosSetup
{
	public static function create_cursos($database = "educacion_development")
	{
		self::empty_table("cursos", $database);
		self::empty_table("notas_finales", $database);
		
		$database_access = DB();
		$fixture_executor = new FixtureExecutioner($database_access);
		
		$fixture_path = dirname(__FILE__)."/../Fixtures/fixtures/main/30_cursos_table.sql";
		$fixture_executor->execute_fixture($fixture_path, $database);

		$fixture_path = dirname(__FILE__)."/../Fixtures/fixtures/testing/30_cursos_testing.sql";
		$fixture_executor->execute_fixture($fixture_path, $database);

		$fixture_path = dirname(__FILE__)."/../Fixtures/fixtures/main/notas_finales_table.sql";
		$fixture_executor->execute_fixture($fixture_path, $database);
	}

	public static function create_cursos_to_reportes()
	{
		self::empty_table();
		// self::empty_table("notas_finales");
		
		$database_access = DB();
		$fixture_executor = new FixtureExecutioner($database_access);
		
		$fixture_path = dirname(__FILE__)."/../Fixtures/fixtures/main/30_cursos_table.sql";
		$fixture_executor->execute_fixture($fixture_path, 'educacion_development');

		$fixture_path = dirname(__FILE__)."/../Fixtures/fixtures/testing/cursos_testing_to_reportes.sql";
		$fixture_executor->execute_fixture($fixture_path, 'educacion_development');

		// $fixture_path = dirname(__FILE__)."/../Fixtures/fixtures/main/notas_finales_table.sql";
		// $fixture_executor->execute_fixture($fixture_path, 'educacion_development');
	}
	
	public static function create_notas()
	{
		self::empty_table();
		self::empty_table("alumnos");
		self::empty_table("matriculas");
		self::empty_table("examenes");
		self::empty_table("notas");
		self::empty_table("sesiones");
		self::empty_table("asistencia");

		$database_access = DB();
		$fixture_executor = new FixtureExecutioner($database_access);
		
		$alumnos = dirname(__FILE__)."/../Fixtures/fixtures/testing/cursos_notas/alumnos.sql";
		$fixture_executor->execute_fixture($alumnos, 'educacion_development');

		$cursos = dirname(__FILE__)."/../Fixtures/fixtures/testing/cursos_notas/cursos.sql";
		$fixture_executor->execute_fixture($cursos, 'educacion_development');

		$examenes = dirname(__FILE__)."/../Fixtures/fixtures/testing/cursos_notas/examenes.sql";
		$fixture_executor->execute_fixture($examenes, 'educacion_development');

		$matriculas = dirname(__FILE__)."/../Fixtures/fixtures/testing/cursos_notas/matriculas.sql";
		$fixture_executor->execute_fixture($matriculas, 'educacion_development');

		$notas = dirname(__FILE__)."/../Fixtures/fixtures/testing/cursos_notas/notas.sql";
		$fixture_executor->execute_fixture($notas, 'educacion_development');

		$notas = dirname(__FILE__)."/../Fixtures/fixtures/testing/cursos_notas/sesiones.sql";
		$fixture_executor->execute_fixture($notas, 'educacion_development');

		$notas = dirname(__FILE__)."/../Fixtures/fixtures/testing/cursos_notas/asistencia.sql";
		$fixture_executor->execute_fixture($notas, 'educacion_development');
	}

	public static function empty_table($table = "cursos", $database = "educacion_development")
	{
		$database_access = DBAccessCreator::get_db_access($database);
		try
		{
			$database_access->truncate("$database.$table");
		}
		catch(Exception $exception)
		{
			if ($exception->getCode() != 100)
			{
				throw $exception;
			}
		}
	}
}
