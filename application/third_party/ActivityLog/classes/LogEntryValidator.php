<?php
class LogEntryValidator extends Validator
{
	const ERROR_INVALID_USER 		= 'error_invalid_user';
	const ERROR_INVALID_ACTION		= 'error_invalid_action';
	const ERROR_INVALID_OBJECT		= 'error_invalid_object';
	const ERROR_INVALID_FECHA		= 'error_invalid_fecha';
	const ERROR_INVALID_IP_ADDRESS	= 'error_invalid_ip_address';
	
	public static $no_object_needed_actions = array('Inicio de sesión', 'Cierre de sesión');
	
	public static function validate(LogEntry $log_entry)
	{
		$errors = array();
			
		if(!self::required($log_entry->user))
			$errors[] = self::ERROR_INVALID_USER;
			
		if(!self::required($log_entry->action))
			$errors[] = self::ERROR_INVALID_ACTION;
			
		if(!self::required($log_entry->object) AND !in_array($log_entry->action, self::$no_object_needed_actions))
			$errors[] = self::ERROR_INVALID_OBJECT;
			
		if(!self::required($log_entry->fecha))
			$errors[] = self::ERROR_INVALID_FECHA;
			
		if(!self::required($log_entry->ip_address))
			$errors[] = self::ERROR_INVALID_IP_ADDRESS;
			
		return $errors;
	}
}