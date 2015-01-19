<?php
class TestCaseAuth extends TestCase
{
	public function test_user_login_successful()
	{
		$auth = $this->instance_auth();
		
		$result = $auth->user_login("John", "password");
		$this->assert_true($result);
		$this->assert_equals("authenticate John password", $auth->users_model->trace[0]);
		$this->assert_equals(23, $auth->session->stored_data[Auth::AUTH_SESSION_KEY]);
		$this->assert_equals('User', $auth->session->stored_data[Auth::AUTH_USER_TYPE]);
	}

	public function test_user_login_failure()
	{
		$auth = $this->instance_auth();
		
		$result = $auth->user_login("John", "wrong password");
		$this->assert_false($result);
		$this->assert_equals("authenticate John wrong password", $auth->users_model->trace[0]);
		$this->assert_true(empty($auth->session->stored_data));
	}
	
	public function test_logout_user()
	{
		$auth = $this->instance_auth();
		
		$auth->user_login('John', 'password');
		
		$auth->logout();
		$this->assert_equals(null, $auth->session->stored_data["user_id"]);
	}
	
	public function test_user_logged()
	{
		$auth = $this->instance_auth();
		
		$this->assert_false($auth->logged());
		
		$auth->user_login("John", "password");
		$this->assert_true($auth->logged());

		$auth->logout();
		$this->assert_false($auth->logged());
	}
	
	public function test_get_current_user()
	{
		$auth = $this->instance_auth();
		
		$auth->user_login("John", "password");
		
		$current_user = $auth->get_current_user();
		$this->assert_true($current_user instanceof User);
		$this->assert_equals("John", $current_user->email);
		$this->assert_equals("password", $current_user->password);
		$this->assert_equals('medic', $current_user->rol);
	}
	
	public function test_check_only_logged()
	{
		$auth = $this->instance_auth();
		
		$auth->user_login("John", "password");

		$permissions_config = array("test_action" => array("superadmin", "admin", "medic"));
		$permissions = new Permissions($permissions_config);
		$auth->permissions = $permissions;
		
		$this->assert_true($auth->check('test_action'));
		
		$auth->logout();
		$exception_thrown = false;
		try
		{
			$auth->check('test_action');
		}
		catch(Error $exception)
		{
			$exception_thrown = true;
			$this->assert_true(in_array(AUTH::ERROR_NOT_LOGGEDIN, $exception->errors));
		}
		$this->assert_true($exception_thrown);
	}
	
	public function test_check_with_permissions()
	{
		$auth = $this->instance_auth();
		
		$auth->user_login("John", "password");

		$this->assert_true($auth->check('test_action'));
		
		$exception_thrown = false;
		try
		{
			$auth->check('forbidden_action');
		}
		catch(Error $exception)
		{
			$exception_thrown = true;
			$this->assert_true(in_array(AUTH::ERROR_PERMISSION_DENIED, $exception->errors));
		}
		$this->assert_true($exception_thrown);
	}
	
	protected function instance_auth()
	{
		$session = new MockSession();
		$auth =  new Auth($session);

		$db_access = DBAccessCreator::get_db_access();
		$auth->users_model = new MockUsersModel($db_access);
		$auth->activity_log = new MockActivityLogModel();
		
		$permissions_config = array("test_action" => array("superadmin", "admin", "medic"),
					 				"forbidden_action" => array("superadmin"));
		$permissions = new Permissions($permissions_config);
		$auth->permissions = $permissions;
		
		return $auth;
	}
}