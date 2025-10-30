<?php
include 'conexion.php';

function render_tabla($conexion)
{
    $sql = "SELECT jugadores.id, jugadores.nombre, jugadores.posicion, equipos.nombre AS equipo
            FROM jugadores
            LEFT JOIN equipos ON jugadores.id_equipo = equipos.id
            ORDER BY jugadores.id";
    $res = $conexion->query($sql);

    if ($res && $res->num_rows > 0) {
        echo "<table border='1' cellpadding='6' cellspacing='0'>";
        echo "<tr><th>ID</th><th>Nombre</th><th>Posición</th><th>Equipo</th></tr>";
        while ($row = $res->fetch_assoc()) {
            echo "<tr>
                    <td>{$row['id']}</td>
                    <td>" . htmlspecialchars($row['nombre']) . "</td>
                    <td>" . htmlspecialchars($row['posicion']) . "</td>
                    <td>" . htmlspecialchars($row['equipo'] ?? 'Sin equipo') . "</td>
                  </tr>";
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
        case 'POST': // Crear
            $nombre = trim($_POST['nombre'] ?? '');
            $posicion = trim($_POST['posicion'] ?? '');
            $id_equipo = (int)($_POST['id_equipo'] ?? 0);

            if ($nombre && $posicion && $id_equipo > 0) {
                $conexion->query("INSERT INTO jugadores (nombre, posicion, id_equipo)
                                  VALUES ('$nombre', '$posicion', $id_equipo)");
                echo "<p>✅ Jugador creado correctamente.</p>";
            } else {
                echo "<p>⚠️ Faltan datos.</p>";
            }
            break;

        case 'PUT': // Actualizar
            $id = (int)($_POST['id'] ?? 0);
            $nombre = trim($_POST['nombre'] ?? '');
            $posicion = trim($_POST['posicion'] ?? '');
            $id_equipo = (int)($_POST['id_equipo'] ?? 0);

            if ($id > 0 && $nombre && $posicion && $id_equipo > 0) {
                $conexion->query("UPDATE jugadores
                                  SET nombre='$nombre', posicion='$posicion', id_equipo=$id_equipo
                                  WHERE id=$id");
                echo "<p>🟡 Jugador actualizado correctamente.</p>";
            } else {
                echo "<p>⚠️ Faltan datos.</p>";
            }
            break;

        case 'DELETE': // Eliminar
            $id = (int)($_POST['id'] ?? 0);
            if ($id > 0) {
                $conexion->query("DELETE FROM jugadores WHERE id=$id");
                echo "<p>❌ Jugador eliminado correctamente.</p>";
            } else {
                echo "<p>⚠️ Falta ID.</p>";
            }
            break;

        default:
            echo "<p>⚠️ Método no reconocido.</p>";
    }

    echo "<hr>";
    render_tabla($conexion);
    exit;
}
