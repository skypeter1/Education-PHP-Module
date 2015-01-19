DROP TABLE IF EXISTS `alumnos`;
CREATE TABLE IF NOT EXISTS `alumnos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `cedula` varchar(255) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `apodo` varchar(255) DEFAULT NULL,
  `telefono` varchar(255) DEFAULT NULL,
  `celular` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `direccion` varchar(500) DEFAULT NULL,
  `version` varchar(20) NOT NULL,
  `cliente_pac` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=4 ;

--
-- Dumping data for table `alumnos`
--

INSERT INTO `alumnos` (`id`, `cedula`, `nombre`, `apodo`, `telefono`, `celular`, `email`, `direccion`, `version`, `cliente_pac`) VALUES
(1, '1719842146', 'Isabel Gomez', 'Isa', '3430161', '0994033642', 'coolmaju@gmail.com', 'Juan de Velasco S6-771 y Pedro Porras							\r\n						', '1354827319.46', '1'),
(2, '9443761', 'Joan Gallego', 'Joan', '123123123', '12312321', 'daneryl@gmail.com', 'Juan de dios martinez							\r\n						', '1356493055.93', '2'),
(3, '98127398173', 'Alberto', 'Konz', '34567', '09876', 'konz@konz.com', 'Juan de dios martinez							\r\n						', '1356713734', '2');
