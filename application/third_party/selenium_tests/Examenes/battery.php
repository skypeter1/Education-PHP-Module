<?php

require_once dirname(__FILE__)."/../../TestSupport/ci_env.php";
require_once dirname(__FILE__)."/../../TestSupport/EnvironmentSetter.php";
require_once dirname(__FILE__)."/../../Fixtures/FixtureExecutioner.php";
require_once dirname(__FILE__)."/../../TestSupport/PacTablesSetup.php";
require_once dirname(__FILE__)."/../../TestSupport/InfosacDBSetup.php";
require_once dirname(__FILE__)."/../../TestSupport/SesionesSetup.php";
require_once dirname(__FILE__)."/../../TestSupport/UsersSetup.php";
require_once dirname(__FILE__)."/../../TestSupport/ExamenesSetup.php";
require_once dirname(__FILE__)."/../../TestSupport/CursosSetup.php";
require_once dirname(__FILE__)."/../CommonActions.php";

require_once dirname(__FILE__)."/TestCaseExamenes.php";
$test_runner->add_test_case(new TestCaseExamenes());

require_once dirname(__FILE__)."/TestCaseExamenesProfesor.php";
$test_runner->add_test_case(new TestCaseExamenesProfesor());