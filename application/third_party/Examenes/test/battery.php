<?php
require_once dirname(__FILE__)."/../../TestSupport/ci_env.php";
require_once dirname(__FILE__)."/../../TestSupport/InfosacDBSetup.php";
require_once dirname(__FILE__)."/../../TestSupport/EnvironmentSetter.php";

require_once dirname(__FILE__)."/../Examenes.php";
require_once dirname(__FILE__)."/../../TestSupport/PacTablesSetup.php";
require_once dirname(__FILE__)."/../../TestSupport/MockAuth.php";
require_once dirname(__FILE__)."/../../TestSupport/CurlSupport.php";
require_once dirname(__FILE__)."/../../TestSupport/CursosSetup.php";
require_once dirname(__FILE__)."/../../TestSupport/AlumnosSetup.php";
require_once dirname(__FILE__)."/../../TestSupport/ExamenesSetup.php";

require_once dirname(__FILE__)."/TestCaseExamen.php";
$test_runner->add_test_case(new TestCaseExamen());

require_once dirname(__FILE__)."/TestCaseExamenesModel.php";
$test_runner->add_test_case(new TestCaseExamenesModel());

require_once dirname(__FILE__)."/TestCaseExamenesDomain.php";
$test_runner->add_test_case(new TestCaseExamenesDomain());

require_once dirname(__FILE__)."/TestCaseExamenesController.php";
$test_runner->add_test_case(new TestCaseExamenesController());
