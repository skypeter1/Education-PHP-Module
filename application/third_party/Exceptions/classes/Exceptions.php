<?php
class MY_Exceptions extends CI_Exceptions
{
	public function show_error($heading, $message, $template = 'error_general', $status_code = 500)
	{
		if($template == 'error_db')
		{
			$message = implode(", ", $message);
			throw new Exception($message, 100);
		}

		
		parent::show_error($heading, $message, $template, $status_code);
	}	
}