CREATE DATABASE IF NOT EXISTS `ucn` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `ucn`;

CREATE TABLE IF NOT EXISTS `accounts` (
  `id` INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  `username` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(100) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

INSERT INTO `accounts` (`username`, `password`, `email`) VALUES ( 'test', 'test', 'test@test.com');
