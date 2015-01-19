<?php
class TestCaseCursosDomain extends TestCase
{
  public function test_correct_model()
  {
    $domain = new CursosDomain(DB(), new MockAuth());

    $this->assert_equals("CursosModel", $domain->models["model"]["modelclass"]);
  }

  public function test_get_pac_products()
  {
    PacTablesSetup::create_products();
    InfosacDBSetup::setup_database();
    InfosacDBSetup::add_user_to_database();
    $db = DBAccessCreator::get_db_access("benedict_langschool");
    $domain = new CursosDomain($db, new MockAuth);

    @session_start();
    $_SESSION["user"] = "username";

    $result = $domain->get_pac_products();

    $this->assert_equals(5, sizeof($result->collection));
  }

  public function test_get_overview()
  {
    CursosSetup::create_notas();
    UsersSetup::create_users();
    InfosacDBSetup::setup_database();
    InfosacDBSetup::add_user_to_database();

    $db = DBAccessCreator::get_db_access("educacion_development");
    $domain = new CursosDomain($db, new MockAuth);

    $curso = 10;
    $overview = $domain->get_overview($curso);

    $examenes = $overview["examenes"];


    $this->assert_equals("Categoria 2", $examenes[0]["categoria"]);
    $this->assert_equals("Examen 1", $examenes[0]["examenes"][0]["titulo"]);
    $this->assert_equals("Examen 2", $examenes[0]["examenes"][1]["titulo"]);

    $this->assert_equals("Categoria 3", $examenes[1]["categoria"]);
    $this->assert_equals("Examen 3", $examenes[1]["examenes"][0]["titulo"]);

    $this->assert_equals("Categoria 1", $examenes[2]["categoria"]);
    $this->assert_equals("Examen 4", $examenes[2]["examenes"][0]["titulo"]);

    $alumnos = $overview["alumnos"];

    $this->assert_equals(5, sizeof($alumnos));

    $this->assert_equals(3, sizeof($alumnos[0]["notas"]));
    $this->assert_equals(45, $alumnos[0]["notas"][0][0]["nota"]);
    $this->assert_equals("Categoria 2", $alumnos[0]["notas"][0][0]["categoria"]);

    $this->assert_equals(99, $alumnos[0]["notas"][0][1]["nota"]);
    $this->assert_equals("Categoria 2", $alumnos[0]["notas"][0][1]["categoria"]);

    $this->assert_equals(87, $alumnos[0]["notas"][1][0]["nota"]);
    $this->assert_equals("Categoria 3", $alumnos[0]["notas"][1][0]["categoria"]);

    $this->assert_equals(60, $alumnos[0]["notas"][2][0]["nota"]);
    $this->assert_equals("Categoria 1", $alumnos[0]["notas"][2][0]["categoria"]);

    $this->assert_equals(100, $alumnos[3]["asistencia"]);
    $this->assert_equals(66.7, $alumnos[4]["asistencia"]);

  }

  public function test_get_report()
  {
    CursosSetup::create_notas();
    UsersSetup::create_users();
    InfosacDBSetup::setup_database();
    InfosacDBSetup::add_user_to_database();

    $db = DBAccessCreator::get_db_access("educacion_development");
    $domain = new CursosDomain($db, new MockAuth);

    $cursos = $domain->get_report(new Search());

    $this->assert_equals(6, sizeof($cursos->collection));

    $curso_alumnos = $cursos->collection[5]["alumnos"];
    $this->assert_equals(3, sizeof($curso_alumnos));

    $this->assert_equals("Salvador", $curso_alumnos[0]["nombre"]);
  }

  public function test_get_cursos_restricted_by_bodega_permission(){

    PacTablesSetup::create_products();
    CursosSetup::create_cursos(); 
    InfosacDBSetup::setup_database();
    InfosacDBSetup::add_user_with_bodega_restriction();
    $db = DBAccessCreator::get_db_access("educacion_development");
    $user_id = 3;        
     
    @session_start();
    $_SESSION["user"] = "restricted";  
    
    $domain = new CursosDomain($db, new MockAuth(true, "administrador", $user_id));
       
    $cursos_collection = $domain->search(new Search());
    $cursos = $cursos_collection->collection;
         
    $this->assert_equals(4, sizeof($cursos));
       
  }
}
