<?php
class RelationalData 
{
	protected $current_state;
	protected $wanted_state;

	public function __construct(array $current_state, array $wanted_state)
	{
		$this->current_state = $current_state;
		$this->wanted_state = $wanted_state;
	}

	public function get_inserts()
	{
		if(empty($this->current_state)) return $this->wanted_state;
		if($this->current_state == $this->wanted_state) return array();

		$result = array();

		foreach($this->wanted_state as $left_term => $state)
		{
			$result[$left_term] = array_values(array_diff($state, $this->current_state[$left_term]));
		}

		return $result;
	}

	public function get_deletes()
	{
		if(empty($this->current_state)) return array();
		if(empty($this->wanted_state)) return $this->current_state;
		if($this->current_state == $this->wanted_state) return array();

		$result = array();

		foreach($this->wanted_state as $left_term => $state)
		{
			$result[$left_term] = array_values(array_diff($this->current_state[$left_term], $state));
		}

		$result_indexes = array_keys($result);
		if(sizeof($result) == 1 AND empty($result[$result_indexes[0]])) return array();

		return $result;
	}

}