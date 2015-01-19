<?php
class UserValidator extends Validator
{
	const ERROR_INVALID_PASSWORD 	= 'error_invalid_password';
	const ERROR_INVALID_EMAIL 		= 'error_invalid_email';
	const ERROR_INVALID_NAME 		= 'error_invalid_name';
	const ERROR_INVALID_ROL		 	= 'error_invalid_rol';
	const ERROR_INVALID_DOCTOR_CODE	= 'error_invalid_doctor_code';
	
	const DOCTOR_ROL					= 'Doctor/a';
	const NURSE_ROL					= 'Enfermero/a';
	const ADMINISTRATIVE_ROL		= 'Administrativo/a'; 
	
	public static $valid_rol = array("profesor");

	public static function validate(User $user, $validate_password = true)
	{
		$errors = array();
		/*if(!self::email($user->email))
            $errors[] = self::ERROR_INVALID_EMAIL;*/
			
		if(!self::required($user->name))
			$errors[] = self::ERROR_INVALID_NAME;
			
		/*if(!self::required($user->surname))
			$errors[] = self::ERROR_INVALID_SURNAME;*/
		
		/*if(!self::required($user->consultorio))
			$errors[] = self::ERROR_INVALID_CONSULTORIO;*/
		
		if(!self::valid_rol($user->rol))
			$errors[] = self::ERROR_INVALID_ROL;
		
		if($validate_password AND !self::password($user->password))
			$errors[] = self::ERROR_INVALID_PASSWORD;
			
		/*if(($user->rol == self::DOCTOR_ROL) && !self::required($user->doctor_code))
			$errors[] = self::ERROR_INVALID_DOCTOR_CODE;*/
		
		return $errors;
	}

	public static function password($password)
	{
		return self::required($password);
	}
	
	public static function valid_rol($rol)
	{
		return in_array($rol, self::$valid_rol);
	}
}
