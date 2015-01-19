<?php
class Permissions 
{	
	const NOT_CONFIGURED_ACTION = 'action_not_configured';
	
	protected $permissions_list = array();
	
	public function __construct($permissions)
	{
		$this->permissions_list = $permissions;
	}
	
	public function check_permissions($action, $user)
	{

		$allowed_by_rol = ($this->allowed($user->rol, $action));
		
		return ($allowed_by_rol);
	}
	
	public function get_user_permissions($user)
	{
		$user_permissions = array();
		foreach($this->permissions_list as $action => $allowed_entities)
		{
			$user_permissions[$action] = $this->check_permissions($action, $user);
		}
		return $user_permissions;
	}
	
	protected function allowed($entity, $action)
	{
		if(!isset($this->permissions_list[$action]))
			throw new Error(array(self::NOT_CONFIGURED_ACTION, $action));
		
		return in_array($entity, $this->permissions_list[$action]);
	}
}