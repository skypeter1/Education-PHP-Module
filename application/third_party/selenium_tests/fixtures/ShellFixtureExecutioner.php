<?php
class ShellFixtureExecutioner
{
	public function execute($fixture_path)
	{
		system(MYSQL_PATH.'mysql --protocol tcp --host=localhost -u root benedict_testing < '.$fixture_path);
	}
}
