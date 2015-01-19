CREATE TABLE IF NOT EXISTS `{db_name}`.`alumnos` (
`id` INT( 11 ) NOT NULL AUTO_INCREMENT PRIMARY KEY ,
`cedula` VARCHAR( 255 ) NOT NULL,
`nombre` VARCHAR( 255 ) NOT NULL,
`apodo` VARCHAR( 255 ) NULL,
`telefono` VARCHAR( 255 ) NULL,
`celular` VARCHAR( 255 ) NULL,
`email` VARCHAR( 255 ) NULL,
`direccion` VARCHAR( 500 ) NULL ,
`version` VARCHAR( 20 ) NOT NULL,
`fecha_nacimiento` int(10) NOT NULL,
`edad` VARCHAR( 255 ) NULL,
`cliente_pac` VARCHAR( 20 ) NOT NULL
);
