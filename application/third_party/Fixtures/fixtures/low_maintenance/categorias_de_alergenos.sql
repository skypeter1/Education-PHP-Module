DROP TABLE `categorias_de_alergenos`;
CREATE TABLE IF NOT EXISTS `categorias_de_alergenos` (
  `categoria` VARCHAR(50) NOT NULL PRIMARY KEY
);
INSERT INTO `categorias_de_alergenos` (`categoria`) VALUES 
('Alimentaria'),
('Ambiental'),
('Farmacológica');
