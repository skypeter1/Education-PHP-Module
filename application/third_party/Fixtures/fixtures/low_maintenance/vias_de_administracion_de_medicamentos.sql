DROP TABLE `vias_de_administracion_de_medicamentos`;
CREATE TABLE IF NOT EXISTS `vias_de_administracion_de_medicamentos` (
  `via_de_administracion` VARCHAR(50) NOT NULL PRIMARY KEY
);
INSERT INTO `vias_de_administracion_de_medicamentos` (`via_de_administracion`) VALUES 
('Tópica'),
('Rectal'),
('Vaginal'),
('Inhalatoria'),
('Intratraqueal'),
('Ocular'),
('Parenteral'),
('Subcutánea');
