<?php
class TestCaseJoin extends TestCase
{
	public function test_join_setting_properties()
	{
		$join = new Join('consultorios', 'consultorios.id = users.consultorio', 'nombre AS nombre_consultorio');
		$properties = get_object_vars($join);
		
		$this->assert_true(array_key_exists('table', $properties));
		$this->assert_true(array_key_exists('condition', $properties));
		$this->assert_true(array_key_exists('fields', $properties));
		$this->assert_true(array_key_exists('type', $properties));
		$this->assert_true(is_array($join->fields));
		
		$join = new Join('consultorios', 'consultorios.id = users.consultorio', array('nombre AS nombre_consultorio', 'telefono'));
		
		$this->assert_true(is_array($join->fields));
	}
}
