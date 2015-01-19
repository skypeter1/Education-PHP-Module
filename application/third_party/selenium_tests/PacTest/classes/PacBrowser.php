<?php
class PacBrowser extends WebDriverBrowser
{
	const USER 		= "username";
	const PASSWORD 	= "1234";
	
	public $url;
	
	public function __construct(WebDriver $web_driver, $url)
	{
		$this->url = $url;
		parent::__construct($web_driver);
	}
		
	public function login($user = self::USER, $password = self::PASSWORD)
	{		
		$this->open($this->url);
		
		$this->to_window();
		
		$this->set_element_value("#usuario", $user);
		$this->set_element_value("#userpwd", $password);
		$this->element("#Ingresar")->click();
		
		$this->to_window();
	}
	
	public function left_menu()
	{
		$this->to_main_frame();
		$this->to_frame(1);
	}
	
	public function top_menu()
	{
		$this->to_main_frame();
		$this->to_frame(0);
	}
	
	public function to_content()
	{
		$this->to_main_frame();
		$this->to_frame(2);
	}
}