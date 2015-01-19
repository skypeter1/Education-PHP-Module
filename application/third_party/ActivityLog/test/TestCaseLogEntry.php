<?php
class TestCaseLogEntry extends TestCase
{
	public function test_log_entry_properties()
	{
		$log_entry = new LogEntry();
		
		$properties = get_object_vars($log_entry);
		
		$this->assert_equals(6, sizeof($properties));
		$this->assert_true(array_key_exists('id', $properties));
		$this->assert_true(array_key_exists('user', $properties));
		$this->assert_true(array_key_exists('action', $properties));
		$this->assert_true(array_key_exists('object', $properties));
		$this->assert_true(array_key_exists('fecha', $properties));
		$this->assert_true(array_key_exists('ip_address', $properties));
	}
}