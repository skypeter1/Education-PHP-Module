<?php
class TestCaseAlumnos extends TestCase
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
    AlumnosSetup::create_alumnos();
    CursosSetup::create_cursos();
  }

  public function test_list_search()
  {
    $this->browser->element("#main_menu a[href='#alumnos']")->click();

    $search_results = $this->actions->search("Konz");
    $this->assert_equals(1, sizeof($search_results));

    $search_results = $this->actions->search("coolmaju@gmail.com");
    $this->assert_equals(1, sizeof($search_results));
  }

  public function test_form_required_fields()
  {
    $this->actions->to_new_form();
    $this->actions->save_form();

    $required_elements = $this->browser->elements("div.control-group.error");
    $this->assert_equals(3, sizeof($required_elements));
  }

  public function test_form_create_invalid_fields()
  {
    $this->browser->set_element_value("#email_field", "invalid_mail");

    $this->actions->save_form();

    $cedula_container = $this->browser->element("//input[@id='email_field']/../..", 'xpath');
    $this->assert_equals("control-group error", $cedula_container->attribute("class"));
  }

  public function test_form_create()
  {
    $this->browser->set_element_value("#cedula_field", "1002694824");
    $this->browser->set_element_value("#nombre_field", "juan");
    $this->browser->set_element_value("#apodo_field", "Rua");

    $this->browser->element("#fecha_nacimiento_field")->click();
    $this->browser->element("//div[@id='calroot']//option[text()='1984']", "xpath")->click();
    $this->browser->element("#calroot .calweek a")->click();

    $edad = $this->browser->element("#edad_field")->attribute("value");

    $this->assert_true($edad >= 28);


    $this->browser->element("#cliente_pac_field option[value='1']")->click();

    $this->actions->save_form();

    $result_search = $this->actions->search("Rua");
    $this->assert_equals(1, sizeof($result_search));
  }


  public function test_form_edit()
  {
    $this->actions->search("");
    $this->browser->element("a[href='#alumnos/edit/1']")->click();
    $this->browser->set_element_value("#nombre_field", "new_nombre");
    $this->actions->save_form();

    $result_search = $this->actions->search("new_nombre");
    $this->assert_equals(1, sizeof($result_search));

  }

  public function test_save_and_new()
  {
    $this->browser->element("a[href='#alumnos/edit/1']")->click();
    $this->actions->save_form_and_new();

    $feedback_text = $this->browser->element("div.alert-success")->text();
    $this->assert_true($feedback_text != "");
    $this->browser->element("a[href='#alumnos']")->click();
  }

  public function test_table_order()
  {
    $this->actions->search("");
    $this->browser->element("table.table-striped thead a[data='nombre']")->click();
    $first = $this->get_first_column_first_td();
    $last = $this->get_first_column_last_td();

    $this->assert_equals("Alberto", $first);
    $this->assert_equals("Joan Gallego", $last);

    $this->browser->element("table.table-striped thead a[data='nombre']")->click();
    $first = $this->get_first_column_first_td();
    $last = $this->get_first_column_last_td();

    $this->assert_equals("Joan Gallego", $first);
    $this->assert_equals("Alberto", $last);
  }

  public function test_matricula_alumno()
  {
    AlumnosSetup::create_matriculas_table();

    $this->go_to_matricula(1);

    $this->click_curso_for_matricula(3);
    $this->click_curso_for_matricula(1);
    $this->actions->save_form();

    $this->go_to_matricula(1);
    $curso_1 = $this->browser->element("form input[value='1']")->attribute("checked");
    $curso_3 = $this->browser->element("form input[value='3']")->attribute("checked");

    $this->assert_equals("true", $curso_1);
    $this->assert_equals("true", $curso_3);

    $this->assert_unsuscribe_to_curso();

    $this->assert_unsuscribe_to_all_cursos();

    $this->assert_submit_form_with_all_cursos_unchecked();

  }

  public function test_filter_cursos()
  {
    $this->browser->set_element_value("form input[name='search_field']", "2-");

    $curso_1 = $this->browser->element("tr[search^='2-000001']")->attribute("style");
    $curso_2 = $this->browser->element("tr[search^='1-000002']")->attribute("style");

    $this->assert_equals("display: table-row;", $curso_1);
    $this->assert_equals("display: none;", $curso_2);

    $this->browser->set_element_value("form input[name='search_field']", "i");

    $curso_1 = $this->browser->element("tr[search^='2-000001']")->attribute("style");
    $curso_2 = $this->browser->element("tr[search^='1-000002']")->attribute("style");

    $this->assert_equals("display: table-row;", $curso_1);
    $this->assert_equals("display: table-row;", $curso_2);
  }

  protected function assert_submit_form_with_all_cursos_unchecked()
  {
    $this->actions->save_form();
    $this->go_to_matricula(1);

    $curso_1 = $this->browser->element("form input[value='1']")->attribute("checked");
    $curso_3 = $this->browser->element("form input[value='3']")->attribute("checked");

    $this->assert_equals(null, $curso_1);
    $this->assert_equals(null, $curso_3);
  }

  protected function assert_unsuscribe_to_all_cursos()
  {
    $this->click_curso_for_matricula(1);
    $this->actions->save_form();
    $this->go_to_matricula(1);

    $curso_1 = $this->browser->element("form input[value='1']")->attribute("checked");
    $curso_3 = $this->browser->element("form input[value='3']")->attribute("checked");

    $this->assert_equals(null, $curso_1);
    $this->assert_equals(null, $curso_3);
  }

  protected function assert_unsuscribe_to_curso()
  {
    $this->click_curso_for_matricula(3);
    $this->actions->save_form();
    $this->go_to_matricula(1);

    $curso_1 = $this->browser->element("form input[value='1']")->attribute("checked");
    $curso_3 = $this->browser->element("form input[value='3']")->attribute("checked");

    $this->assert_equals("true", $curso_1);
    $this->assert_equals(null, $curso_3);
  }

  protected function click_curso_for_matricula($curso)
  {
    $this->browser->element("form input[value='$curso']")->click();
  }

  protected function go_to_matricula($alumno)
  {
    $this->browser->element("table.table-striped a[href='#alumnos/matricula/$alumno']")->click();
  }

  protected function get_first_column_first_td()
  {
    return $this->browser->element("table.table-striped tbody tr td")->text();
  }

  protected function get_first_column_last_td()
  {
    return $this->browser->element("table.table-striped tbody tr:last-child td")->text();
  }

}
