<?php
class TestCasePacUser extends TestCase
{
	public function test_pac_user_extends_from_user()
	{
		$pac_user = new PacUser();
		$this->assert_true($pac_user instanceof User);
	}
}