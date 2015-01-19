<?php
ini_set("display_errors", 1);
ini_set("error_reporting", E_ALL);
require_once dirname(__FILE__)."/../../TestSupport/ci_env.php";
require_once dirname(__FILE__)."/../../TestSupport/InfosacDBSetup.php";

require_once dirname(__FILE__)."/../Alumnos.php";
require_once dirname(__FILE__)."/../../TestSupport/PacTablesSetup.php";
require_once dirname(__FILE__)."/../../TestSupport/CursosSetup.php";
require_once dirname(__FILE__)."/../../TestSupport/AlumnosSetup.php";
require_once dirname(__FILE__)."/../../TestSupport/MockAuth.php";
require_once dirname(__FILE__)."/../../TestSupport/CurlSupport.php";
require_once dirname(__FILE__)."/../../TestSupport/EnvironmentSetter.php";

require_once dirname(__FILE__)."/TestCaseAlumno.php";
$test_runner->add_test_case(new TestCaseAlumno());

require_once dirname(__FILE__)."/TestCaseAlumnosModel.php";
$test_runner->add_test_case(new TestCaseAlumnosModel());

require_once dirname(__FILE__)."/TestCaseAlumnosDomain.php";
$test_runner->add_test_case(new TestCaseAlumnosDomain());

require_once dirname(__FILE__)."/TestCasePacClient.php";
$test_runner->add_test_case(new TestCasePacClient());

require_once dirname(__FILE__)."/TestCaseAlumnosController.php";
$test_runner->add_test_case(new TestCaseAlumnosController());
