<?php
class TestCaseResponse extends TestCase
{
	public function test_case_response_instance()
	{
		$response = new Response();
		$this->assert_true($response instanceof Response);
	}
	
	public function test_response_format_with_data()
	{
		$response = new Response();
		
		$response->set_data("some data");
		$expected = '{"data":"some data","errors":[],"exception":null}';
		$this->assert_equals($expected, $response->encode());
		
		$response->set_data(array("value_one", "value_two"));
		$expected = '{"data":["value_one","value_two"],"errors":[],"exception":null}';
		$this->assert_equals($expected, $response->encode());
	}
	
	public function test_response_format_with_errors()
	{
		$response = new Response();
		
		$response->set_data("some data");
		$response->add_errors(array("TERRIBLE_ERROR","MORE_TERRIBLE_ERROR"));
		$expected = '{"data":"some data","errors":["TERRIBLE_ERROR","MORE_TERRIBLE_ERROR"],"exception":null}';
		$this->assert_equals($expected, $response->encode());
	}
	
	public function test_response_format_with_exception()
	{
		$response = new Response();
		
		$response->set_data("some data");
		$response->set_exception("exception message");
		$expected = '{"data":"some data","errors":[],"exception":"exception message"}';
		$this->assert_equals($expected, $response->encode());
	}
}