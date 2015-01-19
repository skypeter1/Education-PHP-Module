<?php
class TestCaseSesionesDomain extends TestCase
{
	public function test_correct_model()
	{
		$domain = new SesionesDomain(DB(), new MockAuth());
		$this->assert_equals("SesionesModel", $domain->models["model"]["modelclass"]);
	}

	public function test_get_does_not_return_incidencias_field_if_profesor()
	{
		UsersSetup::create_users();
		SesionesSetup::create_sesiones();

		$db = DBAccessCreator::get_db_access('educacion_development');
		$domain = new SesionesDomain($db, new MockAuth(false, "profesor"));

		$result = $domain->get(1);
		$this->assert_true(!isset($result->incidencias));
	}

	public function test_search_does_not_return_incidencias_field_if_profesor()
	{
		UsersSetup::create_users();
		SesionesSetup::create_sesiones();

		$db = DBAccessCreator::get_db_access('educacion_development');
		$domain = new SesionesDomain($db, new MockAuth(false, "profesor"));

		$result = $domain->search(new Search());

		$this->assert_true(!isset($result->collection[1]->incidencias));
	}

	public function test_get_products_and_hours_by_sesion()
	{
		UsersSetup::create_users();
		CursosSetup::create_cursos();
		SesionesSetup::create_sesiones();

		$db = DBAccessCreator::get_db_access('educacion_development');
		$domain = new SesionesDomain($db, new MockAuth(false, "profesor"));

		$sesiones = array(1, 2, 3);
		$products = $domain->get_products_and_hours_by_sesion($sesiones, "25-1");

    $this->assert_equals($products[0]["nombre"], "pago 1 matriz");
    $this->assert_equals($products[0]["horas"], "1.5");
    $this->assert_equals($products[0]["valor"], "45");

    $this->assert_equals($products[1]["nombre"], "pago 1 matriz");
    $this->assert_equals($products[1]["horas"], "1");
    $this->assert_equals($products[1]["valor"], "25");

    $this->assert_equals($products[2]["nombre"], "pago 1 matriz");
    $this->assert_equals($products[2]["horas"], "0.5");
    $this->assert_equals($products[2]["valor"], "35");
	}

	public function test_assigns_current_user_as_profesor_if_profesor()
	{
		SesionesSetup::create_table();

		$database_access_creator = new DBAccessCreator();
		$db = $database_access_creator->get_db_access('educacion_development');
		$domain = new SesionesDomain($db, new MockAuth(false, "profesor"));
       
		$sesion = new Sesion();
		$sesion->fecha = "555555555";   
		$sesion->hora_inicio = "12:39";
		$sesion->hora_fin = "12:39";
		$sesion->profesor = "5";
		$sesion->curso = "2";
		$sesion->observaciones = "test";
		$sesion->estado = "0"; 
                $sesion->pagado = "0";
		$sesion->incidencias = "";

		$domain->create($sesion);

		$result = $db->get("sesiones")->result_array();

		$this->assert_equals(2, $result[0]["profesor"]);
		$this->assert_equals(2, $result[0]["owned_by"]);
	}

	public function test_assigns_blank_as_profesor_if_profesor_and_sin_profesor_value()
	{
		SesionesSetup::create_table();

		$database_access_creator = new DBAccessCreator();
		$db = $database_access_creator->get_db_access('educacion_development');
		$domain = new SesionesDomain($db, new MockAuth(false, "profesor"));

		$sesion = new Sesion();  
		$sesion->fecha = "222222222";
		$sesion->hora_inicio = "12:39";
		$sesion->hora_fin = "12:39";
		$sesion->profesor = "5";
		$sesion->curso = "2";
		$sesion->observaciones = "test";
		$sesion->estado = "0";
                $sesion->pagado = "0";
		$sesion->incidencias = "";
		$sesion->sin_profesor = true;

		$domain->create($sesion);

		$result = $db->get("sesiones")->result_array();

		$this->assert_equals("", $result[0]["profesor"]);
		$this->assert_equals(1, $result[0]["sin_profesor"]);
		$this->assert_equals(2, $result[0]["owned_by"]);
	}

	public function test_assigns_current_user_as_profesor_if_profesor_on_update()
	{
		SesionesSetup::create_table();

		$database_access_creator = new DBAccessCreator();
		$db = $database_access_creator->get_db_access('educacion_development');
		$domain = new SesionesDomain($db, new MockAuth(false, "profesor"));

		$sesion = new Sesion();
		$sesion->fecha = "222222222";
		$sesion->hora_inicio = "12:39";
		$sesion->hora_fin = "12:39";
		$sesion->profesor = "5";
		$sesion->curso = "2";
		$sesion->observaciones = "test";
		$sesion->estado = "0";
                $sesion->pagado = "0";                 
		$sesion->incidencias = "";

		$domain->create($sesion);
		$sesion->id = "1";
		$sesion->profesor = "10";
		$domain->update($sesion);

		$result = $db->get("sesiones")->result_array();
		$this->assert_equals(2, $result[0]["profesor"]);
		$this->assert_equals(2, $result[0]["owned_by"]);
	}

	public function test_assigns_blank_profesor_if_profesor_on_update_and_sin_profesor_passed()
	{
		SesionesSetup::create_table();

		$database_access_creator = new DBAccessCreator();
		$db = $database_access_creator->get_db_access('educacion_development');
		$domain = new SesionesDomain($db, new MockAuth(false, "profesor"));

		$sesion = new Sesion();
		$sesion->fecha = "222222222";
		$sesion->hora_inicio = "12:39";
		$sesion->hora_fin = "12:39";
		$sesion->profesor = "5";
		$sesion->curso = "2";
		$sesion->observaciones = "test";
		$sesion->estado = "0";
                $sesion->pagado = "0";
		$sesion->incidencias = "";
		$sesion->sin_profesor = true;
 
		$domain->create($sesion);
		$sesion->id = "1";
		$sesion->profesor = "10";
		$domain->update($sesion);

		$result = $db->get("sesiones")->result_array();
		$this->assert_equals("", $result[0]["profesor"]);
		$this->assert_equals(2, $result[0]["owned_by"]);
	}

	public function test_sets_owned_by_with_profesor_selected_as_administrador()
	{
		SesionesSetup::create_table();

		$database_access_creator = new DBAccessCreator();
		$db = $database_access_creator->get_db_access('educacion_development');
		$domain = new SesionesDomain($db, new MockAuth(false, "administrador"));

		$sesion = new Sesion();
		$sesion->fecha = "222222222";
		$sesion->hora_inicio = "12:39";
		$sesion->hora_fin = "12:39";
		$sesion->profesor = "5";
		$sesion->curso = "2";
		$sesion->observaciones = "test";
		$sesion->estado = "0";
                $sesion->pagado = "0";
                $sesion->incidencias = "";
 
		$domain->create($sesion);

		$result = $db->get("sesiones")->result_array();

		$this->assert_equals("5", $result[0]["profesor"]);
		$this->assert_equals("5", $result[0]["owned_by"]);

		$sesion->profesor = "6";
		$domain->update($sesion);

		$result = $db->get("sesiones")->result_array();

		$this->assert_equals("6", $result[0]["profesor"]);
		$this->assert_equals("6", $result[0]["owned_by"]);
	}

	public function test_get_info_to_generate_orden_de_compra()
	{
		CursosSetup::create_cursos();
		SesionesSetup::create_sesiones();

		$database_access_creator = new DBAccessCreator();
		$db = $database_access_creator->get_db_access('educacion_development');

		$domain = new SesionesDomain($db, new MockAuth(false, "profesor"));

		$sesiones = array(1, 2, 3);
		$products = $domain->get_products_and_hours_by_sesion($sesiones, "25-1");

		$this->assert_equals($products[0]["nombre"], "pago 1 matriz");
		$this->assert_equals($products[0]["id"], "25");
		$this->assert_equals($products[0]["valor"], "45");
		$this->assert_equals($products[0]["iva"], "12");
		$this->assert_equals($products[0]["horas"], "1.5");

	    $this->assert_equals($products[1]["nombre"], "pago 1 matriz");
	    $this->assert_equals($products[1]["id"], "25");
	    $this->assert_equals($products[1]["valor"], "25");
	    $this->assert_equals($products[1]["iva"], "12");
	    $this->assert_equals($products[1]["horas"], "1");

	    $this->assert_equals($products[2]["nombre"], "pago 1 matriz");
	    $this->assert_equals($products[2]["id"], "25");
	    $this->assert_equals($products[2]["valor"], "35");
	    $this->assert_equals($products[2]["iva"], "12");
	    $this->assert_equals($products[2]["horas"], "0.5");
	}

	public function test_get_asistencia_profesor_to_curso()
	{
		SesionesSetup::create_sesiones();
		CursosSetup::create_cursos();
		UsersSetup::create_users();

		$database_access_creator = new DBAccessCreator();
		$db = $database_access_creator->get_db_access('educacion_development');
		$domain = new SesionesDomain($db, new MockAuth(false, "administrador"));

		$result_array = $domain->get_asistencia_profesor_to_curso(1);
		$sesiones = $result_array["sesiones"];

		$sesiones = OrderArray::order_by($sesiones,'id_profesor');

		$this->assert_equals(2, sizeof($sesiones));
		$this->assert_equals("0.02", $sesiones[0]["horas"]);
		$this->assert_equals("1.10", $sesiones[0]["valor"]);
		$this->assert_equals("John", $sesiones[0]["name_profesor"]);

	    $this->assert_equals("1.50", $sesiones[1]["horas"]);
	    $this->assert_equals("0", $sesiones[1]["valor"]);
	    $this->assert_equals('Arya', $sesiones[1]["name_profesor"]);
	}

	public function test_get_asistencia_alumno_to_curso()
	{
		SesionesSetup::create_sesiones_to_reportes();
		CursosSetup::create_cursos_to_reportes();
		AsistenciaSetup::create_asistencias_to_reportes();
		AlumnosSetup::create_matriculas_to_reportes();

		$database_access_creator = new DBAccessCreator();
		$db = $database_access_creator->get_db_access('educacion_development');
		$domain = new SesionesDomain($db, new MockAuth(false, "administrador"));

		$result_array = $domain->get_asistencia_alumno(11);

		$this->assert_equals(8, sizeof($result_array));

		$this->assert_equals('Business english' ,$result_array[0]['nombre']);
		$this->assert_equals('' ,$result_array[0]['estado_asistencia']);
		$this->assert_equals('1352955600' ,$result_array[0]['fecha']);
		$this->assert_equals('12:34' ,$result_array[0]['hora_inicio']);
		$this->assert_equals('12:34' ,$result_array[0]['hora_fin']);

		$this->assert_equals('English for all' ,$result_array[7]['nombre']);
		$this->assert_equals('Asistio' ,$result_array[7]['estado_asistencia']);
		$this->assert_equals('1356152400' ,$result_array[7]['fecha']);
		$this->assert_equals('23:41' ,$result_array[7]['hora_inicio']);
		$this->assert_equals('23:42' ,$result_array[7]['hora_fin']);
	}

  public function test_get_sesiones_restricted_by_bodega_permission(){

    PacTablesSetup::create_products();
    CursosSetup::create_cursos();
    SesionesSetup::create_sesiones();
    InfosacDBSetup::setup_database();
    InfosacDBSetup::add_user_with_bodega_restriction();
    $db = DBAccessCreator::get_db_access("educacion_development");
    $user_id = 3;
 
    @session_start();
    $_SESSION["user"] = "restricted";

    $domain = new SesionesDomain($db, new MockAuth(false, "administrador", $user_id));

    $sesiones_collection = $domain->search(new Search());
    $sessiones = $sesiones_collection->collection;
  
    $this->assert_equals(4, sizeof($sessiones));

  }
}
