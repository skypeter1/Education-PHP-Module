<?php
require_once dirname(__FILE__)."/../../TestSupport/ci_env.php";
require_once dirname(__FILE__)."/../../TestSupport/EnvironmentSetter.php";
require_once dirname(__FILE__)."/../../Fixtures/FixtureExecutioner.php";
require_once dirname(__FILE__)."/../Auth.php";
require_once dirname(__FILE__)."/support/MockSession.php";
require_once dirname(__FILE__)."/support/MockUsersModel.php";
require_once dirname(__FILE__)."/../../../config/development/permissions_list.php";
require_once dirname(__FILE__)."/../../TestSupport/MockActivityLogModel.php";
require_once dirname(__FILE__)."/../../TestSupport/InfosacDBSetup.php";
require_once dirname(__FILE__)."/../../TestSupport/UsersSetup.php";

require_once dirname(__FILE__)."/TestCaseAuth.php";
$test_runner->add_test_case(new TestCaseAuth());

require_once dirname(__FILE__)."/TestCaseAuthController.php";
$test_runner->add_test_case(new TestCaseAuthController());

require_once dirname(__FILE__)."/TestCasePermissions.php";
$test_runner->add_test_case(new TestCasePermissions());

require_once dirname(__FILE__)."/TestCaseAuthPAC.php";
$test_runner->add_test_case(new TestCaseAuthPAC());
