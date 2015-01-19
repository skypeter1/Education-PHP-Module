<?php
class TestCaseValidator extends TestCase
{
	public function test_required_empty_value()
	{
		$empty_value = "";
		$this->assert_false(Validator::required($empty_value));
	}
	
	public function test_required_null_value()
	{
		$null_value = null;
		$this->assert_false(Validator::required($null_value));
	}
	
	public function test_required_valid_value()
	{
		$valid_value = "john@snow.com";
		$this->assert_true(Validator::required($valid_value));
	}
	
	public function test_validate_required_properties()
	{
		Validator::$required_properties = array('id');
		$entity = new Entity();
		
		$errors = Validator::validate_required_properties($entity);
		
		$this->assert_equals('error_required_id', $errors[0]);
	}
	
	/*public function test_email_invalid()
	{
		$this->assert_false(Validator::email(""));
    }*/
	
	public function test_email_valid()
	{
		$this->assert_true(Validator::email("jon@snow.com"));
	}
}
