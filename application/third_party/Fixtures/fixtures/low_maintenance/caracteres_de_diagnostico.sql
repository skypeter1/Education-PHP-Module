DROP TABLE `caracteres_de_diagnostico`;
CREATE TABLE IF NOT EXISTS `caracteres_de_diagnostico` (
  `caracter` VARCHAR(50) NOT NULL PRIMARY KEY
);
INSERT INTO `caracteres_de_diagnostico` (`caracter`) VALUES 
('Presuntivo'),
('Definitivo');
