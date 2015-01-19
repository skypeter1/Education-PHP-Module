<?php
class MockActivityLogModel extends ActivityLogModel
{
	public $trace = array();
	
	public function __construct($db = null)
	{
		if($db)
			$this->db = $db->database;
	}
	
	public function get($log_entry_id)
	{
		$this->trace[] = "get $log_entry_id";

		$log_entry = new LogEntry();
		$log_entry->id = $log_entry_id;
		$log_entry->fecha = 1346199304;
		$log_entry->action = 'Paciente::delete';
		
		return $log_entry;
	}

	public function search(Search $search)
	{
		$this->trace[] = "search ".$search->filters[0]->property;
		return new EntityCollection();
	}
	
	public function count_results(Search $search)
	{
		$this->trace[] = "count_results ".$search->filters[0]->property;
		
		return 1;
	}
	
	public function register_action($action, $object = null)
	{
		$this->trace[] = "register ".$action.' on '.$object;
		
		return true;
	}
}