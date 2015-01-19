<?php
class TestCaseActivityLogModel extends TestCase
{	
  public function test_human_readable_format_for_login_and_logout()
  {
    $model = $this->prepare_model();
    $database_access = $this->get_database_access('educacion_development');

    $model->register_action('Login');

    $log_entries_in_db = $database_access->get('activity_log')->result_array();
    $this->assert_equals('Inicio de sesión', $log_entries_in_db[2]['action']);

    $model->register_action('Logout');

    $log_entries_in_db = $database_access->get('activity_log')->result_array();
    $this->assert_equals('Cierre de sesión', $log_entries_in_db[3]['action']);

    $this->empty_tables();
  }

  public function test_get_unserializes_user()
  {
    $model = $this->prepare_model();

    $log_entry = $model->get(2);
    $this->assert_true($log_entry->user instanceof User);
    $this->assert_equals('john@gmail.com', $log_entry->user->email);

    $this->empty_tables();
  }

  public function test_search_returns_log_entry_objects_unserialized()
  {
    $model = $this->prepare_model();

    $log_entries = $model->search(new Search());

    $this->assert_equals(2, sizeof($log_entries->collection));
    $this->assert_true($log_entries->collection[1] instanceof LogEntry);
    $this->assert_true($log_entries->collection[2] instanceof LogEntry);

    $this->assert_true($log_entries->collection[2]->user instanceof User);

    $this->empty_tables();
  }

  public function test_global_search()
  {
    $model = $this->prepare_model();

    $filter = new Filter('GLOBAL', 'superad', 'LIKE');
    $search = new Search($filter);

    $log_entries = $model->search($search);

    $this->assert_equals(1, sizeof($log_entries->collection));
    $this->assert_true($log_entries->collection[1] instanceof LogEntry);

    $this->empty_tables();
  }

  public function test_search_order()
  {
    $model = $this->prepare_model();

    $order = new Order('fecha', 'desc');
    $search = new Search(array(), null, $order);

    $log_entries = $model->search($search);
    $this->assert_equals(2, sizeof($log_entries->collection));

    $expected = array(2, 1);
    $this->assert_equals($expected, array_keys($log_entries->collection));

    $this->empty_tables();
  }

  public function test_search_filter()
  {
    $model = $this->prepare_model();

    $filter = new Filter('fecha', '1346194914');
    $search = new Search($filter);

    $log_entries = $model->search($search);
    $this->assert_equals(1, sizeof($log_entries->collection));
    $this->assert_equals('1346194914', $log_entries->collection[2]->fecha);

    $filter = new Filter('GLOBAL', 'superad', 'LIKE');
    $search = new Search($filter);

    $log_entries = $model->search($search);
    $this->assert_equals(1, sizeof($log_entries->collection));

    $this->assert_true($log_entries->collection[1]->user instanceof User);

    $this->empty_tables();
  }

  public function test_search_with_pagination()
  {
    $model = $this->prepare_model();

    $paginator = new Paginator(1);
    $search = new Search(array(), $paginator);

    $log_entries = $model->search($search);
    $this->assert_equals(1, sizeof($log_entries->collection));

    $this->empty_tables();
  }

  public function test_count_results()
  {
    $model = $this->prepare_model();

    $paginator = new Paginator(1);
    $search = new Search(array(), $paginator);

    $number_of_log_entries = $model->count_results($search);
    $this->assert_equals(2, $number_of_log_entries);

    $this->empty_tables();
  }

  protected function get_database_access($dbname = 'educacion_development')
  {
    $database_access_creator = new DBAccessCreator();
    return $database_access_creator->get_db_access($dbname);
  }

  protected function prepare_model($superadmin = false)
  {
    $database_access = DB();
    $fixture_executor = new FixtureExecutioner($database_access);

    $fixture_path = dirname(__FILE__)."/../../Fixtures/fixtures/main/10_create_database.sql";
    $fixture_executor->execute_fixture($fixture_path, 'educacion_development');

    $fixture_path = dirname(__FILE__)."/../../Fixtures/fixtures/main/200_activity_log_table.sql";
    $fixture_executor->execute_fixture($fixture_path, 'educacion_development');

    $fixture_path = dirname(__FILE__)."/../../Fixtures/fixtures/testing/240_testing_activity_log.sql";
    $fixture_executor->execute_fixture($fixture_path, 'educacion_development');

    $database_access_creator = new DBAccessCreator();
    $db = $database_access_creator->get_db_access('educacion_development');

    $auth = new MockAuth(true, $superadmin);
    return new ActivityLogModel($db, $auth);
  }

  protected function empty_tables()
  {
    $database_access = DB();

    try
    {
      $database_access->truncate('educacion_development.activity_log');
    }
    catch(Exception $exception)
    {
      if ($exception->getCode() != 100)
        throw $exception;
    }
  }	
}
