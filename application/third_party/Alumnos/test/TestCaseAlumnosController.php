<?php
class TestCaseAlumnosController extends TestCase
{

  public function __construct()
  {
    $this->enviroment_setter = new EnvironmentSetter();
  }

  public function before_each()
  {
    $this->enviroment_setter->set_development_environment();
  }

  public function after_each()
  {
    $this->enviroment_setter->set_testing_environment();
  }

  public function test_get_pac_clients()
  {
    PacTablesSetup::create_clients();
    $cookie = CurlSupport::login();

    $url = '/alumnos/get_pac_clients';

    $response = CurlSupport::send_curl($url, array(), $cookie);

    $this->assert_equals("padre 1", $response["response"]->data->list[0]->nombre);
    $this->assert_equals("padre 2", $response["response"]->data->list[1]->nombre);
    $this->assert_equals("padre 3", $response["response"]->data->list[2]->nombre);
  }

  public function test_save_matriculas()
  {
    AlumnosSetup::create_matriculas_table();
    $database_access = DBAccessCreator::get_db_access('educacion_development');
    $cookie = CurlSupport::login();

    $url = '/alumnos/save_matriculas';

    $matriculas = array();
    $matriculas["matriculas"] = array("2" => array("10", "12"));

    $response = CurlSupport::send_curl($url, $matriculas, $cookie);

    $result = $database_access->get("matriculas")->result_array();

    $this->assert_equals(2, sizeof($result));

    $this->assert_equals("2", $result[0]["alumno"]);
    $this->assert_equals("10", $result[0]["curso"]);

    $this->assert_equals("2", $result[1]["alumno"]);
    $this->assert_equals("12", $result[1]["curso"]);
  }

  public function test_save_empty_matriculas()
  {
    AlumnosSetup::create_matriculas_table();
    $database_access = DBAccessCreator::get_db_access('educacion_development');
    $cookie = CurlSupport::login();

    $url = '/alumnos/save_matriculas';

    $matriculas = array();
    $matriculas["matriculas"] = array("2" => array("10", "12"));

    $response = CurlSupport::send_curl($url, $matriculas, $cookie);

    $matriculas = array();
    $matriculas["matriculas"] = array("2" => array());

    $response = CurlSupport::send_curl($url, $matriculas, $cookie);

    $result = $database_access->get("matriculas")->result_array();

    $this->assert_equals(0, sizeof($result));
  }

  public function test_get_matriculas()
  {
    AlumnosSetup::create_matriculas();
    $database_access = DBAccessCreator::get_db_access('educacion_development');
    $cookie = CurlSupport::login();

    $url = '/alumnos/get_matriculas';

    $response = CurlSupport::send_curl($url, array("alumno" => 1), $cookie);

    $this->assert_equals("10", $response["response"]->data[0]);
  }

  public function test_delete_matriculas()
  {
    AlumnosSetup::create_matriculas_table();
    $database_access = DBAccessCreator::get_db_access('educacion_development');
    $cookie = CurlSupport::login();

    $url = '/alumnos/save_matriculas';

    $matriculas = array();
    $matriculas["matriculas"] = array("2" => array("10", "12"));

    $response = CurlSupport::send_curl($url, $matriculas, $cookie);

    $matriculas["matriculas"] = array();
    $matriculas["matriculas"] = array("2" => array("12"));

    $response = CurlSupport::send_curl($url, $matriculas, $cookie);

    $result = $database_access->get("matriculas")->result_array();

    $this->assert_equals(1, sizeof($result));

    $this->assert_equals("2", $result[0]["alumno"]);
    $this->assert_equals("12", $result[0]["curso"]);
  }
}
