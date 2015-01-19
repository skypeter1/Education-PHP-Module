<?php
class EntityCollection
{
	public $collection;
	
	public function __construct($collection = array())
	{
		$this->collection = $collection;
	}
}
