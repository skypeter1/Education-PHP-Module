<?php
class TestCaseDomain extends TestCase
{
	public function test_construct_uses_correct_database_for_each_model()
	{
		$domain = $this->prepare_domain();
		
		$domain->models = array('model' => array('modelclass' => 'MockModel'),
								'foreignmodel' => array('modelclass' => 'MockModel'));
		
		$database_access_creator = new DBAccessCreator();
		$db = $database_access_creator->get_db_access('educacion_development');
		$auth = new MockAuth();
		$domain->__construct($db, $auth);
		
		$this->assert_equals('educacion_development', $domain->foreignmodel->db);
		$this->assert_equals('educacion_development', $domain->model->db);
	}
	
	public function test_create()
	{
		$domain = $this->prepare_domain();
		
		$entity = new TestingEntity();
		$entity->name = 'My entity';
		
		$domain->create($entity);

		$this->assert_equals('check Entity::create', $domain->auth->trace[0]);
		$this->assert_equals('create My entity', $domain->model->trace[0]);
		$this->assert_equals('register Entity::create on Identificador: 1', $domain->activity_log->trace[0]);
	}

	public function test_create_with_foreign_keys()
	{
		$domain = $this->prepare_domain();
		$domain->foreign_keys = array('name' => array('entity_class' => 'TestingEntity',
														'model' => 'foreignmodel'));
		
		$nested_entity = new TestingEntity();
		$nested_entity->id = 'Nested entity id';
		
		$entity = new TestingEntity();
		$entity->name = $nested_entity;
		
		$domain->create($entity);

		$this->assert_equals('check Entity::create', $domain->auth->trace[0]);
		$this->assert_equals('create Nested entity id', $domain->model->trace[0]);
	}

	public function test_get()
	{
		$domain = $this->prepare_domain();
		
		$entity_id = 1;
		$domain->get($entity_id);
		
		$this->assert_equals('check Entity::get', $domain->auth->trace[0]);
		$this->assert_equals('get 1', $domain->model->trace[0]);
	}
	
	public function test_get_with_foreign_keys()
	{
		$domain = $this->prepare_domain();
		
		$domain->models = array('model' => array('modelclass' => 'MockModel', 'use_consultorio_db' => false),
								'foreignmodel' => array('modelclass' => 'MockModel', 'use_consultorio_db' => true));
		$domain->foreign_keys = array('name' => array('entity_class' => 'ForeignEntity',
														'model' => 'foreignmodel'));
		
		$database_access_creator = new DBAccessCreator();
		$db = $database_access_creator->get_db_access('educacion_development');
		$auth = new MockAuth();
		$domain->__construct($db, $auth);
		
		$entity_id = 1;
		$entity = $domain->get($entity_id);

		$this->assert_equals('check Entity::get', $domain->auth->trace[0]);
		$this->assert_equals('get 1', $domain->model->trace[0]);
		
		$this->assert_equals('check ForeignEntity::get', $domain->auth->trace[1]);
		$this->assert_equals('get Mi clínica', $domain->foreignmodel->trace[0]);
		
		$this->assert_true($entity->name instanceof TestingEntity);
	}
	
	public function test_get_doesnt_get_empty_foreign_keys()
	{
		$domain = $this->prepare_domain();
		
		$domain->models = array('model' => array('modelclass' => 'MockModel', 'use_consultorio_db' => false),
								'foreignmodel' => array('modelclass' => 'MockModel', 'use_consultorio_db' => true));
		
		$domain->foreign_keys = array('name' => array('entity_class' => 'ForeignEntity',
														'model' => 'foreignmodel'));
		
		$database_access_creator = new DBAccessCreator();
		$db = $database_access_creator->get_db_access('educacion_development');
		$auth = new MockAuth();
		$domain->__construct($db, $auth);
		
		$entity_id = 2;
		$entity = $domain->get($entity_id);
				
		$this->assert_equals(0, sizeof($domain->foreignmodel->trace));
	}
	
	public function test_delete()
	{
		$domain = $this->prepare_domain();
		
		$entity = new TestingEntity();
		$entity->id = 1;
		$entity->name = 'My entity';
		
		$domain->delete($entity);
		
		$this->assert_equals('check Entity::delete', $domain->auth->trace[0]);
		$this->assert_equals('delete My entity', $domain->model->trace[1]);
		$this->assert_equals('register Entity::delete on Identificador: 1', $domain->activity_log->trace[0]);
	}
	
	public function test_update()
	{
		$domain = $this->prepare_domain();
		
		$entity = new TestingEntity();
		$entity->id = 1;
		$entity->name = 'My entity';
		
		$domain->update($entity);
		
		$this->assert_equals('check Entity::update', $domain->auth->trace[0]);
		$this->assert_equals('update My entity', $domain->model->trace[1]);
		$this->assert_equals('register Entity::update on Identificador: 1', $domain->activity_log->trace[0]);
	}
	
	public function test_update_with_foreign_keys()
	{
		$domain = $this->prepare_domain();
		$domain->foreign_keys = array('name' => array('entity_class' => 'TestingEntity',
														'model' => 'foreignmodel'));
			
		$nested_entity = new TestingEntity();
		$nested_entity->id = 'Nested entity';
		
		$entity = new TestingEntity();
		$entity->name = $nested_entity;
		
		$domain->update($entity);

		$this->assert_equals('check Entity::update', $domain->auth->trace[0]);
		$this->assert_equals('update Nested entity', $domain->model->trace[1]);
	}
	
	public function test_search()
	{
		$domain = $this->prepare_domain();
		
		$search = new Search();
		
		$domain->search($search);
		
		$this->assert_equals('check Entity::search', $domain->auth->trace[0]);
		$this->assert_equals('search', $domain->model->trace[0]);
	}
	
	public function test_global_search_with_foreign_fields()
	{
		$domain = $this->prepare_domain();
		
		$domain->models = array('model' => array('modelclass' => 'Model'),
								'foreignmodel' => array('modelclass' => 'UsersModel'));
		
		$domain->foreign_keys = array('user' => array('entity_class' => 'User',
														'model' => 'foreignmodel'));
		
		$domain->foreign_fields_for_global_search = array('users.name');
		
		$database_access_creator = new DBAccessCreator();
		$db = $database_access_creator->get_db_access('educacion_development');
		$auth = new MockAuth();
		$domain->__construct($db, $auth);
		
		$entity_1 = new Entity();
		$entity_1->name = 'Entity 1';
		$entity_1->user = 1;
		$domain->model->create($entity_1);
		
		$entity_2 = new Entity();
		$entity_2->name = 'Entity 2';
		$entity_2->user = 2;
		$domain->model->create($entity_2);

		$search = new Search(new Filter('GLOBAL', 'John'));
		
		$result = $domain->search($search);
		
		$this->assert_equals(1, sizeof($result));
		$this->assert_equals(1, $result->collection[1]->id);
	}

	public function test_count_results()
	{
		$domain = $this->prepare_domain();
		
		$search = new Search();
		
		$domain->count_results($search);
		
		$this->assert_equals('check Entity::count_results', $domain->auth->trace[0]);
		$this->assert_equals('count_results', $domain->model->trace[0]);
	}

	public function test_count_results_with_foreign_fields()
	{
		$domain = $this->prepare_domain();
		
		$domain->models = array('model' => array('modelclass' => 'Model'),
								'foreignmodel' => array('modelclass' => 'UsersModel'));
		
		$domain->foreign_keys = array('user' => array('entity_class' => 'User',
														'model' => 'foreignmodel'));
		
		$domain->foreign_fields_for_global_search = array('users.name');
		
		$database_access_creator = new DBAccessCreator();
		$db = $database_access_creator->get_db_access('educacion_development');
		$auth = new MockAuth();
		$domain->__construct($db, $auth);
		
		$entity_1 = new Entity();
		$entity_1->name = 'Entity 1';
		$entity_1->user = 1;
		$domain->model->create($entity_1);
		
		$entity_2 = new Entity();
		$entity_1->name = 'Entity 2';
		$entity_2->user = 2;
		$domain->model->create($entity_2);

		$search = new Search(new Filter('GLOBAL', 'John'));
		
		$number_of_results = $domain->count_results($search);
		
		$this->assert_equals(1, $number_of_results);
	}
	
	public function test_json_to_entity()
	{
		$domain = $this->prepare_domain();
		$domain->foreign_keys = array('name' => array('entity_class' => 'TestingEntity',
														'model' => 'foreignmodel'));
		
		$nested_data = new stdClass();
		$nested_data->id = 1;
		$nested_data->name = 'Foreign entity';
		
		$data = new stdClass();
		$data->id = 1;
		$data->name = $nested_data;
		
		$entity = $domain->json_to_entity($data);

		$this->assert_true($entity instanceof Entity);
		$this->assert_true($entity->name instanceof TestingEntity);
		$this->assert_equals('Foreign entity', $entity->name->name);
	}
	
	protected function empty_tables()
	{
		$database_access = DB();
		
		try
		{
			$database_access->truncate('educacion_development.users');
			$database_access->truncate('educacion_development.entities');
		}
		catch(Exception $exception)
		{
			if ($exception->getCode() != 100)
				throw $exception;
		}
	}	
	protected function prepare_domain()
	{	
		$this->empty_tables();
		$database_access = DB();
		$fixture_executor = new FixtureExecutioner($database_access);
		
		$fixture_path = dirname(__FILE__)."/../../Fixtures/fixtures/main/10_create_database.sql";
		$fixture_executor->execute_fixture($fixture_path, 'educacion_development');

		$fixture_path = dirname(__FILE__)."/../../Fixtures/fixtures/testing/90_testing_entities_table.sql";
		$fixture_executor->execute_fixture($fixture_path, 'educacion_development');

		$fixture_path = dirname(__FILE__)."/../../Fixtures/fixtures/main/20_users_table.sql";
		$fixture_executor->execute_fixture($fixture_path, 'educacion_development');

		$fixture_path = dirname(__FILE__)."/../../Fixtures/fixtures/testing/20_testing_users.sql";
		$fixture_executor->execute_fixture($fixture_path, 'educacion_development');
		
		$database_access_creator = new DBAccessCreator();
		$db = $database_access_creator->get_db_access('educacion_development');
		
		$auth = new MockAuth();
		$domain = new Domain($db, $auth);
		$domain->models = array('model' => array('modelclass' => 'MockModel', 'use_consultorio_db' => false),
								'foreignmodel' => array('modelclass' => 'MockModel', 'use_consultorio_db' => true));
		$domain->__construct($db, $auth);
		
		$domain->activity_log = new MockActivityLogModel();

		return $domain;
	}
}
