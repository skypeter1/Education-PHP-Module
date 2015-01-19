<?php
class Domain
{
  public $model;
  public $auth;
  public $main_db;
  public $activity_log;

  public $models = array('model' => array('modelclass' => 'Model'));

  public $foreign_keys = array();

  public $foreign_fields_for_global_search = array();

  public $concatenated_search_fields = array();

  public $id_fields = array('Identificador' => 'id');

  public function __construct(CI_DB $main_db, Auth $auth)
  {
    $this->auth = $auth;
    $this->main_db = $main_db;
    $this->activity_log = new ActivityLogModel($this->main_db, $this->auth);

    foreach($this->models as $model_name => $model_data)
    {
      $this->instance_model($model_name, $model_data);
    }
  }

  public function create(Entity $entity)
  {
    $this->auth->check($this->model->entity.'::'.__FUNCTION__);
    $entity = $this->foreign_keys_to_id($entity);	
    $result = $this->model->create($entity);

    $id_string = $this->id_string($result->id);
    $this->activity_log->register_action($this->model->entity.'::'.__FUNCTION__, $id_string);
    return $result;
  }

  public function get($entity_id)
  {
    $this->auth->check($this->model->entity.'::'.__FUNCTION__);

    $entity = $this->model->get($entity_id);

    foreach($this->foreign_keys as $foreign_key => $foreign_data)
      $entity->$foreign_key = $this->get_foreign_entity($foreign_data, $entity->$foreign_key);

    return $entity;
  }

  protected function get_foreign_entity($foreign_data, $foreign_id)
  {
    if(is_null($foreign_id)) return;

    try
    {
      $this->auth->check($foreign_data['entity_class'].'::get');
      return $this->$foreign_data['model']->get($foreign_id);
    }
    catch(Error $error)
    {
      if(in_array(Auth::ERROR_PERMISSION_DENIED, $error->errors))
        return $foreign_id;

      throw $error;
    }
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

    $entity = $this->foreign_keys_to_id($entity);	
    $result = $this->model->update($entity);

    $this->activity_log->register_action($this->model->entity.'::'.__FUNCTION__, $id_string);
    return $result;
  }

  public function search(Search $search)
  {
    $this->auth->check($this->model->entity.'::'.__FUNCTION__);


    $search->joins = $this->populate_joins_array();
    $search->concatenations = $this->get_concatenations();

    $result = $this->model->search($search, $this->foreign_fields_for_global_search);

    return $this->search_result_to_entities($result);
  }

  public function count_results(Search $search)
  {
    $this->auth->check($this->model->entity.'::'.__FUNCTION__);

    $search->joins = $this->populate_joins_array();
    $search->concatenations = $this->get_concatenations();

    return $this->model->count_results($search, $this->foreign_fields_for_global_search);
  }

  public function json_to_entity($data)
  {
    $entity = new $this->model->entity();

    foreach ($data as $property => $value)
      $entity->$property = $this->value_to_property($property, $value);

    return $entity;
  }

  protected function value_to_property($property, $value)
  {
    $is_a_foreign_key = key_exists($property, $this->foreign_keys);
    $is_stdclass = ($value instanceof StdClass);

    if($is_a_foreign_key AND $is_stdclass)
      return JsonToEntity::create($value, $this->foreign_keys[$property]['entity_class']);

    return $value;
  }

  protected function foreign_keys_to_id($entity)
  {
    foreach($this->foreign_keys as $foreign_key => $foreign_data)
      if($entity->$foreign_key instanceof $foreign_data['entity_class'])
        $entity->$foreign_key = $entity->$foreign_key->id;

    return $entity;
  }

  protected function instance_model($model_name, $model_data)
  {
    $model_db = $this->main_db;

    $this->$model_name = new $model_data['modelclass']($model_db);
  }

  protected function populate_joins_array()
  {
    $result = array();

    foreach($this->foreign_keys as $property => $foreign_data)
      $result[] = $this->prepare_join($property, $foreign_data);

    return $result;
  }

  protected function prepare_join($property, $foreign_data)
  {
    $model = $foreign_data['model'];
    $table = $this->$model->table;


    $condition = $table.'.id = '.$this->model->table.'.'.$property;

    $fields = $this->generate_fields_for_join($table, $foreign_data['entity_class']);

    return new Join($table, $condition, $fields);
  }

  protected function generate_fields_for_join($table, $entity_class)
  {
    $entity_properties = array_keys(get_class_vars($entity_class));

    $fields = array();
    foreach($entity_properties as $property)
    {
      $fields[] = $table.'.'.$property.' AS `'.$table.'.'.$property.'`';
    }

    return $fields;
  }

  protected function search_result_to_entities($result)
  {
    $entities = array();
    foreach($result->collection as $row)
    {
      $main_entity = $this->row_to_entity($row, $this->model->entity);
      $entities[$main_entity->id] = $this->process_foreign_objects($main_entity, $row);
    }

    $result->collection = $entities;
    return $result;
  }

  protected function process_foreign_objects($entity, $row)
  {
    foreach($this->foreign_keys as $foreign_property => $foreign_data)
    {
      $foreign_row = $this->extract_foreign_data_from_row($row, $foreign_data);
      if($this->check_entity_permissions($foreign_data['entity_class']))
      {
        $foreign_entity = $this->row_to_entity($foreign_row, $foreign_data['entity_class']);
        $entity->$foreign_property = $foreign_entity;
      }
    }

    return $entity;
  }

  protected function extract_foreign_data_from_row($row, $foreign_data)
  {
    $prefix = $this->$foreign_data['model']->table;

    $result_row = array();
    foreach($row as $key => $value)
    {
      $key_splited = explode('.', $key);
      if(sizeof($key_splited) > 1 AND $key_splited[0] == $prefix)
        $result_row[$key_splited[1]] = $value;
    }

    return $result_row;
  }

  protected function check_entity_permissions($entity)
  {
    try
    {
      $this->auth->check($entity.'::get');
      return true;
    }
    catch(Error $error)
    {
      if(in_array(Auth::ERROR_PERMISSION_DENIED, $error->errors))
        return false;

      throw $error;
    }
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

  protected function get_concatenations()
  {
    $result = array();
    foreach($this->concatenated_search_fields as $concatenation)
    {
      $result[] = new Concatenation($concatenation);
    }

    return $result;
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
