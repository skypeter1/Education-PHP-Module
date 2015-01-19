<?php
class TestCasePermissions extends TestCase
{	
	public function test_permissions_for_a_rol_action()
	{
		$permissions = $this->prepare_permissions_object();
		
		$user = new User();
		$user->rol = 'medic';
		$user->admin = false;
		
		$this->assert_true($permissions->check_permissions('only_medic_action', $user));		
	}
	
	public function test_permissions_for_a_not_configured_action()
	{
		$permissions = $this->prepare_permissions_object();
		
		$user = new User();
		
		$exception_thrown = false;
		try
		{
			$permissions->check_permissions('not_configured_action', $user);
		}
		catch(Error $exception)
		{
			$exception_thrown = true;
			$this->assert_equals('action_not_configured', $exception->errors[0]);
			$this->assert_equals('not_configured_action', $exception->errors[1]);
		}
		
		$this->assert_true($exception_thrown);
	}
	
	public function test_get_user_permissions()
	{
		$permissions = $this->prepare_permissions_object();
		
		$user = new User();
		$user->rol = "medic";
		
		$expected = array('only_medic_action' => true);
		$this->assert_equals($expected, $permissions->get_user_permissions($user));
	}
	
	protected function prepare_permissions_object()
	{
		$permissions_list = array();
		$permissions_list['only_medic_action'] = array('medic');
		
		return new Permissions($permissions_list);
	}
}