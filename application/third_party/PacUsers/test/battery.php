<?php

ini_set("display_errors", 1);

require_once dirname(__FILE__)."/../../TestSupport/ci_env.php";
require_once dirname(__FILE__)."/../../TestSupport/InfosacDBSetup.php";
require_once dirname(__FILE__)."/../../TestSupport/EnvironmentSetter.php";

require_once dirname(__FILE__)."/../../TestSupport/InfosacDBSetup.php";
require_once dirname(__FILE__)."/../../TestSupport/UsersSetup.php";
require_once dirname(__FILE__)."/../../Auth/Auth.php";
require_once dirname(__FILE__)."/../../TestSupport/MockAuth.php";
require_once dirname(__FILE__)."/../../TestSupport/CurlSupport.php";

require_once dirname(__FILE__)."/../PacUsers.php";

require_once dirname(__FILE__)."/TestCasePacUser.php";
$test_runner->add_test_case(new TestCasePacUser());

require_once dirname(__FILE__)."/TestCasePacUserModel.php";
$test_runner->add_test_case(new TestCasePacUserModel());

require_once dirname(__FILE__)."/TestCaseRol.php";
$test_runner->add_test_case(new TestCaseRol());

require_once dirname(__FILE__)."/TestCaseRolModel.php";
$test_runner->add_test_case(new TestCaseRolModel());

require_once dirname(__FILE__)."/TestCaseRolDomain.php";
$test_runner->add_test_case(new TestCaseRolDomain());

require_once dirname(__FILE__)."/TestCaseRolesController.php";
$test_runner->add_test_case(new TestCaseRolesController());
