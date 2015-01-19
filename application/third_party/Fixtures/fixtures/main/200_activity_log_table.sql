CREATE TABLE IF NOT EXISTS `{db_name}`.`activity_log` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user` text NOT NULL,
  `action` varchar(255) NOT NULL,
  `object` text,
  `fecha` INT NOT NULL,
  `ip_address` varchar(15) NOT NULL,
  PRIMARY KEY (`id`)
);

