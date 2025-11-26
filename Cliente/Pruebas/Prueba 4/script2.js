// =========================================================
//  VALIDACIONES REUTILIZABLES
// =========================================================

// Validar Nombre
function validarNombre(nombre) {
    nombre = nombre.trim();
    const soloLetras = /^[a-zA-ZÁÉÍÓÚÑáéíóúñ\s]+$/;

    let error = "";

    if (nombre === "") {
        error = "El nombre es obligatorio";
    }
    else if (nombre.length < 3 || nombre.length > 30) {
        error = "El nombre debe tener entre 3 y 30 caracteres";
    }
    else if (!soloLetras.test(nombre)) {
        error = "El nombre solo puede contener letras";
    }
    else if (/ {2,}/.test(nombre)) {
        error = "No puede haber dos espacios seguidos";
    }

    return error;
}


// Validar Ubicación
function validarUbicacion(ubicacion) {
    ubicacion = ubicacion.trim();
    const regexLetras = /^[a-zA-ZÁÉÍÓÚÑáéíóúñ\s]+$/;

    let error = "";

    if (ubicacion === "") {
        error = "La ubicación es obligatoria";
    }
    else if (ubicacion.length < 3 || ubicacion.length > 50) {
        error = "La ubicación debe tener entre 3 y 50 caracteres";
    }
    else if (!regexLetras.test(ubicacion)) {
        error = "La ubicación solo puede contener letras";
    }

    return error;
}


// Validar Fecha
function validarFecha(fecha) {
    let error = "";
    const regex = /^\d{4}-\d{2}-\d{2}$/;
    const hoy = new Date().toISOString().split("T")[0];

    if (!fecha) {
        error = "La fecha es obligatoria";
    }
    else if (!regex.test(fecha)) {
        error = "Formato de fecha inválido (YYYY-MM-DD)";
    }
    else if (fecha < hoy) {
        error = "La fecha no puede ser anterior a hoy";
    }

    return error;
}


// Validar Hora
function validarHora(hora) {
    let error = "";

    const regexHora = /^([01]\d|2[0-3]):([0-5]\d)$/;

    if (!hora) {
        error = "La hora es obligatoria";
    }
    else if (!regexHora.test(hora)) {
        error = "La hora no es válida (HH:MM)";
    }

    return error;
}


// Mostrar error
function mostrarError(idSmall, mensaje) {
    document.querySelector(idSmall).textContent = mensaje;
}


// =========================================================
//  VARIABLES Y ELEMENTOS DEL DOM
// =========================================================

const endpoint = "http://localhost/prueba4servidor/public/api/eventos";

const divEventos = document.querySelector("#resultado-eventos");

const nombreCrear = document.querySelector("#nombre-crear");
const ubicacionCrear = document.querySelector("#ubicacion-crear");
const fechaCrear = document.querySelector("#fecha-crear");
const horaCrear = document.querySelector("#hora-crear");

const idEditar = document.querySelector("#id-editar");
const nombreEditar = document.querySelector("#nombre-editar");
const ubicacionEditar = document.querySelector("#ubicacion-editar");
const fechaEditar = document.querySelector("#fecha-editar");
const horaEditar = document.querySelector("#hora-editar");

const idEliminar = document.querySelector("#id-eliminar");

const nombreBuscar = document.querySelector("#nombre-buscar");
const divEventoNombre = document.querySelector("#resultado-evento-nombre");

const fechaInicioBuscar = document.querySelector("#fecha-inicio-buscar");
const fechaFinBuscar = document.querySelector("#fecha-fin-buscar");
const divEventoFecha = document.querySelector("#resultado-evento-fecha");


// =========================================================
//  MOSTRAR EVENTOS
// =========================================================

function mostrarEventos() {
    fetch(endpoint)
        .then(response => response.json())
        .then(datos => {
            idEditar.innerHTML = '<option value="">Seleccione un evento</option>';
            idEliminar.innerHTML = '<option value="">Seleccione un evento</option>';
            divEventos.innerHTML = '';

            datos.forEach(evento => {
                const option1 = document.createElement("option");
                option1.value = evento.id;
                option1.textContent = `${evento.nombre} ${evento.ubicacion} ${evento.fecha} ${evento.hora}`;

                const option2 = document.createElement("option");
                option2.value = evento.id;
                option2.textContent = `${evento.nombre} ${evento.ubicacion} ${evento.fecha} ${evento.hora}`;

                idEditar.appendChild(option1);
                idEliminar.appendChild(option2);

                const div = document.createElement("div");
                div.innerHTML = `<br>${evento.nombre} ${evento.ubicacion} ${evento.fecha} ${evento.hora}`;
                divEventos.appendChild(div);
            });
        });
}

document.addEventListener("DOMContentLoaded", mostrarEventos);


// =========================================================
//  CREAR EVENTO
// =========================================================

document.querySelector("#crear").addEventListener("click", () => {

    const errNombre = validarNombre(nombreCrear.value);
    const errUbicacion = validarUbicacion(ubicacionCrear.value);
    const errFecha = validarFecha(fechaCrear.value);
    const errHora = validarHora(horaCrear.value);

    mostrarError("#error-nombre-crear", errNombre);
    mostrarError("#error-ubicacion-crear", errUbicacion);
    mostrarError("#error-fecha-crear", errFecha);
    mostrarError("#error-hora-crear", errHora);

    const errores = [errNombre, errUbicacion, errFecha, errHora];
    const hayErrores = errores.some(e => e !== "");

    if (!hayErrores) {

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
    } else {
        document.querySelector("#crear").disabled = true
    }
});


// =========================================================
//  EDITAR EVENTO
// =========================================================

document.querySelector("#editar").addEventListener("click", () => {

    if (idEditar.value === "") {
        alert("Selecciona un evento");
        return;
    }

    const errNombre = validarNombre(nombreEditar.value);
    const errUbicacion = validarUbicacion(ubicacionEditar.value);
    const errFecha = validarFecha(fechaEditar.value);
    const errHora = validarHora(horaEditar.value);

    mostrarError("#error-nombre-editar", errNombre);
    mostrarError("#error-ubicacion-editar", errUbicacion);
    mostrarError("#error-fecha-editar", errFecha);
    mostrarError("#error-hora-editar", errHora);

    const errores = [errNombre, errUbicacion, errFecha, errHora];
    const hayErrores = errores.some(e => e !== "");

    if (!hayErrores) {

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


// =========================================================
//  ELIMINAR EVENTO
// =========================================================

document.querySelector("#eliminar").addEventListener("click", () => {

    if (idEliminar.value === "") {
        alert("Selecciona un evento para eliminar");
        return;
    }

    fetch(endpoint + "/delete/" + idEliminar.value, { method: "DELETE" })
        .then(r => r.json())
        .then(mostrarEventos);
});


// =========================================================
//  BUSCAR POR NOMBRE
// =========================================================

document.querySelector("#buscar-nombre").addEventListener("click", () => {

    const nombre = nombreBuscar.value.trim();

    const err = validarNombre(nombre);

    mostrarError("#error-nombre-buscar", err);

    if (err === "") {

        fetch(endpoint + "?nombre=" + nombre)
            .then(response => response.json())
            .then(evento => {
                divEventoNombre.innerHTML = "";

                if (!evento) {
                    divEventoNombre.textContent = "No se encontró ningún evento";
                } else {
                    divEventoNombre.innerHTML = `
                        <br>${evento.nombre} ${evento.ubicacion} ${evento.fecha} ${evento.hora}
                    `;
                }
            });
    }
});


// =========================================================
//  BUSCAR POR FECHAS
// =========================================================

document.querySelector("#buscar-fecha").addEventListener("click", () => {

    const errInicio = validarFecha(fechaInicioBuscar.value);
    const errFin = validarFecha(fechaFinBuscar.value);

    mostrarError("#error-fecha-inicio-buscar", errInicio);
    mostrarError("#error-fecha-fin-buscar", errFin);

    if (errInicio === "" && errFin === "") {

        if (fechaInicioBuscar.value > fechaFinBuscar.value) {
            mostrarError("#error-fecha-fin-buscar", "La fecha fin debe ser mayor a la de inicio");
            return;
        }

        fetch(endpoint + "?fechaInicio=" + fechaInicioBuscar.value + "&fechaFin=" + fechaFinBuscar.value)
            .then(response => response.json())
            .then(eventos => {
                divEventoFecha.innerHTML = "";

                if (eventos.length === 0) {
                    divEventoFecha.textContent = "No hay eventos en ese rango";
                } else {
                    eventos.forEach(e => {
                        divEventoFecha.innerHTML += `
                            <br>${e.nombre} ${e.ubicacion} ${e.fecha} ${e.hora}
                        `;
                    });
                }
            });
    }
});
