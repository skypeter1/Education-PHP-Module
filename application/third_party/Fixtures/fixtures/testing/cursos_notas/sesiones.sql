INSERT INTO `{db_name}`.`sesiones` 
	(`id`, `version`, `fecha`, `hora_inicio`,`hora_fin`, `profesor`, `owned_by`, `curso`, `observaciones`, `incidencias`, `estado`, `pagado`) 
VALUES
	(1, '1354274036.13', 1352955600, '12:30', '14:00', 2, 2, 10, 'Sin inconvenientes', 'Sin incidencias', 0, 0),
	(2, '1354274036.13', 1358955600, '09:00', '10:00', 5, 5, 10, 'Sin inconvenientes', 'Profesor borracho', 0, 0),
	(3, '1354274036.13', 1352055600, '17:30', '18:30', 4, 4, 10, 'Sin inconvenientes', 'Sin incidencias', 0, 0),
	(4, '1354274036.13', 1352958600, '08:01', '08:01', 1, 1, 1, 'Dictada 3 dias despues', 'profesor enfermo', 0, 0);
