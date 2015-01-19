<?php
class TestCaseSesion extends TestCase
{
	public function test_sesion_setting_properties()
	{
		$sesion = new Sesion();
		
		$properties = get_object_vars($sesion);
		
		$this->assert_true(array_key_exists('fecha', $properties));
		$this->assert_true(array_key_exists('hora_inicio', $properties));
		$this->assert_true(array_key_exists('hora_fin', $properties));
		$this->assert_true(array_key_exists('profesor', $properties));
		$this->assert_true(array_key_exists('curso', $properties));
		$this->assert_true(array_key_exists('observaciones', $properties));
		$this->assert_true(array_key_exists('tarifa', $properties));
		
	}
}
