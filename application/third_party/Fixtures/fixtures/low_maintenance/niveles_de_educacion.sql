DROP TABLE `niveles_de_educacion`;
CREATE TABLE IF NOT EXISTS `niveles_de_educacion` (
  `nivel_de_educacion` VARCHAR(50) NOT NULL PRIMARY KEY
);
INSERT INTO `niveles_de_educacion` (`nivel_de_educacion`) VALUES 
('Primer nivel'),
('Segundo nivel'),
('Tercer nivel'),
('Cuarto nivel');
