<?php
class TestCaseFilter extends TestCase
{
        
        public function test_constructor()
        {
                $filter = new Filter('username', 'Arya');
                
                $this->assert_equals('username', $filter->property);
                $this->assert_equals('Arya', $filter->pattern);
                $this->assert_equals('EQUALS', $filter->method);
        }
}
