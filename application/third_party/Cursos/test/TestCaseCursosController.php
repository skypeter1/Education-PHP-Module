<?php
class TestCaseCursosController extends TestCase
{
	public function test_get_pac_products()
	{
		$this->enviroment_setter = new EnvironmentSetter();
		$this->enviroment_setter->set_development_environment();

		PacTablesSetup::create_products();
    InfosacDBSetup::add_user_to_database();
		$cookie = CurlSupport::login();

		$url = '/cursos/get_pac_products';

		$response = CurlSupport::send_curl($url, array(), $cookie);

		$this->assert_equals("curso 1", $response["response"]->data->list[0]->nombre);
		$this->assert_equals("curso 2", $response["response"]->data->list[1]->nombre);
		$this->assert_equals("curso 3", $response["response"]->data->list[2]->nombre);

		$this->enviroment_setter->set_testing_environment();
	}

	public function test_save_matriculas_by_curso()
	{
		$this->enviroment_setter = new EnvironmentSetter();
		$this->enviroment_setter->set_development_environment();

		$db = DBAccessCreator::get_db_access("educacion_development");
		$cursos_model = new CursosModel($db);

		AlumnosSetup::create_matriculas_table();

		$cookie = CurlSupport::login();

		$matriculas_cursos = array();
		$matriculas_cursos["2"] = array("5", "6");
		$matriculas_cursos["4"] = array("12", "7");

		$url = '/cursos/save_matriculas_by_curso';

		$response = CurlSupport::send_curl($url, $matriculas_cursos, $cookie);


		$db->where_in("curso", array("2", "4"));
		$result = $db->get("matriculas")->result_array();

		$this->assert_equals("5", $result[0]["alumno"]);
		$this->assert_equals("6", $result[1]["alumno"]);
		$this->assert_equals("12", $result[2]["alumno"]);
		$this->assert_equals("7", $result[3]["alumno"]);

		$this->enviroment_setter->set_testing_environment();
	}

	public function test_save_pesos()
	{
		$this->enviroment_setter = new EnvironmentSetter();
		$this->enviroment_setter->set_development_environment();

		CursosSetup::create_cursos();
		$cookie = CurlSupport::login();

		$url = '/cursos/save_pesos';

		$pesos = array("curso" => 1, "pesos" => '{"Categoria 1":"peso1"}');

		$response = CurlSupport::send_curl($url, $pesos, $cookie);


		$db = DBAccessCreator::get_db_access("educacion_development");
		$db->where("id", 1);
		$cursos = $db->get("cursos")->result_array();

		$actual_pesos = json_decode(json_decode($cursos[0]["pesos"]), true);

		$this->assert_equals("peso1", $actual_pesos["Categoria 1"]);

		$this->enviroment_setter->set_testing_environment();
	}

	public function test_save_notas_finales()
	{
		$this->enviroment_setter = new EnvironmentSetter();
		$this->enviroment_setter->set_development_environment();

		CursosSetup::create_cursos();
		$cookie = CurlSupport::login();

		$url = '/cursos/save_notas_finales';

		$notas_finales = array();
		$notas_finales[] = array("curso" => "1", "alumno" => "1", "nota" => "67.8");
		$notas_finales[] = array("curso" => "1", "alumno" => "2", "nota" => "46");
		$notas_finales[] = array("curso" => "1", "alumno" => "3", "nota" => "25");

		$response = CurlSupport::send_curl($url, array("notas" => $notas_finales), $cookie);

		$db = DBAccessCreator::get_db_access("educacion_development");

		$db->order_by("alumno");
		$notas_finales_db = $db->get("notas_finales")->result_array();

		$this->assert_equals(3, sizeof($notas_finales_db));
		$this->assert_equals("67.8", $notas_finales_db[0]["nota"]);
		$this->assert_equals("46", $notas_finales_db[1]["nota"]);
		$this->assert_equals("25", $notas_finales_db[2]["nota"]);

		$this->enviroment_setter->set_testing_environment();
	}
}
