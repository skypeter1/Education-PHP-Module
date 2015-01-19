<?php
class TestCaseRolesController extends TestCase
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

    InfosacDBSetup::setup_database();
    InfosacDBSetup::add_user_to_database();
    InfosacDBSetup::add_user_to_database("user1"); 
    InfosacDBSetup::add_user_to_database("user2");

    $cookie = CurlSupport::login();

    $url = '/roles/get_pac_users';

    $response = CurlSupport::send_curl($url, array(), $cookie);

    $this->assert_equals("user1", $response["response"]->data->list[0]->value);
    $this->assert_equals("user1", $response["response"]->data->list[0]->label);
    $this->assert_equals("user2", $response["response"]->data->list[1]->value);
    $this->assert_equals("user2", $response["response"]->data->list[1]->label);

  }
}

