<?php
class Search
{
	public $filters;
	public $paginator;
	public $order;
	public $joins;
	public $concatenations;
	
	public function __construct($filters = array(), Paginator $paginator = null, Order $order = null, $joins = array(), $concatenations = array())
	{
		if($filters instanceof Filter)
			$filters = array($filters);
		
		if($joins instanceof Join)
			$joins = array($joins);
		
		if($concatenations instanceof Concatenation)
			$concatenations = array($concatenations);
		
		$this->filters = $filters;
		$this->paginator = $paginator;
		$this->order = $order;
		$this->joins = $joins;
		$this->concatenations = $concatenations;
	}
}