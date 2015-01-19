<?php
class ActivityLogModel
{
	const PRIMARY_KEY 		= 'id';

	public $table			= 'activity_log';
	public $entity 			= 'LogEntry';
	
	public $error_entity_not_exist	= 'error_log_entry_not_exist';
	public $error_required_id			= 'error_required_id';
	
	public $search_fields = array('user', 'action', 'object', 'fecha', 'ip_address');
	
	public $db;
	public $auth;
	public $current_user;
	
	public $human_readable_operations = array(
		'create' => 'Creación',
		'update' => 'Actualización',
		'delete' => 'Borrado',
		'block' => 'Bloqueo',
		'unblock' => 'Desbloqueo',
		'emitir' => 'Emisión',
		'anular' => 'Anulación',
		'Login' => 'Inicio de sesión',
		'Logout' => 'Cierre de sesión'
	);
	
	public $human_readable_entities = array(
		'Alergeno' => 'alérgeno',
		'Alergia' => 'alergia',
		'Antecedentes' => 'antecedentes de usuario',
		'Concepto' => 'concepto de facturación',
		'Consulta' => 'consulta médica',
		'Diagnostico' => 'diagnóstico',
		'Documento' => 'documento',
		'Enfermedad' => 'enfermedad',
		'Factura' => 'factura',
		'Medicamento' => 'medicamento',
		'OrdenMedica' => 'orden médica',
		'Paciente' => 'paciente',
		'Procedimiento' => 'procedimiento',
		'SignosVitales' => 'signos vitales',
		'SuperAdmin' => 'superadministrador',
		'TipoAtencion' => 'tipo de atención',
		'Tratamiento' => 'tratamiento',
		'User' => 'usuario',
		'Visita' => 'visita'
	);
	
	public function __construct(CI_DB $db_access, $auth)
	{
		$this->auth = $auth;
		$this->db = $db_access;
	}

	public function get($log_entry_id = null)
	{
		$this->establish_db();
		
		if(is_null($log_entry_id))
			throw new Error(array($this->error_required_id));
		
		$this->db->where(self::PRIMARY_KEY, $log_entry_id);
		$results = $this->db->get($this->table)->result_array();

		if(!isset($results[0]))
			throw new Error(array($this->error_entity_not_exist));
		
		return $this->row_to_log_entry($results[0]);
	}
	
	public function register_action($action, $object = null)
	{
		$this->establish_db();

		$log_entry = $this->generate_log_entry($action, $object);

		$data = get_object_vars($log_entry);
		unset($data['id']);
		try
		{
			$this->db->insert($this->table, $data);
			return true;
		}
		catch(Exception $exception)
		{
			$this->parse_db_exception($exception);	
			return false;
		}
	}
	
	public function search(Search $search = null)
	{
		$this->establish_db();
		
		if(!is_null($search))
			$this->apply_search($search);

		$db_result = $this->db->get($this->table);

		return $this->db_result_to_collection($db_result);
	}
	
	public function count_results(Search $search = null)
	{
		$this->establish_db();
		
		if($search)
		{
			$search->paginator = null;
			$this->apply_search($search);
		}
		
		return $this->db->get($this->table)->num_rows();
	}
	
	protected function generate_log_entry($action, $object)
	{
		$log_entry = new LogEntry();
		$log_entry->user = serialize($this->auth->get_current_user());
		$log_entry->action = $this->action_to_human_readable($action);
		$log_entry->fecha = time();
		$log_entry->ip_address = $this->get_client_ip();
		$log_entry->object = $object;
		
		$errors = $this->validate($log_entry);
		if(sizeof($errors) > 0)
			throw new Error($errors);
		
		return $log_entry;
	}
	
	protected function action_to_human_readable($action)
	{
		$splited_action = explode('::', $action);
		
		if(sizeof($splited_action) == 1)
			return $this->human_readable_operations[$action];
		
		$readable_action = $splited_action[1];
		if(isset($this->human_readable_operations[$splited_action[1]]))
			$readable_action = $this->human_readable_operations[$splited_action[1]];
		
		$readable_entity = $splited_action[0];
		if(isset($this->human_readable_entities[$splited_action[0]]))
			$readable_entity = $this->human_readable_entities[$splited_action[0]];
		
		return $readable_action.' de '.$readable_entity;
	}
	
	protected function validate(LogEntry $log_entry)
	{
		return LogEntryValidator::validate($log_entry);
	}
	
	protected function row_to_log_entry($row)
	{
		$log_entry = new LogEntry();
		$log_entry->id = $row['id'];
		$log_entry->user = unserialize($row['user']);
		$log_entry->action = $row['action'];
		$log_entry->object = $row['object'];
		$log_entry->fecha = $row['fecha'];
		$log_entry->ip_address = $row['ip_address'];
		
		return $log_entry;
	}
	
	protected function get_database()
	{
		return DBAccessCreator::get_db_access();
	}
	
	protected function apply_search(Search $search)
	{	
		foreach($search->filters as $filter)
		{
			if($filter->property == 'GLOBAL')
			{
				$this->global_filter($filter);
				continue;
			}

			$this->filter($filter);
		}

		$this->apply_paginator($search);
		$this->apply_order($search);
	}
	
	protected function apply_paginator(Search $search)
	{		
		if($search->paginator)
			$this->db->limit($search->paginator->page_size, 0);
	}
	
	protected function apply_order(Search $search)
	{
		if(!$search->order) return;

		$this->db->order_by($search->order->field, $search->order->direction);
	}
	
	protected function filter(Filter $filter)
	{
		switch ($filter->method)
		{
			case "LIKE": 
				$this->db->like($filter->property, $filter->pattern);
				break;  
			case "EQUALS":
				$this->db->where($filter->property, $filter->pattern);
				break;
			case "OR_EQUALS":
				$this->db->or_where($filter->property, $filter->pattern);
				break;
			case "OR_LIKE":
				$this->db->or_like($filter->property, $filter->pattern);
				break;
			case "HAVING":
				$this->db->having($filter->property, $filter->pattern);
				break;
			case "GREATER_THAN":
				$this->db->where("$filter->property >", $filter->pattern);
				break;
			case "LESSER_THAN":
				$this->db->where("$filter->property <", $filter->pattern);
		}
	}
	
	protected function global_filter(Filter $filter)
	{
		$where_elements = array();
		foreach($this->search_fields as $property)		
			$where_elements[] = $this->generate_global_condition($filter, $property);

		$where = '( '.implode(' OR ', $where_elements).' )';
		$this->db->where($where);
	}
	
	protected function generate_global_condition($filter, $property)
	{
		$property = '`'.$this->table.'`.`'.$property.'`';

		$comparison = ' = ';
		$pattern = $this->db->escape($filter->pattern);
		if($filter->method == 'LIKE')
		{
			$comparison = ' LIKE ';
			$pattern = $this->db->escape('%'.$filter->pattern.'%');
		}
		
		return $property.$comparison.$pattern;
	}
	
	protected function db_result_to_collection(CI_DB_result $db_result)
	{
		$result_array = array();
		$log_entries = new EntityCollection();

		if ($db_result->result_id !== FALSE AND $db_result->num_rows() > 0)
		{
			$db_result->_data_seek(0);
			while ($row = $db_result->_fetch_assoc())
				$result_array[$row[self::PRIMARY_KEY]] = $this->row_to_log_entry($row);
		}
		
		$log_entries->collection = $result_array;
		
		return $log_entries;
	}
	
	protected function parse_db_exception(Exception $exception)
	{
		$matches = array();
		if(preg_match("/Duplicate entry '(.*)' for key '(.*?)'/i", $exception->getMessage(), $matches))
		{
			throw new Error(array($this->error_duplicated_entity));
		}
		throw $exception;
	}
	
	protected function establish_db()
	{
		$this->db = $this->db;
	}
	
	function get_client_ip()
	{
		if (!empty($_SERVER['HTTP_CLIENT_IP']))
			return $_SERVER['HTTP_CLIENT_IP'];

		if (!empty($_SERVER['HTTP_X_FORWARDED_FOR']))
			return $_SERVER['HTTP_X_FORWARDED_FOR'];

		if (!empty($_SERVER['REMOTE_ADDR']))
			return $_SERVER['REMOTE_ADDR'];
		
		return '127.0.0.1';
	}
}
