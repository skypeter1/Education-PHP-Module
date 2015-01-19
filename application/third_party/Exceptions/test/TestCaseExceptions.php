<?php
class TestCaseExceptions extends TestCase
{
	public function test_exceptions_extends_ci_exceptions()
	{
		$exceptions = new MY_Exceptions();
		$this->assert_true($exceptions instanceof CI_Exceptions);
	}
	
	public function test_show_error_throws_error_for_db_errors()
	{
		$exceptions = new MY_Exceptions();
		
		$exception_thrown = false;
		try
		{
			$heading = "";
			$status_code = 500;
			$message = array("error_message");
			$template = "error_db";		
			$exceptions->show_error($heading, $message, $template, $status_code);
		}
		catch(Exception $error)
		{
			$exception_thrown = true;
		}
		
		$this->assert_true($exception_thrown);
	}		
}