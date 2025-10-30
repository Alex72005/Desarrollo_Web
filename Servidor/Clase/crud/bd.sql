-- Crear la base de datos
CREATE DATABASE futbol;
USE futbol;

-- --------------------------------------------------
-- Tabla: equipos
-- --------------------------------------------------
CREATE TABLE equipos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL
);

-- Datos de ejemplo para equipos
-- INSERT INTO equipos (nombre) VALUES
-- ('Real Madrid'),
-- ('Barcelona'),
-- ('Sevilla'),
-- ('Valencia');

-- --------------------------------------------------
-- Tabla: jugadores
-- --------------------------------------------------
CREATE TABLE jugadores (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    posicion VARCHAR(50),
    id_equipo INT,
    FOREIGN KEY (id_equipo) REFERENCES equipos(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

-- Datos de ejemplo para jugadores
-- INSERT INTO jugadores (nombre, posicion, id_equipo) VALUES
-- ('Vinicius Jr', 'Delantero', 1),
-- ('Pedri', 'Centrocampista', 2),
-- ('Sergio Ramos', 'Defensa', 3),
-- ('Gayà', 'Defensa', 4);
