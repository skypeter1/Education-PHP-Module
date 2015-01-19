<?php
require_once dirname(__FILE__)."/classes/PacBrowser.php";

require_once dirname(__FILE__)."/TestCasePacBrowser.php";
$test_runner->add_test_case(new TestCasePacBrowser());
