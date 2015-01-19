<?php
class TestCaseCursosValidator extends TestCase
{
	public function test_validate_bad_integer_properties()
	{
		$curso = new Curso();
		$validator_errors = CursosValidator::validate($curso);

		$curso->horas = "9.875";
		$curso->cupos_minimo = "765.123";
		$curso->cupos_maximo = "adad";

		$validator_errors = CursosValidator::validate($curso);

		$this->assert_equals(CursosValidator::ERROR_INVALID_INTEGER, $validator_errors[0]);
		$this->assert_equals(CursosValidator::ERROR_INVALID_INTEGER, $validator_errors[1]);
		$this->assert_equals(CursosValidator::ERROR_INVALID_INTEGER, $validator_errors[2]);
	}

	public function test_validate_good_integer_properties()
	{
		$curso = new Curso();
		$curso->horas = "19";

		$validator_errors = CursosValidator::validate($curso);

		$this->assert_true(empty($validator_errors));
	}

	public function test_validate_bad_float_properties()
	{
		$curso = new Curso();
		$validator_errors = CursosValidator::validate($curso);

		$curso->precio_prematricula = "9,875";

		$validator_errors = CursosValidator::validate($curso);

		$this->assert_equals(CursosValidator::ERROR_INVALID_FLOAT, $validator_errors[0]);
	}
}
