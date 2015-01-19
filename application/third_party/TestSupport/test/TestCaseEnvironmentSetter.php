<?php
class TestCaseEnvironmentSetter extends TestCase
{
	public function test_set_production_environment()
	{
		$current_environment = $this->get_current_environment();
		
		$environment_file = $file = dirname(__FILE__)."/../../../../index.php";
		
		$environment_setter = new EnvironmentSetter();
		
		$environment_setter->set_production_environment();
		
		$this->assert_true(strpos(file_get_contents($environment_file), "define('ENVIRONMENT', 'production');") != false);
		
		$environment_setter->set_previous_environment();
		
		$this->assert_true(strpos(file_get_contents($environment_file), "define('ENVIRONMENT', '$current_environment');") != false);
	}
	
	public function test_set_development_environment()
	{
		$current_environment = $this->get_current_environment();
		
		$environment_file = $file = dirname(__FILE__)."/../../../../index.php";
		
		$environment_setter = new EnvironmentSetter();
		
		$environment_setter->set_development_environment();
		
		$this->assert_true(strpos(file_get_contents($environment_file), "define('ENVIRONMENT', 'development');") != false);
		
		$environment_setter->set_previous_environment();
		
		$this->assert_true(strpos(file_get_contents($environment_file), "define('ENVIRONMENT', '$current_environment');") != false);
	}
	
	public function test_set_testing_environment()
	{
		$current_environment = $this->get_current_environment();
		
		$environment_file = $file = dirname(__FILE__)."/../../../../index.php";
		
		$environment_setter = new EnvironmentSetter();
		
		$environment_setter->set_testing_environment();
		
		$this->assert_true(strpos(file_get_contents($environment_file), "define('ENVIRONMENT', 'testing');") != false);
		
		$environment_setter->set_previous_environment();
		
		$this->assert_true(strpos(file_get_contents($environment_file), "define('ENVIRONMENT', '$current_environment');") != false);
	}
	
	protected function get_current_environment()
	{
		$environment_file = $file = dirname(__FILE__)."/../../../../index.php";
		if(strpos(file_get_contents($environment_file), "define('ENVIRONMENT', 'production');"))
			return 'production';
			
		if(strpos(file_get_contents($environment_file), "define('ENVIRONMENT', 'development');"))
			return 'development';
			
		if(strpos(file_get_contents($environment_file), "define('ENVIRONMENT', 'testing');"))
			return 'testing';
	}
}
