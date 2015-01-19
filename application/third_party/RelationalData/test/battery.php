<?php
require_once dirname(__FILE__)."/../../TestSupport/ci_env.php";
require_once dirname(__FILE__)."/../../Fixtures/FixtureExecutioner.php";

require_once dirname(__FILE__)."/../RelationalData.php";

require_once dirname(__FILE__)."/TestCaseRelationalData.php";
$test_runner->add_test_case(new TestCaseRelationalData());
