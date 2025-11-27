function validarDNI(dni) {
    dni = dni.trim().toUpperCase();

    let error = "";
    const regexDNI = /^[0-9]{8}[A-Z]$/;

    if (dni === "") {
        error = "El DNI es obligatorio";
    }
    else if (!regexDNI.test(dni)) {
        error = "El DNI debe tener 8 números y 1 letra (ej: 12345678Z)";
    }
    else {
        const numero = dni.slice(0, 8);
        const letraUsuario = dni[8];
        const letras = "TRWAGMYFPDXBNJZSQVHLCKE";
        const letraCorrecta = letras[numero % 23];

        if (letraUsuario !== letraCorrecta) {
            error = "La letra del DNI no es correcta";
        }
    }

    return error;
}

function validarTelefono(telefono) {
    telefono = telefono.trim();

    let error = "";
    const regexTelefono = /^[6-9][0-9]{8}$/;

    if (telefono === "") {
        error = "El teléfono es obligatorio";
    }
    else if (!regexTelefono.test(telefono)) {
        error = "El teléfono debe tener 9 dígitos y empezar por 6, 7, 8 o 9";
    }

    return error;
}

function validarEmail(email) {
    email = email.trim();

    let error = "";
    const regexEmail = /^\S+@\S+\.\S+$/;

    if (email === "") {
        error = "El email es obligatorio";
    }
    else if (!regexEmail.test(email)) {
        error = "El email no tiene un formato válido";
    }

    return error;
}

function validarContrasena(pwd) {
    let error = "";

    const mayus = /[A-Z]/;
    const minus = /[a-z]/;
    const num = /[0-9]/;
    const simbolo = /[@$!%*?&]/;

    if (pwd.length < 8) {
        error = "La contraseña debe tener al menos 8 caracteres";
    }
    else if (!mayus.test(pwd)) {
        error = "La contraseña debe contener una letra mayúscula";
    }
    else if (!minus.test(pwd)) {
        error = "La contraseña debe contener una letra minúscula";
    }
    else if (!num.test(pwd)) {
        error = "La contraseña debe contener un número";
    }
    else if (!simbolo.test(pwd)) {
        error = "La contraseña debe contener un símbolo (@$!%*?&)";
    }

    return error;
}

function validarMayoriaEdad(fechaNacimiento) {
    let error = "";

    if (!fechaNacimiento) {
        error = "La fecha de nacimiento es obligatoria";
    } 
    else {
        const hoy = new Date();
        const fn = new Date(fechaNacimiento);

        let edad = hoy.getFullYear() - fn.getFullYear();
        const m = hoy.getMonth() - fn.getMonth();

        if (m < 0 || (m === 0 && hoy.getDate() < fn.getDate())) {
            edad--;
        }

        if (edad < 18) {
            error = "Debes ser mayor de 18 años";
        }
    }

    return error;
}

function validarFechaRango(inicio, fin) {
    let error = "";

    if (!inicio || !fin) {
        error = "Ambas fechas son obligatorias";
    }
    else if (inicio > fin) {
        error = "La fecha de inicio no puede ser mayor que la fecha fin";
    }

    return error;
}

function validarSinCaracteresEspeciales(texto) {
    texto = texto.trim();

    let error = "";
    const regex = /^[a-zA-Z0-9ÁÉÍÓÚáéíóúÑñ\s]+$/;

    if (texto === "") {
        error = "Este campo es obligatorio";
    }
    else if (!regex.test(texto)) {
        error = "No se permiten caracteres especiales";
    }

    return error;
}

function validarTexto(texto, min, max) {
    texto = texto.trim();

    let error = "";

    if (texto === "") {
        error = "Este campo es obligatorio";
    }
    else if (texto.length < min || texto.length > max) {
        error = `Debe tener entre ${min} y ${max} caracteres`;
    }

    return error;
}

