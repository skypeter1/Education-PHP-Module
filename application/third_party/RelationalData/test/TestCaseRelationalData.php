<?php

class TestCaseRelationalData extends TestCase
{
	public function test_get_inserts_with_empty_current_state()
	{
		$current_status = array();
		$inserts = array("1" => array("10", "20"));

		$relation = new RelationalData($current_status, $inserts);

		$calculated_inserts = $relation->get_inserts();

		$expected_inserts = $inserts;
		$this->assert_equals($expected_inserts, $calculated_inserts);
	}

	public function test_get_inserts_with_not_empty_current_state()
	{
		$current_status = array("1" => array("10"));
		$inserts = array("1" => array("10", "20"));

		$relation = new RelationalData($current_status, $inserts);

		$calculated_inserts = $relation->get_inserts();

		$expected_inserts = array("1" => array("20"));
		$this->assert_equals($expected_inserts, $calculated_inserts);		
	}

	public function test_get_inserts_with_empty_inserts()
	{
		$current_status = array("1" => array("10"));
		$inserts = array();

		$relation = new RelationalData($current_status, $inserts);

		$calculated_inserts = $relation->get_inserts();

		$expected_inserts = array();
		$this->assert_equals($expected_inserts, $calculated_inserts);		
	}

	public function test_get_inserts_with_same_states()
	{
		$current_status = array("1" => array("10"));
		$inserts = array("1" => array("10"));

		$relation = new RelationalData($current_status, $inserts);

		$calculated_inserts = $relation->get_inserts();

		$expected_inserts = array();
		$this->assert_equals($expected_inserts, $calculated_inserts);		
	}

	public function test_get_deletes_with_empty_current_state()
	{
		$current_status = array();
		$inserts = array("1" => array("10", "20"));

		$relation = new RelationalData($current_status, $inserts);

		$calculated_deletes = $relation->get_deletes();

		$expected_inserts = array();
		$this->assert_equals($expected_inserts, $calculated_deletes);
	}

	public function test_get_deletes_with_not_empty_current_state()
	{
		$current_status = array("1" => array("10", "20", "30"));
		$inserts = array("1" => array("10", "20"));

		$relation = new RelationalData($current_status, $inserts);

		$calculated_deletes = $relation->get_deletes();

		$expected_deletes = array("1" => array("30"));
		$this->assert_equals($expected_deletes, $calculated_deletes);
	}

	public function test_get_deletes_with_same_states()
	{
		$current_status = array("1" => array("10", "20", "30"));
		$inserts = array("1" => array("10", "20", "30"));

		$relation = new RelationalData($current_status, $inserts);

		$calculated_deletes = $relation->get_deletes();

		$expected_inserts = array();
		$this->assert_equals($expected_inserts, $calculated_deletes);
	}

	public function test_get_deletes_with_some_insertions()
	{
		$current_status = array("1" => array("10", "20"));
		$inserts = array("1" => array("10", "20", "30"));

		$relation = new RelationalData($current_status, $inserts);

		$calculated_deletes = $relation->get_deletes();

		$expected_inserts = array();
		$this->assert_equals($expected_inserts, $calculated_deletes);
	}

	public function test_get_deletes_with_empty_instertion()
	{
		$current_status = array("1" => array("10", "20"));
		$inserts = array();

		$relation = new RelationalData($current_status, $inserts);

		$calculated_deletes = $relation->get_deletes();

		$expected_inserts = $current_status;
		$this->assert_equals($expected_inserts, $calculated_deletes);
	}
}