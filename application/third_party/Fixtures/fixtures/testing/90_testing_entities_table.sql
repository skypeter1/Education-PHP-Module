CREATE TABLE IF NOT EXISTS `{db_name}`.`entities` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `version` DOUBLE NOT NULL,
  `name` varchar(255) NOT NULL,
  `user` int(11),
  PRIMARY KEY (`id`),
  UNIQUE KEY (`name`)
);
