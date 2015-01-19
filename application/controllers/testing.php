<?php 
class Testing extends CommonController {
    
	public $domain;
	public $entity = 'Entity';
		
	public function __construct()
	{
		parent::__construct();
		
		$this->domain = new Domain($this->db, $this->auth);
	}
}
