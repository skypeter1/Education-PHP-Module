<?php 
class Cursos extends CommonController {
    
	public $domain;
	public $entity = 'Curso';

	public function __construct()
	{
		parent::__construct();
		
		$this->load->add_package_path(APPPATH.'third_party/Cursos');
		$this->load->helper('cursos');
		
		$this->domain = new CursosDomain($this->db, $this->auth);
	}

	public function get_pac_products()
	{
		$this->_do(__FUNCTION__);
	}
	
	public function _get_pac_products($response)
	{
		$entities = $this->domain->get_pac_products();

		$data = array('list' => array_values($entities->collection));
		$response->set_data($data);
	}

	public function get_pac_products_for_pagos()
	{
		$this->_do(__FUNCTION__);
	}
	
	public function _get_pac_products_for_pagos($response)
	{
		$entities = $this->domain->get_pac_products_for_pagos();

		$data = array('list' => array_values($entities->collection));
		$response->set_data($data);
	}

	public function get_bodegas()
	{
		$this->_do(__FUNCTION__);
	}
	
	public function _get_bodegas($response)
	{
		$bodegas = $this->domain->get_bodegas();

		$data = array('list' => array_values($bodegas));
		$response->set_data($data);
	}

	public function save_matriculas_by_curso()
	{
		$this->_do(__FUNCTION__);
	}
	
	public function _save_matriculas_by_curso($response)
	{
		$data = $this->get_post_data(true);
		$this->domain->model->save_matriculas_by_curso($data);
	}

	public function get_overview()
	{
		$this->_do(__FUNCTION__);
	}
	
	public function _get_overview($response)
	{
		$data = $this->get_post_data();
		$overview = $this->domain->get_overview($data->id);
		$response->set_data(array("overview" => $overview));
	}

	public function save_pesos()
	{
		$this->_do(__FUNCTION__);
	}
	
	public function _save_pesos($response)
	{
		$data = $this->get_post_data();

		$this->domain->model->save_pesos($data->curso, json_encode($data->pesos));
	}

	public function save_notas_finales()
	{
		$this->_do(__FUNCTION__);
	}
	
	public function _save_notas_finales($response)
	{
		$data = $this->get_post_data(true);

		$this->domain->model->save_notas_finales($data["notas"]);
	}

	public function get_report()
	{
		$this->_do(__FUNCTION__);
	}
	
	public function _get_report($response)
	{
		$post_data = $this->get_post_data();

		$search = PostToSearch::parse($post_data);
		$entities = $this->domain->get_report($search);
		$number_of_entries = $this->domain->count_results($search);
		$data = array('list' => array_values($entities->collection), 'number_of_entries' => $number_of_entries);
		$response->set_data($data);
	}
}
