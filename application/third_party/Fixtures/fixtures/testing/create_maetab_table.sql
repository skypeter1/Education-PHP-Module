CREATE TABLE IF NOT EXISTS `{db_name}`.`maetab` (
  `numtab` varchar(4) NOT NULL DEFAULT '',
  `codtab` varchar(5) NOT NULL DEFAULT '',
  `nomtab` varchar(50) NOT NULL DEFAULT '',
  `ad1tab` double(18,2) DEFAULT NULL,
  `ad2tab` double(18,2) DEFAULT NULL,
  `ad3tab` float DEFAULT NULL,
  `ad4tab` double(18,2) DEFAULT NULL,
  `ad5tab` float DEFAULT NULL,
  `ad6tab` float DEFAULT NULL,
  `ad7tab` varchar(600) DEFAULT NULL,
  `ad8tab` varchar(255) DEFAULT NULL,
  `block` char(1) DEFAULT NULL,
  `ad9tab` varchar(255) DEFAULT NULL,
  `ad0tab` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`numtab`,`codtab`),
  KEY `numtab` (`numtab`)
);