<?php
class TestCaseExamenesDomain extends TestCase
{
	public function test_correct_model()
	{
		$domain = new ExamenesDomain(DB(), new MockAuth());

		$this->assert_equals("ExamenesModel", $domain->models["model"]["modelclass"]);
	}

	public function test_assigns_current_user_as_profesor_if_profesor()
	{
		ExamenesSetup::create_table();
		CursosSetup::create_cursos();

		$database_access_creator = new DBAccessCreator();
  		$db = $database_access_creator->get_db_access('educacion_development');
		$domain = new ExamenesDomain($db, new MockAuth(false, "profesor"));

		$examen = new Examen();
		$examen->titulo = "test";
		$examen->curso = "1";
		$examen->fecha = "1234567";
		$examen->observaciones = "test";
		$examen->categoria = "categoria";

		$domain->create($examen);

		$result = $db->get("examenes")->result_array();

		$this->assert_equals(2, $result[0]["profesor"]);

	}

	public function test_assigns_current_user_as_profesor_if_profesor_on_update()
	{
		ExamenesSetup::create_table();

		$database_access_creator = new DBAccessCreator();
  		$db = $database_access_creator->get_db_access('educacion_development');
		$domain = new ExamenesDomain($db, new MockAuth(false, "profesor"));

		$examen = new Examen();
		$examen->titulo = "test";
		$examen->curso = "1";
		$examen->fecha = "1234567";
		$examen->observaciones = "test";
		$examen->categoria = "categoria";

		$domain->create($examen);
		$examen->id = "1";
		$examen->profesor = "5";
		$domain->update($examen);

		$result = $db->get("examenes")->result_array();
		$this->assert_equals(2, $result[0]["profesor"]);
	}

	public function test_search_filters_examenes_by_current_user_if_profesor()
	{
		ExamenesSetup::create_examenes();

		$database_access_creator = new DBAccessCreator();
  		$db = $database_access_creator->get_db_access('educacion_development');
		$domain = new ExamenesDomain($db, new MockAuth(false, "profesor"));

		$result = $domain->search(new Search());

		$this->assert_equals(2, sizeof($result->collection));
	}

  public function test_get_sesiones_restricted_by_bodega_permission(){

    PacTablesSetup::create_products();
    CursosSetup::create_cursos();
    ExamenesSetup::create_examenes();
    InfosacDBSetup::setup_database();
    InfosacDBSetup::add_user_with_bodega_restriction();
    $db = DBAccessCreator::get_db_access("educacion_development");
    $user_id = 3; 

    @session_start();
    $_SESSION["user"] = "restricted";

    $domain = new ExamenesDomain($db, new MockAuth(false, "administrador", $user_id));
    $examenes_collection = $domain->search(new Search());
    $examenes = $examenes_collection->collection;

    $this->assert_equals(3, sizeof($examenes));
 
  }
}
