<?php
class TestCaseUsersDomain extends TestCase
{
  public function test_search_return_objects()
  {
    $this->before_test();

    $this->add_user_to_database("pepe", 'password', true);
    $this->add_user_to_database("juan", 'password', false);
    $this->add_user_to_database("jaime", 'password', false);
    $this->add_user_to_database("luis", 'password', false);
    $this->add_user_to_database("alberto", 'password', false);

    $search = new Search();
    $users = $this->users_domain->search($search);

    $this->assert_equals('check User::search', $this->auth->trace[0]);
    $this->assert_true($users->collection[1] instanceof User);
    $this->assert_true($users->collection[2] instanceof User);
    $this->assert_true($users->collection[3] instanceof User);
    $this->assert_true($users->collection[4] instanceof User);
    $this->assert_true($users->collection[5] instanceof User);

    $this->after_test();
  }

  public function test_user_cant_delete_himself()
  {
    $this->before_test();

    $myself = $this->auth->get_current_user();

    $exception_thrown = false;
    try
    {
      $this->users_domain->delete($myself);
    }
    catch(Exception $exception)
    {
      $exception_thrown = true;
      $this->assert_equals('error_cant_delete_your_self', $exception->errors[0]);
    }

    $this->assert_true($exception_thrown);

    $this->after_test();
  }

  public function test_block()
  {
    $superadmin_environment = true;
    $this->before_test($superadmin_environment);

    $this->add_user_to_database("pepe", 'password', true);

    $pepe = new User();
    $pepe->id = 1;
    $pepe->version = 1;
    $pepe->blocked = true;

    $this->users_domain->block($pepe);

    $users_in_db = $this->get_users_in_db();
    $this->assert_equals("1",$users_in_db[0]['blocked']);
    $this->assert_equals('check User::block', $this->auth->trace[0]);
    $this->assert_equals('register User::block on Identificador: 1, Email: pepe', $this->users_domain->activity_log->trace[0]);

    $pepe->blocked = false;
    $pepe->version = $users_in_db[0]['version'];

    $this->users_domain->block($pepe);

    $users_in_db = $this->get_users_in_db();
    $this->assert_equals("0",$users_in_db[0]['blocked']);

    $this->assert_equals('check User::block', $this->auth->trace[0]);

    $this->after_test();
  }

  public function test_you_cant_block_yourself()
  {
    $this->before_test();

    $my_consultorio_id = 1;
    $this->add_user_to_database("john@gmail.com", 'password', true, $my_consultorio_id);

    $john = new User();
    $john->id = 2;
    $john->version = 1;
    $john->blocked = true;

    $exception_thrown = false;
    try
    {
      $this->users_domain->block($john);
    }
    catch(Exception $exception)
    {
      $exception_thrown = true;
      $this->assert_equals('error_cant_block_your_self', $exception->errors[0]);
    }

    $this->assert_true($exception_thrown);

    $this->after_test();
  }

  public function test_you_cant_block_yourself_with_update()
  {
    $this->before_test();

    $my_consultorio_id = 1;
    $this->add_user_to_database("john@gmail.com", 'password', true, $my_consultorio_id);

    $john = new User();
    $john->id = 2;
    $john->version = 1;
    $john->blocked = true;

    $exception_thrown = false;
    try
    {
      $this->users_domain->update($john);
    }
    catch(Exception $exception)
    {
      $exception_thrown = true;
      $this->assert_equals('error_cant_block_your_self', $exception->errors[0]);
    }

    $this->assert_true($exception_thrown);

    $this->after_test();
  }

  public function test_you_can_get_yourself_even_if_not_admin()
  {
    $superadmin_environment = false;
    $admin_environment = false;
    $this->before_test($superadmin_environment, $admin_environment);
    $this->auth->user_is_admin = false;

    $my_consultorio_id = 1;
    $admin = false;
    $this->add_user_to_database("john@gmail.com", 'password', $admin, $my_consultorio_id);

    $my_own_user_id = 1;

    $myself = $this->users_domain->get($my_own_user_id);

    $this->assert_equals("john@gmail.com", $myself->email);

    $this->after_test();
  }

  protected function add_user_to_database($email = 'Arya', $password = 'valar morghulis', $admin = false, $consultorio = 1)
  {
    $database_access = DBAccessCreator::get_db_access('educacion_development');
    $user_data = array('email' => $email,
      'version' => '1',
      'password' => md5($password),
      'name' => 'Nombre',
      'rol' => 'Doctor/a',
      'blocked' => false);

    $database_access->insert('users', $user_data);

    return $database_access->insert_id();
  }

  protected function get_database_access()
  {
    $this->setup_database();
    return DBAccessCreator::get_db_access('educacion_development');
  }

  protected function add_consultorio_to_database($name = 'My Consultorio')
  {
    $db = DBAccessCreator::get_db_access('educacion_development');
    $db->insert('consultorios', array('version' => '1',
      'nombre'=> $name,
      'calle_principal' => 'Calle Principal',
      'numero_calle' => 'Número de calle',
      'calle_secundaria' => 'Calle Secundaria',
      'referencia_direccion' => 'Referencia de dirección',
      "email" => "email@email.com",
      "telefono" => "telefono",
      "blocked" => false));
  }

  protected function setup_database()
  {
    $database_access = DB();
    $fixture_executor = new FixtureExecutioner($database_access);

    $fixture_path = dirname(__FILE__)."/../../Fixtures/fixtures/main/10_create_database.sql";
    $fixture_executor->execute_fixture($fixture_path, 'educacion_development');

    $fixture_path = dirname(__FILE__)."/../../Fixtures/fixtures/main/20_users_table.sql";
    $fixture_executor->execute_fixture($fixture_path, 'educacion_development');

    $fixture_path = dirname(__FILE__)."/../../Fixtures/fixtures/main/200_activity_log_table.sql";
    $fixture_executor->execute_fixture($fixture_path, 'educacion_development');

    $fixture_path = dirname(__FILE__)."/../../Fixtures/fixtures/main/200_activity_log_table.sql";
    $fixture_executor->execute_fixture($fixture_path, 'educacion_development');
  }

  protected function empty_tables()
  {
    $database_access = DB();

    try
    {
      $database_access->truncate('educacion_development.users');
      $database_access->truncate('educacion_development.activity_log');

      $database_access->truncate('consultorio_1.activity_log');
    }
    catch(Exception $exception)
    {
      if ($exception->getCode() != 100)
        throw $exception;
    }
  }	

  protected function get_users_in_db()
  {
    $database_acces = DBAccessCreator::get_db_access('educacion_development');
    return $database_acces->get('users')->result_array();
  }

  protected function before_test($superadmin = false, $admin = true)
  {
    $this->empty_tables();
    $this->setup_database();
    $database_access = $this->get_database_access();

    $this->auth = new MockAuth($admin);

    $this->users_domain = new UsersDomain($database_access, $this->auth);
    $this->users_domain->activity_log = new MockActivityLogModel();
  }

  protected function after_test()
  {
    $this->empty_tables();
  }
}
