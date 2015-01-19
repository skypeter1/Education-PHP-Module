<?php
ini_set("display_errors", 1);
require_once dirname(__FILE__)."/LiteTestPHP/LiteTestPHP.php";

$test_runner = new TestRunnerCLI();

require_once dirname(__FILE__)."/TestSupport/test/battery.php";
require_once dirname(__FILE__)."/DBAccessCreator/test/battery.php";
require_once dirname(__FILE__)."/Exceptions/test/battery.php";
require_once dirname(__FILE__)."/Fixtures/test/battery.php";
require_once dirname(__FILE__)."/Model/test/battery.php";
require_once dirname(__FILE__)."/CommonController/test/battery.php";

require_once dirname(__FILE__)."/DatabaseRepository/test/battery.php";
require_once dirname(__FILE__)."/Users/test/battery.php";
require_once dirname(__FILE__)."/Auth/test/battery.php";
require_once dirname(__FILE__)."/ActivityLog/test/battery.php";
require_once dirname(__FILE__)."/PacUsers/test/battery.php";
require_once dirname(__FILE__)."/Cursos/test/battery.php";
require_once dirname(__FILE__)."/RelationalData/test/battery.php";
require_once dirname(__FILE__)."/Alumnos/test/battery.php";
require_once dirname(__FILE__)."/Sesiones/test/battery.php";
require_once dirname(__FILE__)."/Examenes/test/battery.php";
    
$sort_by_time = true;
$test_runner->print_results($sort_by_time);

$environment_setter = new EnvironmentSetter();
$environment_setter->set_testing_environment();
