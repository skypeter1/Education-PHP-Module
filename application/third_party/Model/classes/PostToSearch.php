<?php
class PostToSearch
{
	public static function parse($data)
	{
		$search = new Search();
		$search->filters = PostToSearch::get_filters($data);
		$search->paginator = PostToSearch::get_paginator($data);
		$search->order = PostToSearch::get_order($data);
		return $search;
	}
	
	protected static function get_filters($data)
	{
		$filters = array();
		
		if(!isset($data->filters)) return $filters;
		
		foreach($data->filters as $filter_data)
		{
			$filters[] = new Filter($filter_data->property, $filter_data->pattern, $filter_data->method);
		}
		return $filters;
	}
	
	protected static function get_paginator($data)
	{
		$paginator = new Paginator();
		if(isset($data->paginator))
			$paginator->page_size = $data->paginator->page_size;
		
		return $paginator;
	}
	
	protected static function get_order($data)
	{
		$order = new Order();
		
		if(isset($data->order))
		{
			$order->field = $data->order->field;
			$order->direction = $data->order->direction;
		}

		return $order;
	}
}