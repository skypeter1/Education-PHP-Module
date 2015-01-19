<?php 
class roles extends CommonController {

  public $domain;
  public $entity = 'Rol';


  public function __construct()
  {
    parent::__construct();

    $this->domain = new RolDomain($this->db, $this->auth);
  }

	public function get_pac_users()
	{
		$this->_do(__FUNCTION__);
	}
	
	public function _get_pac_users($response)
	{
		$options = $this->domain->get_pac_user_options();

		$data = array('list' => $options);
		$response->set_data($data);
	}

}
