<?php
require_once dirname(__FILE__)."/../../TestSupport/ci_env.php";
require_once dirname(__FILE__)."/../../TestSupport/EnvironmentSetter.php";
require_once dirname(__FILE__)."/../DatabaseRepository.php";
require_once dirname(__FILE__)."/../../Fixtures/FixtureExecutioner.php";

require_once dirname(__FILE__)."/TestCaseDatabaseRepository.php";
$test_runner->add_test_case(new TestCaseDatabaseRepository());
