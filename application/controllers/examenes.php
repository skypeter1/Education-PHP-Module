<?php 
class Examenes extends CommonController {
    
	public $domain;
	public $entity = 'Examen';

	public function __construct()
	{
		parent::__construct();
		
		$this->load->add_package_path(APPPATH.'third_party/Examenes');
		$this->load->helper('examenes');
		
		$this->domain = new ExamenesDomain($this->db, $this->auth);
	}

	public function get_notas()
	{
		$this->_do(__FUNCTION__);
	}
	
	public function _get_notas($response)
	{
		$data = $this->get_post_data();

		$notas = $this->domain->model->get_notas($data->examen);

		$data = array('list' => $notas);
		$response->set_data($data);
	}

	public function save_notas()
	{
		$this->_do(__FUNCTION__);
	}
	
	public function _save_notas($response)
	{
		$data = $this->get_post_data(true);
		$this->domain->model->save_notas($data["notas"]);
	}
}