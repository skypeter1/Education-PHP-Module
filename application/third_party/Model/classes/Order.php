<?php
class Order
{
    public $field;
    public $direction;

    public function __construct($field = 'id', $direction = 'desc')
    {
        $this->field = $field;
        $this->direction = $direction;
    }
}
