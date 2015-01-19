<?php
class TestCaseRolDomain extends TestCase
{
  public function test_get_pac_user_options(){
    InfosacDBSetup::setup_database();
    UsersSetup::create_pac_users();
    InfosacDBSetup::add_user_to_database(); 
    InfosacDBSetup::add_user_to_database("user1"); 
    InfosacDBSetup::add_user_to_database("user2");

    $db = DBAccessCreator::get_db_access('educacion_development');
    $domain = new RolDomain($db, new MockAuth());

    $pac_users = $domain->get_pac_user_options();

    $this->assert_equals(2, sizeof($pac_users));

    $this->assert_equals("user1", $pac_users[0]["value"]);
    $this->assert_equals("user1", $pac_users[0]["label"]);
    $this->assert_equals("user2", $pac_users[1]["value"]);
    $this->assert_equals("user2", $pac_users[1]["label"]);

  }

  public function test_create()
  {
    UsersSetup::create_pac_users_table();

    $db = DBAccessCreator::get_db_access('educacion_development');
    $domain = new RolDomain($db, new MockAuth());

    $rol = new Rol();
    $rol->username = "username";
    $rol->rol = "test_rol";
    $domain->create($rol);

    $roles = $db->get("pac_users")->result_array();
    $this->assert_equals(1, sizeof($roles));
  }

}

