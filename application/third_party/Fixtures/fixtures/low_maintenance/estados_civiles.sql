DROP TABLE `estados_civiles`;
CREATE TABLE IF NOT EXISTS `estados_civiles` (
  `estado_civil` VARCHAR(50) NOT NULL PRIMARY KEY
);
INSERT INTO `estados_civiles` (`estado_civil`) VALUES 
('Soltero/a'),
('Casado/a'),
('Divorciado/a'),
('Viudo/a'),
('Unión libre');
