<?php
require_once dirname(__FILE__)."/../../TestSupport/ci_env.php";
require_once dirname(__FILE__)."/../FixtureExecutioner.php";
require_once dirname(__FILE__).'/support/TestingFixtureExecutioner.php';

require_once dirname(__FILE__)."/TestCaseFixtureExecutioner.php";
$test_runner->add_test_case(new TestCaseFixtureExecutioner());
