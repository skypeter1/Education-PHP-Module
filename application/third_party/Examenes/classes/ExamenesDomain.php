<?php
class ExamenesDomain extends Domain
{
  public $models = array(	'model' => array('modelclass' => 'ExamenesModel'),
    'cursosmodel' => array('modelclass' => 'CursosModel'),
    'usersmodel' => array('modelclass' => 'UsersModel'));

  public $foreign_keys = array('curso' => array('entity_class' => 'Curso','model' => 'cursosmodel'),
    'profesor' => array('entity_class' => 'User','model' => 'usersmodel'));


  public $foreign_fields_for_global_search = array("cursos.identificador", "cursos.nombre");


  public function create(Entity $entity)
  {
    $this->auth->check($this->model->entity.'::'.__FUNCTION__);


    $current_user = $this->auth->get_current_user();

    if($current_user->rol == "profesor")
      $entity->profesor = $current_user->id;


    $entity = $this->foreign_keys_to_id($entity);
    $result = $this->model->create($entity);

    $id_string = $this->id_string($result->id);
    $this->activity_log->register_action($this->model->entity.'::'.__FUNCTION__, $id_string);
    return $result;
  }

  public function update(Entity $entity)
  {
    $this->auth->check($this->model->entity.'::'.__FUNCTION__);

    $current_user = $this->auth->get_current_user();

    if($current_user->rol == "profesor")
      $entity->profesor = $current_user->id;

    $id_string = $this->id_string($entity->id);

    $entity = $this->foreign_keys_to_id($entity);	
    $result = $this->model->update($entity);

    $this->activity_log->register_action($this->model->entity.'::'.__FUNCTION__, $id_string);
    return $result;
  }

  public function search(Search $search)
  {
    $current_user = $this->auth->get_current_user();

    $filter = $this->get_bodega_filter();
    if(sizeof($filter->pattern) != 0)
      $search->filters[] = $filter;

    if($current_user->rol == "profesor")
      $search->filters[] = new Filter("profesor", $current_user->id, "EQUALS");

    return parent::search($search);
  }

  protected function get_bodega_filter(){
    $cursos_ids = $this->get_cursos_ids_with_permission();
    return new Filter("curso", $cursos_ids, "WHERE IN");
  }

  protected function get_cursos_ids_with_permission(){
    $current_user = $this->auth->get_current_user();
    $bodegas = $this->cursosmodel->get_bodegas($current_user->id);
    $bodegas_id = array();
    foreach($bodegas as $bodega){
      $bodegas_id[] = $bodega["id"];
    }

    $bodegas_filter = new Filter("bodega", $bodegas_id, "WHERE IN"); 
    $cursos = $this->cursosmodel->search(new Search($bodegas_filter));

    $cursos_ids = array();
    foreach($cursos->collection as $curso){
      $cursos_ids[] = $curso["id"];
    }

    return $cursos_ids;

  }
}
