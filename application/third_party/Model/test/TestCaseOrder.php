<?php
class TestCaseOrder extends TestCase
{
        
        public function test_constructor()
        {
                $order = new Order('email');

                $this->assert_equals('email', $order->field);
                $this->assert_equals('desc', $order->direction);
        }
}
