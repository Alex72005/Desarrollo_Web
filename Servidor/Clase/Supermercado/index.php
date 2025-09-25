<?php
$supermarket = [
    "Frutas" => [
        ["nombre" => "Manzana", "precio" => 2, "cantidad" => 5], 
        ["nombre" => "Platano", "precio" => 1.5, "cantidad" => 7]
    ], 
    "Verduras" => [
        ["nombre" => "Tomate", "precio" => 2.5, "cantidad" => 4], 
        ["nombre" => "Cebolla", "precio" => 1.8, "cantidad" => 2]
    ]
];

$total = 0;
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Supermercado</title>
    <style>
        table{
            border: 2px solid black;
            border-collapse: collapse;
        }

        tr, td{
            border: 2px solid black;
        }
    </style>
</head>
<body>
    <table>
        <tr>
            <td>Categoría</td>
            <td>Producto</td>
            <td>Precio Unitario</td>
            <td>Cantidad</td>
            <td>Subtotal</td>
        </tr>

        <?php
            foreach ($supermarket as $categoria => $productos) {
                $totalCategoria = 0;
                foreach ($productos as $producto) {
                    $subtotal = $producto["precio"] * $producto["cantidad"];
                    $totalCategoria += $subtotal;
                    $total += $subtotal;

                    echo "<tr>";
                    echo "<td> $categoria </td>";
                    echo "<td>" . $producto["nombre"].  "</td>";
                    echo "<td>" . $producto["precio"]. "</td>";
                    echo "<td>" . $producto["cantidad"] . "</td>";
                    echo "<td> $subtotal </td>";
                    echo "</tr>";
                }

                echo "<tr>";
                echo "<td colspan = '4'> Total $categoria </td>";
                echo "<td> $totalCategoria </td>";
                echo "</tr>";
            }

            echo "<tr>";
            echo "<td colspan = '4'> Total General </td>";
            echo "<td> $total </td>";
            echo "</tr>"; 
        ?>

    </table>
</body>
</html>