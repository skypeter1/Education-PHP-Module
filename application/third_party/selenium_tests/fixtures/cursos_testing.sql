-- phpMyAdmin SQL Dump
-- version 3.1.1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Nov 01, 2012 at 10:19 AM
-- Server version: 5.1.30
-- PHP Version: 5.2.8

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";

--
-- Database: `benedict_testing`
--

-- --------------------------------------------------------

--
-- Table structure for table `cursos`
--

DROP TABLE IF EXISTS `cursos`;
CREATE TABLE IF NOT EXISTS `cursos` (
`id` INT(11) NOT NULL AUTO_INCREMENT,
`nombre` VARCHAR(255) NOT NULL,
`horas` INT(11) NOT NULL,
`sesiones` INT(5) NOT NULL,
`horarios` text NOT NULL,
`fecha_inicio` INT(10) NOT NULL,
`cupos_minimo` INT(5) NOT NULL,
`cupos_maximo` INT(5) NOT NULL,
`nivel` VARCHAR(255) NOT NULL,
`estado` TINYINT(1) NOT NULL,
`version` VARCHAR(20) NOT NULL,
`producto_pac` VARCHAR(50) NOT NULL,
PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=5 ;

--
-- Dumping data for table `cursos`
--

INSERT INTO `cursos` (`id`, `nombre`, `horas`, `sesiones`, `horarios`, `fecha_inicio`, `cupos_minimo`, `cupos_maximo`, `nivel`, `estado`, `version`, `producto_pac`) VALUES
(1, 'Reading', 5, 6, '123123', 1349931600, 5, 5, '123', 1, '1352301284.49', '1'),
(2, 'Listening', 9, 9, '9', 1349413200, 99, 9, '9', 0, '1358549848.42', '1'),
(3, 'Writing', 8, 8, '8', 1349326800, 8, 8, '8', 1, '1359863267.2', '5'),
(4, 'Bussiness English', 8, 7, '7', 1349240400, 7, 7, '7', 1, '1352122361.69', '1');
