<?php
class TestCaseAlumnosDomain extends TestCase
{
	public function test_correct_model()
	{
		$this->domain = new AlumnosDomain(DB(), new MockAuth());

		$this->assert_equals("AlumnosModel", $this->domain->models["model"]["modelclass"]);
	}

	public function test_get_alumnos_history()
	{
		$db = DBAccessCreator::get_db_access('educacion_development');
		$domain = new AlumnosDomain($db, new MockAuth(false, "administrador"));
		AlumnosSetup::prepare_alumnos_history();

		$history = $domain->get_alumnos_history(1);

		$this->assert_equals(1, sizeof($history));

		$this->assert_equals('Benedict 1', $history[0]['nombre']);
		$this->assert_equals('000001', $history[0]['identificador']);
		$this->assert_equals('68.2', $history[0]['nota_final']);
		$this->assert_equals('66.7', $history[0]['asistencia']);

	}

    /**
     * Testing for 'Cursos by Alumno'
     */
    protected function test_get_cursos_by_alumno()
    {
        $db = DBAccessCreator::get_db_access('educacion_development');
        $domain = new AlumnosDomain($db, new MockAuth(false, "administrador"));
        AlumnosSetup::prepare_alumnos_history();

        $cursos = $domain->get_cursos(1);
        $this->assert_equals(1, sizeof($cursos));

        $cursos = $domain->get_cursos(2);
        $this->assert_equals(1, sizeof($cursos));

    }

}
