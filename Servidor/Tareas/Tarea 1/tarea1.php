<?php
    /*Ejercicio 1*/
    $varTexto = "hola";
    $varEntero = 1234; 
    $varBoolean = True;
    $varFloat = 1.2;
    $varArray = array("1","2");

    echo "Variable de tipo cadena de texto: " . $varTexto . "<br/>";
    echo "Variable de tipo entero: " . $varEntero . "<br/>";
    echo "Variable de tipo boolean: " . $varBoolean . "<br/>";
    echo "Variable de tipo float: " . $varFloat . "<br/>";
    echo "Variable de tipo compuesto: ";
        print_r($varArray);

    /*Ejercicio 2*/
    $nombre = "Alejandro Santos Merina";
    
    echo "<br/>"."<br/>" . 'Mostrar variable nombre $nombre';
    echo "<br/>" . "Mostrar variable nombre $nombre";
    //Con las comillas simples a un String no puedes concatenarle una variable. 

    /*Ejercicio 3*/
    echo "<br/>"."<br/>" . gettype($varTexto);
    echo "<br/>". gettype($varEntero);
    echo "<br/>". gettype($varBoolean);
    echo "<br/>". gettype($varFloat);
    echo "<br/>". gettype($varArray) . "<br/>" . "<br/>";

    $variables = [$varTexto, $varEntero, $varBoolean, $varFloat, $varArray];

    foreach($variables as $valor){
        if (is_string($valor)){
            echo "verdadero" . "<br/>";
        } else{
            echo "falso" . "<br/>";
        }
    }

    $varTexto = "hola";
    $varEntero = 1234; 
    $varBoolean = 1;
    $varFloat = 1.2;

    $variables2 = [$varTexto, $varEntero, $varBoolean, $varFloat, $varArray];

    foreach($variables2 as $key => $valor2){
        $variables2[$key] = (string)$valor2;
    }

    foreach($variables2 as $valor2){
        if (is_string($valor2)){
            echo "verdadero" . "<br/>";
        } else{
            echo "falso" . "<br/>";
        }
    }

    /*Ejercicio 4*/
    //Quítale las tildes a la cadena “Álvaro ha estudiado Ingeniería electrónica en la Universidad de Córdoba”
    $cadena = "<br/>" . "alvaro ha estudiado ingeniería electrónica en la universidad de córdoba";
    $buscar = array("á","é","í","ó","ú");
    $reemplazar = array("a","e","i","o","u");

    $caden= str_replace($buscar,$reemplazar,$cadena);

    echo $caden;
    //¿Cuántos caracteres tiene la cadena de texto?
    echo "<br/>" . strlen($cadena);
    //Convierte la cadena original a mayúsculas.
    $cad = mb_strtoupper($cadena);
    echo $cad;
    //Quita las tildes y los espacios a la cadena de texto “74635498 B Rubén González Díaz”
    $cadena2 = "74635498 B Rubén González Díaz";
    $buscar2 = array("á","é","í","ó","ú"," ");
    $reemplazar2 = array("a","e","i","o","u","");

    $caden2= str_replace($buscar2,$reemplazar2,$cadena2);
    
    echo "<br/>" . $caden2;
?>

<!-- Ejercicio 5  -->
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
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
            <td>Person</td>
            <td>Age</td>
        </tr>
        <?php
            $array = ["Chris" => 38, "Dennis" => 45, "Sarah" => 29, "Karen" => 47];
            foreach($array as $key => $value){
                echo "<tr>";
                echo "<td> $key </td>";
                echo "<td> $array[$key] </td>";
                echo "</tr>";
            }
        ?>

    </table> 
</body>
</html>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
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
<br>
<body>
   <table>
        <tr>
            <td>Producto</td>
            <td>Cantidad</td>
            <td>Precio</td>
        </tr>
        <?php
            $total = 0;
            $array = ["Destornillador" => 1, "Llave Inglesa" => 2, "Martillo" => 1];  //producto => cantidad
            $array2 = ["Destornillador" => 3, "Llave Inglesa" => 5, "Martillo" => 7]; //producto => precio

            foreach($array as $key => $value){
                $total += $value * $array2[$key];
                echo "<tr>";
                echo "<td> $key </td>";
                echo "<td> $value </td>";
                echo "<td> $array2[$key] </td>";
                echo "</tr>";
            }

            echo "<tr>";
            echo "<td colspan = '2'>Total </td>";
            echo "<td>$total</td>";
            echo "</tr>";

        ?>
    </table> 
</body>
</html>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
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
    <h1>Su pedido</h1>

    <table>
        <tr>
            <td><b>Nombre producto</b></td>
            <td><b>Precio unitario</b></td>
            <td><b>Unidades</b></td>
            <td><b>Subtotal</b></td>
        </tr>
        <?php
            $subtotal = 0;
            $total = 0;
            $unidades = 0;
            $array3 = ["Reproductor MP3 (80 GB)" => 192.02, "Fundas de colores" => 2.50, "Reproductor de radio & control remoto" => 12.99];  //Nombre producto => precio unitario
            $array4 = ["Reproductor MP3 (80 GB)" => 1, "Fundas de colores" => 5, "Reproductor de radio & control remoto" => 1]; //Nombre producto => unidades

            foreach($array3 as $key => $value){
                $subtotal =  $value * $array4[$key];
                $total += $subtotal;
                $unidades += $array4[$key];
                echo "<tr>";
                echo "<td> $key </td>";
                echo "<td> $value </td>";
                echo "<td> $array4[$key] </td>";
                echo "<td> $subtotal</td>";
                echo "</tr>";
            }

            echo "<tr>";
            echo "<td>Total </td>";
            echo "<td>-</td>";
            echo "<td>$unidades</td>";
            echo "<td>$total</td>";
            echo "</tr>";

        ?>
    </table> 

</body>
</html>