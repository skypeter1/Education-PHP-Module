<?php
class Concatenation
{
	public $fields;
	public $concatenated_name;
	
	public function __construct($fields = array())
	{
		if(is_array($fields))
			$this->fields = $fields;
	}
	
	public function get_concatenation_query()
	{
		if(!is_array($this->fields)) return null;
		
		$quoted_fields = array();
		foreach($this->fields as $field)
		{
			if($field == ' ')
			{
				$quoted_fields[] = "'".$field."'";
				continue;
			}
				
			$quoted_fields[] = '`'.str_replace('.', '`.`', $field).'`';
		}
		
		$query = 'CONCAT('.implode(',', $quoted_fields).')';
		
		return $query;
	}
}