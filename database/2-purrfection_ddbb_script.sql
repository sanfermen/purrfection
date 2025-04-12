-- Seleccionamos el esquema purfection
USE `purrfection`;

-- -----------------------------------------------------
-- Insertar registros en la tabla `user` (usuarios)
-- -----------------------------------------------------
INSERT INTO `user` (`email`, `password`, `role`, `name`) VALUES
('alice@example.com', '$2b$10$KluWrTyfZ.QC2b2aiCrkSuL01TOtvtZAorunK6TpIY9ZTJPrSPGfy', 'client', 'Alice'),
('bob@example.com', '$2b$10$Jw9tIBkl5ZoxeFjT2Y7KGeMyKqTr7qppnNYHi1twojwxPmw5Jurzu
', 'caretaker', 'Bob'),
('charlie@example.com', '$2b$10$MnhyAAyI/dj7Nl3y5t4w8ucRvbKc.yRdBr/gch5GwL3Gc40Q123SS
', 'client', 'Charlie'),
('dana@example.com', '$2b$10$xPwW714RerkKCHDvInEcauK6OPIverLW4AZ/ePxEd3J9NaSNN5WO.
', 'caretaker', 'Dana'),
('eric@example.com', '$2b$10$PrEKFa2DD2xxl3xNSbn51eNd.RCwhpx/0Tl8yS6c4aIke1Ia7zvI6
', 'client', 'Eric'),
('fiona@example.com', '$2b$10$oSPplUQfXjEmnRfW2V5ZoOdfJNp9LYtXoBOkQNIanp3f6jjK7.8nW
', 'caretaker', 'Fiona'),
('george@example.com', '$2b$10$LvJFgQLSe3GgKnDcAQFQGOFMTSfRWtZRbFa.QFlXhc.T55s9p4kvu
', 'client', 'George'),
('hannah@example.com', '$2b$10$pXVdhHcq4L9upzHsiEuXMePTh0mqjW/Co9Z1CIY3WS/StxYMQhyXa
', 'caretaker', 'Hannah'),
('ian@example.com', '$2b$10$CcBL3iqI7fWf4CCZRwV0u.ZYo7jgB9vjCmKagMi1YOLH5gn38PaCa
', 'client', 'Ian'),
('julia@example.com', '$2b$10$pdGoh6vRdGhnTs9zDGh6zOkFfxL/RkgAHNlZcDPEQ1De2gM3MgMq.', 'caretaker', 'Julia');

-- -----------------------------------------------------
-- Insertar registros en la tabla `cat` (gatos)
-- -----------------------------------------------------
INSERT INTO `cat` (`name`, `age`, `neuter`, `comments`, `special_needs`, `breed`, `user_id`, `image`) VALUES
('Milo', 2, 1, 'Muy mimoso y amigable. Siempre saluda a quien llega a casa y se restriega contra tus piernas si le caes bien. Le encanta dormir en regazos calientes. Si le das una chuche te querrá para siempre.', 0, 'Siamés', 1, 'milo.jpg'),
('Luna', 4, 1, 'Luna es una gata muy tímida, tardarás un poquito en ganarte su confianza pero cuando lo hagas será super cariñosa. Si no le encuentras, se habrá escondido debajo del sofá.', 1, 'Persa', 3, 'luna.jpg'),
('Simba', 1, 0, 'Es un cachorro muy activo y juguetón, le gusta correr y trepar por las estanterías y estantes de la casa.', 0, 'Maine Coon', 5, 'simba.jpg'),
('Nala', 5, 1, 'Nala es un poco desconfiada, no le gustan los extraños y es ella quien elige cuándo acercarse. Sin embargo, si te elige, te elegirá para siempre. Pesa 9kg y necesita dieta especial', 1, 'Ragdoll', 7, 'nala.jpg'),
('Oscar', 3, 1, 'A Oscar no le gusta casi nada. No le gustarás tú, ni siquiera creo que le guste yo. Te juzga desde la distancia y solo se te acercará para comida. Lo que más odia es el agua', 0, 'British Shorthair', 1, 'oscar.jpg'),
('Cleo', 10, 1, 'Cleo es una señora mayor, le gustan las siestas al sol y los mimos en la tripa. Se mueve despacio y duerme muchísimo, pero cuando está despierta quiere muchos cariños', 1, 'Sphynx', 9, 'cleo.jpg'),
('Bella', 2, 0, 'Bella es una gata muy activa, tiene gatificación por toda la casa y se tira más tiempo en las autoras que en el suelo. Trepa por todas partes: si no la encuentras estará en las alturas', 0, 'Bengala', 3, 'bella.jpg'),
('Leo', 7, 1, 'Relajado, duerme mucho. Solo come, caga y duerme.', 0, 'Russian Blue', 5, 'leo.jpg'),
('Mimi', 1, 0, 'Cachorrita muy mona y pequeña, con mucha energía. Come mucho pero lo gasta enseguida, es pequeña y rápida. ¡Cuidado con las ventanas y las puertas abiertas!', 0, 'Abyssinian', 7, 'mimi.jpg'),
('Zoe', 4, 1, 'Zoe es una aventurera nata, le encanta explorar los rincones más extraños y pequeños de la casa, pero siempre sabrás dónde está porque habla mucho. Muy cariñosa, le gusta que le rasquen detrás de las orejas', 1, 'Oriental', 9, 'zoe.jpg');

-- -----------------------------------------------------
-- Insertar registros en la tabla `appointment` (citas)
-- -----------------------------------------------------
INSERT INTO `appointment` (`start_date`, `end_date`, `description`, `user_id`, `creation_date`) VALUES
('2025-04-10', '2025-04-12', 'Cuidado de fin de semana para Milo. Me marcho el fin de semana de vacaciones y necesito alguien que se encargue de mi gato Milo. Con que se pase una vez por casa para asegurarse de que tiene agua y comida sería suficiente. Pago extra por jugar con él y hacerle mimos, es un gato muy mimoso y amigable.', 2, '2025-04-05'),
('2025-04-15', '2025-04-18', 'Nala necesita medicación. Me voy unos días de viaje y necesito que alguien se encargue de administrarle la medicación a Nala, que tiene Coronavirus Felino. La toma a las 9 de la mañana, un cuarto de pastilla. Es imprescindible que la tome en hora y que coma nada hasta pasadas las dos horas. Por suerte, no es difícil darle la pastilla con un poquito de malta, es una gata muy buena.', 4, '2025-04-05'),
('2025-05-01', '2025-05-05', 'Se requiere cuidador durante vacaciones. Me amoldo a lo que prefiera el purrfesional, puede venir a casa o puedo trasladarlo a toda Bizkaia.', 6, '2025-04-06'),
('2025-05-10', '2025-05-11', 'Vacunas para Oscar a las 14:30 en el veterinario de Santutxu. Me han cambiado la jornada de trabajo y no puedo cambiar la cita del vete, necesito alguien que le lleve. Se pone un poco nervioso con el transportín, pero si le cubres con una toalla antes de meterle no hay ningún problema.', 2, '2025-04-06'),
('2025-06-01', '2025-06-10', 'Viaje a Europa. Necesito que alguien se quede con mis gatos mientras no estoy. Son tímidos pero se amoldan bien a casas ajenas, no dan ningún problema. ¡Diez días de nada!', 8, '2025-04-07'),
('2025-06-15', '2025-06-20', 'Cuidado temporal para Bella. Necesito alguien que se pase dos veces por casa para alimentar y cuidar a Bella mientras no estoy, es una gata con una dieta muy concreta. PD: no llevar medias, le gusta trepar por las piernas.', 4, '2025-04-08'),
('2025-07-01', '2025-07-03', 'Simba necesita juego y atención. Me han ampliado la jornada laboral este fin de semana y no puedo cuidar de mi cachorrito, que necesita mucho juego para cansarle, está en plena edad de crecimiento. Es un gato muy simpático y amigable, si le lanzas una goma de pelo serás su mejor amigo.', 6, '2025-04-08'),
('2025-07-15', '2025-07-16', 'Alergias de Zoe. Paso el día fuera y necesito que alguien se encargue de la medicación de mi gata, que además de alergia tiene asma y utiliza inhalador. Necesito a alguien experto, es una gata cariñosa pero ODIA el inhalador y bufa nada más verlo, ¡es una emergencia! ¿Alguien disponible?', 8, '2025-04-09'),
('2025-08-01', '2025-08-10', 'No puedo llevarme a mi gato Leo de vacaciones, necesito alguien que lo cuide. Puedo llevarlo a donde sea del País Vasco. Es un gato muy bueno, está acostumbrado a relacionarse con otros gatos y come de todo, no necesita grandes cuidados.', 6, '2025-04-10'),
('2025-08-20', '2025-08-22', 'Necesito que alguien le administre la medicación a mi gata Cleo durante unos días. Es una gata mayor, duerme casi todo el día. Tiene comedero automático y fuente eléctrica, solo necesita alguien que le administre las pastillas por la noche y le rasque la barriga. Flexible de 21:00 a 23:00.', 10, '2025-04-10');

-- -----------------------------------------------------
-- Insertar registros en la tabla `cat_has_appointment` (asociación entre gatos y citas)
-- -----------------------------------------------------
INSERT INTO `cat_has_appointment` (`appointment_id`, `cat_id`) VALUES
(1, 1),   -- Milo en cita 1
(2, 4),   -- Nala en cita 2
(3, 2),   -- Luna en cita 3
(3, 7),   -- Bella en cita 3 (mismo registro de cita para más de un gato)
(4, 5),   -- Oscar en cita 4
(5, 9),   -- Mimi en cita 5
(6, 7),   -- Bella en cita 6
(7, 3),   -- Simba en cita 7
(8, 10),  -- Zoe en cita 8
(9, 8),   -- Leo en cita 9
(10, 6);  -- Cleo en cita 10

