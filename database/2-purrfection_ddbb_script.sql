-- Seleccionamos el esquema purfection
USE `purrfection`;

-- -----------------------------------------------------
-- Insertar registros en la tabla `user` (usuarios)
-- -----------------------------------------------------
INSERT INTO `user` (`email`, `password`, `role`, `name`) VALUES
('alice@example.com', 'hashedpwd1', 'client', 'Alice'),
('bob@example.com', 'hashedpwd2', 'caretaker', 'Bob'),
('charlie@example.com', 'hashedpwd3', 'client', 'Charlie'),
('dana@example.com', 'hashedpwd4', 'caretaker', 'Dana'),
('eric@example.com', 'hashedpwd5', 'client', 'Eric'),
('fiona@example.com', 'hashedpwd6', 'caretaker', 'Fiona'),
('george@example.com', 'hashedpwd7', 'client', 'George'),
('hannah@example.com', 'hashedpwd8', 'caretaker', 'Hannah'),
('ian@example.com', 'hashedpwd9', 'client', 'Ian'),
('julia@example.com', 'hashedpwd10', 'caretaker', 'Julia');

-- -----------------------------------------------------
-- Insertar registros en la tabla `cat` (gatos)
-- -----------------------------------------------------
INSERT INTO `cat` (`name`, `age`, `neuter`, `comments`, `special_needs`, `breed`, `user_id`, `image`) VALUES
('Milo', 2, 1, 'Le encanta dormir en regazos calientes', 0, 'Siamés', 1, 'milo.jpg'),
('Luna', 4, 1, 'Tímida pero cariñosa', 1, 'Persa', 3, 'luna.jpg'),
('Simba', 1, 0, 'Muy juguetón', 0, 'Maine Coon', 5, 'simba.jpg'),
('Nala', 5, 1, 'Necesita dieta especial', 1, 'Ragdoll', 7, 'nala.jpg'),
('Oscar', 3, 1, 'No le gustan los baños', 0, 'British Shorthair', 1, 'oscar.jpg'),
('Cleo', 6, 1, 'Gato mayor, requiere mucho cariño', 1, 'Sphynx', 9, 'cleo.jpg'),
('Bella', 2, 0, 'Se sube a todo', 0, 'Bengala', 3, 'bella.jpg'),
('Leo', 7, 1, 'Relajado, duerme mucho', 0, 'Russian Blue', 5, 'leo.jpg'),
('Mimi', 1, 0, 'Pequeña y rápida', 0, 'Abyssinian', 7, 'mimi.jpg'),
('Zoe', 4, 1, 'Habladora y cariñosa', 1, 'Oriental', 9, 'zoe.jpg');

-- -----------------------------------------------------
-- Insertar registros en la tabla `appointment` (citas)
-- -----------------------------------------------------
INSERT INTO `appointment` (`start_date`, `end_date`, `description`, `user_id`, `creation_date`) VALUES
('2025-04-10', '2025-04-12', 'Cuidado de fin de semana para Milo', 2, '2025-04-05'),
('2025-04-15', '2025-04-18', 'Nala necesita medicación', 4, '2025-04-05'),
('2025-05-01', '2025-05-05', 'Se requiere cuidador durante vacaciones', 6, '2025-04-06'),
('2025-05-10', '2025-05-11', 'Chequeo para Oscar', 2, '2025-04-06'),
('2025-06-01', '2025-06-10', 'Viaje a Europa', 8, '2025-04-07'),
('2025-06-15', '2025-06-20', 'Cuidado temporal para Bella', 4, '2025-04-08'),
('2025-07-01', '2025-07-03', 'Simba necesita juego y atención', 6, '2025-04-08'),
('2025-07-15', '2025-07-16', 'Alergias de Zoe', 8, '2025-04-09'),
('2025-08-01', '2025-08-10', 'Cuidado vacacional para Leo', 6, '2025-04-10'),
('2025-08-20', '2025-08-22', 'Plan de medicación para Cleo', 10, '2025-04-10');

-- -----------------------------------------------------
-- Insertar registros en la tabla `cat_has_appointment` (asociación entre gatos y citas)
-- -----------------------------------------------------
INSERT INTO `cat_has_appointment` (`appoinment_id`, `cat_id`) VALUES
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

