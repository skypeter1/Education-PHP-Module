<?php
class CommonActions
{
	const USER_PROFESOR = "cersei@lanister.com";
	const PASS_PROFESOR = "1234";
	
	public $browser;

	public function __construct($browser)
	{
		$this->browser = $browser;
	}

	public function open_application($user = PacBrowser::USER, $password = PacBrowser::PASSWORD)
	{
		$this->browser->login($user, $password);
		$this->browser->deleteWindow();
		$this->browser->to_window();
		$this->browser->open(APP_URL);
	}

	public function open_application_as_profesor()
	{
		$this->login_like_profesor();
	}

	public function search($search_term)
	{
		$this->browser->set_element_value('.form-search input', "");
		$this->browser->set_element_value('.form-search input', $search_term);
		$this->browser->element(".form-search button")->click();
		$this->wait_for_ajax();
		return $this->browser->elements("#main_container table.table-striped tbody tr");
	}

	public function search_on_modal($search_term)
	{
		$this->browser->set_element_value('.modal .form-search input', "");
		$this->browser->set_element_value('.modal .form-search input', $search_term);
		$this->browser->element(".modal .form-search button")->click();
		$this->wait_for_ajax();
		return $this->browser->elements(".modal table.table-striped tbody tr");
	}

	public function to_new_form()
	{
		$this->browser->element(".table_controls a.new")->click();
	}

	public function save_form()
	{
		$this->browser->element(".form-actions button[type='submit']")->click();
		$this->wait_for_ajax();
	}

	public function save_form_and_new()
	{
		$this->browser->element(".form-actions button.save_and_new")->click();
	}

	public function wait_for_ajax($max_waiting_time = 5)
	{
		$browser = $this->browser;
		$remaining_time = $max_waiting_time * 1000000;
		$ajax_is_complete = false;
	   
	    while(!$ajax_is_complete AND $remaining_time > 0)
	    {
	    	$script = array("script" => "return jQuery.active == 0", "args" => array());
	        $ajax_is_complete = $browser->execute($script);
	        
	        usleep(100);
	        $remaining_time -= 100;
	    }
	}

	public function login_like_profesor()
	{
		$this->browser->open(APP_URL."/login");
		$this->browser->set_element_value(".control-group input[name='email']", self::USER_PROFESOR);
		$this->browser->set_element_value(".control-group input[name='password']", self::PASS_PROFESOR);
		$this->browser->element(".btn-primary")->click();
	}
}
