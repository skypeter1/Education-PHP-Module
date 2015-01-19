<?php
require_once dirname(__FILE__)."/../../TestSupport/ci_env.php";
require_once dirname(__FILE__)."/../Model.php";
require_once dirname(__FILE__)."/support/TestingModel.php";
require_once dirname(__FILE__)."/support/TestingReferenceModel.php";
require_once dirname(__FILE__)."/support/TestingEntity.php";
require_once dirname(__FILE__)."/support/MockModel.php";
require_once dirname(__FILE__)."/../../TestSupport/MockAuth.php";
require_once dirname(__FILE__)."/../../TestSupport/MockActivityLogModel.php";

require_once dirname(__FILE__)."/../../Fixtures/FixtureExecutioner.php";

require_once dirname(__FILE__)."/TestCaseDomain.php";
$test_runner->add_test_case(new TestCaseDomain());

require_once dirname(__FILE__)."/TestCaseReferenceDomain.php";
$test_runner->add_test_case(new TestCaseReferenceDomain());

require_once dirname(__FILE__)."/TestCaseModel.php";
$test_runner->add_test_case(new TestCaseModel());

require_once dirname(__FILE__)."/TestCaseReferenceModel.php";
$test_runner->add_test_case(new TestCaseReferenceModel());

require_once dirname(__FILE__)."/TestCaseEntity.php";
$test_runner->add_test_case(new TestCaseEntity());

require_once dirname(__FILE__)."/TestCaseEntityCollection.php";
$test_runner->add_test_case(new TestCaseEntityCollection());

require_once dirname(__FILE__)."/TestCaseValidator.php";
$test_runner->add_test_case(new TestCaseValidator());

require_once dirname(__FILE__)."/TestCaseResponse.php";
$test_runner->add_test_case(new TestCaseResponse());

require_once dirname(__FILE__)."/TestCaseFilter.php";
$test_runner->add_test_case(new TestCaseFilter());

require_once dirname(__FILE__)."/TestCaseOrder.php";
$test_runner->add_test_case(new TestCaseOrder());

require_once dirname(__FILE__)."/TestCasePaginator.php";
$test_runner->add_test_case(new TestCasePaginator());

require_once dirname(__FILE__)."/TestCaseSearch.php";
$test_runner->add_test_case(new TestCaseSearch());

require_once dirname(__FILE__)."/TestCasePostToSearch.php";
$test_runner->add_test_case(new TestCasePostToSearch());

require_once dirname(__FILE__)."/TestCaseJsonToEntity.php";
$test_runner->add_test_case(new TestCaseJsonToEntity());

require_once dirname(__FILE__)."/TestCaseJoin.php";
$test_runner->add_test_case(new TestCaseJoin());

require_once dirname(__FILE__)."/TestCaseConcatenation.php";
$test_runner->add_test_case(new TestCaseConcatenation());