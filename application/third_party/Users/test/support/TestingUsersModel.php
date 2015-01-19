<?php
class TestingUsersModel extends UsersModel
{
	public function get_property($property)
	{
		return $this->$property;
	}
	
	public function row_to_entity($row)
	{
		return parent::row_to_entity($row);
	}
	
	public function entity_to_row($user, $add_password = true)
	{
		return parent::entity_to_row($user, $add_password);
	}
}