<?php
//Ejercicio 1: En un array de 10 valores numéricos obtén el valor mínimo y máximo
$array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
$min = $array[0];
$max = $array[0];

for ($i = 0; $i < count($array); $i++) {
    if ($array[$i] < $min) {
        $min = $array[$i];
    }

    if ($array[$i] > $max) {
        $max = $array[$i];
    }
}

echo "El minimo del array es $min" . "<br>";
echo "El maximo del array es $max";

//Ejercicio 2: Obtén el número de valores iguales al valor 2 contenidos en un array de 10 valores generados aleatoriamente con valores de 1 a 10. 
$array = [];

for ($i = 0; $i < 10; $i++) {
    $array[] = rand(1, 10);
}

echo print_r($array, true);

$contador = 0;

foreach ($array as $numero) {
    if ($numero == 2) {
        $contador++;
    }
}

echo "El numero 2 aparece en el array $contador veces";

//Ejercicio 3: Crea una matriz de 10 x 10, y calcula la suma de la diagonal principal y la suma de la diagonal secundaria y muestre por pantalla la diferencia de ambas.

$matriz = [
    [1,  2,  3,  4,  5,  6,  7,  8,  9, 10],
    [11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
    [31, 32, 33, 34, 35, 36, 37, 38, 39, 40],
    [41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    [51, 52, 53, 54, 55, 56, 57, 58, 59, 60],
    [61, 62, 63, 64, 65, 66, 67, 68, 69, 70],
    [71, 72, 73, 74, 75, 76, 77, 78, 79, 80],
    [81, 82, 83, 84, 85, 86, 87, 88, 89, 90],
    [91, 92, 93, 94, 95, 96, 97, 98, 99, 100]
];

foreach ($matriz as $fila) {
    foreach ($fila as $valor) {
        echo $valor . " ";
    }

    echo "<br>";
}

$sumaDiagonalPrincipal = 0;
$sumaDiagonalSecundaria = 0;

for ($i = 0; $i < 10; $i++) {
    $sumaDiagonalPrincipal += $matriz[$i][$i];
    $sumaDiagonalSecundaria += $matriz[$i][9 - $i];
}

$diferencia = $sumaDiagonalPrincipal - $sumaDiagonalSecundaria;

echo "<br>La suma de la diagonal principal es $sumaDiagonalPrincipal <br>";
echo "La suma de la diagonal secundaria es $sumaDiagonalSecundaria <br>";
echo "La diferencia es $diferencia";
