<?php
class Filter
{
    public $property;
    public $pattern;
    public $method;

    public function __construct($property, $pattern, $method = 'EQUALS')
    {
        $this->property = $property;
        $this->pattern = $pattern;
        $this->method = $method;
    }
}
