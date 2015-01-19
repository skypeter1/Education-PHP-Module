<?php
class Paginator
{
	public $page_size;

	public function __construct($page_size = 100)
	{
		$this->page_size = $page_size;
	}
}
