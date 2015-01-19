DROP TABLE `zonas`;
CREATE TABLE IF NOT EXISTS `zonas` (
  `zona` VARCHAR(50) NOT NULL PRIMARY KEY
);
INSERT INTO `zonas` (`zona`) VALUES 
('Rural'),
('Urbana');
