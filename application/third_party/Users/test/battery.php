<?php
require_once dirname(__FILE__)."/../../TestSupport/ci_env.php";
require_once dirname(__FILE__)."/../../TestSupport/EnvironmentSetter.php";
require_once dirname(__FILE__)."/../../TestSupport/InfosacDBSetup.php";
require_once dirname(__FILE__)."/../../TestSupport/PacTablesSetup.php";
require_once dirname(__FILE__)."/../../TestSupport/UsersSetup.php";
require_once dirname(__FILE__)."/../../TestSupport/SesionesSetup.php";
require_once dirname(__FILE__)."/../../TestSupport/CursosSetup.php";
require_once dirname(__FILE__)."/../Users.php";

require_once dirname(__FILE__)."/support/TestingUsersModel.php";
require_once dirname(__FILE__)."/../../Fixtures/FixtureExecutioner.php";
require_once dirname(__FILE__)."/../../TestSupport/MockAuth.php";
require_once dirname(__FILE__)."/../../TestSupport/CurlSupport.php";
require_once dirname(__FILE__)."/../../TestSupport/MockActivityLogModel.php";

require_once dirname(__FILE__)."/TestCaseUserValidator.php";
$test_runner->add_test_case(new TestCaseUserValidator());

require_once dirname(__FILE__)."/TestCaseUser.php";
$test_runner->add_test_case(new TestCaseUser());

require_once dirname(__FILE__)."/TestCaseUsersModel.php";
$test_runner->add_test_case(new TestCaseUserSModel());

require_once dirname(__FILE__)."/TestCaseUsersDomain.php";
$test_runner->add_test_case(new TestCaseUsersDomain());

require_once dirname(__FILE__)."/TestCaseUsersController.php";
$test_runner->add_test_case(new TestCaseUsersController());
