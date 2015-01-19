<?php
class TestCaseActivityLogDomain extends TestCase
{
	public function test_get()
	{
		$domain = $this->prepare_domain();
		
		$domain->get(1);
		
		$this->assert_equals('get 1', $domain->model->trace[0]);
		$this->assert_equals('check LogEntry::get', $domain->auth->trace[0]);
	}

	public function test_search()
	{
		$domain = $this->prepare_domain();
		
		$filter = new Filter('test_property', '1');
		$search = new Search($filter);
		
		$log_entries = $domain->search($search);
		
		$this->assert_equals('search test_property', $domain->model->trace[0]);
		$this->assert_equals('check LogEntry::search', $domain->auth->trace[0]);
	}
	
	public function test_count_results()
	{
		$domain = $this->prepare_domain();
		
		$filter = new Filter('test_property', '1');
		$search = new Search($filter);
		
		$log_entries = $domain->count_results($search);
		
		$this->assert_equals('count_results test_property', $domain->model->trace[0]);
		$this->assert_equals('check LogEntry::count_results', $domain->auth->trace[0]);
	}
	
	protected function prepare_domain()
	{	
		$database_access = DB();
		$auth = new MockAuth(true, true);
		$domain = new ActivityLogDomain($database_access, $auth);
		$domain->model = new MockActivityLogModel();
		
		return $domain;
	}
}