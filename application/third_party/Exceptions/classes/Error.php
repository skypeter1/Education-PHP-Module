<?php
class Error extends Exception
{
	public $errors;
	
	public function __construct($errors = array(), $code = null)
	{
		$this->errors = $errors;
		$this->code = $code;
		$this->set_message($errors);
	}
	
	protected function set_message($errors)
	{
		$message = "";
		foreach($errors as $index => $error)
		{
			if($index != 0) $message .= ", ";
			
			$message .= $error;
		}
		
		$this->message = $message;
	}
}