<?php
class TestingReferenceModel extends ReferenceModel
{
	public $search_fields = array('name', 'version');
	public $entity = 'TestingEntity';
}