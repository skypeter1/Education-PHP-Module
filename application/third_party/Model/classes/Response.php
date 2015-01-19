<?php
class Response
{
	protected $data;
	protected $errors = array();
	protected $exception;
	
	public function set_data($data)
	{
		$this->data = $data;
	}
	
	public function add_errors(Array $errors)
	{
		$this->errors = array_merge($this->errors, $errors);
	}
	
	public function set_exception($exception)
	{
		$this->exception = $exception;
	}
	
	public function encode()
	{
		return json_encode(array('data' => $this->data, 'errors' => $this->errors, "exception" => $this->exception));
	}
}