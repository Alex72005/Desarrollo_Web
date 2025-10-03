<?php
    //Ejercicio 1
    $lado1 = 7;
    $lado2 = 12;
    $lado3 = 3;

    if ((($lado1 + $lado2) <= $lado3) || (($lado2 + $lado3) <= $lado1) || (($lado1 + $lado3) <= $lado2)) {
        echo "No es un triangulo";
    } else if (($lado1 == $lado2) && ($lado2 == $lado3) && ($lado1 == $lado3)) {
        echo "El triángulo es equilatero. Todos los lados son iguales";
    } else if (($lado1 == $lado2) && ($lado1 != $lado3) && ($lado2 != $lado3)){
        echo "El triángulo es isosceles. Tiene dos lados iguales";
    } else if (($lado1 == $lado3) && ($lado1 != $lado2) && ($lado2 != $lado3)){
        echo "El triángulo es isosceles. Tiene dos lados iguales";
    } else if (($lado2 == $lado3) && ($lado2 != $lado1) && ($lado1 != $lado3)){
        echo "El triángulo es isosceles. Tiene dos lados iguales";
    } else if (($lado1 != $lado2) && ($lado2 != $lado3) && ($lado1 != $lado3)) {
        echo "El triangulo es escaleno. Ningún lado es igual";
    } else {
        "Error";
    }

    //Ejercicio 2
    $array = [1,2,3,4,5,6];
    $arrayImpares = [];
    $contadorNum = 0;
    $sumaNum = 0;

    for ($i=1; $i < count($array) ; $i++) { 
        if ($i % 2 != 0) {
            $arrayImpares[] = $array[$i];
            $contadorNum++;
        }
    }

    for ($i=0; $i < count($arrayImpares); $i++) { 
        $sumaNum += $arrayImpares[$i];
    }

    $media = $sumaNum / $contadorNum;    


    echo $media;

    //Ejercicio 3
    $baseImponible = 25; 
    $tipoDeIva = "reducido";
    $codigoPromocional = "mitad";
    $iva = 0;
    $precioIva = 0;
    $precioFinal = 0;

    if ($tipoDeIva == "general") {
        $iva = 0.21;
        $precioIva = $baseImponible + ($baseImponible * $iva);
    } else if ($tipoDeIva == "reducido"){
        $iva = 0.10;
        $precioIva = $baseImponible + ($baseImponible * $iva);
    } else if ($tipoDeIva == "superreducido"){
        $iva = 0.04;
        $precioIva = $baseImponible + ($baseImponible * $iva);
    }

    if ($codigoPromocional == "nopro") {
        $precioFinal = $precioIva;
    } else if ($codigoPromocional == "mitad") {
        $precioFinal = ($precioIva / 2);
    } else if ($codigoPromocional == "meno5") {
        $precioFinal = $precioIva - 5; 
    } else if ($codigoPromocional == "5porc") {
        $precioFinal = $precioIva - ($precioIva * 0.05);
    }

    echo "Introduzca la base imponible: $baseImponible";
    echo "Introduzca el tipo de IVA(general, reducido o superreducido): $tipoDeIva";
    echo "Introduzca el código promocional(nopro, mitad, meno5 o 5porc): $codigoPromocional";
    echo "Base imponible $baseImponible IVA(" . ($iva * 100) . "%)" . ($baseImponible * $iva);
    echo "Precio con IVA $precioIva";
    echo "Codigo promocional ($codigoPromocional)";
    echo "Total: $precioFinal"; 
?>