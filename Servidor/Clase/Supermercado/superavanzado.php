<?php
$supermercado = [
    "Bebidas" => [
        ["nombre" => "Coca-Cola 1L", "precio" => 2, "cantidad" => 30],
        ["nombre" => "Agua 1.5L", "precio" => 1, "cantidad" => 20]
    ],
    "Snacks" => [
        ["nombre" => "Patatas fritas", "precio" => 1.5, "cantidad" => 25],
        ["nombre" => "Chocolates", "precio" => 2, "cantidad" => 15]
    ],
    "Frutas" => [
        ["nombre" => "Manzana", "precio" => 2, "cantidad" => 10],
        ["nombre" => "Plátano", "precio" => 1.5, "cantidad" => 8]
    ],
    "Verduras" => [
        ["nombre" => "Tomate", "precio" => 2.5, "cantidad" => 6],
        ["nombre" => "Lechuga", "precio" => 1.2, "cantidad" => 4]
    ]
];

$totalGeneral = 0;
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Supermercado Avanzado</title>
    <style>
        table {
            border-collapse: collapse;
            width: 80%;
        }
        td, th {
            border: 2px solid black;
            padding: 5px;
        }
        .numero {
            text-align: right;
        }
    </style>
</head>
<body>
<table>
    <tr>
        <th>Categoría</th>
        <th>Producto</th>
        <th>Precio Unitario</th>
        <th>Cantidad</th>
        <th>Subtotal</th>
        <th>Estado</th>
    </tr>

<?php
foreach($supermercado as $categoria => $productos){
    $totalCategoria = 0;
    foreach($productos as $producto){
        $subtotal = $producto["precio"] * $producto["cantidad"];
        $totalCategoria += $subtotal;
        $totalGeneral += $subtotal;

        $estado = ($subtotal >= 50) ? "Oferta" : "Normal";

        echo "<tr>";
        
        echo "<td>$categoria</td>";
        echo "<td>{$producto['nombre']}</td>";
        echo "<td class='numero'>{$producto['precio']}</td>";
        echo "<td class='numero'>{$producto['cantidad']}</td>";
        echo "<td class='numero'>$subtotal</td>";
        echo "<td>$estado</td>";
        echo "</tr>";
    }

    // Total por categoría
    echo "<tr>";
    echo "<td colspan='4'><b>Total $categoria</b></td>";
    echo "<td class='numero'><b>$totalCategoria</b></td>";
    echo "<td></td>";
    echo "</tr>";
}

// Total general
echo "<tr>";
echo "<td colspan='4'><b>Total General</b></td>";
echo "<td class='numero'><b>$totalGeneral</b></td>";
echo "<td></td>";
echo "</tr>";
?>
</table>
</body>
</html>
