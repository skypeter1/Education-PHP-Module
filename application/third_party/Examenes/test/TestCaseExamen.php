<?php
class TestCaseExamen extends TestCase
{
	public function test_examen_setting_properties()
	{
		$examen = new Examen();
		
		$properties = get_object_vars($examen);
		
		$this->assert_true(array_key_exists('titulo', $properties));
		$this->assert_true(array_key_exists('curso', $properties));
		$this->assert_true(array_key_exists('fecha', $properties));
		$this->assert_true(array_key_exists('profesor', $properties));
		$this->assert_true(array_key_exists('observaciones', $properties));
		
	}
}