<?php
class TestCaseError extends TestCase
{
	public function test_error_extends_exception()
	{
		$error = new Error();
		$this->assert_true($error instanceof Exception);
	}
	
	public function test_error_accepts_array_as_message()
	{
		$errors_to_throw = array("TERRIBLE_ERROR", "IMPOSIBLE_TO_RESOLVE");
		$error = new Error($errors_to_throw, 23);
		$this->assert_equals($errors_to_throw, $error->errors);
		$this->assert_equals("TERRIBLE_ERROR, IMPOSIBLE_TO_RESOLVE", $error->getMessage());
		$this->assert_equals(23, $error->getCode());
	}
}