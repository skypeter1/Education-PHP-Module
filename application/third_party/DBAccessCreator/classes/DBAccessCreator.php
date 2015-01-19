<?php
class DBAccessCreator
{
	public static function get_db_access($db_name = '')
	{       
		$database_params = array();
		$database_params['hostname'] = 'localhost';
		$database_params['username'] = 'root';
		$database_params['password'] = '';
		$database_params['database'] = $db_name;
		$database_params['dbdriver'] = 'mysql';
		$database_params['dbprefix'] = '';
		$database_params['pconnect'] = FALSE;
		$database_params['db_debug'] = TRUE;
		$database_params['cache_on'] = FALSE;
		$database_params['cachedir'] = '';
		$database_params['char_set'] = 'utf8';
		$database_params['dbcollat'] = 'utf8_general_ci';
		$database_params['swap_pre'] = '';
		$database_params['autoinit'] = TRUE;
		$database_params['stricton'] = FALSE;
		return DB($database_params);
	}
}