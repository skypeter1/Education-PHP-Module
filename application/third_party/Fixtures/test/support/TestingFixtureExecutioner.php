<?php
class TestingFixtureExecutioner extends FixtureExecutioner
{
	public function replace_dbname($query, $db_name)
	{
		return parent::replace_dbname($query, $db_name);
	}
	
	public function get_fixture_content($fixture_path)
	{
		return parent::get_fixture_content($fixture_path);
	}
}