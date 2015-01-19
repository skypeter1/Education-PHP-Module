<?php
class TestingTestCase extends TestCase
{
	public $temporal_result;
	
	public function test_one()
	{
		$this->assert_true(true);
		$this->assert_true(false);
	}
	
	public function test_two()
	{
		$this->assert_true(true);
	}
	
	public $before_each_call_count = 0;
	public $after_each_call_count = 0;
	public $set_up_call_count = 0;
	public $tear_down_call_count = 0;
	
	public function set_up()
	{
		$this->set_up_call_count += 1;
	}

	public function tear_down()
	{
		$this->tear_down_call_count += 1;
	}

	public function before_each()
	{
		$this->before_each_call_count += 1;
	}

	public function after_each()
	{
		$this->after_each_call_count += 1;
	}
}