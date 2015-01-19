INSERT INTO `{db_name}`.`sesiones` 
	(`id`, `version`, `fecha`, `hora_inicio`,`hora_fin`, `profesor`, `owned_by`, `curso`, `observaciones`, `incidencias`, `estado`, `pagado`, `tarifa`) 
VALUES
	(1, '1354274036.13', 1352955600, '12:30', '14:00', 2, 2, 3, 'Sin inconvenientes', 'Sin incidencias', 1, 0, 'weekend_price'),
	(2, '1354274036.13', 1358955600, '09:00', '10:00', 5, 5, 2, 'Sin inconvenientes', 'Profesor borracho', 0, 0, NULL),
	(3, '1354274036.13', 1352055600, '18:00', '18:30', 4, 4, 2, 'Sin inconvenientes', 'Sin incidencias', 1, 0, 'out_academy_price'),
	(4, '1', 1352958600, '08:01', '08:02', 1, 1, 1, 'Dictada 3 dias despues', 'profesor enfermo', 1, 0, "out_academy_price");
