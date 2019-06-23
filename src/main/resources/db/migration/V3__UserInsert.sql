INSERT INTO `users` (`id`, `email`, `name`, `password`, `username`) VALUES
(1, 'testtest@gmail.com', 'Cedric Coloma', '$2a$10$Uj0hOMPihvGT7XHsSfC5s.qykg8EjmTgNaZKE5RicccDzbX3Pqefm', 'testtest');
INSERT INTO `user_roles` (`user_id`, `role_id`) VALUES ('1', '1');
INSERT INTO `user_roles` (`user_id`, `role_id`) VALUES ('1', '2');