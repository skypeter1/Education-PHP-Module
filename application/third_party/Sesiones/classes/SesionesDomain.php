<?php
class SesionesDomain extends Domain
{
    public $models = array(
        'model' => array('modelclass' => 'SesionesModel'),
        'cursosmodel' => array('modelclass' => 'CursosModel'),
        'usersmodel' => array('modelclass' => 'UsersModel')
    );

    public $foreign_keys = array(
        'curso' => array('entity_class' => 'Curso', 'model' => 'cursosmodel'),
        'profesor' => array('entity_class' => 'User', 'model' => 'usersmodel')
    );

    public $foreign_fields_for_global_search = array(
        "cursos.identificador",
        "cursos.nombre",
        "users.name"
    );

    public function get($entity_id)
    {    
  
        $entity = parent::get($entity_id);  
        $current_user = $this->auth->get_current_user();    
    
        if ($current_user->rol != "Administrador")
            unset($entity->incidencias);
 
        $sesiones_model = new SesionesModel($this->main_db, $this->auth);
        $sesion = $sesiones_model->get_total_hours_by_curso_of_sesion($entity_id);
          
        $entity->curso -> total_hours_session = $sesion[0] -> HOURS_TOTAL;   
        $entity->curso -> hours_avail = $sesion[0] -> hours_maxim  - $sesion[0] -> HOURS_TOTAL;   

        $entity->curso -> hora_inicio_original_of_sesion = $entity-> hora_inicio;   
        $entity->curso -> hora_fin_original_of_sesion = $entity-> hora_fin;   
  
        return $entity;    
    } 

    public function create(Entity $entity)
    {   
        $this->auth->check($this->model->entity . '::' . __FUNCTION__);

        $current_user = $this->auth->get_current_user();

        if ($current_user->rol == "profesor") {
            $entity->profesor = $current_user->id;
            $entity->owned_by = $entity->profesor;
        }

        if ($entity->sin_profesor)
            $entity->profesor = null;

        $entity = $this->foreign_keys_to_id($entity);

        if ($current_user->rol == "administrador")
            $entity->owned_by = $entity->profesor;

        $result = $this->model->create($entity);

        $id_string = $this->id_string($result->id);
        $this->activity_log->register_action($this->model->entity . '::' . __FUNCTION__, $id_string);
        return $result;
    }

    public function update(Entity $entity)
    {
        $this->auth->check($this->model->entity . '::' . __FUNCTION__);

        $current_user = $this->auth->get_current_user();

        if ($current_user->rol == "profesor") {
            $entity->profesor = $current_user->id;
            $entity->owned_by = $entity->profesor;
        }

        if ($entity->sin_profesor)
            $entity->profesor = null;

        $id_string = $this->id_string($entity->id);

        $entity = $this->foreign_keys_to_id($entity);

        if ($current_user->rol == "administrador")
            $entity->owned_by = $entity->profesor;

        $result = $this->model->update($entity);

        $this->activity_log->register_action($this->model->entity . '::' . __FUNCTION__, $id_string);

        return $result;
    }

    public function search(Search $search)
    {
        $filter = $this->get_bodega_filter();

        if ( sizeof($filter->pattern) != 0 )
            $search->filters[] = $filter;

        $collection = parent::search($search);
        $current_user = $this->auth->get_current_user();

        if ( $current_user->rol != "administrador" ) {
            foreach ($collection->collection as &$session) {
                unset($session->incidencias);
            }
        }

        $this->add_curso_profesor($collection);

        return $collection;
    }

    protected function get_bodega_filter()
    {
        $cursos_ids = $this->get_cursos_ids_with_permission();
        return new Filter("curso", $cursos_ids, "WHERE IN");
    }

    protected function get_cursos_ids_with_permission()
    {
        $current_user = $this->auth->get_current_user();
        $bodegas = $this->cursosmodel->get_bodegas($current_user->id);
        $bodegas_id = array();
        foreach ($bodegas as $bodega) {
            $bodegas_id[] = $bodega["id"];
        }

        $bodegas_filter = new Filter("bodega", $bodegas_id, "WHERE IN");
        $cursos = $this->cursosmodel->search(new Search($bodegas_filter));

        $cursos_ids = array();
        foreach ($cursos->collection as $curso) {
            $cursos_ids[] = $curso["id"];
        }

        return $cursos_ids;

    }

    protected function add_curso_profesor($collection)
    {
        $profesores_curso_ids = array();
        foreach ($collection->collection as $sesion) {
            $profesores_curso_ids[] = $sesion->curso->profesor;
        }

        if (empty($profesores_curso_ids)) return;

        $profesores_curso_ids = array_unique($profesores_curso_ids);

        $this->main_db->where_in("id", $profesores_curso_ids);
        $this->main_db->select("id, name");
        $result = $this->main_db->get("users")->result_array();

        $profesores = array();

        foreach ($result as $oneResult)
            $profesores[$oneResult["id"]] = $oneResult["name"];

        foreach ($collection->collection as $sesion) {
            if (isset($profesores[$sesion->curso->profesor]))
                $sesion->profesor_curso = $profesores[$sesion->curso->profesor];
        }

    }

    public function get_products_and_hours_by_sesion($sesiones_ids, $bodega_product)
    {

        $splited_product = explode("-", $bodega_product);
        $bodega_id = $splited_product[1];
        $product_id = $splited_product[0];

        $this->model->db->where_in("id", $sesiones_ids);
        $sesiones = $this->model->db->get("sesiones")->result_array();
        $cursos = $this->get_cursos_by_sesiones($sesiones);

        $cursos_model = new CursosModel($this->model->db);
        $current_user = $this->auth->get_current_user();
        $pac_products = $cursos_model->get_pac_products($current_user->id, "5.1.02");

        $pac_product = null;
        foreach ($pac_products->collection as $product) {
            if ($product["id"] == $product_id AND $product["id_bodega"] == $bodega_id)
                $pac_product = $product;
        }

        $result = array();

        foreach ($sesiones as $index => $sesion) {
            $curso = $cursos[$sesion["curso"]];
            $hours_per_sesion = $this->get_hours_by_sesion($sesion);


            if (!isset($result[$sesion["id"]])) {
                $result[$sesion["id"]] = array();
                $result[$sesion["id"]] = $this->get_associated_product($curso, $pac_product, $sesion);
                $result[$sesion["id"]]["horas"] = $hours_per_sesion;
                continue;
            }

            $result[$sesion["id"]]["horas"] += $hours_per_sesion;
        }

        return array_values($result);
    }

    public function get_asistencia_profesor_to_curso($id_profesor)
    {
        $cursos_to_profesor = $this->model->get_cursos_to_profesor($id_profesor);

        $array_of_sesiones = array();

        $profesor = $this->usersmodel->get($id_profesor);

        $cursos_ids = array();
        foreach ($cursos_to_profesor as $curso)
            $cursos_ids[] = $curso["id"];

        $sesiones = $this->model->get_sesiones_of_profesor_in_curso($cursos_ids, $id_profesor);

        foreach ($sesiones as $key => $sesion) {
            $horas = $this->get_hours_by_sesion($sesion);
            $sesiones[$key]["horas"] = number_format($horas, 2);
            $tarifa = "price";
            if ($sesion["tarifa"] != null)
                $tarifa = $sesion["tarifa"];
            if ($sesion["id_profesor"] == $id_profesor) {
                $sesiones[$key]["valor"] = number_format($horas * $profesor->{$tarifa}, 2);
            }
        }

        $array_of_sesiones = array_merge($array_of_sesiones, $sesiones);

        $result = array();
        $result["sesiones"] = $array_of_sesiones;
        $result["total_valor"] = 0;
        $result["total_horas"] = 0;

        foreach ($result["sesiones"] as $sesion) {
            $result["total_valor"] += $sesion["valor"];
            if ($id_profesor == $sesion["id_profesor"])
                $result["total_horas"] += number_format($this->get_hours_by_sesion($sesion), 2);
        }

        return $result;
    }

    public function get_asistencia_alumno($id_alumno)
    {
        $asistencias_array = $this->model->get_asistencia_alumno($id_alumno);
        $cursos_list = $this->model->get_cursos_list();

        $result_array = array();
        foreach ($asistencias_array as $key => $asistencia) {
            $result_array[$key] = $asistencia;
            $result_array[$key]['nombre'] = $cursos_list[$asistencia['curso']]['nombre'];
            $result_array[$key]['identificador'] = $cursos_list[$asistencia['curso']]['identificador'];
        }

        return $result_array;
    }
    public function get_hours_total_by_curso()
    {

        return '  test  ';
    }

    protected function get_hours_by_sesion($sesion)
    {
        $date1 = strtotime("MAY 18, 2000 " . $sesion["hora_inicio"]);
        $date2 = strtotime("MAY 18, 2000 " . $sesion["hora_fin"]);

        $decimal_hours = number_format(($date2 - $date1) / 60 / 60, 2);
        return $decimal_hours;
    }

    protected function get_associated_product($curso, $product, $sesion)
    {
        $this->main_db->where("id", $sesion["profesor"]);
        $profesores = $this->main_db->get("users")->result_array();
        $profesor = $profesores[0];
        $tarifa = "price";
        if ($sesion["tarifa"] != null)
            $tarifa = $sesion["tarifa"];

        $product["valor"] = $profesor[$tarifa];
        $product["iva"] = "12";
        return $product;

    }

    protected function get_cursos_by_sesiones($sesiones)
    {
        $cursos_ids = array();
        foreach ($sesiones as $sesion)
            $cursos_ids[] = $sesion["curso"];

        $result = $this->cursosmodel->get_by_ids($cursos_ids);
        return $result->collection;
    }
}
