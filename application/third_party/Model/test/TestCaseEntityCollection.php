<?php
class TestCaseEntityCollection extends TestCase
{
	public function test_accepts_the_collection_on_instance()
	{
		$collection = array("13" => array("id" => 13, "name" => "john"));
		$entity_collection = new EntityCollection($collection);
		$this->assert_equals($collection, $entity_collection->collection);
	}
}
