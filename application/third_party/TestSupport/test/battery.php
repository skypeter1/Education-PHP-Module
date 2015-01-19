<?php
require_once dirname(__FILE__)."/../ci_env.php";
require_once dirname(__FILE__)."/../EnvironmentSetter.php";

require_once dirname(__FILE__)."/TestCaseEnvironmentSetter.php";
$test_runner->add_test_case(new TestCaseEnvironmentSetter());
