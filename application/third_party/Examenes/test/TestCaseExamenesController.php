<?php
class TestCaseExamenesController extends TestCase
{
	public function test_get_notas()
	{
		$this->enviroment_setter = new EnvironmentSetter();
		$this->enviroment_setter->set_development_environment();

    InfosacDBSetup::add_user_to_database();
		ExamenesSetup::create_notas();
		$cookie = CurlSupport::login();

		$url = '/examenes/get_notas';

		$response = CurlSupport::send_curl($url, array("examen" => 1), $cookie);


		$this->assert_equals(3, sizeof($response["response"]->data->list));

		$this->assert_equals("1", $response["response"]->data->list[0]->examen);
		$this->assert_equals("1", $response["response"]->data->list[1]->examen);
		$this->assert_equals("1", $response["response"]->data->list[2]->examen);

		$this->enviroment_setter->set_testing_environment();
	}

	public function test_save_notas()
	{
		$this->enviroment_setter = new EnvironmentSetter();
		$this->enviroment_setter->set_development_environment();

		ExamenesSetup::create_table();
		$cookie = CurlSupport::login();

		$url = '/examenes/save_notas';

		$data = array("notas" => array());
		$data["notas"][] = array("examen" => "1", "alumno" => "2", "nota" => "56", "observaciones" => "text");
  		$data["notas"][] = array("examen" => "5", "alumno" => "2", "nota" => "99", "observaciones" => "text");

		$response = CurlSupport::send_curl($url, $data, $cookie);

		$database_access_creator = new DBAccessCreator();
  		$db = $database_access_creator->get_db_access('educacion_development');

  		$result = $db->get("notas")->result_array();
  		$this->assert_equals(2, sizeof($result));

		$this->enviroment_setter->set_testing_environment();
	}
}
