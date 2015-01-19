<?php
error_reporting(E_ALL);ini_set("display_errors", 1);
require_once dirname(__FILE__)."/../TestingEnvironment.php";

$test_runner = new TestRunnerCLI();

require_once dirname(__FILE__)."/battery.php";

$test_runner->print_results();
