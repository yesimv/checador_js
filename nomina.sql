-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 17-08-2024 a las 03:49:03
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `nomina`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `empleados`
--

CREATE TABLE `empleados` (
  `id_empleado` varchar(255) NOT NULL,
  `ap1_empleado` varchar(255) NOT NULL,
  `ap2_empleado` varchar(255) DEFAULT NULL,
  `nombre_empleado` varchar(255) NOT NULL,
  `correo_empleado` varchar(255) NOT NULL,
  `foto_empleado` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `empleados`
--

INSERT INTO `empleados` (`id_empleado`, `ap1_empleado`, `ap2_empleado`, `nombre_empleado`, `correo_empleado`, `foto_empleado`) VALUES
('04', 'sanchez', 'garcia', 'adrian ', 'adriangarcia@gmail.com', '4.jpg'),
('02', 'mijarez', 'flores', 'ana maria', 'anaflores@gmail.com', '2.jpg'),
('05', 'jimenez', 'lopez', 'eduardo', 'eduardolopez@gmail.com', '5.jpg'),
('03', 'miranda', 'morales', 'jose carmero', 'josemorales@gmail.com', '3.jpg'),
('01', 'duran', 'cordova', 'juan jesus', 'juancordova@gmail.com', '1.jpg');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `empleados`
--
ALTER TABLE `empleados`
  ADD UNIQUE KEY `correo_empleado` (`correo_empleado`),
  ADD UNIQUE KEY `id_empleado` (`id_empleado`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
