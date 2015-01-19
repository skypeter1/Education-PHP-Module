<?php
class OrderArray
{
	public static function order_by( &$terms, $property_name )
	{
	    usort($terms, array(new ComparerAdditionalParamClosure($property_name), "call"));
	    return $terms;
	}
}

class ComparerAdditionalParamClosure
{
    private $property_name;

    function __construct( $property_name ) {
        $this->property_name = $property_name;
    }

    function call( $a, $b ) {
        return $this->comparer_by_param($a, $b, $this->property_name);
    }
    function comparer_by_param( $a, $b, $property_name )
	{
		return strcmp($a[$property_name], $b[$property_name]);
	}
}
