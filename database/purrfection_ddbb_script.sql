USE `purrfection`;

-- Insertar usuarios
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

-- Insertar gatos
INSERT INTO `cat` (`name`, `age`, `neuter`, `comments`, `special_needs`, `breed`, `user_id`, `image`) VALUES
('Milo', 2, 1, 'Loves sleeping on warm laps', 0, 'Siamese', 1, 'milo.jpg'),
('Luna', 4, 1, 'Shy but affectionate', 1, 'Persian', 3, 'luna.jpg'),
('Simba', 1, 0, 'Very playful', 0, 'Maine Coon', 5, 'simba.jpg'),
('Nala', 5, 1, 'Needs special diet', 1, 'Ragdoll', 7, 'nala.jpg'),
('Oscar', 3, 1, 'Hates baths', 0, 'British Shorthair', 1, 'oscar.jpg'),
('Cleo', 6, 1, 'Senior cat, needs love', 1, 'Sphynx', 9, 'cleo.jpg'),
('Bella', 2, 0, 'Climbs everything', 0, 'Bengal', 3, 'bella.jpg'),
('Leo', 7, 1, 'Relaxed, sleeps a lot', 0, 'Russian Blue', 5, 'leo.jpg'),
('Mimi', 1, 0, 'Tiny and fast', 0, 'Abyssinian', 7, 'mimi.jpg'),
('Zoe', 4, 1, 'Talkative and clingy', 1, 'Oriental', 9, 'zoe.jpg');

-- Insertar citas
INSERT INTO `appointment` (`start_date`, `end_date`, `description`, `user_id`) VALUES
('2025-04-10', '2025-04-12', 'Weekend care for Milo', 2),
('2025-04-15', '2025-04-18', 'Nala needs meds', 4),
('2025-05-01', '2025-05-05', 'Vacation sitter needed', 6),
('2025-05-10', '2025-05-11', 'Oscar check-up', 2),
('2025-06-01', '2025-06-10', 'Trip to Europe', 8),
('2025-06-15', '2025-06-20', 'Foster Bella', 4),
('2025-07-01', '2025-07-03', 'Simba needs playtime', 6),
('2025-07-15', '2025-07-16', 'Zoe\'s allergies', 8),
('2025-08-01', '2025-08-10', 'Leo vacation care', 6),
('2025-08-20', '2025-08-22', 'Cleo medication schedule', 10);

-- Asociar gatos a citas
INSERT INTO `cat_has_appointment` (`appoinment_id`, `cat_id`) VALUES
(1, 1),
(2, 4),
(3, 2),
(3, 7),
(4, 5),
(5, 9),
(6, 7),
(7, 3),
(8, 10),
(9, 8),
(10, 6);
