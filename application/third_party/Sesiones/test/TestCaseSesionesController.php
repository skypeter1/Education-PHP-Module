<?php
class TestCaseSesionesController extends TestCase
{
	public function test_get_asistencias()
	{
		$this->enviroment_setter = new EnvironmentSetter();
		$this->enviroment_setter->set_development_environment();

    InfosacDBSetup::add_user_to_database();
		AsistenciaSetup::create_asistencias();
		$cookie = CurlSupport::login();

		$url = '/sesiones/get_asistencias';

		$response = CurlSupport::send_curl($url, array("sesion" => 1), $cookie);

		$this->assert_equals("10", $response["response"]->data->collection[0]->alumno);
		$this->assert_equals("12", $response["response"]->data->collection[1]->alumno);

		$this->assert_equals("Asistio", $response["response"]->data->collection[0]->estado);
		$this->assert_equals("Asistio", $response["response"]->data->collection[1]->estado);

		$this->assert_equals("observacion", $response["response"]->data->collection[0]->observaciones);
		$this->assert_equals("observacion", $response["response"]->data->collection[1]->observaciones);

		$this->enviroment_setter->set_testing_environment();
	}

	public function test_save_asistencia()
	{
		$this->enviroment_setter = new EnvironmentSetter();
		$this->enviroment_setter->set_development_environment();

		AsistenciaSetup::create_table();
		$cookie = CurlSupport::login();

		$url = '/sesiones/save_asistencia';

		$sesion = "10";
		$asistencias = array($sesion => array());
		$alumno = "789";
		$asistencias[$sesion][$alumno] = array("estado" => "Llego tarde", "observaciones" => "falta");
		$alumno = "987";
		$asistencias[$sesion][$alumno] = array("estado" => "Se fue temprano", "observaciones" => "nuevas");

		$response = CurlSupport::send_curl($url, $asistencias, $cookie);

		$db = DBAccessCreator::get_db_access('educacion_development');
		$result = $db->get("asistencia")->result_array();

		$this->assert_equals(2, sizeof($result));

		$this->assert_equals(10, $result[0]["sesion"]);
		$this->assert_equals(789, $result[0]["alumno"]);
 
		$this->assert_equals(10, $result[1]["sesion"]);
		$this->assert_equals(987, $result[1]["alumno"]);
  
		$this->enviroment_setter->set_testing_environment();
	}

	/*public function test_save_pagos()
	{
		UsersSetup::create_users();
		PacTablesSetup::create_bodegas();
		PacTablesSetup::insert_proveedores_to_bodegas();

		$this->enviroment_setter = new EnvironmentSetter();
		$this->enviroment_setter->set_development_environment();
		
		$cookie = CurlSupport::login();

		$url = '/sesiones/save_pagos';

		$pagos = array("profesor" => "1", "sesiones" => array("2", "1"));

		$response = CurlSupport::send_curl($url, $pagos, $cookie);

		die(print_r($response["full_response"]));

		$this->assert_equals("Juan Casale", $response["response"]->data->proveedor->nombre);
		$this->enviroment_setter->set_testing_environment();
	}*/
}
