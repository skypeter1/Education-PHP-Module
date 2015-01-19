DROP TABLE `tipos_de_ordenes_medicas`;
CREATE TABLE IF NOT EXISTS `tipos_de_ordenes_medicas` (
  `tipo_orden` VARCHAR(50) NOT NULL PRIMARY KEY
);
INSERT INTO `tipos_de_ordenes_medicas` (`tipo_orden`) VALUES 
('Radiografía'),
('Tomografía'),
('Resonancia'),
('Ecografía'),
('Procedimiento'),
('Mamografía'),
('Laboratorio'),
('Histopatología'),
('Citología'),
('Otros');
