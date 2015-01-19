<?php
class TestCaseLogEntryValidator extends TestCase
{
	public function test_validate_empty_log_entry()
	{
		$log_entry = new LogEntry();
		
		$validator_errors = LogEntryValidator::validate($log_entry);
		$this->assert_equals(5, sizeof($validator_errors));
		$this->assert_true(in_array(LogEntryValidator::ERROR_INVALID_USER, $validator_errors));
		$this->assert_true(in_array(LogEntryValidator::ERROR_INVALID_ACTION, $validator_errors));
		$this->assert_true(in_array(LogEntryValidator::ERROR_INVALID_OBJECT, $validator_errors));
		$this->assert_true(in_array(LogEntryValidator::ERROR_INVALID_FECHA, $validator_errors));
		$this->assert_true(in_array(LogEntryValidator::ERROR_INVALID_IP_ADDRESS, $validator_errors));
	}
}