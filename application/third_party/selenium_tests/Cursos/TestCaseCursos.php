<?php
class TestCaseCursos extends TestCase
{
  protected $browser;

  public function __construct()
  {
    $this->environment_setter = new EnvironmentSetter();
  }

  public function set_up()
  {
    //$this->fixture_executioner = new ShellFixtureExecutioner();
    //$query_result = $this->fixture_executioner->execute(dirname(__FILE__).'/../fixtures/infosac.sql');
    //$query_result = $this->fixture_executioner->execute(dirname(__FILE__).'/../fixtures/benedict.sql');
    $this->environment_setter->set_development_environment();
    PacTablesSetup::create_products();
    InfosacDBSetup::setup_database();
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
    UsersSetup::create_users();
    CursosSetup::create_cursos();
    AlumnosSetup::create_alumnos();
  }

  public function test_form_curso_required_fields()
  {
    $this->actions->to_new_form();
    $this->actions->save_form();

    $required_elements = $this->browser->elements("div.control-group.error");
    $this->assert_equals(8, sizeof($required_elements));
  }

  public function test_form_create_invalid_fields()
  {

    $this->browser->set_element_value("#horas_field", "99.9");
    $this->browser->set_element_value("#cupos_minimo_field", "456,78");
    $this->browser->set_element_value("#cupos_maximo_field", "098764.98");
    $this->browser->set_element_value("#precio_prematricula_field", "0.98764.98");

    $this->actions->save_form();

    $container = $this->get_field_container("horas_field");
    $this->assert_equals("control-group error", $container->attribute("class"));	

    $container = $this->get_field_container("cupos_minimo_field");
    $this->assert_equals("control-group error", $container->attribute("class"));

    $container = $this->get_field_container("cupos_maximo_field");
    $this->assert_equals("control-group error", $container->attribute("class"));

    $container = $this->browser->element("//input[@id='precio_prematricula_field']/../../..", 'xpath');
    $this->assert_equals("control-group error", $container->attribute("class"));
  }

  public function test_form_create_curso()
  {
    $this->browser->set_element_value("#nombre_field", "Reading 2");
    $this->browser->set_element_value("#horas_field", "15");
    $this->browser->set_element_value("#hora_inicio_field", "1231");
    $this->browser->set_element_value("#hora_fin_field", "1431");

    $this->browser->element("#fecha_inicio_field")->click();
    $this->browser->element("#calroot .calweek a")->click();
    $this->browser->element("#fecha_fin_field")->click();
    $this->browser->element("#calroot .calweek a")->click();

    $this->browser->set_element_value("#cupos_minimo_field", "12");
    $this->browser->set_element_value("#cupos_maximo_field", "31");

    $this->browser->set_element_value("#precio_prematricula_field", "25.80");
    $this->browser->element("#producto_pac_field option[value='1-01']")->click();

    $this->browser->element("a.select_profesor")->click();
    $this->browser->element(".modal a.select[data='1']")->click();

    $this->browser->element("#estado_field option[value='Cursando']")->click();

    $this->actions->save_form();

    $result_search = $this->actions->search("Reading 2");
    $this->assert_equals(1, sizeof($result_search));
  }

  public function test_form_edit_curso()
  {
    $this->actions->search("");

    $this->browser->element("a[href='#cursos/edit/3']")->click();
    $this->browser->set_element_value("#horas_field", "200");
    $this->browser->set_element_value("#precio_prematricula_field", "25.85");
    $this->browser->element("#producto_pac_field option[value='1-01']")->click();
    $this->browser->element("a.select_profesor")->click();
    $this->browser->element(".modal a.select[data='1']")->click();
    $this->browser->element("#estado_field option[value='Terminado']")->click();
    $this->browser->set_element_value("#hora_inicio_field", "1231");
    $this->browser->set_element_value("#hora_fin_field", "1431");
    $this->actions->save_form();

    $this->browser->wait_for_element("table.table-striped");

    $database_access_creator = new DBAccessCreator();
    $db = $database_access_creator->get_db_access('educacion_development');

    $db->where("id", "3");
    $result = $db->get("cursos")->result_array();
    $expected_curso = $result[0];

    $this->assert_equals("200", $expected_curso["horas"]);
    $this->assert_equals("25.85", $expected_curso["precio_prematricula"]);
    $this->assert_equals("1", $expected_curso["bodega"]);
    $this->assert_equals("Terminado", $expected_curso["estado"]);
  }

  public function test_save_and_new()
  {
    $this->browser->element("a[href='#cursos/edit/3']")->click();
    $this->browser->element("#producto_pac_field option[value='1-01']")->click();
    $this->browser->element("a.select_profesor")->click();
    $this->browser->element(".modal a.select[data='1']")->click();
    $this->browser->set_element_value("#hora_inicio_field", "1231");
    $this->browser->set_element_value("#hora_fin_field", "1431");
    $this->actions->save_form_and_new();

    $this->actions->wait_for_ajax();

    $url = parse_url($this->browser->url());
    $hash = $url["fragment"];

    $this->assert_equals("cursos/new", $hash);

    $feedback_text = $this->browser->element("div.alert-success")->text();
    $this->assert_true($feedback_text != "");

    $this->browser->element("a[href='#cursos']")->click();
  }

  // public function test_delete_curso()
  // {
  // 	$this->actions->search("");
  // 	$this->browser->element("table.table-striped a.delete[data='2']")->click();
  // 	$this->browser->element("div.modal a.execute")->click();

  // 	$delete_links = $this->browser->elements("table.table-striped a.delete");

  // 	$data_attributes = array();
  // 	foreach ($delete_links as $link)
  // 		$data_attributes[] = $link->attribute("data");

  // 	$this->assert_false(in_array("2", $data_attributes));
  // }

  public function test_move_alumno_to_another_curso()
  {
    AlumnosSetup::create_matriculas();

    $this->browser->element("#main_menu a[href='#alumnos-switch']")->click();
    $this->browser->element(".controls #alumnos_right_field option[value='2']")->click();
    $this->browser->element(".switch_buttons a[class='right_to_left icon-backward']")->click();

    $options_target = $this->browser->elements(".controls #alumnos_left_field option");

    $this->assert_equals(2, sizeof($options_target));
    $this->assert_equals("2", $options_target[1]->attribute("value"));
  }

  public function test_prevent_move_repeated_alumno()
  {
    $this->browser->element(".controls #curso_right_field option[value='1']")->click();
    $this->actions->wait_for_ajax();
    $this->browser->element(".controls #curso_left_field option[value='3']")->click();
    $this->actions->wait_for_ajax();

    $this->check_alumnos(array(1,2), "right");
    $this->move_right_selected_to_left();

    $this->browser->element("#myModal a[class='retry btn btn-primary']")->click();

    $options_target = $this->browser->elements(".controls #alumnos_right_field option");

    $this->assert_equals(1, sizeof($options_target));
    $this->assert_equals("1", $options_target[0]->attribute("value"));
  }

  public function test_move_alumnos_on_double_click()
  {
    $alumno = $this->browser->element(".controls #alumnos_left_field option[value='2']");
    $this->browser->doubleclick($alumno);

    $options_left = $this->browser->elements(".controls #alumnos_left_field option");
    $options_right = $this->browser->elements(".controls #alumnos_right_field option");

    $this->assert_equals(2, sizeof($options_left));
    $this->assert_equals(1, sizeof($options_right));
  }

  public function test_save_matriculas()
  {
    $this->browser->element(".form-actions .btn")->click();

    $this->actions->wait_for_ajax();

    $element = $this->browser->element("(//div[@class='custom-feedback'])[2]/div", "xpath");
    $this->assert_equals("Matriculas guardadas correctamente.", trim($element->text()));
  }

  public function test_estado()
  {
    CursosSetup::create_notas();
    $this->browser->element("#main_menu a[href='#cursos']")->click();
    $this->browser->element("table a[href='#curso-overview/10']")->click();

    $this->browser->set_element_value("input.peso[name='Categoria 2']", "25");
    $this->browser->set_element_value("input.peso[name='Categoria 3']", "25");
    $this->browser->set_element_value("input.peso[name='Categoria 1']", "50");

    $notas_finales = $this->browser->elements("td.nota_final span");

    $this->assert_equals("69.8", $notas_finales[0]->text());
    $this->assert_equals("76.0", $notas_finales[1]->text());
    $this->assert_equals("78.5", $notas_finales[2]->text());
    $this->assert_equals("70.6", $notas_finales[3]->text());
    $this->assert_equals("29.3", $notas_finales[4]->text());

    $this->browser->element("div.buttons.notas button.save")->click();
    $this->browser->element("#main_menu a[href='#cursos']")->click();
    $this->browser->element("table a[href='#curso-overview/10']")->click();

    $peso1 = $this->browser->element("input.peso[name='Categoria 2']")->attribute("value");
    $peso2 = $this->browser->element("input.peso[name='Categoria 3']")->attribute("value");
    $peso3 = $this->browser->element("input.peso[name='Categoria 1']")->attribute("value");

    $this->assert_equals("25", $peso1);		
    $this->assert_equals("25", $peso2);
    $this->assert_equals("50", $peso3);

    $this->browser->element("div.buttons.notas button.close_curso")->click();
    $this->actions->wait_for_ajax();

    $disabled_inputs = $this->browser->elements("input.peso[disabled='disabled']");
    $this->assert_equals(3, sizeof($disabled_inputs));

  }

  protected function move_right_selected_to_left()
  {
    $this->browser->element(".switch_buttons a[class='right_to_left icon-backward']")->click();
  }

  protected function check_alumnos($alumnos = array(), $direction)
  {

    foreach ($alumnos as $alumno)
    {
      $this->browser->element(".controls #alumnos_".$direction."_field option[value='$alumno']")->click();
    }
  }

  protected function get_first_column_first_td()
  {
    return $this->browser->element("table.table-striped tbody tr td")->text();
  }

  protected function get_first_column_last_td()
  {
    return $this->browser->element("table.table-striped tbody tr:last-child td")->text();
  }

  protected function get_field_container($field_id)
  {
    return $this->browser->element("//input[@id='$field_id']/../..", 'xpath');
  }
}
