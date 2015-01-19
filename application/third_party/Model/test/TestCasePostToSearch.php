<?php
class TestCasePostToSearch extends TestCase
{
	public function test_parse_returns_a_Search()
	{
		$search = PostToSearch::parse($this->get_data_sample());
		$this->assert_true($search instanceof Search);
	}
	
	public function test_parses_filters()
	{
		
		$search = PostToSearch::parse($this->get_data_sample());
		
		$this->assert_equals(2, sizeof($search->filters));
		$this->assert_equals('name', $search->filters[0]->property);
		$this->assert_equals('john', $search->filters[0]->pattern);
		$this->assert_equals('LIKE', $search->filters[0]->method);
	}
	
	public function test_parse_paginator()
	{
		$search = PostToSearch::parse($this->get_data_sample());
		
		$this->assert_equals(30, $search->paginator->page_size);
	}
	
	public function test_parse_order()
	{
		$search = PostToSearch::parse($this->get_data_sample());

		$this->assert_equals('date', $search->order->field);
		$this->assert_equals('ASC', $search->order->direction);
	}
	
	protected function get_data_sample()
	{
		$data = new stdClass();

		$filter_one = new stdClass();
		$filter_one->property = 'name';
		$filter_one->pattern = 'john';
		$filter_one->method = "LIKE";

		$filter_two = new stdClass();
		$filter_two->property = 'surname';
		$filter_two->pattern = 'snow';
		$filter_two->method = "LIKE";
		
		$data->filters = array($filter_one, $filter_two);
		
		$paginator = new stdClass();
		$paginator->page_size = 30;
		
		$data->paginator = $paginator;
		
		$order = new stdClass();
		$order->field = 'date';
		$order->direction = 'ASC';
		
		$data->order = $order;
		
		return $data;
	}
	
	
}
