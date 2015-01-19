<?php
class TestCaseSesionesModel extends TestCase
{
	public function test_class_properties()
	{
		$sesiones_model = new SesionesModel(DB());
		
		$this->assert_equals('sesiones', $sesiones_model->table);
		$this->assert_equals('Sesion', $sesiones_model->entity);
	}

	public function test_save_asistencia()
	{
		AsistenciaSetup::create_table();
		$db = DBAccessCreator::get_db_access('educacion_development');

		$sesiones_model = new SesionesModel($db);
		
		$sesion = "5";
		$asistencias = array($sesion => array());
		$alumno = "2";
		$asistencias[$sesion][$alumno] = array("estado" => "Asistio", "observaciones" => "");
		$alumno = "3";
		$asistencias[$sesion][$alumno] = array("estado" => "No asistio", "observaciones" => "mu mal");

		$sesiones_model->save_asistencias($asistencias);

		$result = $db->get("asistencia")->result_array();

		$this->assert_equals(2, sizeof($result));

		$this->assert_equals(5, $result[0]["sesion"]);
		$this->assert_equals(2, $result[0]["alumno"]);
		$this->assert_equals("Asistio", $result[0]["estado"]);
		$this->assert_equals("", $result[0]["observaciones"]);

		$this->assert_equals(5, $result[1]["sesion"]);
		$this->assert_equals(3, $result[1]["alumno"]);
		$this->assert_equals("No asistio", $result[1]["estado"]);
		$this->assert_equals("mu mal", $result[1]["observaciones"]);

		$sesion = "5";
		$asistencias = array($sesion => array());
		$alumno = "2";
		$asistencias[$sesion][$alumno] = array("estado" => "Llego tarde", "observaciones" => "falta");
		$alumno = "3";
		$asistencias[$sesion][$alumno] = array("estado" => "Se fue temprano", "observaciones" => "nuevas");

		$sesiones_model->save_asistencias($asistencias);

		$db->order_by("alumno");
		$result = $db->get("asistencia")->result_array();

		$this->assert_equals(2, sizeof($result));

		$this->assert_equals(5, $result[0]["sesion"]);
		$this->assert_equals(2, $result[0]["alumno"]);
		$this->assert_equals("Llego tarde", $result[0]["estado"]);
		$this->assert_equals("falta", $result[0]["observaciones"]);

		$this->assert_equals(5, $result[1]["sesion"]);
		$this->assert_equals(3, $result[1]["alumno"]);
		$this->assert_equals("Se fue temprano", $result[1]["estado"]);
		$this->assert_equals("nuevas", $result[1]["observaciones"]);

	}

	public function test_get_asistencia_for_sesion()
	{
		AsistenciaSetup::create_table();
		$db = DBAccessCreator::get_db_access("educacion_development");

		$model = new SesionesModel($db);
		$sesion = "5";
		$asistencias = array($sesion => array());
		$alumno = "2";
		$asistencias[$sesion][$alumno] = array("estado" => "Llego tarde", "observaciones" => "falta");
		$alumno = "3";
		$asistencias[$sesion][$alumno] = array("estado" => "Se fue temprano", "observaciones" => "nuevas");
		$model->save_asistencias($asistencias);

		$actual_asistencias = $model->get_asistencia_for_sesion("5");

		$this->assert_equals("2", $actual_asistencias->collection[0]["alumno"]);
		$this->assert_equals("Llego tarde", $actual_asistencias->collection[0]["estado"]);
		$this->assert_equals("falta", $actual_asistencias->collection[0]["observaciones"]);
		
		$this->assert_equals("3", $actual_asistencias->collection[1]["alumno"]);
		$this->assert_equals("Se fue temprano", $actual_asistencias->collection[1]["estado"]);
		$this->assert_equals("nuevas", $actual_asistencias->collection[1]["observaciones"]);
	}

	public function test_save_pagos()
	{
		SesionesSetup::create_sesiones();
		$db = DBAccessCreator::get_db_access('educacion_development');
		$sesiones_model = new SesionesModel($db);

		$pagos = array("1", "2");

		$sesiones_model->save_pagos($pagos);

		$db->where("pagado", 1);
		$actual = $db->get("sesiones")->result_array();
		$this->assert_equals(2, sizeof($actual));
	}

	public function test_delete_sesiones()
	{
		SesionesSetup::create_sesiones();

		$db = DBAccessCreator::get_db_access('educacion_development');
		$sesiones_model = new SesionesModel($db);

		$sesion = new Sesion();
		$sesion->id = 4;
		$sesion->version = 1;

		$sesiones_model->delete($sesion);

		$db->where("sesion", 4);
		$asistencias = $db->get("asistencia")->result_array();
		$this->assert_equals(0, sizeof($asistencias));
	}

	public function test_pac_setup_for_pagos()
	{
		$db = DBAccessCreator::get_db_access("benedict_langschool");
		$sesiones_model = new SesionesModel($db);

		$this->assert_true($sesiones_model->check_pac_setup_for_pagos());
	}

	public function test_save_pac_orden_de_compra()
	{
		PacTablesSetup::preparing_pac_tables_for_pagos();
		$this->db = DBAccessCreator::get_db_access("educacion_development");

		$benedict_db = DBAccessCreator::get_db_access("benedict_langschool");

		$sesiones_model = new SesionesModel($this->db);
		$pagos = $this->set_data_to_test_sesiones();

		$this->assert_equals("1492", $this->get_actual_id_orden_de_compra());
		$sesiones_model->save_pac_orden_de_compra($pagos);
		$this->assert_equals("1493", $this->get_actual_id_orden_de_compra());

		$actual = $benedict_db->get("maeord30")->result_array();

		$this->assert_equals(2, sizeof($actual));

		$this->assert_equals('1', $actual[0]['codprod30']);
		$this->assert_equals('Curso 1', $actual[0]['nomprod30']);
		$this->assert_equals('2', $actual[1]['codprod30']);
		$this->assert_equals('Curso 2', $actual[1]['nomprod30']);
	}

	public function test_get_cursos_list()
	{
		CursosSetup::create_cursos_to_reportes();
		$db = DBAccessCreator::get_db_access("educacion_development");

		$model = new SesionesModel($db);
		$cursos_list = $model->get_cursos_list();

		$this->assert_equals(8, sizeof($cursos_list));
		$this->assert_equals("5", $cursos_list[5]['id']);

		CursosSetup::create_cursos();
	}
 
	protected function get_actual_id_orden_de_compra()
	{  
		$benedict_db = DBAccessCreator::get_db_access("benedict_langschool");
		$benedict_db->where('numtab', '61');
		$benedict_db->where('codtab', '91');
		$id_orden_de_compra = $benedict_db->get('maetab')->result_array();

		return $id_orden_de_compra[0]['ad1tab'];
	}

	protected function set_data_to_test_sesiones()
	{
		$pagos = array(
			'id_usuario' => '010001',
			'username' => 'aryastark',
			'bodega' => '01', 
      'bodega_destino' => '01',
			'proveedor' => array(
				'id' => '1001.001'
				,'nombre' => 'Pedro Perez'
				,'localidad' => '01'
				,'direccion' => 'Equinoccial y 13 de Junio'
				,'condicion_de_pago' => '05'
				, 'telefono' => '3430161')
		);

		$pagos["productos"] = array();
		$pagos["productos"][] = array(
				'id' => '1'
				,'nombre' => 'Curso 1'
				,'horas' => 10
				,'valor' => 25.1
				,'iva' => '12'
		);
		
		$pagos["productos"][] = array(
				'id' => '2'
				,'nombre' => 'Curso 2'
				,'horas' => 5
				,'valor' => 25.2
				,'iva' => '12'
		);

		return $pagos;
	}
	
	public function test_get_cursos_by_profesors_exact_id()
	{
		$db = DBAccessCreator::get_db_access("educacion_development");
		$model = new SesionesModel($db);

		$cursos_list = $model->get_cursos_to_profesor(1);
		$this->assert_equals(2, sizeof($cursos_list));
		$this->assert_equals($cursos_list[0]['identificador'],'1-000001');
		$this->assert_equals($cursos_list[1]['identificador'],'1-000002');

		$cursos_list = $model->get_cursos_to_profesor('1');
		$this->assert_equals(2, sizeof($cursos_list));
		$this->assert_equals("5", $cursos_list[0]['horas']);

	}
	
}
