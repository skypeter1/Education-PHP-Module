CREATE TABLE IF NOT EXISTS `{db_name}`.`users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `version` VARCHAR(20) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(32) NOT NULL,
  `name` varchar(100) NOT NULL,
  `rol` varchar(100) NULL,
  `price` varchar(15) NOT NULL,
  `weekend_price` varchar(15) NOT NULL,
  `out_academy_price` varchar(15) NOT NULL,
  `proveedor_pac` varchar(15) NOT NULL,
  `blocked` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY (`email`)
);
