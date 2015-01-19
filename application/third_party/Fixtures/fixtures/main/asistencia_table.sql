CREATE TABLE IF NOT EXISTS `{db_name}`.`asistencia` (
  `sesion` INT NOT NULL,
  `alumno` INT NOT NULL,
  `estado` VARCHAR ( 50 ) NOT NULL,
  `observaciones` VARCHAR ( 255 ) NUll 
)