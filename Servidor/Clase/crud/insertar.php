<?php
    $servidor = "localhost";
    $usuario = "root";
    $contr = "";
    $baseDatos= "crud";


    $conn = mysqli_connect($servidor,$usuario,$contr,$baseDatos);

    if(!$conn){
        die("conexion fallida". mysqli_connect_error());
    }
    
    if($_SERVER['REQUEST_METHOD']==='POST'){//si el metodo es post es decir post put o delete

        //////////////////////ACTUALIZAR USUARIO///////////////////////////////
        if(isset($_POST['_method'])&& $_POST['_method']==='put'){//si existe el input hidden y es put actualizamos el usuario por nombre
            $nombre = $_POST['nombre'];
            $opcion = $_POST['opciones'];
            $nuevo = $_POST['datoNuevo'];

            $consulta = "UPDATE usuarios SET $opcion = '$nuevo' WHERE nombre = '$nombre'";
            $ejecutarConsulta = mysqli_query($conn,$consulta);
        }else if(isset($_POST['_method'])&& $_POST['_method']==='delete'){//si existe el input hidden y es delete borramos el usuario por nombre
            ////////////////////////BORRAR USUARIO//////////////////////////////
            $nombre = $_POST['nombre'];

            $consulta = "DELETE FROM usuarios WHERE nombre = '$nombre'";
            $ejecutarConsulta = mysqli_query($conn,$consulta);
        }else{//si no tiene input hidden es insertar usuario si
        ///////////////////////INSERTAR USUARIO//////////////////////////////
            $nombre = $_POST['nombre'];
            $edad = $_POST['edad'];
            $email = $_POST['email'];

            $insertar = "INSERT INTO usuarios (nombre, edad, email) VALUES ('$nombre', '$edad', '$email')";
            $ejecutarConsulta = mysqli_query($conn,$insertar);
        }
    }/////////////BUSCAR USUARIO///////////////////
    else if($_SERVER['REQUEST_METHOD']==='GET'){ 
        $nombre = $_GET['nombre'];
        
        $consulta = "SELECT * FROM usuarios WHERE nombre = '$nombre'";
        $ejecutarConsulta = mysqli_query($conn,$consulta);
        if(mysqli_num_rows($ejecutarConsulta)>0){ //recorremos las filas
            $fila = mysqli_fetch_assoc($ejecutarConsulta);
            echo "nombre: ".$fila['nombre']." edad: ".$fila['edad']." email: ".$fila['email'];
        }
    }
?>