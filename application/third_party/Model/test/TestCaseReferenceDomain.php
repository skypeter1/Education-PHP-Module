<?php
class TestCaseReferenceDomain extends TestCase
{
	public function test_construct_uses_correct_database()
	{
		$reference_domain = $this->prepare_domain();
		
		$database_access_creator = new DBAccessCreator();
		$db = $database_access_creator->get_db_access('educacion_development');
		$auth = new MockAuth();
		
		$reference_domain->use_consultorio_db = false;
		$reference_domain->__construct($db, $auth);
		$this->assert_equals('educacion_development', $reference_domain->model->db->database);
	}
	
	public function test_create()
	{
		$reference_domain = $this->prepare_domain();
		
		$entity = new TestingEntity();
		$entity->name = 'My entity';
		
		$reference_domain->create($entity);

		$this->assert_equals('check Entity::create', $reference_domain->auth->trace[0]);
		$this->assert_equals('create My entity', $reference_domain->model->trace[0]);
		$this->assert_equals('register Entity::create on Identificador: 1', $reference_domain->activity_log->trace[0]);
	}
	
	public function test_get()
	{
		$reference_domain = $this->prepare_domain();
		
		$entity_id = 1;
		$reference_domain->get($entity_id);
		
		$this->assert_equals('check Entity::get', $reference_domain->auth->trace[0]);
		$this->assert_equals('get 1', $reference_domain->model->trace[0]);
	}
	
	public function test_delete()
	{
		$reference_domain = $this->prepare_domain();
		
		$entity = new TestingEntity();
		$entity->id = 1;
		$entity->name = 'My entity';
		
		$reference_domain->delete($entity);
		
		$this->assert_equals('check Entity::delete', $reference_domain->auth->trace[0]);
		$this->assert_equals('delete My entity', $reference_domain->model->trace[1]);
		$this->assert_equals('register Entity::delete on Identificador: 1', $reference_domain->activity_log->trace[0]);
	}
	
	public function test_update()
	{
		$reference_domain = $this->prepare_domain();
		
		$entity = new TestingEntity();
		$entity->id = 1;
		$entity->name = 'My entity';
		
		$reference_domain->update($entity);
		
		$this->assert_equals('check Entity::update', $reference_domain->auth->trace[0]);
		$this->assert_equals('update My entity', $reference_domain->model->trace[1]);
		$this->assert_equals('register Entity::update on Identificador: 1', $reference_domain->activity_log->trace[0]);
	}
	
	public function test_search()
	{
		$reference_domain = $this->prepare_domain();
		
		$search = new Search();
		
		$reference_domain->search($search);
		
		$this->assert_equals('check Entity::search', $reference_domain->auth->trace[0]);
		$this->assert_equals('search', $reference_domain->model->trace[0]);
	}

	public function test_count_results()
	{
		$reference_domain = $this->prepare_domain();
		
		$search = new Search();
		
		$reference_domain->count_results($search);
		
		$this->assert_equals('check Entity::count_results', $reference_domain->auth->trace[0]);
		$this->assert_equals('count_results', $reference_domain->model->trace[0]);
	}
	
	public function test_json_to_entity()
	{
		$reference_domain = $this->prepare_domain();

		$data = new stdClass();
		$data->id = 1;
		$data->name = 'Testing name';
		
		$entity = $reference_domain->json_to_entity($data);

		$this->assert_true($entity instanceof Entity);
		$this->assert_equals('Testing name', $entity->name);
		$this->assert_equals(1, $entity->id);
	}
	
	protected function empty_tables()
	{
		$database_access = DB();
		
		try
		{
			$database_access->truncate('educacion_development.consultorios');
			$database_access->truncate('consultorio_1.entities');
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
		
		$database_access_creator = new DBAccessCreator();
		$db = $database_access_creator->get_db_access('educacion_development');
		
		$auth = new MockAuth();
		$reference_domain = new ReferenceDomain($db, $auth);
		$reference_domain->model = new MockModel();
		$reference_domain->activity_log = new MockActivityLogModel();
		
		return $reference_domain;
	}
}
