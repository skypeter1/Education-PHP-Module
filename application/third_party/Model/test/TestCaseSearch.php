<?php
class TestCaseSearch extends TestCase
{
	public function test_constructor()
	{
		$filter = new Filter('username', 'Arya');
		$paginator = new Paginator(30);
		$order = new Order('email');
		$join = new Join('consultorios', 'consultorios.id = users.consultorio', array('nombre AS nombre_consultorio'));
		$concatenation = new Concatenation(array('field_1', 'table.field_2'), 'concatenated_field');

		$search = new Search(array($filter), $paginator, $order, $join, $concatenation);

		$this->assert_equals($filter->pattern, $search->filters[0]->pattern);
		$this->assert_equals($paginator->page_size, $search->paginator->page_size);
		$this->assert_equals($order->field, $search->order->field);
		$this->assert_equals($join->fields[0], $search->joins[0]->fields[0]);
		$this->assert_equals($concatenation->concatenated_name, $search->concatenations[0]->concatenated_name);
	}

	public function test_constructor_with_single_filter()
	{
		$filter = new Filter('username', 'Arya');

		$search = new Search($filter);
		$this->assert_equals($filter->pattern, $search->filters[0]->pattern);
	}
	
	public function test_constructor_with_single_join()
	{
		$join = new Join('consultorios', 'consultorios.id = users.consultorio', array('nombre AS nombre_consultorio'));

		$search = new Search(null, null, null, $join, null);
		$this->assert_equals($join->table, $search->joins[0]->table);
	}
	
	public function test_constructor_with_single_concatenation()
	{
		$concatenation = new Concatenation(array('field_1', 'table.field_2'), 'concatenated_field');

		$search = new Search(null, null, null, null, $concatenation);
		$this->assert_equals($concatenation->concatenated_name, $search->concatenations[0]->concatenated_name);
	}
}
