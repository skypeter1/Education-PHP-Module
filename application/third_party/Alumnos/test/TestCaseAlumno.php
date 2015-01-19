<?php
class TestCaseAlumno extends TestCase
{
	public function test_alumno_setting_properties()
	{
		$alumno = new Alumno();
		
		$properties = get_object_vars($alumno);
		
		$this->assert_true(array_key_exists('cedula', $properties));
		$this->assert_true(array_key_exists('nombre', $properties));
		$this->assert_true(array_key_exists('apodo', $properties));
		$this->assert_true(array_key_exists('telefono', $properties));
		$this->assert_true(array_key_exists('celular', $properties));
		$this->assert_true(array_key_exists('email', $properties));
		$this->assert_true(array_key_exists('direccion', $properties));
		$this->assert_true(array_key_exists('cliente_pac', $properties));
	}
		
}