<?php
class TestCaseReferenceModel extends TestCase
{
	public function test_model_is_instanced_with_db_access()
	{
		$this->empty_tables();
		$database_access = DB();
		$reference_model = new ReferenceModel($database_access);

		$this->assert_true($reference_model instanceof ReferenceModel);
	}
	
	public function test_model_extends_ci_model()
	{
		$database_access = DB();
		$reference_model = new ReferenceModel($database_access);
		$this->assert_true($reference_model instanceof CI_Model);
	}
	
	public function test_create()
	{
		$database_access = $this->get_database_access('educacion_development');
		$reference_model = new ReferenceModel($database_access);

		$entity = new TestingEntity();
		$entity->name = 'Entity 1';

		$response = $reference_model->create($entity);

		$entities_in_db = $database_access->get('entities')->result_array();

		$this->assert_equals("Entity 1", $entities_in_db[0]['name']);
		$this->assert_true($response instanceof TestingEntity);
		$this->assert_equals(1, $response->id);
		$this->assert_false(empty($response->version));

		$this->empty_tables();
	}

	public function test_get()
	{
		$database_access = $this->get_database_access('educacion_development');
		$reference_model = new ReferenceModel($database_access);

		$this->add_to_database('Entity 1');

		$entity_id = 1;
		$entity = $reference_model->get($entity_id);
		$this->assert_true($entity instanceof Entity);
		$this->assert_equals('Entity 1', $entity->name);
		$this->assert_equals(1, $entity->id);

		$this->empty_tables();
	}

	public function test_delete()
	{
		$database_access = $this->get_database_access('educacion_development');
		$reference_model = new ReferenceModel($database_access);

		$this->add_to_database();

		$entities_in_db = $database_access->get('entities')->result_array();
		$this->assert_true(sizeof($entities_in_db) == 1);

		$entity = new Entity();
		$entity->id = 1;
		$entity->version = 1;
		$reference_model->delete($entity);

		$entities_in_db = $database_access->get('entities')->result_array();
		$this->assert_true(sizeof($entities_in_db) == 0);

		$this->empty_tables();
	}

	public function test_update()
	{
		$database_access = $this->get_database_access('educacion_development');
		$reference_model = new TestingReferenceModel($database_access);

		$this->add_to_database();

		$entity = new Entity();
		$entity->id = 1;
		$entity->version = 1;
		$entity->name = 'New name';
		$result = $reference_model->update($entity);

		$this->assert_true($result instanceof Entity);

		$entities_in_db = $database_access->get('entities')->result_array();
		$this->assert_equals('New name', $entities_in_db[0]['name']);
		$this->assert_false($entities_in_db[0]['version'] == $entity->version);
		
		$this->assert_equals('New name', $result->name);
		$this->assert_equals($entities_in_db[0]['version'], "$result->version");

		$this->empty_tables();
	}
	
	public function test_search_result_has_primary_key_as_index()
	{
		$database_access = $this->get_database_access('educacion_development');
		$reference_model = new TestingReferenceModel($database_access);
		
		$this->add_to_database('Entity 1', 11);
		$this->add_to_database('Entity 2', 34);
		$this->add_to_database('Entity 3', 1323);
		
		$result = $reference_model->search();
		
		$this->assert_equals(11, $result->collection[11]['id']);
		$this->assert_equals('Entity 1', $result->collection[11]['name']);
		$this->assert_equals('Entity 2', $result->collection[34]['name']);
		$this->assert_equals('Entity 3', $result->collection[1323]['name']);
		
		$this->empty_tables();
	}
	
	public function test_search_no_filter()
	{
		$database_access = $this->get_database_access('educacion_development');
		$reference_model = new ReferenceModel($database_access);

		$this->add_to_database('Entity 1');
		$this->add_to_database('Entity 2');

		$result = $reference_model->search();
		$this->assert_true($result instanceof EntityCollection);
		$this->assert_equals(2, sizeof($result->collection));

		$this->empty_tables();
	}

	public function test_search_filtering_by_id()
	{
		$database_access = $this->get_database_access('educacion_development');
		$reference_model = new TestingReferenceModel($database_access);

		$this->add_to_database('Entity 1');
		$this->add_to_database('Entity 2');

		$filter = new Filter('id', 1);
		$search = new Search(array($filter));

		$result = $reference_model->search($search);
		$this->assert_equals(1, sizeof($result->collection));
		$this->assert_equals(1, $result->collection[1]['id']);

		$this->empty_tables();
	}

	public function test_search_filtering_by_name()
	{
		$database_access = $this->get_database_access('educacion_development');
		$reference_model = new TestingReferenceModel($database_access);

		$this->add_to_database('Entity 1');
		$this->add_to_database('Entity 2');

		$filter = new Filter('name', 'Entity 2');
		$search = new Search(array($filter));

		$result = $reference_model->search($search);
		$this->assert_equals(1, sizeof($result->collection));
		$this->assert_equals('Entity 2', $result->collection[2]['name']);

		$this->empty_tables();
	}

	public function test_search_method_like()
	{
		$database_access = $this->get_database_access('educacion_development');
		$reference_model = new TestingReferenceModel($database_access);

		$this->add_to_database('Entity 1');
		$this->add_to_database('Entity 2');

		$filter = new Filter('name', '2', 'LIKE');
		$search = new Search(array($filter));

		$result = $reference_model->search($search);
		$this->assert_equals(1, sizeof($result->collection));
		$this->assert_equals('Entity 2', $result->collection[2]['name']);

		$this->empty_tables();
	}
	
	public function test_search_method_greater_than()
	{
		$database_access = $this->get_database_access('educacion_development');
		$reference_model = new TestingReferenceModel($database_access);

		$this->add_to_database('23');
		$this->add_to_database('69');

		$filter = new Filter('name', '23', 'GREATER_THAN');
		$search = new Search(array($filter));

		$result = $reference_model->search($search);

		$this->assert_equals(1, sizeof($result->collection));
		$this->assert_equals('69', $result->collection[2]['name']);
		
		$filter = new Filter('name', '80', 'GREATER_THAN');
		$search = new Search(array($filter));

		$result = $reference_model->search($search);
		$this->assert_equals(0, sizeof($result->collection));

		$this->empty_tables();
	}
	
	function test_search_method_lesser_than()
	{
		$database_access = $this->get_database_access('educacion_development');
		$reference_model = new TestingReferenceModel($database_access);

		$this->add_to_database('23');
		$this->add_to_database('69');

		$filter = new Filter('name', '69', 'LESSER_THAN');
		$search = new Search(array($filter));

		$result = $reference_model->search($search);
		$this->assert_equals(1, sizeof($result->collection));
		$this->assert_equals('23', $result->collection[1]['name']);
		
		$filter = new Filter('name', '15', 'LESSER_THAN');
		$search = new Search(array($filter));

		$result = $reference_model->search($search);
		$this->assert_equals(0, sizeof($result->collection));

		$this->empty_tables();
	}

	public function test_search_with_pagination()
	{
		$database_access = $this->get_database_access('educacion_development');
		$reference_model = new TestingReferenceModel($database_access);

		$this->add_to_database('Entity 1');
		$this->add_to_database('Entity 2');

		$filter = new Filter('name', 'nti', 'LIKE');
		$search = new Search(array($filter));

		$result = $reference_model->search($search);
		$this->assert_equals(2, sizeof($result->collection));

		$paginator = new Paginator(1);
		$search = new Search(array($filter), $paginator);

		$result = $reference_model->search($search);
		$this->assert_equals(1, sizeof($result->collection));
		$this->assert_equals('Entity 1', $result->collection[1]['name']);

		$this->empty_tables();
	}

	public function test_search_with_order()
	{
		$database_access = $this->get_database_access('educacion_development');
		$reference_model = new TestingReferenceModel($database_access);

		$this->add_to_database('Entity 2');
		$this->add_to_database('Entity 3');
		$this->add_to_database('Entity 1');
		$this->add_to_database('Entity 4');

		$order = new Order('name', 'asc');
		$search = new Search(array(), null, $order);

		$result = $reference_model->search($search);
		
		$expected = array(3, 1, 2, 4);
		$this->assert_equals($expected, array_keys($result->collection));

		$order = new Order('name');
		$search = new Search(array(), null, $order);

		$result = $reference_model->search($search);
		
		$expected = array(4, 2, 1, 3);
		$this->assert_equals($expected, array_keys($result->collection));

		$this->empty_tables();
	}

	public function test_search_global()
	{
		$database_access = $this->get_database_access('educacion_development');
		$reference_model = new TestingReferenceModel($database_access);

		$this->add_to_database('Entity 1');
		$this->add_to_database('Entity 2');

		$order = new Order('id', 'asc');

		$filter = new Filter('GLOBAL', 'Entity 1');
		$search = new Search($filter, null, $order);

		$result = $reference_model->search($search);
		$this->assert_equals(1, sizeof($result->collection));
		$this->assert_equals('Entity 1', $result->collection[1]['name']);

		$filter = new Filter('GLOBAL', 'tity', 'LIKE');
		$search = new Search($filter, null, $order);

		$result = $reference_model->search($search);
		$this->assert_equals(2, sizeof($result->collection));
		$this->assert_equals('Entity 1', $result->collection[1]['name']);
		$this->assert_equals('Entity 2', $result->collection[2]['name']);

		$this->empty_tables();
	}

	public function test_search_global_with_filter()
	{
		$database_access = $this->get_database_access('educacion_development');
		$reference_model = new TestingReferenceModel($database_access);

		$this->add_to_database('Entity 1');
		$this->add_to_database('Entity 2');

		$order = new Order('id', 'asc');

		$global_filter = new Filter('GLOBAL', 'Entity 1');
		$filter = new Filter('version', 1);
		$search = new Search(array($filter, $global_filter), null, $order);

		$result = $reference_model->search($search);
		$this->assert_equals(1, sizeof($result->collection));
		$this->assert_equals('Entity 1', $result->collection[1]['name']);

		$global_filter = new Filter('GLOBAL', 'tity', 'LIKE');
		$search = new Search(array($filter, $global_filter), null, $order);

		$result = $reference_model->search($search);
		$this->assert_equals(2, sizeof($result->collection));
		$this->assert_equals('Entity 1', $result->collection[1]['name']);
		$this->assert_equals('Entity 2', $result->collection[2]['name']);

		$this->empty_tables();
	}
	
	public function test_error_duplicated_property_on_create()
	{
		$database_access = $this->get_database_access('educacion_development');
		$reference_model = new TestingReferenceModel($database_access);

		$this->add_to_database('Entity 1');

		$exception_thrown = false;
		try
		{
			$entity = new TestingEntity();
			$entity->name = "Entity 1";

			$reference_model->create($entity);
		}
		catch(Error $exception)
		{
			$exception_thrown = true;
			$this->assert_equals($reference_model->error_duplicated_entity, $exception->getMessage());
		}

		$this->assert_true($exception_thrown);

		$this->empty_tables();
	}
	
	public function test_model_throws_any_other_db_exception()
	{
		$database_access = $this->get_database_access('educacion_development');
		$reference_model = new TestingReferenceModel($database_access);

		$exception_thrown = false;
		try
		{
			$entity = new TestingEntity();
			$entity->name = "Entity 1";
			$entity->not_existant_property = "wrong";

			$reference_model->create($entity);
		}
		catch(Exception $exception)
		{
			$exception_thrown = true;
		}

		$this->assert_true($exception_thrown);

		$this->empty_tables();
	}

	public function test_error_duplicated_property_on_update()
	{
		$this->empty_tables();
		$database_access = $this->get_database_access('educacion_development');
		$reference_model = new TestingReferenceModel($database_access);

		$this->add_to_database('Entity 1');
		$this->add_to_database('Entity 2');

		$entity = new Entity();
		$entity->id = 1;
		$entity->version = 1;
		$entity->name = 'Entity 2';

		$exception_thrown = false;
		try
		{
			$reference_model->update($entity);
		}
		catch(Error $exception)
		{
			$exception_thrown = true;
			$this->assert_equals($reference_model->error_duplicated_entity, $exception->getMessage());
		}
		
		$this->assert_true($exception_thrown);

		$this->empty_tables();
	}
	
	public function test_error_no_version_on_update()
	{
		$this->empty_tables();
		$database_access = $this->get_database_access('educacion_development');
		$reference_model = new TestingReferenceModel($database_access);

		$entity_1_id = $this->add_to_database('Entity 1');

		$entity = new TestingEntity();

		$entity->id = $entity_1_id;
		$entity->name = 'Entity 2';

		$exception_thrown = false;
		try
		{
			$reference_model->update($entity);
		}
		catch(Error $exception)
		{
			$exception_thrown = true;
			$this->assert_equals($reference_model->error_required_version, $exception->getMessage());
		}
		
		$this->assert_true($exception_thrown);

		$this->empty_tables();
	}

	public function test_concurrency_error_on_update()
	{
		$this->empty_tables();
		$database_access = $this->get_database_access('educacion_development');
		$reference_model = new TestingReferenceModel($database_access);

		$entity_id = $this->add_to_database('Entity');

		$first_user_entity = $reference_model->get($entity_id);

		$second_user_entity = $reference_model->get($entity_id);
		$second_user_entity->name = 'I am the second user';
		$reference_model->update($second_user_entity);

		$first_user_entity->name = 'I am the first user';
		$exception_thrown = false;
		try
		{
			$reference_model->update($first_user_entity);
		}
		catch(Error $exception)
		{
			$exception_thrown = true;
			$this->assert_equals($reference_model->concurrency_error, $exception->getMessage());
		}
		
		$this->assert_true($exception_thrown);

		$this->empty_tables();
	}
	
	public function test_no_concurrency_error_when_updating_with_same_values()
	{
		$this->empty_tables();
		$database_access = $this->get_database_access('educacion_development');
		$reference_model = new TestingReferenceModel($database_access);

		$entity_id = $this->add_to_database('Entity');

		$entity = $reference_model->get($entity_id);

		$result = $reference_model->update($entity);
		
		$this->assert_true($result instanceof Entity);

		$this->empty_tables();
	}

	public function test_error_required_id_on_update()
	{
		$database_access = $this->get_database_access('educacion_development');
		$reference_model = new ReferenceModel($database_access);

		$entity = new Entity();
		$entity->version = 'A timestamp';

		$exception_thrown = false;
		try
		{
			$reference_model->update($entity);
		}
		catch(Error $exception)
		{
			$exception_thrown = true;
			$this->assert_true(in_array('error_required_id', $exception->errors));
		}
		$this->assert_true($exception_thrown);

		$this->empty_tables();
	}
	
	public function test_error_required_id_on_delete()
	{
		$database_access = $this->get_database_access('educacion_development');
		$reference_model = new ReferenceModel($database_access);

		$entity = new Entity();

		$exception_thrown = false;
		try
		{
			$reference_model->delete($entity);
		}
		catch(Error $exception)
		{
			$exception_thrown = true;
			$this->assert_true(in_array('error_required_id', $exception->errors));
		}
		$this->assert_true($exception_thrown);

		$this->empty_tables();
	}
	
	public function test_error_no_version_on_delete()
	{
		$this->empty_tables();
		$database_access = $this->get_database_access('educacion_development');
		$reference_model = new TestingReferenceModel($database_access);

		$entity_1_id = $this->add_to_database('Entity 1');

		$entity = new TestingEntity();

		$entity->id = $entity_1_id;

		$exception_thrown = false;
		try
		{
			$reference_model->delete($entity);
		}
		catch(Error $exception)
		{
			$exception_thrown = true;
			$this->assert_equals($reference_model->error_required_version, $exception->getMessage());
		}
		
		$this->assert_true($exception_thrown);

		$this->empty_tables();
	}

	public function test_concurrency_error_on_delete()
	{
		$this->empty_tables();
		$database_access = $this->get_database_access('educacion_development');
		$reference_model = new TestingReferenceModel($database_access);

		$entity_id = $this->add_to_database('Entity');

		$first_user_entity = $reference_model->get($entity_id);

		$second_user_entity = $reference_model->get($entity_id);
		$second_user_entity->name = 'I am updating the entity';
		$reference_model->update($second_user_entity);

		$exception_thrown = false;
		try
		{
			$reference_model->delete($first_user_entity);
		}
		catch(Error $exception)
		{
			$exception_thrown = true;
			$this->assert_equals($reference_model->concurrency_error, $exception->getMessage());
		}
		
		$this->assert_true($exception_thrown);

		$this->empty_tables();
	}
	
	public function test_error_entity_not_exist()
	{
		$database_access = $this->get_database_access('educacion_development');
		$reference_model = new ReferenceModel($database_access);

		$entity = new Entity();
		$entity->id = 2;

		$exception_thrown = false;
		try
		{
			$reference_model->get($entity->id);
		}
		catch(Error $exception)
		{
			$exception_thrown = true;
			$this->assert_true(in_array('error_entity_not_exist', $exception->errors));
		}
		$this->assert_true($exception_thrown);

		$this->empty_tables();
	}
	
	protected function get_database_access($dbname = '')
	{
		$this->empty_tables();
		$this->setup_database();
		$database_acces_creator = new DBAccessCreator();
		return $database_acces_creator->get_db_access($dbname);
	}
	
	protected function add_to_database($name = 'Entity 1', $id = null)
	{
		$database_access = DBAccessCreator::get_db_access('educacion_development');
		$data = array('name' => $name, 'id' => $id, 'version' => '1');

		$database_access->insert('entities', $data);

		return $database_access->insert_id();
	}
	
	protected function setup_database()
	{
		$database_access = DB();
		$fixture_executor = new FixtureExecutioner($database_access);
		
		$fixture_path = dirname(__FILE__)."/../../Fixtures/fixtures/main/10_create_database.sql";
		$fixture_executor->execute_fixture($fixture_path, 'educacion_development');
		
		$fixture_path = dirname(__FILE__)."/../../Fixtures/fixtures/testing/90_testing_entities_table.sql";
		$fixture_executor->execute_fixture($fixture_path, 'educacion_development');
	}
	
	protected function empty_tables()
	{
		$database_access = DB();
		
		try
		{
			$database_access->truncate('educacion_development.entities');
		}
		catch(Exception $exception)
		{
			if ($exception->getCode() != 100)
				throw $exception;
		}
	}	
}