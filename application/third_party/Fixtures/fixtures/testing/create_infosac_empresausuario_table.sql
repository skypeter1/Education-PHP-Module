CREATE TABLE IF NOT EXISTS `{db_name}`.`empresausuario` (
  `idemp` int(3) NOT NULL DEFAULT '0',
  `idusu` int(3) unsigned NOT NULL DEFAULT '0',
  `idbod` char(3) NOT NULL DEFAULT '0',
  `perfil` int(3) DEFAULT NULL,
  `idcte` text,
  `empdef` int(3) unsigned DEFAULT NULL,
  `boddef` char(3) DEFAULT NULL,
  `idcat` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`idemp`,`idusu`,`idbod`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
