<?php
class TestCasePacBrowser extends TestCase
{
	public function before_each()
	{
		$this->browser = new PacBrowser(new WebDriver(), PAC_URL);
	}
	
	public function after_each()
	{
		$this->browser->close();
	}
	
	public function test_login()
	{
		$this->browser->login();
		
		$top_frame = $this->browser->element("frame[name='topFrame']");
		$this->assert_true($top_frame instanceof WebDriverElement);
		
		$left_frame = $this->browser->element("frame[name='leftFrame']");
		$this->assert_true($left_frame instanceof WebDriverElement);
		
		$middle_frame = $this->browser->element("frame[name='centro']");
		$this->assert_true($middle_frame instanceof WebDriverElement);
	}
	
	public function test_left_menu()
	{
		$this->browser->login();
		
		$this->browser->to_frame(2);
		$this->browser->left_menu();
		
		$prove_element = $this->browser->element("table:first-child td div strong");
		$this->assert_true($prove_element instanceof WebDriverElement);
	}
	
	public function test_top_menu()
	{
		$this->browser->login();
		
		$this->browser->to_frame(2);
		$this->browser->top_menu();
		
		$prove_element = $this->browser->element(".TextoUsuario");
		$this->assert_true($prove_element instanceof WebDriverElement);
	}
	
	public function test_to_content()
	{
		$this->browser->login();
		
		$this->browser->to_frame(0);
		$this->browser->to_content();
		
		$prove_element = $this->browser->element("map");
		$this->assert_true($prove_element instanceof WebDriverElement);
	}
}