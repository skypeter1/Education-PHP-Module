<?php
require_once dirname(__FILE__)."/../../TestSupport/ci_env.php";
require_once dirname(__FILE__)."/../../TestSupport/EnvironmentSetter.php";
require_once dirname(__FILE__)."/../ActivityLog.php";
require_once dirname(__FILE__)."/../../TestSupport/MockAuth.php";
require_once dirname(__FILE__)."/support/MockEntityModel.php";
require_once dirname(__FILE__)."/../../Fixtures/FixtureExecutioner.php";
require_once dirname(__FILE__)."/../../TestSupport/MockActivityLogModel.php";

require_once dirname(__FILE__)."/TestCaseLogEntry.php";
$test_runner->add_test_case(new TestCaseLogEntry());

require_once dirname(__FILE__)."/TestCaseLogEntryValidator.php";
$test_runner->add_test_case(new TestCaseLogEntryValidator());

require_once dirname(__FILE__)."/TestCaseActivityLogModel.php";
$test_runner->add_test_case(new TestCaseActivityLogModel());

require_once dirname(__FILE__)."/TestCaseActivityLogDomain.php";
$test_runner->add_test_case(new TestCaseActivityLogDomain());
