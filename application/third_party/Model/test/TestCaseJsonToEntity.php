<?php
class TestCaseJsonToEntity extends TestCase
{
	public function test_returns_an_instance_of_the_given_type()
	{
		$data = array();
		$entity = JsonToEntity::create($data, 'Entity');
		$this->assert_true($entity instanceof Entity);
	}
	
	public function test_fills_it_with_the_data_properties()
	{
		$data = array("name" => "john", "surname" => "snow");
		$entity = JsonToEntity::create($data, 'Entity');
		$this->assert_true($entity instanceof Entity);
		
		$this->assert_equals("john", $entity->name);
		$this->assert_equals("snow", $entity->surname);
	}
	
}
