<?php
class MockModel extends Model
{
	public $trace = array();
	
	public function __construct($db = null)
	{
		if($db)
			$this->db = $db->database;
	}
	
	public function create($entity)
	{
		$this->trace[] = "create $entity->name";
		
		$entity->id = 1;
		return $entity;
	}
	
	public function get($entity_id)
	{
		$this->trace[] = "get $entity_id";

		$entity = new TestingEntity();
		$entity->id = $entity_id;
		$entity->name = 'Mi clínica';
		
		if($entity_id == 2)
			$entity->name = null;
		
		return $entity;
	}
	
	public function delete($entity)
	{
		$this->trace[] = "delete $entity->name";
	}
	
	public function update($entity)
	{
		$this->trace[] = "update $entity->name";
		
		$result_entity = new TestingEntity();
		$result_entity->id = $entity->id;
		$result_entity->name = 'Mi clínica';
		
		return $entity;
	}
	
	public function search(Search $search)
	{
		$this->trace[] = "search";
		return new EntityCollection();
	}
	
	public function count_results($search)
	{
		$this->trace[] = "count_results";
	}
}