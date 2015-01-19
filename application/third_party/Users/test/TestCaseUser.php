<?php
class TestCaseUser extends TestCase
{
	public function test_user_setting_properties()
	{
		$user = new User();
		
		$properties = get_object_vars($user);
		
		$this->assert_true(array_key_exists('email', $properties));
		$this->assert_true(array_key_exists('password', $properties));
		$this->assert_true(array_key_exists('name', $properties));
		$this->assert_true(array_key_exists('rol', $properties));
		$this->assert_true(array_key_exists('price', $properties));
		$this->assert_true(array_key_exists('weekend_price', $properties));
		$this->assert_true(array_key_exists('out_academy_price', $properties));
		
		
		$this->assert_true(array_key_exists('blocked', $properties));
		$this->assert_false($properties['blocked']);
	}
}
