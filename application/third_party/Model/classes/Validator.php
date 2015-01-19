<?php
class Validator
{
	const ERROR_REQUIRED_ = 'error_required_';
	
	public static $required_properties = array();
	
	public static function required($value)
	{
		if((is_null($value)) OR ($value == ''))
			return false;
		
		return true;
	}
	
	public static function validate_required_properties($entity)
	{
		$errors = array();
		foreach(self::$required_properties as $property)
		{
			if(!self::required($entity->$property))
				$errors[] = self::ERROR_REQUIRED_.$property;
		}
		return $errors;		
	}
	
	public static function email($value)
	{
		/*if(!filter_var($value, FILTER_VALIDATE_EMAIL))
			return false;*/
			
		return true;
	}
}
