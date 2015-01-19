<?php
class ReferenceModel extends CI_Model
{
	const PRIMARY_KEY 					= 'id';
	const VERSION_FIELD					= 'version';
	
	public $table						= 'entities';
	public $entity						= 'Entity';

	public $error_duplicated_entity		= 'error_duplicated_entity';
	public $error_required_id			= 'error_required_id';
	public $error_required_version		= 'error_required_version';
	public $error_entity_not_exist		= 'error_entity_not_exist';
	public $concurrency_error			= 'concurrency_error';
	
	public $search_fields = array();

	public $db;
	
	public function __construct(CI_DB $db_access)
	{
		$this->set_db_access($db_access);
	}
	
	public function set_db_access(CI_DB $db_access)
	{
		$this->db = $db_access;
	}
	
	public function get_db_access()
	{
		return $this->db;
	}
	
	public function create(Entity $entity)
	{
		$errors = $this->validate($entity);

		if(sizeof($errors) > 0)
			throw new Error($errors);
		
		$entity->version = $this->get_new_version();
		$data = $this->entity_to_row($entity);
		try
		{
			$this->db->insert($this->table, $data);
		}
		catch(Exception $exception)
		{
			$this->parse_db_exception($exception);			
		}
		$entity->id = $this->db->insert_id();
			
		return $entity;
	}
	
	public function delete(Entity $entity)
	{
		$this->check_id_and_version($entity);

		return $this->execute_with_optimistic_lock('delete', $entity);		
	}
	
	public function get($entity_id = null)
	{
		if(is_null($entity_id))
			throw new Error(array($this->error_required_id));
		
		$this->db->where(self::PRIMARY_KEY, $entity_id);
		$results = $this->db->get($this->table)->result_array();

		if(!isset($results[0]))
			throw new Error(array($this->error_entity_not_exist));
		
		return $this->row_to_entity($results[0]);
	}
	
	public function update(Entity $entity)
	{
		$errors = $this->validate($entity);
		$this->check_id_and_version($entity, $errors);
		
		$data = $this->entity_to_row($entity);
		$data[self::VERSION_FIELD] = $this->get_new_version();
		
		$this->execute_with_optimistic_lock('update', $entity, $data);
		
		return $this->row_to_entity($data);
	}
	
	public function search(Search $search = null)
	{
		if(!is_null($search))
			$this->apply_search($search);

		$db_result = $this->db->get($this->table);

		return $this->db_result_to_collection($db_result);
	}
	
	protected function db_result_to_collection(CI_DB_result $db_result)
	{
		$result_array = array();
		$entities_list = new EntityCollection();

		if ($db_result->result_id !== FALSE AND $db_result->num_rows() > 0)
		{
			$db_result->_data_seek(0);
			while ($row = $db_result->_fetch_assoc())
				$result_array[$row[self::PRIMARY_KEY]] = $row;
		}
		
		$entities_list->collection = $result_array;
		
		return $entities_list;
	}
	
	public function count_results(Search $search = null, $foreign_search_fields = array())
	{
		if($search)
		{
			$search->paginator = null;
			$this->apply_search($search);
		}
		
		return $this->db->get($this->table)->num_rows();
	}
	
	protected function execute_with_optimistic_lock($operation, $entity,
													$data = null)
	{
		$this->db->where(self::PRIMARY_KEY, $entity->id);
		$this->db->where(self::VERSION_FIELD, $entity->version);
		try
		{
			$result = $this->db->$operation($this->table, $data);
		}
		catch(Exception $exception)
		{
			$this->parse_db_exception($exception);
		}
		
		if(!$this->db->affected_rows())
			throw new Error(array($this->concurrency_error));
			
		return $result;
	}
	
	protected function check_id_and_version($entity, $errors = array())
	{
		if(is_null($entity->id) OR ($entity->id == ''))
			$errors[] = $this->error_required_id;
				
		if(is_null($entity->version) OR ($entity->version == ''))
			$errors[] = $this->error_required_version;

		if(sizeof($errors) > 0)
			throw new Error($errors);
	}

	protected function apply_search(Search $search)
	{
		foreach($search->filters as $filter)
		{
			if($filter->property == 'GLOBAL')
			{
				$this->global_filter($filter, $search->concatenations);
				continue;
			}

			$this->filter($filter);
		}

		$this->apply_paginator($search);
		$this->apply_order($search);
	}
	
	protected function apply_paginator(Search $search)
	{		
		if($search->paginator)
			$this->db->limit($search->paginator->page_size, 0);
	}
	
	protected function apply_order(Search $search)
	{
		if(!$search->order) return;

		$this->db->order_by($search->order->field, $search->order->direction);
	}

	protected function filter(Filter $filter)
	{
		switch ($filter->method)
		{
			case "LIKE": 
				$this->db->like($filter->property, $filter->pattern);
				break;  
			case "EQUALS":
				$this->db->where($filter->property, $filter->pattern);
				break;
			case "OR_EQUALS":
				$this->db->or_where($filter->property, $filter->pattern);
				break;
			case "OR_LIKE":
				$this->db->or_like($filter->property, $filter->pattern);
				break;
			case "HAVING":
				$this->db->having($filter->property, $filter->pattern);
				break;
			case "GREATER_THAN":
				$this->db->where("$filter->property >", $filter->pattern);
				break;
			case "LESSER_THAN":
				$this->db->where("$filter->property <", $filter->pattern);
		}
	}

	protected function global_filter(Filter $filter)
	{
		$where_elements = array();
		foreach($this->search_fields as $property)		
			$where_elements[] = $this->generate_global_condition($filter, $property);
		
		$where = '( '.implode(' OR ', $where_elements).' )';
		$this->db->where($where);
	}
	
	protected function generate_global_condition($filter, $property)
	{
		$property = '`'.$this->table.'`.`'.$property.'`';

		$comparison = ' = ';
		$pattern = $this->db->escape($filter->pattern);
		if($filter->method == 'LIKE')
		{
			$comparison = ' LIKE ';
			$pattern = $this->db->escape('%'.$filter->pattern.'%');
		}
		
		return $property.$comparison.$pattern;
	}

	protected function entity_to_row(Entity $entity)
	{	
		return get_object_vars($entity);
	}

	protected function row_to_entity($row)
	{
		$entity = new $this->entity();
		foreach($row as $key => $value)
		{
			$entity->$key = $value;
		}
		return $entity;
	}
	
	protected function validate(Entity $entity)
	{
		$errors = array();
		return $errors;
	}
	
	protected function parse_db_exception(Exception $exception)
	{
		$matches = array();
		if(preg_match("/Duplicate entry '(.*)' for key '(.*?)'/i", $exception->getMessage(), $matches))
		{
			throw new Error(array($this->error_duplicated_entity));
		}
		throw $exception;
	}
	
	protected function get_new_version()
	{
		return microtime(true);
	}
}
