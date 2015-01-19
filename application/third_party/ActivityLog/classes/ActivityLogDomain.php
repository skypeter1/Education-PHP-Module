<?php
class ActivityLogDomain
{
	public $model;
	public $auth;
	
	public function __construct(CI_DB $db, Auth $auth)
	{
		$this->auth = $auth;
		$this->db = $db;
		$this->model = new ActivityLogModel($db, $auth);
	}

	public function get($log_entry_id)
	{
		$this->auth->check($this->model->entity.'::'.__FUNCTION__);
		
		return $this->model->get($log_entry_id);
	}

	public function search(Search $search)
	{
		$this->auth->check($this->model->entity.'::'.__FUNCTION__);

		return $this->model->search($search);
	}
	
	public function count_results(Search $search)
	{
		$this->auth->check($this->model->entity.'::'.__FUNCTION__);
		
		return $this->model->count_results($search);
	}
	
	public function json_to_entity($data)
	{
		$log_entry = new LogEntry();
		$log_entry->id = $data['id'];
		
		return $log_entry;
	}
}