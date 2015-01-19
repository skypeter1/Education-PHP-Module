<?php
class TestCaseConcatenation extends TestCase
{       
        public function test_constructor()
        {
			$field_to_concatenate = array('field_1', 'field_2');
			$concatenation = new Concatenation($field_to_concatenate);

			$this->assert_true(is_array($concatenation->fields));
			$this->assert_equals('field_1', $concatenation->fields[0]);
			$this->assert_equals('field_2', $concatenation->fields[1]);
        }
		
        public function test_get_concatenation_query()
        {
			$field_to_concatenate = array('table.field_1', 'database.table.field_2', 'field_3');
			$concatenation = new Concatenation($field_to_concatenate);

			$query = $concatenation->get_concatenation_query();
			$this->assert_equals("CONCAT(`table`.`field_1`,`database`.`table`.`field_2`,`field_3`)", $query);
        }
		
        public function test_get_concatenation_query_with_spaces()
        {
			$field_to_concatenate = array('table.field_1', ' ', 'database.table.field_2', ' ', 'field_3');
			$concatenation = new Concatenation($field_to_concatenate);

			$query = $concatenation->get_concatenation_query();
			$this->assert_equals("CONCAT(`table`.`field_1`,' ',`database`.`table`.`field_2`,' ',`field_3`)", $query);
        }
}
