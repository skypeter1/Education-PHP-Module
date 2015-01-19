CREATE TABLE IF NOT EXISTS `{db_name}`.`examenes` (
`id` INT( 11 ) NOT NULL AUTO_INCREMENT PRIMARY KEY ,
`version` VARCHAR( 20 ) NOT NULL,
`titulo` VARCHAR( 255 ) NOT NULL ,
`fecha` INT( 10 ) NOT NULL ,
`curso` INT( 11 ) NOT NULL ,
`profesor` INT (11) NOT NULL,
`categoria` VARCHAR (50) NOT NULL,
`observaciones` TEXT NOT NULL
);