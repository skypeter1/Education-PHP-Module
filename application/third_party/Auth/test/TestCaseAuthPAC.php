<?php
class TestCaseAuthPAC extends TestCase
{
  public function test_PAC_user_logged()
  {
    $auth = $this->instance_auth();

    $_SESSION["user"] = "";
    $logged = $auth->logged();
    $this->assert_false($logged);

    $_SESSION["user"] = "user";
    $logged = $auth->logged();
    $this->assert_true($logged);
  }

  public function test_case_logout()
  {
    $auth = $this->instance_auth();

    $auth->logout();

    $session_id = session_id();
    $this->assert_true(empty($session_id));
  }

  public function test_get_current_user()
  {
    $auth = $this->instance_auth();
    InfosacDBSetup::setup_database();
    InfosacDBSetup::add_user_to_database();
    UsersSetup::create_pac_users();

    $_SESSION["user"] = "username";

    $user = $auth->get_current_user();

    $this->assert_equals("Arya@gmail.com", $user->email);
    $this->assert_equals("arya", $user->name);
  }

  protected function instance_auth()
  {
    $session = new MockSession();
    $auth =  new Auth($session);

    $db_access = DBAccessCreator::get_db_access();
    $auth->users_model = new MockUsersModel($db_access);
    $auth->activity_log = new MockActivityLogModel();

    $permissions_config = array("test_action" => array("superadmin", "admin", "medic"),
      "forbidden_action" => array("superadmin"));
    $permissions = new Permissions($permissions_config);
    $auth->permissions = $permissions;

    return $auth;
  }



}
