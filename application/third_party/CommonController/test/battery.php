<?php
ini_set("display_errors", 1);
require_once dirname(__FILE__)."/../../TestSupport/ci_env.php";
require_once dirname(__FILE__)."/../../TestSupport/EnvironmentSetter.php";
require_once dirname(__FILE__)."/../../TestSupport/CurlSupport.php";
require_once dirname(__FILE__)."/../../TestSupport/UsersSetup.php";
require_once dirname(__FILE__)."/../../Fixtures/FixtureExecutioner.php";

require_once dirname(__FILE__)."/TestCaseCommonController.php";
$test_runner->add_test_case(new TestCaseCommonController());
