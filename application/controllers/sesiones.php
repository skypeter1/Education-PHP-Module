<?php 
class Sesiones extends CommonController 
{
	public $domain;
	public $entity = 'Sesion';

	public function __construct()
	{
		parent::__construct();

		$this->load->add_package_path(APPPATH.'third_party/Sesiones');
		$this->load->helper('sesiones');
		
		$this->domain = new SesionesDomain($this->db, $this->auth);
	}

	public function get_asistencias()
	{
		$this->_do(__FUNCTION__);
	}

	protected function _get_asistencias($response)
	{
		$data = $this->get_post_data();
        $asistencias = $this->domain->model->get_asistencia_for_sesion($data->sesion);
		$response->set_data($asistencias);
	}

	public function save_asistencia()
	{
		$this->_do(__FUNCTION__);
	}

	protected function _save_asistencia($response)
	{
		$data = $this->get_post_data(true);
		$asistencias = $this->domain->model->save_asistencias($data);
	}

	public function get_asistencia_profesores()
	{
		$this->_do(__FUNCTION__);
	}

	protected function _get_asistencia_profesores($response)
	{
		$data = $this->get_post_data();
		$asistencias = $this->domain->get_asistencia_profesor_to_curso($data->profesor);

		$response->set_data(array("list" => $asistencias));
	}

	public function get_asistencia_alumnos()
	{
		$this->_do(__FUNCTION__);
	}

	protected function _get_asistencia_alumnos($response)
	{
		$data = $this->get_post_data();
		$asistencias = $this->domain->get_asistencia_alumno($data->alumno);

		$response->set_data(array("list" => $asistencias));
	}

	public function save_pagos()
	{
		$this->_do(__FUNCTION__);
	}

	protected function _save_pagos($response)
	{
		$data = $this->get_post_data();

		$result = array();
		$current_user = $this->auth->get_current_user();
		
		$result["id_usuario"] = $current_user->id;
		$result["username"] = $current_user->name;
		$result["productos"] = $this->domain->get_products_and_hours_by_sesion($data->sesiones, $data->producto);

		$users_model = new UsersModel($this->db, $this->auth);
		$result["proveedor"] = $users_model->get_proveedor_by_profesor($data->profesor);
		$result["bodega"] = $result["proveedor"]["id_bodega"];
                $result["bodega_destino"] = $data->bodega;

		$result["numdoc"] = $this->domain->model->save_pac_orden_de_compra($result);
		$this->domain->model->save_pagos($data->sesiones);

		$response->set_data($result);
	}
}
