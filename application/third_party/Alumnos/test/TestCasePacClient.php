<?php
class TestCasePacClient extends TestCase
{
	public function test_pac_client_setting_properties()
	{
		$pac_client = new PacClient();
		
		$properties = get_object_vars($pac_client);
		
		$this->assert_true(array_key_exists('id', $properties));
		$this->assert_true(array_key_exists('nombre', $properties));
	}
		
}