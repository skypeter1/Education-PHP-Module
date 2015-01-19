<?php
$permissions = array();    
      
$permissions['Curso::create'] 	= array('Administrador', 'Counter');  
$permissions['Curso::get']		= array('Administrador', 'Director', "profesor", "Counter");
$permissions['Curso::update'] 	= array('Administrador', 'Director', 'Counter');           
$permissions['Curso::delete'] 	= array('Administrador', 'Counter');
$permissions['Curso::search'] 	= array('Administrador', 'Director', 'Counter', "profesor");
$permissions['Curso::count_results'] 	= array('Administrador', 'Director', 'Counter', "profesor");
        
$permissions['Alumno::create'] 	= array('Administrador', 'Director', 'Counter', "profesor");
$permissions['Alumno::get']		= array('Administrador', 'Director', 'Counter', "profesor");
$permissions['Alumno::update'] 	= array('Administrador', 'Director', 'Counter', "profesor");
$permissions['Alumno::delete'] 	= array('Administrador', 'Director', 'Counter', "profesor");
$permissions['Alumno::search'] 	= array('Administrador', 'Director', 'Counter', "profesor");
$permissions['Alumno::count_results'] 	= array('Administrador', 'Director', 'Counter', "profesor");

$permissions['Sesion::create'] 	= array('Administrador', 'Director', "profesor");
$permissions['Sesion::get']		= array('Administrador', 'Director', "profesor");
$permissions['Sesion::update'] 	= array('Administrador', 'Director', "profesor");
$permissions['Sesion::delete'] 	= array('Administrador', 'Director', "profesor");
$permissions['Sesion::search'] 	= array('Administrador', 'Director', "profesor");
$permissions['Sesion::count_results'] 	= array('Administrador', 'Director', "profesor");

$permissions['User::create'] 	= array('Administrador', "profesor");
$permissions['User::get']		= array('Administrador', 'Director', "profesor", "Counter");
$permissions['User::update'] 	= array('Administrador', "profesor");
$permissions['User::delete'] 	= array('Administrador', "profesor");
$permissions['User::search'] 	= array('Administrador', 'Director', "profesor", "Counter");
$permissions['User::count_results'] 	= array('Administrador', 'Director', "profesor", "Counter");

$permissions['Examen::create'] 	= array('Administrador', 'Director', "profesor");
$permissions['Examen::get']		= array('Administrador', 'Director', "profesor");
$permissions['Examen::update'] 	= array('Administrador', 'Director', "profesor");
$permissions['Examen::delete'] 	= array('Administrador', 'Director', "profesor");
$permissions['Examen::search'] 	= array('Administrador', 'Director', "profesor");
$permissions['Examen::count_results'] 	= array('Administrador', 'Director', "profesor");

//$permissions['Entity::create'] 	= array('Administrador', 'Director');
//$permissions['Entity::get']		= array('Administrador', 'Director');
//$permissions['Entity::update'] 	= array('Administrador', 'Director');
//$permissions['Entity::delete'] 	= array('Administrador', 'Director');
//$permissions['Entity::search'] 	= array('Administrador', 'Director');
//$permissions['Entity::count_results'] 	= array('Administrador', 'Director');
    
$permissions['Rol::create'] 	= array('Administrador');
$permissions['Rol::get']		= array('Administrador');
$permissions['Rol::update'] 	= array('Administrador');
$permissions['Rol::delete'] 	= array('Administrador');
$permissions['Rol::search'] 	= array('Administrador');
$permissions['Rol::count_results'] 	= array('Administrador');

$permissions['Pago::create'] 	= array('Administrador');
$permissions['Pago::get']		= array('Administrador');
$permissions['Pago::update'] 	= array('Administrador');
$permissions['Pago::delete'] 	= array('Administrador');
$permissions['Pago::search'] 	= array('Administrador');
$permissions['Pago::count_results'] 	= array('Administrador');
   

$config['permissions'] = $permissions;
