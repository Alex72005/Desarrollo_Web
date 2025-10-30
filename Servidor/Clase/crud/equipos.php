<?php
include 'conexion.php';

function render_tabla($conexion)
{
    $res = $conexion->query("SELECT * FROM equipos ORDER BY id");
    if ($res && $res->num_rows > 0) {
        echo "<table border='1' cellpadding='6' cellspacing='0'>";
        echo "<tr><th>ID</th><th>Nombre</th></tr>";
        while ($row = $res->fetch_assoc()) {
            echo "<tr><td>{$row['id']}</td><td>" . $row['nombre'] . "</td></tr>";
        }
        echo "</table>";
    }
}

$method = $_SERVER['REQUEST_METHOD'];

if ($method == 'GET') {
    render_tabla($conexion);
    exit;
}

if ($method == 'POST') {
    $accion = $_POST['_method'] ?? 'POST';

    switch ($accion) {
        case 'POST':
            $nombre = trim($_POST['nombre'] ?? '');
            if ($nombre != '') {
                $conexion->query("INSERT INTO equipos (nombre) VALUES ('$nombre')");
            } else {
                echo "<p>⚠️ Falta el nombre.</p>";
            }
            break;

        case 'PUT':
            $id = (int)($_POST['id'] ?? 0);
            $nombre = trim($_POST['nombre'] ?? '');
            if ($id > 0 && $nombre != '') {
                $conexion->query("UPDATE equipos SET nombre='$nombre' WHERE id=$id");
            } else {
                echo "<p>⚠️ Falta ID o nombre.</p>";
            }
            break;

        case 'DELETE':
            $id = (int)($_POST['id'] ?? 0);
            if ($id > 0) {
                $conexion->query("DELETE FROM equipos WHERE id=$id");
            } else {
                echo "<p>⚠️ Falta ID.</p>";
            }
            break;

        default:
            echo "<p>Acción no válida.</p>";
    }

    // Siempre muestra la tabla actualizada
    render_tabla($conexion);
    exit;
}