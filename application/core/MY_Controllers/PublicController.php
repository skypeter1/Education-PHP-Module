<?php
if ( ! defined('BASEPATH')) exit('No direct script access allowed');


if(!function_exists("json_encode"))
    require_once(dirname(__FILE__)."/../../third_party/json/jsonwrapper.php");

class PublicController extends CI_Controller
{
	const ERROR_NO_DATA = 'error_no_data';
	
	protected $entity = 'Entity';
	protected $auth;
	
	public function __construct()
	{
		parent::__construct();
		$this->load->database();
		$this->load->library('session');
		$this->load->helper('url');
		
		$this->load->add_package_path(APPPATH.'third_party/PacUsers');
		$this->load->helper('pac_users');
		
		$this->load->add_package_path(APPPATH.'third_party/Users');
		$this->load->helper('users');
		
		$this->load->add_package_path(APPPATH.'third_party/Auth');
		$this->load->helper('auth');
		
		$this->auth = new Auth($this->session, new UsersModel($this->db));
	}
	
	protected function output($output)
	{
		die($output);
	}
}
