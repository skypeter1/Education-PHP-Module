<?php
class TestCaseRolModel extends TestCase
{
	public function test_class_properties()
	{
		$users_model = new RolModel(DB());
		
		$this->assert_equals('pac_users', $users_model->table);
		$this->assert_equals('Rol', $users_model->entity);
	}

  public function test_get(){
    UsersSetup::create_pac_users();

		$model = new RolModel(DB());

    $users = $model->get(1);

    $this->assert_equals(1, sizeof($users));
  }
}

