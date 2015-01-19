<?php
class Model extends CI_Model
{
  const VERSION_FIELD					= 'version';

  public $primary_key = 'id';

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

    $this->db->where($this->primary_key, $entity_id);
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

  public function search(Search $search = null, $foreign_search_fields = array())
  {
    $this->search_fields = array_merge($this->search_fields, $foreign_search_fields);

    if(!is_null($search))
      $this->apply_search($search);

    $this->db->select($this->selected_properties_for_search());
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
        $result_array[$row[$this->primary_key]] = $row;
    }

    $entities_list->collection = $result_array;

    return $entities_list;
  }

  public function count_results(Search $search = null, $foreign_search_fields = array())
  {
    $this->search_fields = array_merge($this->search_fields, $foreign_search_fields);

    $join_fields = array();
    if($search)
    {
      $search->paginator = null;
      $this->apply_search($search);
    }

    $this->db->select($this->selected_properties_for_search());

    return $this->db->get($this->table)->num_rows();
  }

  protected function execute_with_optimistic_lock($operation, $entity, $data = null)
  {
    $this->db->where($this->primary_key, $entity->id);
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
    $join_fields = array();
    if($search->joins)
    {
      $join_fields = $this->apply_joins($search->joins);
    }

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

    $this->db->select($join_fields);
  }

  protected function apply_paginator(Search $search)
  {		
    if($search->paginator)
      $this->db->limit($search->paginator->page_size, 0);
  }

  protected function apply_order(Search $search)
  {
    if($search->order)
    {
      $field = $this->prefix_db_property($search->order->field);
      $this->db->order_by($field, $search->order->direction);
    }	
  }

  protected function apply_joins($joins)  
  {  
    $join_fields = array();  
    foreach($joins as $join)  
    {  
      $join_fields = array_merge($join_fields, $join->fields);  
      $this->db->join($join->table, $join->condition, $join->type);  
    }  

    return $join_fields;
  }

  protected function filter(Filter $filter)
  {
    $field = $this->prefix_db_property($filter->property);
    switch ($filter->method)
    {
    case "LIKE": 
      $this->db->like($field, $filter->pattern);
      break;
    case "WHERE IN":
      if(sizeof($filter->pattern) == 0)
      {
        $this->db->where("id", 0);
        break;
      }
      $this->db->where_in($field, $filter->pattern);
      break;  
    case "EQUALS":
      $this->db->where($field, $filter->pattern);
      break;
    case "OR_EQUALS":
      $this->db->or_where($field, $filter->pattern);
      break;
    case "OR_LIKE":
      $this->db->or_like($field, $filter->pattern);
      break;
    case "HAVING":
      $this->db->having($field, $filter->pattern);
      break;
    case "NOT EQUALS":
      $this->db->where("$field <>", $filter->pattern);
      break;	
    case "GREATER_THAN":
      $this->db->where("$field >", $filter->pattern);
      break;
    case "LESSER_THAN":
      $this->db->where("$field <", $filter->pattern);
      break;
    case "GREATER_EQUALS":
      $this->db->where("$field >=", $filter->pattern);
      break;
    case "LESSER_EQUALS":
      $this->db->where("$field <=", $filter->pattern);
      break;
    }
  }

  protected function prefix_db_property($property)
  {
    if(sizeof(explode('.', $property)) > 1)
      return $property;

    return $this->table.".$property";
  }

  protected function global_filter(Filter $filter, $concatenations)
  {
    $where_elements = array();
    foreach($this->search_fields as $property)		
      $where_elements[] = $this->generate_global_condition($filter, $property);

    $where_elements = array_merge($where_elements, $this->get_concatenation_queries($filter, $concatenations));
    $where = '( '.implode(' OR ', $where_elements).' )';

    $this->db->where($where);
  }

  protected function generate_global_condition($filter, $property)
  {
    $splited_property = explode('.', $this->prefix_db_property($property));
    $property = '`'.implode('`.`', $splited_property).'`';

    $comparison = ' = ';
    $pattern = $this->db->escape($filter->pattern);
    if($filter->method == 'LIKE')
    {
      $comparison = ' LIKE ';
      $pattern = $this->db->escape('%'.$filter->pattern.'%');
    }

    return $property.$comparison.$pattern;
  }

  protected function get_concatenation_queries(Filter $filter, $concatenations)
  {
    if(!is_array($concatenations) OR sizeof($concatenations) < 1)
      return array();

    $query = array();
    foreach($concatenations as $concatenation)
    {
      $this_concatenation_query = $concatenation->get_concatenation_query();
      $comparison = ' = '.$this->db->escape($filter->pattern);
      if($filter->method == 'LIKE')
        $comparison = ' LIKE '.$this->db->escape('%'.$filter->pattern.'%');

      $query[] = $this_concatenation_query.$comparison;
    }

    return $query;
  }

  protected function selected_properties_for_search()
  {
    $properties = array_keys(get_object_vars(new $this->entity())); 
    $fields = array();
    foreach($properties as $property)
    {
      $fields[] = $this->prefix_db_property($property);
    }
    return $fields;
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

  public function validate(Entity $entity)
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
    return microtime(true)+rand(0, 9999999);
  }
}
