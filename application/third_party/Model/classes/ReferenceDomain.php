<?php
class ReferenceDomain
{
	public $model;
	public $auth;
	public $activity_log;
	
	public $modelclass = 'Model';
	public $use_consultorio_db = false;
	
	public $id_fields = array('Identificador' => 'id');
	
	public function __construct(CI_DB $main_db, Auth $auth)
	{
		$this->auth = $auth;
		$this->activity_log = new ActivityLogModel($main_db, $this->auth);

		$db = $main_db;
		if($this->use_consultorio_db)
			$db = $this->get_consultorio_database($main_db);
		
		$this->model = new $this->modelclass($db);
	}
	
	public function create(Entity $entity)
	{
		$this->auth->check($this->model->entity.'::'.__FUNCTION__);
		$result = $this->model->create($entity);
		
		$id_string = $this->id_string($result->id);
		$this->activity_log->register_action($this->model->entity.'::'.__FUNCTION__, $id_string);
		return $result;
	}
	
	public function get($entity_id)
	{
		$this->auth->check($this->model->entity.'::'.__FUNCTION__);
		
		$entity = $this->model->get($entity_id);
		return $entity;
	}
	
	public function delete(Entity $entity)
	{
		$this->auth->check($this->model->entity.'::'.__FUNCTION__);
		
		$id_string = $this->id_string($entity->id);
		$result = $this->model->delete($entity);

		$this->activity_log->register_action($this->model->entity.'::'.__FUNCTION__, $id_string);
		return $result;
	}
	
	public function update(Entity $entity)
	{
		$this->auth->check($this->model->entity.'::'.__FUNCTION__);
		$id_string = $this->id_string($entity->id);
				
		$result = $this->model->update($entity);
		
		$this->activity_log->register_action($this->model->entity.'::'.__FUNCTION__, $id_string);
		return $result;
	}
	
	public function search(Search $search)
	{
		$this->auth->check($this->model->entity.'::'.__FUNCTION__);
		$result = $this->model->search($search);

		return $this->search_result_to_entities($result);
	}
	
	public function count_results(Search $search)
	{
		$this->auth->check($this->model->entity.'::'.__FUNCTION__);
		
		return $this->model->count_results($search);
	}
	
	public function json_to_entity($data)
	{
		$entity = new $this->model->entity();

		foreach ($data as $property => $value)
			$entity->$property = $value;
		
		return $entity;
	}
	
	protected function get_consultorio_database($main_db)
	{
		$database_repository = new DatabaseRepository($main_db);
		
		$current_user_consultorio_id = $this->get_current_user_consultorio_id();
		$consultorio_db = $database_repository->get($current_user_consultorio_id);
		
		return $consultorio_db;
	}
	
	protected function get_current_user_consultorio_id()
	{
		$current_user = $this->auth->get_current_user();
		if($current_user instanceof SuperAdmin) return;
		
		return $current_user->consultorio;
	}
	
	protected function search_result_to_entities($result)
	{
		$entities = array();
		foreach($result->collection as $row)
			$entities[$row['id']] = $this->row_to_entity($row, $this->model->entity);
		
		$result->collection = $entities;
		return $result;
	}
	
	protected function row_to_entity($row, $entity)
	{
		$entity = new $entity();
		$entity_properties = array_keys(get_object_vars($entity));
		foreach($entity_properties as $property)
		{
			if(array_key_exists($property, $row))
				$entity->$property = $row[$property];
		}
		
		return $entity;
	}
	
	protected function id_string($entity_id)
	{
		$entity = $this->get($entity_id);

		$strings = array();
		foreach($this->id_fields as $key => $property)
			$strings[] = $key.': '.$entity->$property;
		
		return implode(', ', $strings);
	}
}