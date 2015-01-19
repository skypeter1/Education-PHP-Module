DROP TABLE `estados_de_diagnostico`;
CREATE TABLE IF NOT EXISTS `estados_de_diagnostico` (
  `estado` VARCHAR(50) NOT NULL PRIMARY KEY
);
INSERT INTO `estados_de_diagnostico` (`estado`) VALUES 
('Crónico'),
('Curado'),
('En tratamiento');
