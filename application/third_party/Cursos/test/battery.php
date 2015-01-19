<?php
require_once dirname(__FILE__)."/../../TestSupport/ci_env.php";
require_once dirname(__FILE__)."/../../TestSupport/InfosacDBSetup.php";
require_once dirname(__FILE__)."/../../TestSupport/EnvironmentSetter.php";

require_once dirname(__FILE__)."/../Cursos.php";
require_once dirname(__FILE__)."/../../TestSupport/PacTablesSetup.php";
require_once dirname(__FILE__)."/../../TestSupport/MockAuth.php";
require_once dirname(__FILE__)."/../../TestSupport/CurlSupport.php";
require_once dirname(__FILE__)."/../../TestSupport/CursosSetup.php";
require_once dirname(__FILE__)."/../../TestSupport/AlumnosSetup.php";
require_once dirname(__FILE__)."/../../TestSupport/UsersSetup.php";
require_once dirname(__FILE__)."/../../TestSupport/SesionesSetup.php";
require_once dirname(__FILE__)."/../../TestSupport/ExamenesSetup.php";

require_once dirname(__FILE__)."/TestCaseCurso.php";
$test_runner->add_test_case(new TestCaseCurso());

require_once dirname(__FILE__)."/TestCaseCursosModel.php";
$test_runner->add_test_case(new TestCaseCursosModel());

require_once dirname(__FILE__)."/TestCaseCursosDomain.php";
$test_runner->add_test_case(new TestCaseCursosDomain());

require_once dirname(__FILE__)."/TestCasePacProduct.php";
$test_runner->add_test_case(new TestCasePacProduct());

require_once dirname(__FILE__)."/TestCaseCursosController.php";
$test_runner->add_test_case(new TestCaseCursosController());

require_once dirname(__FILE__)."/TestCaseCursosValidator.php";
$test_runner->add_test_case(new TestCaseCursosValidator());
