<?php
require_once dirname(__FILE__)."/../../TestSupport/ci_env.php";
require_once dirname(__FILE__)."/../../TestSupport/EnvironmentSetter.php";
require_once dirname(__FILE__)."/../DBAccessCreator.php";

require_once dirname(__FILE__)."/TestCaseDBAccessCreator.php";
$test_runner->add_test_case(new TestCaseDBAccessCreator());