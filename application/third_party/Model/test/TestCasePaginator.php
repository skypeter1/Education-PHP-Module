<?php
class TestCasePaginator extends TestCase
{
        
        public function test_paginator()
        {
                $paginator = new Paginator(30);

                $this->assert_equals('30', $paginator->page_size);
        }
}
