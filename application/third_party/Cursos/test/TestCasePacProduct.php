<?php
class TestCasePacProduct extends TestCase
{
	public function test_pac_product_setting_properties()
	{
		$pac_product = new PacProduct();
		
		$properties = get_object_vars($pac_product);
		
		$this->assert_true(array_key_exists('id', $properties));
		$this->assert_true(array_key_exists('nombre', $properties));
	}
		
}