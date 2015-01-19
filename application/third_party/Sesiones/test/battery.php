<?php
require_once dirname(__FILE__)."/../../TestSupport/ci_env.php";
require_once dirname(__FILE__)."/../../TestSupport/InfosacDBSetup.php";
require_once dirname(__FILE__)."/../../TestSupport/EnvironmentSetter.php";
require_once dirname(__FILE__)."/../../TestSupport/AsistenciaSetup.php";
require_once dirname(__FILE__)."/../../TestSupport/SesionesSetup.php";
require_once dirname(__FILE__)."/../../TestSupport/UsersSetup.php";
require_once dirname(__FILE__)."/../../TestSupport/CursosSetup.php";
require_once dirname(__FILE__)."/../../TestSupport/CurlSupport.php";
require_once dirname(__FILE__)."/../../TestSupport/PacTablesSetup.php";
require_once dirname(__FILE__)."/../../TestSupport/AlumnosSetup.php";
require_once dirname(__FILE__)."/../../TestSupport/OrderArray.php";
require_once dirname(__FILE__)."/../Sesiones.php";


require_once dirname(__FILE__)."/../../TestSupport/MockAuth.php";

require_once dirname(__FILE__)."/TestCaseSesion.php";
$test_runner->add_test_case(new TestCaseSesion());

require_once dirname(__FILE__)."/TestCaseSesionesModel.php";
$test_runner->add_test_case(new TestCaseSesionesModel());

require_once dirname(__FILE__)."/TestCaseSesionesDomain.php";
$test_runner->add_test_case(new TestCaseSesionesDomain());

require_once dirname(__FILE__)."/TestCaseSesionesController.php";
$test_runner->add_test_case(new TestCaseSesionesController());