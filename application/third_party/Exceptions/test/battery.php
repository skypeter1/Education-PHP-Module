<?php
require_once dirname(__FILE__)."/../../TestSupport/ci_env.php";
require_once dirname(__FILE__)."/../Exceptions.php";

require_once dirname(__FILE__)."/TestCaseError.php";
$test_runner->add_test_case(new TestCaseError());

require_once dirname(__FILE__)."/TestCaseExceptions.php";
$test_runner->add_test_case(new TestCaseExceptions());