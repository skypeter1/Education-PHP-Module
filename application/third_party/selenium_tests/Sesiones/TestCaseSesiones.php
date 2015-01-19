<?php
class TestCaseSesiones extends TestCase
{
  protected $browser;

  public function __construct()
  {
    $this->environment_setter = new EnvironmentSetter();
  }

  public function set_up()
  {
    $this->environment_setter->set_development_environment();
    PacTablesSetup::create_clients();
    InfosacDBSetup::setup_database();
    UsersSetup::create_users();
    InfosacDBSetup::add_user_to_database();
    UsersSetup::create_pac_users();
    $this->browser = new PacBrowser(new WebDriver(), PAC_URL);
    $this->actions = new CommonActions($this->browser);
    $this->actions->open_application();
  }

  public function tear_down()
  {
    $this->browser->close();
    $this->environment_setter->set_testing_environment();
  }

  public function before_each()
  {
    SesionesSetup::create_sesiones();
    CursosSetup::create_cursos();
    PacTablesSetup::preparing_pac_tables_for_pagos();
  }

  public function test_form_create_invalid_fields()
  {
    $this->browser->element("#main_menu a[href='#sesiones']")->click();
    $this->browser->element(".table_controls_container a[href='#sesiones/new']")->click();

    $this->actions->save_form();
    $required_elements = $this->browser->elements("div.control-group.error");
    $this->assert_equals(4, sizeof($required_elements));
  }	

  public function test_create_sesion_like_administrador()
  {
    $this->browser->element("#fecha_field")->click();
    $this->browser->element("#calroot .calweek a")->click();
    $this->browser->set_element_value("#hora_inicio_field", "0800");
    $this->browser->set_element_value("#hora_fin_field", "0830");
    $this->browser->element("a.select_curso")->click();
    $this->browser->element(".modal a.select[data='2']")->click();

    $this->browser->element("a.select_profesor")->click();
    $this->browser->element(".modal table.users a.select[data='1']")->click();

    $this->browser->set_element_value("#observaciones_field", "Sesion impartida exitosamente");
    $this->actions->save_form();
    $this->actions->wait_for_ajax();

    $expected_sesion = $this->get_sesion_info_by_id(5);

    $this->assert_equals("08:00", $expected_sesion["hora_inicio"]);
    $this->assert_equals("1", $expected_sesion["profesor"]);
    $this->assert_equals("2", $expected_sesion["curso"]);
    $this->assert_equals("Sesion impartida exitosamente", $expected_sesion["observaciones"]);
    $this->assert_equals("0", $expected_sesion["estado"]);
  }

  public function test_create_sesion_like_administrador_empty_profesor()
  {
    $this->browser->element(".table_controls_container a[href='#sesiones/new']")->click();
    $this->browser->element("#fecha_field")->click();
    $this->browser->element("#calroot .calweek a")->click();
    $this->browser->set_element_value("#hora_inicio_field", "0800");
    $this->browser->set_element_value("#hora_fin_field", "0830");
    $this->browser->element("a.select_curso")->click();
    $this->browser->element("//div[@class='modal custom-modal in']//a[@data='3']", "xpath")->click();

    $this->browser->set_element_value("#observaciones_field", "Sesion impartida exitosamente");
    $this->actions->save_form();
    $this->actions->wait_for_ajax();

    $expected_sesion = $this->get_sesion_info_by_id(5);

    $this->assert_equals("08:00", $expected_sesion["hora_inicio"]);
    $this->assert_equals("", $expected_sesion["profesor"]);
    $this->assert_equals("3", $expected_sesion["curso"]);
    $this->assert_equals("Sesion impartida exitosamente", $expected_sesion["observaciones"]);
    $this->assert_equals("0", $expected_sesion["estado"]);
  }

  public function test_validate_sesion()
  {
    $this->browser->element("a[href='#sesiones/edit/4']")->click();
    $this->browser->set_element_value("#incidencias_field", "profesor enfermo");
    $this->browser->element(".form-actions a.validate_sesion")->click();
    $valid_icon = $this->browser->elements("table.table-striped i.icon-ok");

    $this->assert_equals(3, sizeof($valid_icon));
  }

  public function test_edit_sesion_like_administrador()
  {
    $this->browser->element("a[href='#sesiones/edit/4']")->click();

    $this->browser->set_element_value("#hora_inicio_field", "1225");
    $this->browser->set_element_value("#hora_fin_field", "1330");

    $this->browser->element("a.select_profesor")->click();
    $this->browser->element(".modal table.users  a.select[data='1']")->click();
    $this->browser->set_element_value("#observaciones_field", "Sesion con notas");
    $this->browser->element("option[value=weekend_price]")->click();

    $this->browser->element("form .form-actions a.validate_sesion")->click();
    $this->actions->wait_for_ajax();

    $this->browser->element("a[href='#sesiones/edit/4']")->click();

    $hora_inicio = $this->browser->element("#hora_inicio_field")->attribute("value");
    $hora_fin = $this->browser->element("#hora_fin_field")->attribute("value");
    $profesor_json = $this->browser->element("input[name=profesor]")->attribute("value");
    $profesor = json_decode($profesor_json);
    $estado = $this->browser->element("input[name=estado]")->attribute("value");
    $observaciones = $this->browser->element("#observaciones_field")->text();
    $tarifa = $this->browser->element("option[selected=selected]")->attribute("value");

    $this->assert_equals("12:25", $hora_inicio);
    $this->assert_equals("13:30", $hora_fin);
    $this->assert_equals("1", $profesor->id);
    $this->assert_equals("true", $estado);
    $this->assert_equals("Sesion con notas", $observaciones);
    $this->assert_equals("weekend_price", $tarifa);

    $this->browser->element("form .form-actions a.validate_sesion")->click();
    $this->actions->wait_for_ajax();
  }

  public function test_create_sesion_like_profesor()
  {
    $this->browser->close();

    $this->browser = new PacBrowser(new WebDriver(), PAC_URL);
    $this->actions = new CommonActions($this->browser);
    $this->actions->open_application_as_profesor();

    $this->browser->element("#main_menu a[href='#sesiones']")->click();
    $this->browser->element(".table_controls_container a[href='#sesiones/new']")->click();

    $this->browser->element("#fecha_field")->click();
    $this->browser->element("#calroot .calweek a")->click();
    $this->browser->set_element_value("#hora_inicio_field", "2300");
    $this->browser->set_element_value("#hora_fin_field", "2400");
    $this->browser->element("a.select_curso")->click();

    $this->actions->search_on_modal("");

    $this->browser->element(".modal a.select[data='4']")->click();
    $this->browser->set_element_value("#observaciones_field", "Sesion pendiente de notas");
    $this->actions->save_form();

    $expected_sesion = $this->get_sesion_info_by_id(5);

    $this->assert_equals("23:00", $expected_sesion["hora_inicio"]);
    $this->assert_equals("5", $expected_sesion["profesor"]);
    $this->assert_equals("4", $expected_sesion["curso"]);
    $this->assert_equals("Sesion pendiente de notas", $expected_sesion["observaciones"]);
  }

  public function test_create_sesion_like_profesor_sin_profesor_checked()
  {
    $this->browser->element("#main_menu a[href='#sesiones']")->click();
    $this->browser->element(".table_controls_container a[href='#sesiones/new']")->click();

    $this->browser->element("#fecha_field")->click();
    $this->browser->element("#calroot .calweek a")->click();
    $this->browser->set_element_value("#hora_inicio_field", "2300");
    $this->browser->set_element_value("#hora_fin_field", "2400");
    $this->browser->element("a.select_curso")->click();

    $this->actions->search_on_modal("");

    $this->browser->element(".modal a.select[data='4']")->click();
    $this->browser->element("#sin_profesor_field")->click();
    $this->browser->set_element_value("#observaciones_field", "Sesion pendiente de notas");
    $this->actions->save_form();

    $expected_sesion = $this->get_sesion_info_by_id(5);

    $this->assert_equals("23:00", $expected_sesion["hora_inicio"]);
    $this->assert_equals("", $expected_sesion["profesor"]);
    $this->assert_equals("4", $expected_sesion["curso"]);
    $this->assert_equals("Sesion pendiente de notas", $expected_sesion["observaciones"]);
  }

  public function test_search()
  {
    $search_results = $this->actions->search("liste");
    $this->assert_equals(2, sizeof($search_results));
    $search_results = $this->actions->search("cerse");
    $this->assert_equals(1, sizeof($search_results));
  }

  public function test_edit_sesion_like_profesor()
  {
    $this->actions->search("");

    $this->browser->element("button.refresh")->click();

    $this->browser->element("a[href='#sesiones/edit/2']")->click();

    $this->browser->set_element_value("#hora_inicio_field", "1225");
    $this->browser->set_element_value("#hora_fin_field", "1330");
    $this->browser->element("a.select_curso")->click();

    $this->actions->search_on_modal("");

    $this->browser->element(".modal a.select[data='4']")->click();
    $this->browser->set_element_value("#observaciones_field", "Sesion con notas");
    $this->actions->save_form();

    $expected_sesion = $this->get_sesion_info_by_id(2);

    $this->assert_equals("12:25", $expected_sesion["hora_inicio"]);
    $this->assert_equals("5", $expected_sesion["profesor"]);
    $this->assert_equals("4", $expected_sesion["curso"]);
    $this->assert_equals("Sesion con notas", $expected_sesion["observaciones"]);
  }

  public function test_add_asistencia_for_alumnos_like_profesor()
  {
    $this->actions->wait_for_ajax();
    AlumnosSetup::create_matriculas();
    $this->browser->element("button.refresh")->click();
    $this->browser->element("a[href='#sesiones/asistencia/2/2']")->click();
    $this->browser->element("option[value='No asistio']")->click();
    $this->browser->set_element_value("textarea[name='observaciones']", "observacion");
    $this->actions->save_form();

    $this->browser->element("a[href='#sesiones/asistencia/2/2']")->click();

    $selected = $this->browser->element("option[value='No asistio']")->attribute("selected");
    $this->assert_equals(true, (bool)$selected);
    $observaciones = $this->browser->element("textarea[name='observaciones']")->attribute("value");
    $this->assert_equals("observacion", $observaciones);
  }

  protected function get_sesion_info_by_id($sesion_id)
  {
    $database_access_creator = new DBAccessCreator();
    $db = $database_access_creator->get_db_access('educacion_development');

    $db->where("id", $sesion_id);
    $result = $db->get("sesiones")->result_array();

    return $result[0];
  }
}
