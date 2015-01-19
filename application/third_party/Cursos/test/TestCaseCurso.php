<?php
class TestCaseCurso extends TestCase
{
	public function test_curso_setting_properties()
	{
		$curso = new Curso();
		
		$properties = get_object_vars($curso);
		
		$this->assert_true(array_key_exists('nombre', $properties));
		$this->assert_true(array_key_exists('identificador', $properties));
		$this->assert_true(array_key_exists('horas', $properties));
		$this->assert_true(array_key_exists('hora_inicio', $properties));
		$this->assert_true(array_key_exists('hora_fin', $properties));
		$this->assert_true(array_key_exists('fecha_inicio', $properties));
		$this->assert_true(array_key_exists('cupos_minimo', $properties));
		$this->assert_true(array_key_exists('cupos_maximo', $properties));
		$this->assert_true(array_key_exists('precio_prematricula', $properties));
		$this->assert_true(array_key_exists('estado', $properties));
		$this->assert_true(array_key_exists('producto_pac', $properties));
		$this->assert_true(array_key_exists('bodega', $properties));
		$this->assert_true(array_key_exists('profesor', $properties));
	}
}