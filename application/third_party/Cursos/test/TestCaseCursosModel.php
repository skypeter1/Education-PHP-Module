<?php
class TestCaseCursosModel extends TestCase
{
  public function test_class_properties()
  {
    $cursos_model = new CursosModel(DB());

    $this->assert_equals('cursos', $cursos_model->table);
    $this->assert_equals('Curso', $cursos_model->entity);
  }

  public function test_get_pac_products()
  {
    PacTablesSetup::create_products();
    InfosacDBSetup::setup_database();
    PacTablesSetup::create_bodegas();
    PacTablesSetup::insert_products_to_bodegas();

    $db = DBAccessCreator::get_db_access("educacion_development");
    $cursos_model = new CursosModel($db);

    $result = $cursos_model->get_pac_products(2);
    $this->assert_true($result instanceof EntityCollection);
      
    $this->assert_equals(5, sizeof($result->collection));

    $this->assert_equals("curso 1", $result->collection[0]["nombre"]);
    $this->assert_equals("curso 2", $result->collection[1]["nombre"]);
    $this->assert_equals("curso 3", $result->collection[2]["nombre"]);
    $this->assert_equals("curso business", $result->collection[3]["nombre"]);
    $this->assert_equals("curso social", $result->collection[4]["nombre"]);

    $this->assert_equals("1", $result->collection[0]["id"]);
    $this->assert_equals("2", $result->collection[1]["id"]);
    $this->assert_equals("5", $result->collection[2]["id"]);
    $this->assert_equals("1", $result->collection[3]["id"]);
    $this->assert_equals("2", $result->collection[4]["id"]);

    $this->assert_equals("Matriz", $result->collection[0]["nombre_bodega"]);
    $this->assert_equals("Matriz", $result->collection[1]["nombre_bodega"]);
    $this->assert_equals("Matriz", $result->collection[2]["nombre_bodega"]);
    $this->assert_equals("Amazonas", $result->collection[3]["nombre_bodega"]);
    $this->assert_equals("Amazonas", $result->collection[4]["nombre_bodega"]);

    $this->assert_equals("01", $result->collection[0]["id_bodega"]);
    $this->assert_equals("01", $result->collection[1]["id_bodega"]);
    $this->assert_equals("01", $result->collection[2]["id_bodega"]);
    $this->assert_equals("02", $result->collection[3]["id_bodega"]);
    $this->assert_equals("02", $result->collection[4]["id_bodega"]);
  }

  public function test_validate()
  {
    $cursos_model = new CursosModel(DB());

    $curso = new Curso();
    $curso->horas = "9.875";
    $curso->cupos_minimo = "765.123";
    $curso->cupos_maximo = "adad";

    $validator_errors = $cursos_model->validate($curso);

    $this->assert_equals(CursosValidator::ERROR_INVALID_INTEGER, $validator_errors[0]);
    $this->assert_equals(CursosValidator::ERROR_INVALID_INTEGER, $validator_errors[1]);
    $this->assert_equals(CursosValidator::ERROR_INVALID_INTEGER, $validator_errors[2]);
  }

  public function test_search_returns_cursos_with_bodega_nombre()
  {
    PacTablesSetup::create_products();
    InfosacDBSetup::setup_database();
    PacTablesSetup::create_bodegas();
    PacTablesSetup::insert_products_to_bodegas();
    CursosSetup::create_cursos();

    $db = DBAccessCreator::get_db_access("educacion_development");
    $cursos_model = new CursosModel($db);

    $cursos = $cursos_model->search();

    $this->assert_equals($cursos->collection[1]["bodega_nombre"], "Matriz");
    $this->assert_equals($cursos->collection[2]["bodega_nombre"], "Amazonas");
    $this->assert_equals($cursos->collection[3]["bodega_nombre"], "Matriz");
    $this->assert_equals($cursos->collection[4]["bodega_nombre"], "Condado");
  }

  public function test_search_returns_number_of_alumnos()
  {
    PacTablesSetup::create_products();
    InfosacDBSetup::setup_database();
    PacTablesSetup::create_bodegas();
    PacTablesSetup::insert_products_to_bodegas();
    CursosSetup::create_cursos();
    AlumnosSetup::create_matriculas();

    $db = DBAccessCreator::get_db_access("educacion_development");
    $cursos_model = new CursosModel($db);

    $cursos = $cursos_model->search();

    $this->assert_equals($cursos->collection[1]["matriculas"], "2");
    $this->assert_equals($cursos->collection[2]["matriculas"], "1");
    $this->assert_equals($cursos->collection[3]["matriculas"], "1");
    $this->assert_equals($cursos->collection[4]["matriculas"], "0");
  }

  public function test_move_alumnos_between_cursos()
  {
    AlumnosSetup::create_matriculas();
    $db = DBAccessCreator::get_db_access("educacion_development");
    $cursos_model = new CursosModel($db);

    $matriculas_cursos = array();
    $matriculas_cursos["2"] = array("5", "6");
    $matriculas_cursos["4"] = array("12", "7");

    $cursos_model->save_matriculas_by_curso($matriculas_cursos);

    $db->where("curso", "2");
    $result = $db->get("matriculas")->result_array();
    $this->assert_equals("5", $result[0]["alumno"]);
    $this->assert_equals("6", $result[1]["alumno"]);

    $db->where("curso", "4");
    $result = $db->get("matriculas")->result_array();
    $this->assert_equals("12", $result[0]["alumno"]);
    $this->assert_equals("7", $result[1]["alumno"]);

    //
    $matriculas_cursos = array();
    $matriculas_cursos["2"] = array("7", "8");
    $matriculas_cursos["4"] = array("13", "4");

    $cursos_model->save_matriculas_by_curso($matriculas_cursos);

    $db->where("curso", "2");
    $db->order_by("alumno");
    $result = $db->get("matriculas")->result_array();
    $this->assert_equals(2, sizeof($result));
    $this->assert_equals("7", $result[0]["alumno"]);
    $this->assert_equals("8", $result[1]["alumno"]);

    $db->where("curso", "4");
    $db->order_by("alumno");
    $result = $db->get("matriculas")->result_array();
    $this->assert_equals(2, sizeof($result));
    $this->assert_equals("4", $result[0]["alumno"]);
    $this->assert_equals("13", $result[1]["alumno"]);
  }

  public function test_move_alumnos_with_an_empty_curso()
  {

    AlumnosSetup::create_matriculas();
    $db = DBAccessCreator::get_db_access("educacion_development");
    $cursos_model = new CursosModel($db);

    $matriculas_cursos = array();
    $matriculas_cursos["2"] = array("7", "8");
    $matriculas_cursos["4"] = array();

    $cursos_model->save_matriculas_by_curso($matriculas_cursos);

    $db->where("curso", "2");
    $result = $db->get("matriculas")->result_array();
    $this->assert_equals(2, sizeof($result));
    $this->assert_equals("7", $result[0]["alumno"]);
    $this->assert_equals("8", $result[1]["alumno"]);

    $db->where("curso", "4");
    $result = $db->get("matriculas")->result_array();
    $this->assert_equals(0, sizeof($result));
  }

  public function test_get_bodegas()
  {
    PacTablesSetup::create_products();
    InfosacDBSetup::setup_database();
    PacTablesSetup::create_bodegas();

    $db = DBAccessCreator::get_db_access("educacion_development");
    $cursos_model = new CursosModel($db);

    $bodegas = $cursos_model->get_bodegas(1);

    $this->assert_equals(4, sizeof($bodegas));
  }

  public function test_save_pesos()
  {
    CursosSetup::create_cursos();

    $db = DBAccessCreator::get_db_access("educacion_development");
    $cursos_model = new CursosModel($db);

    $cursos_model->save_pesos(1, "pesos");

    $db->where("id", 1);
    $cursos = $db->get("cursos")->result_array();

    $this->assert_equals("pesos", $cursos[0]["pesos"]);

  }

  public function test_save_notas_finales()
  {
    CursosSetup::create_cursos();

    $db = DBAccessCreator::get_db_access("educacion_development");
    $cursos_model = new CursosModel($db);

    $notas_finales = array();
    $notas_finales[] = array("curso" => "1", "alumno" => "1", "nota" => "55.6");
    $notas_finales[] = array("curso" => "1", "alumno" => "2", "nota" => "90");

    $cursos_model->save_notas_finales($notas_finales);

    $notas_finales_db = $db->get("notas_finales")->result_array();

    $this->assert_equals(2, sizeof($notas_finales_db));
    $this->assert_equals("55.6", $notas_finales_db[0]["nota"]);
    $this->assert_equals("90", $notas_finales_db[1]["nota"]);

    $notas_finales = array();
    $notas_finales[] = array("curso" => "1", "alumno" => "1", "nota" => "67.8");
    $notas_finales[] = array("curso" => "1", "alumno" => "2", "nota" => "46");
    $notas_finales[] = array("curso" => "1", "alumno" => "3", "nota" => "25");

    $cursos_model->save_notas_finales($notas_finales);

    $db->order_by("alumno");
    $notas_finales_db = $db->get("notas_finales")->result_array();

    $this->assert_equals(3, sizeof($notas_finales_db));
    $this->assert_equals("67.8", $notas_finales_db[0]["nota"]);
    $this->assert_equals("46", $notas_finales_db[1]["nota"]);
    $this->assert_equals("25", $notas_finales_db[2]["nota"]);

  }

  public function test_cant_delete_curso_if_examenes_or_sesiones_atached()
  {
    CursosSetup::create_cursos();
    SesionesSetup::create_sesiones();
    ExamenesSetup::create_examenes();

    $db = DBAccessCreator::get_db_access("educacion_development");
    $cursos_model = new CursosModel($db);

    $curso = new Curso();
    $curso->id = 1;
    $curso->version = 1352301284.49;

    $error_thrown = false;

    try{
      $cursos_model->delete($curso);	
    }
    catch(Error $error)
    {
      $error_thrown = true;
    }

    $this->assert_true($error_thrown);

    $db->where("id", 1);
    $cursos = $db->get("cursos")->result_array();
    $this->assert_equals(1, sizeof($cursos));
  }

  public function test_create_generates_6digit_consecutive_identificador_foreach_bodega() 
  {
    CursosSetup::create_cursos();

    $db = DBAccessCreator::get_db_access("educacion_development");
    $cursos_model = new CursosModel($db);

    $cursos_model->create($this->get_curso_for_creation());
    $db->where("identificador", "1-000003");
    $result = $db->get("cursos")->result_array();
    $this->assert_equals(1, sizeof($result));

    $cursos_model->create($this->get_curso_for_creation("02"));
    $db->where("identificador", "2-000002");
    $result = $db->get("cursos")->result_array();
    $this->assert_equals(1, sizeof($result));
  }

  public function test_update_generates_new_identificador_if_changed_bodega(){
    CursosSetup::create_cursos();

    $db = DBAccessCreator::get_db_access("educacion_development");
    $cursos_model = new CursosModel($db);
    $modified_curso = $this->get_curso_for_creation();
    $modified_curso->id = 3;
    $modified_curso->identificador = "1-000002";
    $modified_curso->bodega = "02";
    $modified_curso->version = "1359863267.2";

    $cursos_model->update($modified_curso);
    $db_curso = $cursos_model->get(3);

    $this->assert_equals("2-000002", $db_curso->identificador);
  }

  public function test_update_maintains_identifiador_on_same_bodega(){
    CursosSetup::create_cursos();

    $db = DBAccessCreator::get_db_access("educacion_development");
    $cursos_model = new CursosModel($db);
    $modified_curso = $this->get_curso_for_creation();
    $modified_curso->id = 3;
    $modified_curso->identificador = "1-000002";
    $modified_curso->bodega = "01";
    $modified_curso->version = "1359863267.2";

    $cursos_model->update($modified_curso);
    $db_curso = $cursos_model->get(3);

    $this->assert_equals("1-000002", $db_curso->identificador);
  }

  protected function get_curso_for_creation($bodega = "01"){
    $curso = new Curso();
    $curso->version = 1352301284.49;
    $curso->nombre = "curso";
    $curso->horas = "40";
    $curso->hora_inicio = "13:00";
    $curso->hora_fin = "14:00";
    $curso->fecha_inicio = "12312312312";
    $curso->fecha_fin = "12312312316";
    $curso->cupos_minimo = "6";
    $curso->cupos_maximo = "12";
    $curso->estado = "estado";
    $curso->producto_pac = "1";
    $curso->sucursal = "sucursal";
    $curso->bodega = $bodega;
    $curso->profesor = "1";

    return $curso;
  }

}
