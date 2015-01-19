<?php
class TestCaseRol extends TestCase
{
  public function test_local_pac_user_setting_properties()
  {
    $user = new Rol();

    $properties = get_object_vars($user);

    $this->assert_true(array_key_exists('username', $properties));
    $this->assert_true(array_key_exists('rol', $properties));

  }
}

