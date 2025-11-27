//Valida conforme voy escribiendo pero solo muestra el primer error

// =========================================================
//  VALIDACIONES REUTILIZABLES
// =========================================================

// Validar Nombre
function validarNombre(nombre) {
    nombre = nombre.trim();
    const soloLetras = /^[a-zA-ZÁÉÍÓÚÑáéíóúñ\s]+$/;

    if (nombre === "") return "El nombre es obligatorio";
    if (nombre.length < 3 || nombre.length > 30) return "Debe tener entre 3 y 30 caracteres";
    if (!soloLetras.test(nombre)) return "Solo puede contener letras";
    if (/ {2,}/.test(nombre)) return "No puede haber dos espacios seguidos";

    return "";
}

// Validar Ubicación
function validarUbicacion(ubicacion) {
    ubicacion = ubicacion.trim();
    const regexLetras = /^[a-zA-ZÁÉÍÓÚÑáéíóúñ\s]+$/;

    if (ubicacion === "") return "La ubicación es obligatoria";
    if (ubicacion.length < 3 || ubicacion.length > 50) return "Debe tener entre 3 y 50 caracteres";
    if (!regexLetras.test(ubicacion)) return "Solo puede contener letras";

    return "";
}

// Validar Fecha
function validarFecha(fecha) {
    const regex = /^\d{4}-\d{2}-\d{2}$/;
    const hoy = new Date().toISOString().split("T")[0];

    if (!fecha) return "La fecha es obligatoria";
    if (!regex.test(fecha)) return "Formato inválido (YYYY-MM-DD)";
    if (fecha < hoy) return "No puede ser anterior a hoy";

    return "";
}

// Validar Hora
function validarHora(hora) {
    const regexHora = /^([01]\d|2[0-3]):([0-5]\d)$/;

    if (!hora) return "La hora es obligatoria";
    if (!regexHora.test(hora)) return "Formato inválido (HH:MM)";

    return "";
}

// =========================================================
//  FUNCIONES DE APOYO
// =========================================================

// Mostrar error y aplicar estilo
function mostrarErrorSmall(idSmall, input, mensaje) {
    const small = document.querySelector(idSmall);
    small.textContent = mensaje;
    small.classList.add("error");

    if (mensaje !== "") {
        input.classList.add("input-error");
        input.classList.remove("input-ok");
    } else {
        input.classList.remove("input-error");
        input.classList.add("input-ok");
    }
}

// =========================================================
//  VARIABLES Y ELEMENTOS DEL DOM
// =========================================================

const endpoint = "http://localhost/prueba4servidor/public/api/eventos";

const nombreCrear = document.querySelector("#nombre-crear");
const ubicacionCrear = document.querySelector("#ubicacion-crear");
const fechaCrear = document.querySelector("#fecha-crear");
const horaCrear = document.querySelector("#hora-crear");

const nombreEditar = document.querySelector("#nombre-editar");
const ubicacionEditar = document.querySelector("#ubicacion-editar");
const fechaEditar = document.querySelector("#fecha-editar");
const horaEditar = document.querySelector("#hora-editar");

const idEditar = document.querySelector("#id-editar");
const idEliminar = document.querySelector("#id-eliminar");


// =========================================================
//  VALIDACIÓN EN TIEMPO REAL (CREATE)
// =========================================================

function actualizarBotonCrear() {
    const e1 = validarNombre(nombreCrear.value);
    const e2 = validarUbicacion(ubicacionCrear.value);
    const e3 = validarFecha(fechaCrear.value);
    const e4 = validarHora(horaCrear.value);

    const hayErrores = e1 || e2 || e3 || e4;
    document.querySelector("#crear").disabled = hayErrores !== "";
}

nombreCrear.addEventListener("input", () => {
    mostrarErrorSmall("#error-nombre-crear", nombreCrear, validarNombre(nombreCrear.value));
    actualizarBotonCrear();
});
ubicacionCrear.addEventListener("input", () => {
    mostrarErrorSmall("#error-ubicacion-crear", ubicacionCrear, validarUbicacion(ubicacionCrear.value));
    actualizarBotonCrear();
});
fechaCrear.addEventListener("input", () => {
    mostrarErrorSmall("#error-fecha-crear", fechaCrear, validarFecha(fechaCrear.value));
    actualizarBotonCrear();
});
horaCrear.addEventListener("input", () => {
    mostrarErrorSmall("#error-hora-crear", horaCrear, validarHora(horaCrear.value));
    actualizarBotonCrear();
});

// Botón desactivado al principio
document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#crear").disabled = true;
});


// =========================================================
//  CREAR EVENTO
// =========================================================

document.querySelector("#crear").addEventListener("click", () => {

    const errNombre = validarNombre(nombreCrear.value);
    const errUbicacion = validarUbicacion(ubicacionCrear.value);
    const errFecha = validarFecha(fechaCrear.value);
    const errHora = validarHora(horaCrear.value);

    mostrarErrorSmall("#error-nombre-crear", nombreCrear, errNombre);
    mostrarErrorSmall("#error-ubicacion-crear", ubicacionCrear, errUbicacion);
    mostrarErrorSmall("#error-fecha-crear", fechaCrear, errFecha);
    mostrarErrorSmall("#error-hora-crear", horaCrear, errHora);

    if (!errNombre && !errUbicacion && !errFecha && !errHora) {
        const datos = {
            nombre: nombreCrear.value.trim(),
            ubicacion: ubicacionCrear.value.trim(),
            fecha: fechaCrear.value,
            hora: horaCrear.value
        };

        fetch(endpoint, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(datos)
        })
            .then(r => r.json())
            .then(mostrarEventos);
    }
});


// =========================================================
//  VALIDACIÓN EN TIEMPO REAL (EDITAR)
// =========================================================

function actualizarBotonEditar() {
    const e1 = validarNombre(nombreEditar.value);
    const e2 = validarUbicacion(ubicacionEditar.value);
    const e3 = validarFecha(fechaEditar.value);
    const e4 = validarHora(horaEditar.value);

    const hayErrores = e1 || e2 || e3 || e4;
    document.querySelector("#editar").disabled = hayErrores !== "";
}

[nombreEditar, ubicacionEditar, fechaEditar, horaEditar].forEach(input => {
    input.addEventListener("input", actualizarBotonEditar);
});


// =========================================================
//  EDITAR EVENTO
// =========================================================

document.querySelector("#editar").addEventListener("click", () => {

    if (idEditar.value === "") {
        alert("Selecciona un evento");
        return;
    }

    const e1 = validarNombre(nombreEditar.value);
    const e2 = validarUbicacion(ubicacionEditar.value);
    const e3 = validarFecha(fechaEditar.value);
    const e4 = validarHora(horaEditar.value);

    mostrarErrorSmall("#error-nombre-editar", nombreEditar, e1);
    mostrarErrorSmall("#error-ubicacion-editar", ubicacionEditar, e2);
    mostrarErrorSmall("#error-fecha-editar", fechaEditar, e3);
    mostrarErrorSmall("#error-hora-editar", horaEditar, e4);

    if (!e1 && !e2 && !e3 && !e4) {
        const datos = {
            nombre: nombreEditar.value.trim(),
            ubicacion: ubicacionEditar.value.trim(),
            fecha: fechaEditar.value,
            hora: horaEditar.value
        };

        fetch(`${endpoint}/edit/${idEditar.value}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(datos)
        })
            .then(r => r.json())
            .then(mostrarEventos);
    }
});
