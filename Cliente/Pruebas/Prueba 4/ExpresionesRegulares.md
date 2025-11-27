/^[a-zA-ZÁÉÍÓÚÑáéíóúñ\s]+$/ solo puede contener letras
/^[0-9]+$/ solo puede contener numeros
/ {2,}/ contiene dos espacios seguidos
/^\S+@\S+\.\S+$/ validacion email
/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/ validacion de contraseña: 8 caracteres, numeros, letras y simbolos 
/^\d{9}$/ validacion telefono: tenga 9 digitos  en laravel: 'telefono' => 'digits:9'
/^[6-9][0-9]{8}$/ validacion telefono: tenga 9 digitos, no empieze por 0  
/^(.)\1+$/ no permitir un numero repetido en este caso el 1
/(.)\1{3,}/ No permitir caracteres repetidos (ej: "aaaaaa")
/[^a-zA-Z0-9\s]/ permitir caracteres especiales 
/^\d{2}:\d{2}$/ validacion hora formato HH:mm 
/^([01]\d|2[0-3]):([0-5]\d)$/ Validar que la hora sea REAL (00:00 a 23:59)
/^\d{4}-\d{2}-\d{2}$/ Validar fecha formato correcto (YYYY-MM-DD)
/*email*/
/^[\w\.-]+@[\w\.-]+\.\w+$/ expresion regular 
'email' => 'required|email|unique:users,email'   en laravel

se usa .test(expresion) devuelve false si contiene mas cosas aparte de letras 

validar dni: 
function validarDNI(dni) {
    dni = dni.toUpperCase().trim();

    // 1️⃣ Comprobar formato: 8 números + letra
    const regexDNI = /^[0-9]{8}[A-Z]$/;
    if (!regexDNI.test(dni)) {
        return false;
    }

    // 2️⃣ Separar número y letra
    const numero = dni.substring(0, 8);
    const letra = dni.charAt(8);

    // 3️⃣ Letras válidas
    const letras = "TRWAGMYFPDXBNJZSQVHLCKE";

    // 4️⃣ Calcular letra correspondiente
    const letraCorrecta = letras[numero % 23];

    // 5️⃣ Comprobar letra
    return letra === letraCorrecta;
}

const dni = document.querySelector("#dni").value;

if (!validarDNI(dni)) {
    alert("El DNI no es válido");
    return;
}


