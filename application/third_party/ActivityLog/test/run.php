<?php
require_once dirname(__FILE__)."/../../LiteTestPHP/LiteTestPHP.php";

$test_runner = new TestRunnerCLI();

require_once dirname(__FILE__)."/battery.php";

$test_runner->print_results();
