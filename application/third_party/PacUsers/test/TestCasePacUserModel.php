<?php
class TestCasePacUserModel extends TestCase
{
  public function test_pac_user_model_config()
  {
    InfosacDBSetup::setup_database();

    $db = DBAccessCreator::get_db_access("educacion_development");
    $model = new PacUserModel($db);
    $this->assert_equals("PacUser", $model->entity);
    $this->assert_equals("usuario", $model->table);
  }

  public function test_get_pac_user()
  {
    InfosacDBSetup::setup_database();
    InfosacDBSetup::add_user_to_database();
    UsersSetup::create_pac_users();

    $db = DBAccessCreator::get_db_access("educacion_development");
    $model = new PacUserModel($db);
    $pac_user = $model->get('username');

    $this->assert_equals('Arya@gmail.com',$pac_user->email);
    $this->assert_equals('arya',$pac_user->name);
    $this->assert_equals('2',$pac_user->id);
    $this->assert_equals('Administrador',$pac_user->rol);
  }

  public function test_get_pac_user_with_no_rol_configured_throws_exception(){
    InfosacDBSetup::setup_database();
    InfosacDBSetup::add_user_to_database("not_config");
    UsersSetup::create_pac_users();

    $db = DBAccessCreator::get_db_access("educacion_development");
    $model = new PacUserModel($db);
    $exception_thrown = false;

    try{
      $pac_user = $model->get("not_config");
    }
    catch(Exception $e) {
      $exception_thrown = true;
    }

    $this->assert_true($exception_thrown);

  }

  //public function test_create_pac_users(){
  //UsersSetup::create_pac_users_table();

  //$model = new PacUserModel();
  //$user = new PacUser();
  //$user->username = "username";
  //$user->rol = "rol";
  //$model->create($user);

  //}
}
