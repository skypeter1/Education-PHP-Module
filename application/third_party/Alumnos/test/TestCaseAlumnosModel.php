<?php
class TestCaseAlumnosModel extends TestCase
{
	public function test_class_properties()
	{
		$alumnos_model = new AlumnosModel(DB());
		
		$this->assert_equals('alumnos', $alumnos_model->table);
		$this->assert_equals('Alumno', $alumnos_model->entity);
	}

	public function test_get_pac_clients()
	{
		PacTablesSetup::create_clients();
		$db = DBAccessCreator::get_db_access("educacion_development");
		$alumnos_model = new AlumnosModel($db);

		$result = $alumnos_model->get_pac_clients();
		$this->assert_true($result instanceof EntityCollection);

		$this->assert_equals(3, sizeof($result->collection));

		$this->assert_equals("padre 1", $result->collection[0]["nombre"]);
		$this->assert_equals("padre 2", $result->collection[1]["nombre"]);
		$this->assert_equals("padre 3", $result->collection[2]["nombre"]);

		$this->assert_equals("padre1@clientes.com", $result->collection[0]["email"]);
		$this->assert_equals("padre2@clientes.com", $result->collection[1]["email"]);
		$this->assert_equals("padre3@clientes.com", $result->collection[2]["email"]);

		$this->assert_equals("23456789", $result->collection[0]["celular"]);
		$this->assert_equals("9876545", $result->collection[1]["celular"]);
		$this->assert_equals("59764333", $result->collection[2]["celular"]);

		$this->assert_equals("HNO. MIGUEL 4-96 Y H. VAZQUES ESQ", $result->collection[0]["direccion"]);
		$this->assert_equals("DANIEL CORDOVA 2113 Y AGUSTIN CUEVA", $result->collection[1]["direccion"]);
		$this->assert_equals("JUAN J.FLORES 341 Y GARCIA MORENO", $result->collection[2]["direccion"]);

		$this->assert_equals("111111", $result->collection[0]["telefono"]);
		$this->assert_equals("222222", $result->collection[1]["telefono"]);
		$this->assert_equals("333333", $result->collection[2]["telefono"]);

		$this->assert_equals("1", $result->collection[0]["id"]);
		$this->assert_equals("2", $result->collection[1]["id"]);
		$this->assert_equals("5", $result->collection[2]["id"]);
	}

	public function test_matricula_alumnos()
	{
		AlumnosSetup::create_matriculas_table();

		$db = DBAccessCreator::get_db_access("educacion_development");
		$model = new AlumnosModel($db);

		$matriculas = $this->get_matriculas();
		$model->save_matriculas($matriculas);

		$result = $db->get("matriculas")->result_array();

		$this->assert_equals(2, sizeof($result));

		$this->assert_equals("2", $result[0]["alumno"]);
		$this->assert_equals("10", $result[0]["curso"]);

		$this->assert_equals("2", $result[1]["alumno"]);
		$this->assert_equals("12", $result[1]["curso"]);
	}

	public function test_matricula_alumnos_with_new_cursos()
	{
		AlumnosSetup::create_matriculas_table();

		$db = DBAccessCreator::get_db_access("educacion_development");
		$model = new AlumnosModel($db);

		$matriculas = $this->get_matriculas();
		$model->save_matriculas($matriculas);

		$matriculas = array("2" => array("25"));
		$model->save_matriculas($matriculas);

		$result = $db->get("matriculas")->result_array();
		
		$this->assert_equals(1, sizeof($result));

		$this->assert_equals("2", $result[0]["alumno"]);
		$this->assert_equals("25", $result[0]["curso"]);
	}

	public function test_delete_matriculas()
	{
		AlumnosSetup::create_matriculas_table();

		$db = DBAccessCreator::get_db_access("educacion_development");
		$model = new AlumnosModel($db);

		$model->save_matriculas($this->get_matriculas());

		$matriculas = array("2" => array("10"));
		$model->save_matriculas($matriculas);

		$result = $db->get("matriculas")->result_array();
		
		$this->assert_equals(1, sizeof($result));

		$this->assert_equals("2", $result[0]["alumno"]);
		$this->assert_equals("10", $result[0]["curso"]);
	}

	public function test_get_matriculas_for_alumno()
	{
		AlumnosSetup::create_matriculas_table();

		$db = DBAccessCreator::get_db_access("educacion_development");
		$model = new AlumnosModel($db);
		$model->save_matriculas($this->get_matriculas());

		$matriculas = $model->get_matriculas_for_alumno("2");

		$this->assert_equals("10", $matriculas->collection[0]);
		$this->assert_equals("12", $matriculas->collection[1]);
	}

	public function test_filter_by_curso()
	{
		AlumnosSetup::create_matriculas_table();
		AlumnosSetup::create_alumnos();
		AlumnosSetup::create_matriculas();

		$filter = new Filter("curso", 10);
		$search = new Search($filter);

		$db = DBAccessCreator::get_db_access("educacion_development");
		$model = new AlumnosModel($db);
		$result = $model->search($search);

		$this->assert_equals(2, sizeof($result->collection));

		$this->assert_equals("Isabel Gomez", $result->collection[1]["nombre"]);
		$this->assert_equals("Joan Gallego", $result->collection[2]["nombre"]);
	}

    public function test_get_alumnos_by_cursos()
    {
		AlumnosSetup::create_matriculas_table();
		AlumnosSetup::create_alumnos();
		AlumnosSetup::create_matriculas();

		$db = DBAccessCreator::get_db_access("educacion_development");
		$model = new AlumnosModel($db);
        $cursos = array(1, 2, 3);
		$result = $model->get_alumnos_by_cursos($cursos);

        $this->assert_equals("Isabel Gomez", $result[1]["nombre"]);
        $this->assert_equals("Joan Gallego", $result[2]["nombre"]);
    }

	protected function get_matriculas()
	{
		$matriculas = array("2" => array("10", "12"));
		return $matriculas;
	}
}
