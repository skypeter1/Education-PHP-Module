DROP TABLE `sexos`;
CREATE TABLE IF NOT EXISTS `sexos` (
  `sexo` VARCHAR(50) NOT NULL PRIMARY KEY
);
INSERT INTO `sexos` (`sexo`) VALUES 
('Mujer'),
('Hombre');
