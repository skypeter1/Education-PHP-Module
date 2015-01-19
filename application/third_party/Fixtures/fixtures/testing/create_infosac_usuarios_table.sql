CREATE TABLE IF NOT EXISTS `{db_name}`.`usuario` (
  `username` varchar(10) NOT NULL default '0',
  `userpwd` varchar(32) NOT NULL default '0',
  `UID` int(4) unsigned NOT NULL auto_increment,
  `nombreusuario` varchar(50) default NULL,
  `estusuario` int(1) default '1',
  `call1` varchar(5) default NULL,
  `impresora` varchar(255) default '',
  `emailusr` varchar(255) default '',
  `graficos` char(1) default 'S',
  `tecnico` char(1) NOT NULL default 'N',
  `permisos` varchar(255) NOT NULL default '',
  PRIMARY KEY  (`username`),
  KEY `llave2` (`UID`)
) ENGINE=MyISAM AUTO_INCREMENT=1 DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;