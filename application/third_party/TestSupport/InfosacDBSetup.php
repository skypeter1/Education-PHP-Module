<?php
class InfosacDBSetup
{

  public static function add_user_with_bodega_restriction()
  {
    $database_access = DBAccessCreator::get_db_access('benedict_infosac');
    $user_data = array('username' => 'restricted',
      'userpwd' => md5("1234"),
      'nombreusuario' => "restricted",
      'emailusr' => "restricted@restricted.com",
      'UID' => 3);

    $database_access->insert('usuario', $user_data);

    return $database_access->insert_id();
  }

  public static function add_user_to_database($username = "username")
  {
    $database_access = DBAccessCreator::get_db_access('benedict_infosac');
    $user_data = array('username' => $username,
      'userpwd' => md5("1234"),
      'nombreusuario' => "arya",
      'emailusr' => "Arya@gmail.com",
      'UID' => 2);

    $database_access->insert('usuario', $user_data);

    return $database_access->insert_id();
  }

  public static function setup_database()
  {
    self::empty_tables();

    $database_access = DB();
    $fixture_executor = new FixtureExecutioner($database_access);

    $fixture_path = dirname(__FILE__)."/../Fixtures/fixtures/main/10_create_database.sql";

    $fixture_executor->execute_fixture($fixture_path, 'benedict_infosac');

    $fixture_path = dirname(__FILE__)."/../Fixtures/fixtures/testing/create_infosac_usuarios_table.sql";

    $fixture_executor->execute_fixture($fixture_path, 'benedict_infosac');

    $fixture_path = dirname(__FILE__)."/../Fixtures/fixtures/testing/create_infosac_empresausuario_table.sql";

    $fixture_executor->execute_fixture($fixture_path, 'benedict_infosac');

    $fixture_path = dirname(__FILE__)."/../Fixtures/fixtures/testing/testing_infosac_empresausuario.sql";
    
    $fixture_executor->execute_fixture($fixture_path, 'benedict_infosac');

    $fixture_path = dirname(__FILE__)."/../Fixtures/fixtures/testing/create_infosac_empresa_table.sql";

    $fixture_executor->execute_fixture($fixture_path, 'benedict_infosac');

    $fixture_path = dirname(__FILE__)."/../Fixtures/fixtures/testing/testing_infosac_empresa.sql";
     
    $fixture_executor->execute_fixture($fixture_path, 'benedict_infosac');
 
  }

  public static function empty_tables()
  {
    $database_access = DBAccessCreator::get_db_access('benedict_infosac');
    try
    {
      $database_access->truncate('benedict_infosac.usuario');
      $database_access->truncate('benedict_infosac.empresausuario');
      $database_access->truncate('benedict_infosac.empresa');
    }
    catch(Exception $exception)
    {
      if ($exception->getCode() != 100)
        throw $exception;
    }
  }

}
