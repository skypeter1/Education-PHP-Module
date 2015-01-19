<?php
class UsersDomain extends Domain
{	
    public $models = array(
        'model' => array('modelclass' => 'UsersModel')
    );        
    
    public $foreign_keys = array();
	
	public $id_fields = array('Identificador' => 'id', 'Email' => 'email');

	public function __construct(CI_DB $db, Auth $auth)
	{
		$this->current_user = $auth->get_current_user();
		
		parent::__construct($db, $auth);
	}

	public function create(User $user)
	{
		return parent::create($user);
	}
	
	public function update(User $user)
	{	
		$this->check_not_to_block_himself($user);
		//$this->check_update_permissions($user);
        
		if($this->trying_to_do_on_himself($user))
        {
            $this->current_user->password = $user->password;
            $user = $this->current_user;
        }

		return parent::update($user);
	}
	
	public function get($user_id)
	{
		if($user_id != $this->current_user->id)
			$this->auth->check($this->model->entity.'::'.__FUNCTION__);
		
		$user = $this->model->get($user_id);
				
		foreach($this->foreign_keys as $foreign_key => $foreign_data)
			$user->$foreign_key = $this->get_foreign_entity($foreign_data, $user->$foreign_key);
		
		return $user;
	}
	
	public function delete(User $user)
	{
		if($this->trying_to_do_on_himself($user))
			throw new Error(array("error_cant_delete_your_self"));
			
		return parent::delete($user);
	}
	
	public function search(Search $search)
	{	
		$search = $this->prepare_search($search);
        $search->order->field = 'name';
        $search->order->direction = 'asc';

		return parent::search($search);
	}
	
	public function count_results(Search $search)
	{
		$search = $this->prepare_search($search);
		
		return parent::count_results($search);
	}
	
	public function block(User $user)
	{
		$this->check_not_to_block_himself($user);
		$this->auth->check($this->model->entity.'::'.__FUNCTION__);
		
		$result = $this->model->block($user, $user->blocked);

		$action = 'unblock';
		if($user->blocked)
			$action = 'block';
		
		$id_string = $this->id_string($user->id);
		$this->activity_log->register_action($this->model->entity.'::'.$action, $id_string);
		return $result;
	}

	public function get_proveedores()
	{
		$current_user = $this->auth->get_current_user();
		return $this->model->get_proveedores($current_user->id);
	}
	
	protected function prepare_search($search)
	{
		return $search;
	}
	
	protected function check_not_to_block_himself($user)
	{
		if($this->trying_to_do_on_himself($user) AND $user->blocked)
			throw new Error(array('error_cant_block_your_self'));
	}
	
	protected function check_update_permissions($user)
	{
		if($this->trying_to_do_on_himself($user))
        {

			return;
        }
			
		$this->auth->check($this->model->entity.'::update');
	}
	
	protected function check_update_self_permissions($user)
	{
		if(!$this->current_user->admin AND $this->updating_current_user_admin_and_rol($user))
			throw new Error(array(Auth::ERROR_PERMISSION_DENIED));
	}
	
	protected function updating_current_user_admin_and_rol($user)
	{
		return(($this->current_user->rol != $user->rol) OR ($this->current_user->admin != $user->admin));
	}
	
	protected function trying_to_do_on_himself($user)
	{
		$is_user = ($this->current_user instanceof  User);
		$same_id = ($this->current_user->id == $user->id);

		return ($is_user AND $same_id);
	}
	
	protected function get_consultorio_id($consultorio)
	{
		$this->main_db->where('nombre', $consultorio->nombre);
		$consultorios = $this->main_db->get('consultorios')->result_array();
		
		return $consultorios[0]['id'];
	}

    public function get_nomina(Search $search)
    {
        $users = $this->search($search);

        /*print_r($users);
        exit;*/

        /*$matriculas = $this->get_group_matriculas_by_curso($cursos_ids);
        $alumnos = $this->alumnosmodel->get_alumnos_by_cursos($cursos_ids);
        foreach($cursos->collection as &$curso)
        {
            $curso["alumnos"] = array();
            if(isset($matriculas[$curso["id"]]))
                foreach($matriculas[$curso["id"]] as $alumno_id)
                    $curso["alumnos"][] = $alumnos[$alumno_id];
        }*/

        return $users;
    }
      
    public function get_bodegas(){ 
        $current_user = $this->auth->get_current_user();
        $bodegas = $this->model->get_cursos($current_user->id); 
        return $bodegas;                   
    } 
    
}
