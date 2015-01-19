<?php
class CursosValidator extends Validator
{
	const ERROR_INVALID_INTEGER 	= 'error_invalid_integer';
	const ERROR_INVALID_FLOAT 	= 'error_invalid_float';


	public static function validate(Curso $curso)
	{
		$errors = array();
		
		if(!self::valid_integer($curso->horas))
			$errors[] = self::ERROR_INVALID_INTEGER;
		
		if(!self::valid_integer($curso->cupos_minimo))
			$errors[] = self::ERROR_INVALID_INTEGER;
		
		if(!self::valid_integer($curso->cupos_maximo))
			$errors[] = self::ERROR_INVALID_INTEGER;

		if(!self::valid_float($curso->precio_prematricula))
			$errors[] = self::ERROR_INVALID_FLOAT;
			
		return $errors;
	}
	
	public static function valid_integer($to_check)
	{
		if($to_check == "") return true;

		return preg_match("/^\d+$/", $to_check);
	}

	public static function valid_float($to_check)
	{
		if($to_check == "") return true;

		return preg_match("/^\d+(\.\d+)?$/", $to_check);
	}
}
