<?php
require_once dirname(__FILE__)."/../LiteTestPHP/LiteTestPHP.php";
require_once dirname(__FILE__)."/TestingEnvironment.php";

$test_runner = new TestRunnerCLI();

require_once dirname(__FILE__)."/Cursos/battery.php";
require_once dirname(__FILE__)."/Alumnos/battery.php";
require_once dirname(__FILE__)."/Sesiones/battery.php";
require_once dirname(__FILE__)."/Usuarios/battery.php";
require_once dirname(__FILE__)."/Examenes/battery.php";

$sort_by_time = true;
$test_runner->print_results($sort_by_time);