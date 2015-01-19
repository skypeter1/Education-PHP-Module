<?php
class TestCaseEntity extends TestCase
{
	public function test_entity_setting_properties()
	{
		$entity = new Entity();
		$this->assert_equals('Entity', get_class($entity));
		
		$properties = get_object_vars($entity);
		$this->assert_true(array_key_exists('id', $properties));
		$this->assert_true(array_key_exists('version', $properties));
	}
}
