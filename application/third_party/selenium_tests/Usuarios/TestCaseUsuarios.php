<?php
class TestCaseUsuarios extends TestCase
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
    UsersSetup::create_users();
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

	public function test_form_create_invalid_fields()
	{
		$this->browser->element("#main_menu a[href='#users']")->click();
		$this->actions->to_new_form();
		$this->actions->save_form();

		$required_elements = $this->browser->elements("div.control-group.error");
		$this->assert_equals(6, sizeof($required_elements));
	}	

	public function test_repeated_passwords_error()
	{
		$this->browser->set_element_value("#password_field", "password");
		$this->browser->set_element_value("#retype_password_field", "diferent_password");
		$this->actions->save_form();

		$error_elements = $this->browser->elements("div.control-group.error");
		$this->assert_equals(6, sizeof($error_elements));
	}

	public function test_create_user()
	{
		$this->browser->set_element_value("#email_field", "email@email.com");
		$this->browser->set_element_value("#password_field", "password");
		$this->browser->set_element_value("#retype_password_field", "password");
		$this->browser->set_element_value("#weekend_price_field", "50.6");
		$this->browser->set_element_value("#out_price_field", "76.9");
		$this->browser->set_element_value("#price_field", "25.5");
		$this->browser->element("option[value='1002.002']")->click();
		$this->actions->save_form();
		$results = $this->actions->search("Alberto");
		$this->assert_equals(1, sizeof($results));

		$results = $this->actions->search("email@email.com");
		$this->assert_equals(1, sizeof($results));
	}

	public function test_edit_user()
	{
		$this->actions->search("");
		$this->edit_user(6);
		$this->browser->element("option[value='1002.002']")->click();
		$this->actions->save_form();

		$results = $this->actions->search("Alberto");
		$this->assert_equals(1, sizeof($results));
		$this->edit_user(6);

    $this->assert_correct_user_values();

		$selected = $this->browser->element("option[value='1002.002']")->attribute("selected");
		$this->assert_equals("true", $selected);
		$this->actions->save_form();
	}

  protected function assert_correct_user_values(){
		$name = $this->browser->element("#name_field")->attribute("value");
		$price = $this->browser->element("#price_field")->attribute("value");
		$weekend_price = $this->browser->element("#weekend_price_field")->attribute("value");
		$out_price = $this->browser->element("#out_price_field")->attribute("value");

		$this->assert_equals("Alberto Spencer", $name);
		$this->assert_equals("25.5", $price);
		$this->assert_equals("50.6", $weekend_price);
		$this->assert_equals("76.9", $out_price);
  }

	protected function edit_user($user_id)
	{
		$this->browser->element("a[href='#users/edit/$user_id']")->click();
	}
}
