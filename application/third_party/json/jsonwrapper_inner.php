<?php

require_once 'JSON/JSON.php';

if (!function_exists('json_encode')) {
    function json_encode($arg)
    {
            global $services_json;
            if (!isset($services_json)) {
                    $services_json = new Services_JSON();
            }
        return  $services_json->encode($arg);
    } 
}


if (!function_exists('json_decode')) {
    function json_decode($arg, $as_array = false)
    {
            global $services_json;
            if (!isset($services_json)) {
                    $services_json = new Services_JSON();
        }
        $result = $services_json->decode($arg);
        if($as_array)
            $result = object_to_array($result); 

        return $result;
    }
}

function object_to_array($data)
{
    if (is_array($data) || is_object($data))
    {
        $result = array();
        foreach ($data as $key => $value)
        {
            $result[$key] = object_to_array($value);
        }

        return $result;
    }
    return $data;
}



?>
