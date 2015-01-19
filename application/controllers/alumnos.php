<?php 
class Alumnos extends CommonController 
{
	public $domain;
	public $entity = 'Alumno';

	public function __construct()
	{
		parent::__construct();
		
		$this->load->add_package_path(APPPATH.'third_party/Alumnos');
		$this->load->helper('alumnos');
		
		$this->domain = new AlumnosDomain($this->db, $this->auth);
	}

	public function get_pac_clients()
	{
		$this->_do(__FUNCTION__);
	}
	
	public function _get_pac_clients($response)
	{
		$entities = $this->domain->get_pac_clients();

		$data = array('list' => array_values($entities->collection));
		$response->set_data($data);
	}
	
	public function save_matriculas()
	{
		$this->_do(__FUNCTION__);
	}

	public function _save_matriculas()
	{
		$data = $this->transform_matriculas_to_array($this->get_post_data());

		$this->domain->model->save_matriculas($data);
	}

	public function get_matriculas()
	{
		$this->_do(__FUNCTION__);
	}

	public function _get_matriculas($response)
	{
		$data = $this->get_post_data();


		$cursos = $this->domain->model->get_matriculas_for_alumno($data->alumno);

		$response->set_data($cursos->collection);
	}

	public function get_alumnos_history()
	{
		$this->_do(__FUNCTION__);
	}

	public function _get_alumnos_history($response)
	{
		$data = $this->get_post_data();

		$history = $this->domain->get_alumnos_history($data->alumno);

		$response->set_data(array("list" => $history));
	}

	protected function transform_matriculas_to_array($data)
	{
		$result = array();

		foreach($data->matriculas as $index => $matricula)
		{
			$result[$index] = $matricula;
		}

		return $result;
	}
}