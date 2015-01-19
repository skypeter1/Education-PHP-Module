-- phpMyAdmin SQL Dump
-- version 3.1.1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Nov 28, 2012 at 03:27 PM
-- Server version: 5.1.30
-- PHP Version: 5.2.8

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";

--
-- Database: `educacion_testing`
--

-- --------------------------------------------------------

--
-- Table structure for table `alumnos`
--

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
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=13 ;

--
-- Dumping data for table `alumnos`
--

INSERT INTO `alumnos` (`id`, `cedula`, `nombre`, `apodo`, `telefono`, `celular`, `email`, `direccion`, `version`, `cliente_pac`) VALUES
(1, '1719842146', 'Isabel Gomez', 'Isa', '3430161', '0994033642', 'coolmaju@gmail.com', 'Juan de Velasco S6-771 y Pedro Porras							\r\n						', '1354827319.46', '1'),
(2, '9443761', 'Joan Gallego', 'Joan', '123123123', '12312321', 'daneryl@gmail.com', 'Juan de dios martinez							\r\n						', '1356493055.93', '2'),
(3, '98127398173', 'Alberto', 'Konz', '34567', '09876', 'konz@konz.com', 'Juan de dios martinez							\r\n						', '1356713734', '2'),
(4, '1719842146', 'Carlos', 'pucholo', '111111', '23456789', 'padre1@clientes.com', 'HNO. MIGUEL 4-96 Y H. VAZQUES ESQ', '1361076337.78', '1'),
(5, '1719842146', 'Juan', 'Harvy', '222222', '9876545', 'padre2@clientes.com', 'DANIEL CORDOVA 2113 Y AGUSTIN CUEVA', '1355158532.29', '2'),
(6, '1719842146', 'Luis', 'Doctor', '333333', '59764333', 'padre3@clientes.com', 'JUAN J.FLORES 341 Y GARCIA MORENO', '1359588763.49', '5'),
(7, '1719842146', 'hijo 1', 'hijo', '111111', '23456789', 'padre1@clientes.com', 'HNO. MIGUEL 4-96 Y H. VAZQUES ESQ', '1363497981.36', '1'),
(8, '1719842146', 'hijo2', '', '222222', '9876545', 'padre2@clientes.com', 'DANIEL CORDOVA 2113 Y AGUSTIN CUEVA', '1358409886.46', '2'),
(9, '1719842146', 'Vicente', '', '333333', '59764333', 'padre3@clientes.com', 'JUAN J.FLORES 341 Y GARCIA MORENO', '1360341489.13', '5'),
(10, '1719842146', 'Julio', '', '222222', '9876545', 'padre2@clientes.com', 'DANIEL CORDOVA 2113 Y AGUSTIN CUEVA', '1359471769.57', '2'),
(11, '1719842146', 'Salvador', '', '333333', '59764333', 'padre3@clientes.com', 'JUAN J.FLORES 341 Y GARCIA MORENO', '1361563843.74', '5'),
(12, '1719842146', 'Paco', '', '111111', '23456789', 'padre1@clientes.com', 'HNO. MIGUEL 4-96 Y H. VAZQUES ESQ', '1363607646.16', '1');

-- --------------------------------------------------------

--
-- Table structure for table `asistencia`
--

DROP TABLE IF EXISTS `asistencia`;
CREATE TABLE IF NOT EXISTS `asistencia` (
  `sesion` int(11) NOT NULL,
  `alumno` int(11) NOT NULL,
  `estado` varchar(50) NOT NULL,
  `observaciones` varchar(255) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `asistencia`
--

INSERT INTO `asistencia` (`sesion`, `alumno`, `estado`, `observaciones`) VALUES
(8, 5, '', NULL),
(8, 6, '', NULL),
(5, 11, '', NULL),
(5, 1, '', NULL),
(8, 10, '', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `cursos`
--

DROP TABLE IF EXISTS `cursos`;
CREATE TABLE IF NOT EXISTS `cursos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `horas` int(11) NOT NULL,
  `sesiones` int(5) NOT NULL,
  `horarios` text NOT NULL,
  `fecha_inicio` int(10) NOT NULL,
  `cupos_minimo` int(5) NOT NULL,
  `cupos_maximo` int(5) NOT NULL,
  `precio_prematricula` float DEFAULT NULL,
  `nivel` varchar(255) NOT NULL,
  `estado` varchar(50) NOT NULL,
  `version` varchar(20) NOT NULL,
  `producto_pac` varchar(50) NOT NULL,
  `bodega` varchar(5) NOT NULL,
  `profesor` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=11 ;

--
-- Dumping data for table `cursos`
--

INSERT INTO `cursos` (`id`, `nombre`, `horas`, `sesiones`, `horarios`, `fecha_inicio`, `cupos_minimo`, `cupos_maximo`, `precio_prematricula`, `nivel`, `estado`, `version`, `producto_pac`, `bodega`, `profesor`) VALUES
(5, 'Business english', 200, 100, 'de 8:30 a 10:30', 1354251600, 10, 35, 15, '5', '0', '1359956064.6', '1', '01', 7),
(6, 'Listening avanzado', 100, 100, 'de 16:00 a 17:00', 1354251600, 15, 25, 45, '3', '0', '1354705853.87', '5', '01', 6),
(7, 'Listening intermedio', 100, 50, 'de 18:00 a 20:00', 1353992400, 5, 20, 10, '2', '0', '1360707186.4', '5', '01', 5),
(8, 'Writing intermedio', 80, 20, 'de 14:00 a 18:00', 1360904400, 1, 28, 17, '2', '0', '1358621276.66', '5', '01', 7),
(9, 'Writing avanzado', 150, 50, '9:00 a 12:00', 1353992400, 30, 30, 20, '4', '0', '1359981533.14', '2', '02', 6),
(10, 'Ingles basico', 50, 25, '12:00 a 14:00', 1358571600, 10, 20, 5, '1', '0', '1363764820.36', '1', '01', 6);

-- --------------------------------------------------------

--
-- Table structure for table `examenes`
--

DROP TABLE IF EXISTS `examenes`;
CREATE TABLE IF NOT EXISTS `examenes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `version` varchar(20) NOT NULL,
  `titulo` varchar(255) NOT NULL,
  `fecha` int(10) NOT NULL,
  `curso` int(11) NOT NULL,
  `profesor` int(11) NOT NULL,
  `observaciones` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=12 ;

--
-- Dumping data for table `examenes`
--

INSERT INTO `examenes` (`id`, `version`, `titulo`, `fecha`, `curso`, `profesor`, `observaciones`) VALUES
(11, '1354225371.65', 'examen 4', 1354078800, 10, 7, ''),
(8, '1360731612.5', 'Examen 1', 1352955600, 10, 7, ''),
(9, '1359576101.6', 'examen 2', 1352955600, 10, 7, ''),
(10, '1358812609.05', 'examen 3', 1354078800, 10, 7, '');

-- --------------------------------------------------------

--
-- Table structure for table `matriculas`
--

DROP TABLE IF EXISTS `matriculas`;
CREATE TABLE IF NOT EXISTS `matriculas` (
  `alumno` int(11) NOT NULL,
  `curso` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `matriculas`
--

INSERT INTO `matriculas` (`alumno`, `curso`) VALUES
(1, 9),
(12, 8),
(11, 8),
(11, 6),
(11, 5),
(9, 5),
(7, 9),
(10, 7),
(1, 5),
(2, 6),
(5, 7),
(8, 8),
(6, 7),
(2, 9),
(3, 9),
(4, 9),
(6, 9),
(7, 10),
(9, 10),
(10, 10),
(11, 10),
(12, 10);

-- --------------------------------------------------------

--
-- Table structure for table `notas`
--

DROP TABLE IF EXISTS `notas`;
CREATE TABLE IF NOT EXISTS `notas` (
  `alumno` int(10) NOT NULL,
  `examen` int(10) NOT NULL,
  `nota` int(3) NOT NULL,
  `observaciones` text NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `notas`
--

INSERT INTO `notas` (`alumno`, `examen`, `nota`, `observaciones`) VALUES
(7, 7, 60, 'llego tarde'),
(12, 5, 90, 'mu bien'),
(11, 5, 20, 'necesita repaso'),
(8, 5, 100, '....'),
(12, 4, 20, 'en fins'),
(7, 6, 100, ''),
(12, 11, 20, ''),
(11, 11, 80, ''),
(10, 11, 70, ''),
(9, 11, 70, ''),
(7, 11, 60, ''),
(6, 11, 0, ''),
(4, 11, 0, ''),
(3, 11, 0, ''),
(2, 11, 0, ''),
(1, 11, 0, ''),
(12, 10, 50, ''),
(11, 10, 40, ''),
(10, 10, 100, ''),
(9, 10, 99, ''),
(7, 10, 87, ''),
(12, 9, 0, ''),
(11, 9, 67, ''),
(10, 9, 82, ''),
(9, 9, 94, ''),
(7, 9, 99, ''),
(12, 8, 54, ''),
(11, 8, 98, ''),
(10, 8, 66, ''),
(9, 8, 36, ''),
(7, 8, 45, '');

-- --------------------------------------------------------

--
-- Table structure for table `password_recovery`
--

DROP TABLE IF EXISTS `password_recovery`;
CREATE TABLE IF NOT EXISTS `password_recovery` (
  `user_id` int(11) NOT NULL,
  `hash` varchar(32) NOT NULL,
  `expiration_date` int(14) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `password_recovery`
--


-- --------------------------------------------------------

--
-- Table structure for table `password_recovery_admins`
--

DROP TABLE IF EXISTS `password_recovery_admins`;
CREATE TABLE IF NOT EXISTS `password_recovery_admins` (
  `user_id` int(11) NOT NULL,
  `hash` varchar(32) NOT NULL,
  `expiration_date` int(14) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `password_recovery_admins`
--


-- --------------------------------------------------------

--
-- Table structure for table `sesiones`
--

DROP TABLE IF EXISTS `sesiones`;
CREATE TABLE IF NOT EXISTS `sesiones` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `version` varchar(20) NOT NULL,
  `fecha` int(10) NOT NULL,
  `hora` varchar(10) NOT NULL,
  `profesor` int(5) NOT NULL,
  `curso` int(5) NOT NULL,
  `observaciones` text NOT NULL,
  `incidencias` text,
  `estado` int(1) NOT NULL,
  `pagado` int(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=14 ;

--
-- Dumping data for table `sesiones`
--

INSERT INTO `sesiones` (`id`, `version`, `fecha`, `hora`, `profesor`, `curso`, `observaciones`, `incidencias`, `estado`, `pagado`) VALUES
(6, '1358516506.82', 1353733200, '21:31', 6, 8, '', '', 1, 0),
(5, '1354821679.61', 1352955600, '12:34', 5, 5, '', '', 1, 0),
(4, '1361603698.44', 1352955600, '23:42', 6, 9, '', '', 0, 0),
(7, '1357040835.11', 1353128400, '12:31', 5, 8, '', '', 1, 0),
(8, '1355178946.29', 1358485200, '12:31', 5, 6, '', '', 1, 0),
(9, '1359942499.06', 1353733200, '12:31', 6, 8, '', '', 1, 0),
(10, '1357833096.06', 1353214800, '12:31', 7, 10, '', '', 1, 0),
(11, '1363838025.88', 1352610000, '21:21', 7, 5, '', '', 1, 0),
(12, '1355125910.53', 1353733200, '12:38', 7, 9, '', '', 1, 0),
(13, '1362496716.87', 1352955600, '12:31', 5, 9, '', NULL, 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `version` varchar(20) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(32) NOT NULL,
  `name` varchar(100) NOT NULL,
  `rol` varchar(100) DEFAULT NULL,
  `proveedor_pac` varchar(15) NOT NULL,
  `blocked` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=8 ;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `version`, `email`, `password`, `name`, `rol`, `proveedor_pac`, `blocked`) VALUES
(5, '1355576258.98', 'profe1@benedict.com', '81dc9bdb52d04dc20036dbd8313ed055', 'profesor alberto', 'profesor', '1001.003', 0),
(6, '1360483955.56', 'profe2@benedict.com', '81dc9bdb52d04dc20036dbd8313ed055', 'Andres', 'profesor', '1001.003', 0),
(7, '1359272131.54', 'profe3@benedict.com', '81dc9bdb52d04dc20036dbd8313ed055', 'Joan', 'profesor', '1001.003', 0);
