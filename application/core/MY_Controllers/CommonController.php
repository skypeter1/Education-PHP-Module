<?php
if ( ! defined('BASEPATH')) exit('No direct script access allowed');

if(!function_exists("json_encode"))
    require_once(dirname(__FILE__)."/../../third_party/json/jsonwrapper.php");

class CommonController extends CI_Controller
{
	const ERROR_NO_DATA = 'error_no_data';
	
	public $domain;
	public $entity = 'Entity';
	public $auth;
	
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
		$this->check_logged();
	}
	
	public function index()
	{
		show_404();
	}
	
	public function create()
	{
		$this->_do(__FUNCTION__);
	}
	
	protected function check_logged()
	{
		if($this->auth->logged()) return true;
		
		$response = new Response();
		$error = new Error(array(Auth::ERROR_NOT_LOGGEDIN));
		$response->add_errors($error->errors);
		$this->output($response->encode());
	}
	
	protected function _create($response)
	{
		$entity = $this->json_to_entity();
		$entity = $this->domain->create($entity);
		$response->set_data($entity);
	}
	
	public function get()
	{
		$this->_do(__FUNCTION__);
	}

	protected function _get($response)
	{
		$entity = $this->json_to_entity();
		$entity = $this->domain->get($entity->id);
		$response->set_data($entity);
	}
	
	public function delete()
	{
		$this->_do(__FUNCTION__);
	}
	
	protected function _delete()
	{
		$entity = $this->json_to_entity();
		$this->domain->delete($entity);
	}
	
	public function update()
	{
		$this->_do(__FUNCTION__);
	}
	
	protected function _update($response)
	{
		$entity = $this->json_to_entity();
		$response->set_data($this->domain->update($entity));
	}
	
	public function search()
	{
		$this->_do(__FUNCTION__);
	}
	
	public function _search($response)
	{ 
		$post_data = $this->get_post_data();
 
                $search = PostToSearch::parse($post_data);
		$entities = $this->domain->search($search);
		$number_of_entries = $this->domain->count_results($search);
		$data = array('list' => array_values($entities->collection), 'number_of_entries' => $number_of_entries);
		$response->set_data($data);
	}
	
	protected function _do($action)
	{
		$action = "_".$action;
		$response = new Response();
		try
		{
			$this->$action($response);
		}
		catch(Error $error)
		{
			$response->add_errors($error->errors);
		}
		catch(Exception $exception)
		{
			$response->set_exception($exception->getMessage());
		}
		$this->output($response->encode());
	}

	protected function get_post_data($array = false)
	{
		if(!isset($_POST['data']))
			throw new Error(array(self::ERROR_NO_DATA));

        $result = json_decode($_POST['data']);

        if($array)
            $result = $this->object_to_array($result);

        return $result;
    }

    protected function object_to_array($data)
    {
        if (is_array($data) || is_object($data))
        {
            $result = array();
            foreach ($data as $key => $value)
            {
                $result[$key] = $this->object_to_array($value);
            }

            return $result;
        }
        return $data;
    }
	
	protected function output($output)
	{
		die($output);
	}
	
	protected function json_to_entity()
	{
		return $this->domain->json_to_entity($this->get_post_data());
	}
}
