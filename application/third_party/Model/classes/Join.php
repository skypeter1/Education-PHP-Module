<?php
class Join
{
	public $table;
	public $condition;
	public $fields;
	public $type;
	
	public function __construct($table, $condition, $fields, $type = 'left outer')
	{
		$this->table = $table;
		$this->condition = $condition;
		$this->type = $type;

		if(is_string($fields))
			$fields = array($fields);
		
		$this->fields = $fields;
	}
}
