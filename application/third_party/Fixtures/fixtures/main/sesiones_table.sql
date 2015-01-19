CREATE TABLE IF NOT EXISTS `{db_name}`.`sesiones` (
`id` INT( 11 ) NOT NULL AUTO_INCREMENT PRIMARY KEY ,
`version` VARCHAR( 20 ) NOT NULL,
`fecha` INT( 10 ) NOT NULL ,
`hora_inicio` varchar( 10 ) NOT NULL ,
`hora_fin` varchar( 10 ) NOT NULL ,
`profesor` INT( 5 ) NULL ,
`curso` INT( 5 ) NOT NULL ,
`observaciones` TEXT NOT NULL,
`incidencias` TEXT NULL,
`sin_profesor` INT ( 1 ) NULL,
`tarifa` varchar(50) NULL ,
`owned_by` INT( 5 ) NULL ,
`estado` INT ( 1 ) NOT NULL,
`pagado` INT ( 1 ) NOT NULL
);
