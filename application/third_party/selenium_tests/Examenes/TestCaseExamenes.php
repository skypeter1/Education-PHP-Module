<?php
class TestCaseExamenes extends TestCase
{
  const USER_PROFESOR = "tyron@lanister.com";
  const PASS_PROFESOR = "1234";

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
    ExamenesSetup::create_examenes();
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
  }

  public function test_form_invalid_fields()
  {
    $this->browser->element("#main_menu a[href='#examenes']")->click();
    $this->browser->element("a[href='#examenes/new']")->click();

    $this->actions->save_form();

    $required_elements = $this->browser->elements("div.control-group.error");
    $this->assert_equals(5, sizeof($required_elements));
  }

  public function test_create_examen_as_administrador()
  {
    $this->browser->set_element_value("input[name='titulo']", "Examen sorpresa");


    $this->browser->element("a.select_curso")->click();
    $this->browser->element(".modal a.select[data='3']")->click();

    $this->browser->element("a.select_profesor")->click();
    $this->browser->element(".modal table.users a.select[data='2']")->click();

    $this->browser->element("input[name='fecha']")->click();
    $this->browser->element("#calroot .calweek a")->click();

    $this->browser->element("#categoria_field option[value='Categoria 2']")->click();

    $this->actions->save_form();
    $this->actions->wait_for_ajax();

    $database_access_creator = new DBAccessCreator();
    $db = $database_access_creator->get_db_access('educacion_development');

    $db->where("id", "4");
    $result = $db->get("examenes")->result_array();
    $expected_curso = $result[0];

    $this->assert_equals("Examen sorpresa", $expected_curso["titulo"]);
    $this->assert_equals("Categoria 2", $expected_curso["categoria"]);
  }

  public function test_edit_as_administrador()
  {
    $this->browser->element("a[href='#examenes/edit/4']")->click();

    $this->browser->set_element_value("input[name='titulo']", "nuevo titulo");
    $this->browser->element("#categoria_field option[value='Categoria 3']")->click();

    $this->actions->save_form();

    $this->browser->element("a[href='#examenes/edit/4']")->click();

    $titulo = $this->browser->element("input[name='titulo']")->attribute("value");

    $this->assert_equals("nuevo titulo", $titulo);

    $this->browser->element("form a[href='#examenes']")->click();
  }

  public function test_delete_examen()
  {
    $this->browser->element("a.delete[data='4']")->click();
    $this->browser->element("#myModal a.execute")->click();

    $this->actions->wait_for_ajax();

    $database_access_creator = new DBAccessCreator();
    $db = $database_access_creator->get_db_access('educacion_development');

    $result = $db->get("examenes")->result_array();
    $this->assert_equals(3, sizeof($result));
  }
}
