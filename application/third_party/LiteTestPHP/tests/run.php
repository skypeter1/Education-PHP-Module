<?php
ini_set('display_errors', 1);
ini_set('error_reporting', E_ALL);
require_once dirname(__FILE__)."/..".DIRECTORY_SEPARATOR."LiteTestPHP.php";

$test_runner = new TestRunnerCLI();

require_once dirname(__FILE__)."/battery.php";

$test_runner->print_results();
