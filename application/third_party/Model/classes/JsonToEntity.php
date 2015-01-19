<?php
class JsonToEntity
{
	public static function create($data, $type_of_entity)
	{
		$entity = new $type_of_entity();
		
		foreach ($data as $property => $value)
		{
			$entity->$property = $value;
		}
		return $entity;
	}
}