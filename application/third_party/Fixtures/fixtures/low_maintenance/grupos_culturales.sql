DROP TABLE `grupos_culturales`;
CREATE TABLE IF NOT EXISTS `grupos_culturales`(
  `grupo_cultural` VARCHAR(50) NOT NULL PRIMARY KEY
);
INSERT INTO `grupos_culturales` (`grupo_cultural`) VALUES 
('Indígena'),
('Afroecuatoriano/a'),
('Negro/a'),
('Mulato/a'),
('Montubio/a'),
('Mestizo/a'),
('Blanco/a'),
('Otro/a');
