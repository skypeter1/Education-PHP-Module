<?php
class TestCaseUserValidator extends TestCase
{
	public function test_valid_checks_the_correct_properties()
	{
		$user = new User();
		$validator_errors = UserValidator::validate($user);

		$this->assert_true(in_array(UserValidator::ERROR_INVALID_NAME, $validator_errors));
		$this->assert_true(in_array(UserValidator::ERROR_INVALID_ROL, $validator_errors));
	}
	
	public function test_validate_accepts_a_flag_to_validate_password()
	{
		$user = new User();
		$user->password = "";
		
		$validator_errors = UserValidator::validate($user, false);
		$this->assert_false(in_array(UserValidator::ERROR_INVALID_PASSWORD, $validator_errors));
		
		$validator_errors = UserValidator::validate($user);
		$this->assert_true(in_array(UserValidator::ERROR_INVALID_PASSWORD, $validator_errors));
	}

	public function test_valid_password()
	{
		$valid_password = "secret_password";
		$this->assert_true(UserValidator::password($valid_password));
	}

	public function test_empty_password()
	{
		$empty_password = "";
		$this->assert_false(UserValidator::password($empty_password));
	}
	
	public function test_valid_roles()
	{
		$user = new User();
		
		$user->rol = 'profesor';
		$validator_errors = UserValidator::validate($user, false);
		$this->assert_false(in_array(UserValidator::ERROR_INVALID_ROL, $validator_errors));
	}
	
	public function test_invalid_roles()
	{
		$user = new User();
		$user->rol = 'Invalid rol';
		
		$validator_errors = UserValidator::validate($user, false);
		$this->assert_true(in_array(UserValidator::ERROR_INVALID_ROL, $validator_errors));
	}
}
