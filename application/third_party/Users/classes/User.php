<?php
class User extends Entity
{
	public $email;
	public $password;
	public $name;
	public $rol;
	public $price;
	public $weekend_price;
	public $out_academy_price;
	public $blocked = false;
}
