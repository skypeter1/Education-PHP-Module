<?php
class Auth
{
	const AUTH_SESSION_KEY = "user_id";
	const AUTH_USER_TYPE = "user_type";
	const ERROR_NOT_LOGGEDIN = 'error_not_loggedin';
	const ERROR_PERMISSION_DENIED = 'error_permission_denied';
	
	public $session;
	public $users_model;
	public $permissions;
	public $activity_log;
	
	public function __construct(CI_Session $session)
	{
		@session_start();
		$this->session = $session;
		$database_access = DB();
		
		$this->users_model = new UsersModel($database_access);
		$this->pac_users_model = new PacUserModel($database_access);
		$this->permissions = new Permissions(config_item('permissions'));
		$this->activity_log = new ActivityLogModel($database_access, $this);
	}
	
	public function user_login($email, $password)
	{
		$result = $this->login($email, $password, $this->users_model);
		
		if($result)
			$this->activity_log->register_action('Login');
		
		return $result;
	}
	
	public function logout()
	{
		if($this->logged())
			$this->activity_log->register_action('Logout');

		$this->session_pac_logout();

		$this->session->set_userdata(self::AUTH_SESSION_KEY, null);
	}

	public function logged()
	{
		if($this->pac_user_logged())
			return true;

		$auth_key = $this->session->userdata(self::AUTH_SESSION_KEY); 
		
		if(empty($auth_key))
			return false;
		
		return true;
	}

	public function check($action)
	{
		if(!$this->logged()) throw new Error(array(self::ERROR_NOT_LOGGEDIN));
		
		$user = $this->get_current_user();
		
		if($this->permissions->check_permissions($action, $user))
			return true;
		
		throw new Error(array(self::ERROR_PERMISSION_DENIED));
	}
	
	public function get_current_user()
	{
		if($this->pac_user_logged())
			return $this->get_current_pac_user();

		if(!$this->logged()) throw new Error(array(self::ERROR_NOT_LOGGEDIN));
		
		$current_user_id = $this->session->userdata(self::AUTH_SESSION_KEY);
		$user_type = $this->session->userdata(self::AUTH_USER_TYPE);
		
		$model = $this->users_model;

		return $model->get($current_user_id);		
	}
	
	protected function login($email, $password, $model)
	{
		if($user = $model->authenticate($email, $password))
		{
			$session_data = array(self::AUTH_SESSION_KEY => $user->id, self::AUTH_USER_TYPE => $model->entity);
			$this->session->set_userdata($session_data);
			return true;
		}
			
		return false;
	}
	
	protected function pac_user_logged()
	{
		if($this->pac_session_exists()) 
			return ($_SESSION["user"]!="");
	}

	protected function pac_session_exists()
	{
		$session_id = session_id();
		$pac_session_exists = (!empty($session_id) AND isset($_SESSION["user"]));
		return $pac_session_exists; 
	}

	protected function session_pac_logout()
	{
		if($this->pac_user_logged())
			session_destroy();
	}

	protected function get_current_pac_user()
	{
		return $this->pac_users_model->get($_SESSION["user"]);
	}
}
