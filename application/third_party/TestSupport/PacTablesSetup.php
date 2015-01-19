<?php
class PacTablesSetup
{
  public static function create_products()
  {
    self::empty_product_tables();

    $database_access = DB();
    $fixture_executor = new FixtureExecutioner($database_access);
    
    $fixture_path = dirname(__FILE__)."/../Fixtures/fixtures/testing/43_maepro_table.sql";
    $fixture_executor->execute_fixture($fixture_path, 'benedict');
    $fixture_executor->execute_fixture($fixture_path, 'benedict_langschool');
         
    $fixture_path = dirname(__FILE__)."/../Fixtures/fixtures/testing/42_testing_productos_pac.sql";
    $fixture_executor->execute_fixture($fixture_path, 'benedict');
    $fixture_executor->execute_fixture($fixture_path, 'benedict_langschool');
          
       
  }

  public static function create_clients()
  {
    self::empty_table("maecte");

    $database_access = DB();
    $fixture_executor = new FixtureExecutioner($database_access);

    $fixture_path = dirname(__FILE__)."/../Fixtures/fixtures/testing/44_maecte_table.sql";
    $fixture_executor->execute_fixture($fixture_path, 'benedict');
    $fixture_executor->execute_fixture($fixture_path, 'benedict_langschool');
  
    $fixture_path = dirname(__FILE__)."/../Fixtures/fixtures/testing/45_testing_clientes_pac.sql";
    $fixture_executor->execute_fixture($fixture_path, 'benedict');
    $fixture_executor->execute_fixture($fixture_path, 'benedict_langschool');
  } 

  public static function create_bodegas()
  {
    self::empty_table("maetab");

    $database_access = DB();
    $fixture_executor = new FixtureExecutioner($database_access);

    $fixture_path = dirname(__FILE__)."/../Fixtures/fixtures/testing/create_maetab_table.sql";
    $fixture_executor->execute_fixture($fixture_path, 'benedict');

    $fixture_executor->execute_fixture($fixture_path, 'benedict_langschool');    
    
    $fixture_path = dirname(__FILE__)."/../Fixtures/fixtures/testing/testing_bodegas.sql";
    $fixture_executor->execute_fixture($fixture_path, 'benedict');
           
    $fixture_executor->execute_fixture($fixture_path, 'benedict_langschool');

    $fixture_path = dirname(__FILE__)."/../Fixtures/fixtures/main/10_create_database.sql";
    $fixture_executor->execute_fixture($fixture_path, 'benedict_amazonas');

    $fixture_path = dirname(__FILE__)."/../Fixtures/fixtures/main/10_create_database.sql";
    $fixture_executor->execute_fixture($fixture_path, 'benedict_cotocollao');

    $fixture_path = dirname(__FILE__)."/../Fixtures/fixtures/main/10_create_database.sql";
    $fixture_executor->execute_fixture($fixture_path, 'benedict_condado');
  }

  public static function insert_products_to_bodegas()
  {
    $database_access = DB();
    self::empty_bodegas_table("maepro");
    $fixture_executor = new FixtureExecutioner($database_access);

    $fixture_path = dirname(__FILE__)."/../Fixtures/fixtures/testing/43_maepro_table.sql";
    $fixture_executor->execute_fixture($fixture_path, 'benedict_amazonas');
    $fixture_executor->execute_fixture($fixture_path, 'benedict_cotocollao');
    $fixture_executor->execute_fixture($fixture_path, 'benedict_condado');
  
    $fixture_path = dirname(__FILE__)."/../Fixtures/fixtures/testing/amazonas_bodega_testing_products.sql";
    $fixture_executor->execute_fixture($fixture_path, 'benedict_amazonas');
 
//    $fixture_path = dirname(__FILE__)."/../Fixtures/fixtures/testing/cotocollao_bodega_testing_products.sql";
//    $fixture_executor->execute_fixture($fixture_path, 'benedict_cotocollao');
 
//    $fixture_path = dirname(__FILE__)."/../Fixtures/fixtures/testing/condado_bodega_testing_products.sql";
//    $fixture_executor->execute_fixture($fixture_path, 'benedict_condado');

        
  }

  public static function empty_product_tables()
  {
    self::empty_table("maepro");
  }

  public static function empty_table($table)
  { 
    
       
    $database_access = DBAccessCreator::get_db_access('benedict_langschool');
    
    try
    {
      
      $database_access->truncate("benedict.$table");
      $database_access->truncate("benedict_langschool.$table");
          
    }      
    catch(Exception $exception)
    {
      if ($exception->getCode() != 100){
          throw $exception;
      } 
        
    }
  }

  public static function empty_bodegas_table($table)
  {
    $database_amazonas_access = DBAccessCreator::get_db_access('benedict_amazonas');
    $database_cotocollao_access = DBAccessCreator::get_db_access('benedict_cotocollao');
    $database_cotocollao_access = DBAccessCreator::get_db_access('benedict_condado');
    
    $database_cotocollao_access = DBAccessCreator::get_db_access('benedict_langschool');
    
    try
    {
      $database_amazonas_access->truncate("benedict_amazonas.$table");
      $database_cotocollao_access->truncate("benedict_cotocollao.$table");
      $database_cotocollao_access->truncate("benedict_condado.$table");
      
      $database_cotocollao_access->truncate("benedict_langschool.$table");
      
        
    }
    catch(Exception $exception)
    {
      if ($exception->getCode() != 100){

        throw $exception;
      }   
    }
  }

  public static function insert_proveedores_to_bodegas()
  {
        
    $database_access = DB();
    self::empty_table("maepag");
    self::empty_bodegas_table("maepag");
      
    
    $fixture_executor = new FixtureExecutioner($database_access);
 
    $fixture_path = dirname(dirname(__FILE__))."/Fixtures/fixtures/testing/create_maepag_table.sql";
          
    $fixture_executor->execute_fixture($fixture_path, 'benedict_amazonas');
    $fixture_executor->execute_fixture($fixture_path, 'benedict_cotocollao');
    $fixture_executor->execute_fixture($fixture_path, 'benedict_condado');
    
    $fixture_executor->execute_fixture($fixture_path, 'benedict_langschool');
     
    $fixture_path = dirname(dirname(__FILE__))."/Fixtures/fixtures/testing/testing_proveedores_pac.sql";
    $fixture_executor->execute_fixture($fixture_path, 'benedict');
           
    $fixture_executor->execute_fixture($fixture_path, 'benedict_langschool');
      
    //Incluir benedict_langschool para poder pasar los tests

    $fixture_path = dirname(dirname(__FILE__))."/Fixtures/fixtures/testing/amazonas_bodega_testing_proveedores.sql";
    $fixture_executor->execute_fixture($fixture_path, 'benedict_amazonas');

    $fixture_path = dirname(dirname(__FILE__))."/Fixtures/fixtures/testing/cotocollao_bodega_testing_proveedores.sql";
    $fixture_executor->execute_fixture($fixture_path, 'benedict_cotocollao'); 
       
//    $fixture_path = dirname(dirname(__FILE__))."/Fixtures/fixtures/testing/benedict_langschool_bodega_testing_proveedores.sql";
//    $fixture_executor->execute_fixture($fixture_path, 'benedict_langschool'); 
    
         
        
  } 
 
  public static function preparing_pac_tables_for_pagos()
  {
    self::empty_table("maetab");
    self::empty_table("maeord30");

    $database_access = DB();
    $fixture_executor = new FixtureExecutioner($database_access);

    $fixture_path = dirname(__FILE__)."/../Fixtures/fixtures/testing/create_maetab_table.sql";
    $fixture_executor->execute_fixture($fixture_path, 'benedict');
    $fixture_executor->execute_fixture($fixture_path, 'benedict_langschool');
 
    $fixture_path = dirname(__FILE__)."/../Fixtures/fixtures/testing/testing_pagos_maetab_table.sql";
    $fixture_executor->execute_fixture($fixture_path, 'benedict');	
    $fixture_executor->execute_fixture($fixture_path, 'benedict_langschool');
  }  
}
