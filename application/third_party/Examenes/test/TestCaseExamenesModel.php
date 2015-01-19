<?php
class TestCaseExamenesModel extends TestCase
{
	public function test_class_properties()
	{
		$examenes_model = new ExamenesModel(DB());
		
		$this->assert_equals('examenes', $examenes_model->table);
		$this->assert_equals('Examen', $examenes_model->entity);
	}

	public function test_save_notas()
	{

		ExamenesSetup::create_table();

		$database_access_creator = new DBAccessCreator();
  		$db = $database_access_creator->get_db_access('educacion_development');
		
  		$model = new ExamenesModel($db);

  		$notas = array();
  		$notas[] = array("examen" => "1", "alumno" => "2", "nota" => "56", "observaciones" => "text");
  		$notas[] = array("examen" => "5", "alumno" => "2", "nota" => "99", "observaciones" => "text");
  		$model->save_notas($notas);

  		$result = $db->get("notas")->result_array();
  		$this->assert_equals(2, sizeof($result));


		$notas = array();
  		$notas[] = array("examen" => "1", "alumno" => "2", "nota" => "78", "observaciones" => "text_modified");
  		$notas[] = array("examen" => "1", "alumno" => "5", "nota" => "44", "observaciones" => "new");
  	
  		$model->save_notas($notas);

		$result = $db->get("notas")->result_array();
  		$this->assert_equals(3, sizeof($result));

	}

	public function test_get_notas()
	{
		ExamenesSetup::create_notas();
		
		$database_access_creator = new DBAccessCreator();
  		$db = $database_access_creator->get_db_access('educacion_development');
  		$model = new ExamenesModel($db);

  		$notas = $model->get_notas();
  		$this->assert_equals(6, sizeof($notas));

  		$wanted_examen = 1;
  		$notas = $model->get_notas($wanted_examen);

  		$this->assert_equals(3, sizeof($notas));
	}

	public function test_delete_examen()
	{
		ExamenesSetup::create_examenes();
		ExamenesSetup::create_notas();
		
		$database_access_creator = new DBAccessCreator();
  		$db = $database_access_creator->get_db_access('educacion_development');
  		$model = new ExamenesModel($db);

  		$examen = new Examen();
  		$examen->id = 1;
  		$examen->version = 1;
  		$model->delete($examen);

  		$db->where("examen", 1);
  		$notas = $db->get("notas")->result_array();
  		$this->assert_equals(0, sizeof($notas));

	}

}