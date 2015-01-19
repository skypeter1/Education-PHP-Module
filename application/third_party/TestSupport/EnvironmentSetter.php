<?php

class EnvironmentSetter
{
	protected $environment_file;
	protected $previous_environment;
	
	public function __construct()
	{
		$this->environment_file = dirname(__FILE__)."/../../../index.php";
	}
	
	public function set_development_environment()
	{
		$this->previous_environment = $this->get_current_environment();
		$file_contents = file_get_contents($this->environment_file);
		
	    $new_content = str_replace("define('ENVIRONMENT', '$this->previous_environment');", "define('ENVIRONMENT', 'development');", $file_contents);
	    
	    file_put_contents($this->environment_file, $new_content);
	}
	
	public function set_production_environment()
	{
		$this->previous_environment = $this->get_current_environment();
		$file_contents = file_get_contents($this->environment_file);
		
	    $new_content = str_replace("define('ENVIRONMENT', '$this->previous_environment');", "define('ENVIRONMENT', 'production');", $file_contents);
	    
	    file_put_contents($this->environment_file, $new_content);
	}
	
	public function set_testing_environment()
	{
		$this->previous_environment = $this->get_current_environment();
		$file_contents = file_get_contents($this->environment_file);
		
	    $new_content = str_replace("define('ENVIRONMENT', '$this->previous_environment');", "define('ENVIRONMENT', 'testing');", $file_contents);
	    
	    file_put_contents($this->environment_file, $new_content);
	}
	
	public function set_previous_environment()
	{
		$file_contents = file_get_contents($this->environment_file);
	    $new_content = str_replace("define('ENVIRONMENT', 'development');", "define('ENVIRONMENT', '$this->previous_environment');", $file_contents);
	    file_put_contents($this->environment_file, $new_content);
	    
		$file_contents = file_get_contents($this->environment_file);
	    $new_content = str_replace("define('ENVIRONMENT', 'production');", "define('ENVIRONMENT', '$this->previous_environment');", $file_contents);
	    file_put_contents($this->environment_file, $new_content);
	    
		$file_contents = file_get_contents($this->environment_file);
	    $new_content = str_replace("define('ENVIRONMENT', 'testing');", "define('ENVIRONMENT', '$this->previous_environment');", $file_contents);
	    file_put_contents($this->environment_file, $new_content);
	}
	
	protected function get_current_environment()
	{
		if(strpos(file_get_contents($this->environment_file), "define('ENVIRONMENT', 'production');"))
			return 'production';
			
		if(strpos(file_get_contents($this->environment_file), "define('ENVIRONMENT', 'development');"))
			return 'development';
			
		if(strpos(file_get_contents($this->environment_file), "define('ENVIRONMENT', 'testing');"))
			return 'testing';
	}
	
}
