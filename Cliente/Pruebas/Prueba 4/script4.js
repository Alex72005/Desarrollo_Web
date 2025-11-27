//Valida conforme voy escribiendo mostrando todos los errores 

// =========================================================
// VALIDACIONES — ERRORES ACUMULADOS
// =========================================================

function validarNombre(nombre) {
    nombre = nombre.trim();
    let errores = [];
    const soloLetras = /^[a-zA-ZÁÉÍÓÚÑáéíóúñ\s]+$/;

    if (nombre === "") errores.push("El nombre es obligatorio");
    if (nombre.length < 3 || nombre.length > 30)
        errores.push("Debe tener entre 3 y 30 caracteres");
    if (!soloLetras.test(nombre))
        errores.push("El nombre solo puede contener letras");
    if (/ {2,}/.test(nombre))
        errores.push("No puede haber dos espacios seguidos");

    return errores;
}

function validarUbicacion(ubicacion) {
    ubicacion = ubicacion.trim();
    let errores = [];
    const soloLetras = /^[a-zA-ZÁÉÍÓÚÑáéíóúñ\s]+$/;

    if (ubicacion === "") errores.push("La ubicación es obligatoria");
    if (ubicacion.length < 3 || ubicacion.length > 50)
        errores.push("Debe tener entre 3 y 50 caracteres");
    if (!soloLetras.test(ubicacion))
        errores.push("La ubicación solo puede contener letras");

    return errores;
}

function validarFecha(fecha) {
    let errores = [];
    const regex = /^\d{4}-\d{2}-\d{2}$/;
    const hoy = new Date().toISOString().split("T")[0];

    if (!fecha) errores.push("La fecha es obligatoria");
    if (!regex.test(fecha)) errores.push("Formato inválido (YYYY-MM-DD)");
    if (fecha < hoy) errores.push("La fecha no puede ser anterior a hoy");

    return errores;
}

function validarHora(hora) {
    let errores = [];
    const regex = /^([01]\d|2[0-3]):([0-5]\d)$/;

    if (!hora) errores.push("La hora es obligatoria");
    if (!regex.test(hora)) errores.push("Formato inválido (HH:MM)");

    return errores;
}

function validarRangoFechas(inicio, fin) {
    let errores = [];
    if (inicio > fin) errores.push("La fecha de inicio no puede ser mayor que la fecha fin");
    return errores;
}


// =========================================================
// MOSTRAR ERRORES
// =========================================================

function mostrarErrorSmall(idSmall, input, errores) {
    const small = document.querySelector(idSmall);

    if (errores.length > 0) {
        small.innerHTML = errores.map(e => "• " + e).join("<br>");
        small.classList.add("error");
        input.classList.add("input-error");
        input.classList.remove("input-ok");
    } else {
        small.innerHTML = "";
        input.classList.remove("input-error");
        input.classList.add("input-ok");
    }
}


// =========================================================
// ELEMENTOS DEL DOM
// =========================================================

const endpoint = "http://localhost/prueba4servidor/public/api/eventos";

const divEventos = document.querySelector("#resultado-eventos");

// CREATE
const nombreCrear = document.querySelector("#nombre-crear");
const ubicacionCrear = document.querySelector("#ubicacion-crear");
const fechaCrear = document.querySelector("#fecha-crear");
const horaCrear = document.querySelector("#hora-crear");

// EDIT
const idEditar = document.querySelector("#id-editar");
const nombreEditar = document.querySelector("#nombre-editar");
const ubicacionEditar = document.querySelector("#ubicacion-editar");
const fechaEditar = document.querySelector("#fecha-editar");
const horaEditar = document.querySelector("#hora-editar");

// DELETE
const idEliminar = document.querySelector("#id-eliminar");

// SEARCH NAME
const nombreBuscar = document.querySelector("#nombre-buscar");
const divEventoNombre = document.querySelector("#resultado-evento-nombre");

// SEARCH DATES
const fechaInicioBuscar = document.querySelector("#fecha-inicio-buscar");
const fechaFinBuscar = document.querySelector("#fecha-fin-buscar");
const divEventoFecha = document.querySelector("#resultado-evento-fecha");


// =========================================================
// MOSTRAR EVENTOS
// =========================================================

function mostrarEventos() {
    fetch(endpoint)
        .then(r => r.json())
        .then(datos => {

            idEditar.innerHTML = '<option value="">Seleccione un evento</option>';
            idEliminar.innerHTML = '<option value="">Seleccione un evento</option>';
            divEventos.innerHTML = "";

            datos.forEach(ev => {

                const o1 = document.createElement("option");
                o1.value = ev.id;
                o1.textContent = `${ev.nombre} ${ev.ubicacion} ${ev.fecha} ${ev.hora}`;

                const o2 = o1.cloneNode(true);

                idEditar.appendChild(o1);
                idEliminar.appendChild(o2);

                const div = document.createElement("div");
                div.innerHTML = `<br>${ev.nombre} ${ev.ubicacion} ${ev.fecha} ${ev.hora}`;
                divEventos.appendChild(div);
            });
        });
}

document.addEventListener("DOMContentLoaded", mostrarEventos);


// =========================================================
// VALIDACIÓN EN TIEMPO REAL — CREATE
// =========================================================

function actualizarBotonCrear() {
    let en = validarNombre(nombreCrear.value);
    let eu = validarUbicacion(ubicacionCrear.value);
    let ef = validarFecha(fechaCrear.value);
    let eh = validarHora(horaCrear.value);

    document.querySelector("#crear").disabled =
        en.length || eu.length || ef.length || eh.length;
}

// Nombre
nombreCrear.addEventListener("input", () => {
    mostrarErrorSmall("#error-nombre-crear", nombreCrear, validarNombre(nombreCrear.value));
    actualizarBotonCrear();
});

// Ubicación
ubicacionCrear.addEventListener("input", () => {
    mostrarErrorSmall("#error-ubicacion-crear", ubicacionCrear, validarUbicacion(ubicacionCrear.value));
    actualizarBotonCrear();
});

// Fecha
fechaCrear.addEventListener("input", () => {
    mostrarErrorSmall("#error-fecha-crear", fechaCrear, validarFecha(fechaCrear.value));
    actualizarBotonCrear();
});

// Hora
horaCrear.addEventListener("input", () => {
    mostrarErrorSmall("#error-hora-crear", horaCrear, validarHora(horaCrear.value));
    actualizarBotonCrear();
});

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#crear").disabled = true;
});


// =========================================================
// CREAR EVENTO
// =========================================================

document.querySelector("#crear").addEventListener("click", () => {

    const en = validarNombre(nombreCrear.value);
    const eu = validarUbicacion(ubicacionCrear.value);
    const ef = validarFecha(fechaCrear.value);
    const eh = validarHora(horaCrear.value);

    mostrarErrorSmall("#error-nombre-crear", nombreCrear, en);
    mostrarErrorSmall("#error-ubicacion-crear", ubicacionCrear, eu);
    mostrarErrorSmall("#error-fecha-crear", fechaCrear, ef);
    mostrarErrorSmall("#error-hora-crear", horaCrear, eh);

    if (en.length === 0 && eu.length === 0 && ef.length === 0 && eh.length === 0) {

        fetch(endpoint, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                nombre: nombreCrear.value.trim(),
                ubicacion: ubicacionCrear.value.trim(),
                fecha: fechaCrear.value,
                hora: horaCrear.value
            })
        })
            .then(r => r.json())
            .then(mostrarEventos);
    }
});


// =========================================================
// VALIDACIÓN EN TIEMPO REAL — EDITAR
// =========================================================

function actualizarBotonEditar() {
    let en = validarNombre(nombreEditar.value);
    let eu = validarUbicacion(ubicacionEditar.value);
    let ef = validarFecha(fechaEditar.value);
    let eh = validarHora(horaEditar.value);

    document.querySelector("#editar").disabled =
        en.length || eu.length || ef.length || eh.length;
}

nombreEditar.addEventListener("input", () => {
    mostrarErrorSmall("#error-nombre-editar", nombreEditar, validarNombre(nombreEditar.value));
    actualizarBotonEditar();
});
ubicacionEditar.addEventListener("input", () => {
    mostrarErrorSmall("#error-ubicacion-editar", ubicacionEditar, validarUbicacion(ubicacionEditar.value));
    actualizarBotonEditar();
});
fechaEditar.addEventListener("input", () => {
    mostrarErrorSmall("#error-fecha-editar", fechaEditar, validarFecha(fechaEditar.value));
    actualizarBotonEditar();
});
horaEditar.addEventListener("input", () => {
    mostrarErrorSmall("#error-hora-editar", horaEditar, validarHora(horaEditar.value));
    actualizarBotonEditar();
});

document.querySelector("#editar").disabled = true;


// =========================================================
// EDITAR EVENTO
// =========================================================

document.querySelector("#editar").addEventListener("click", () => {

    if (idEditar.value === "") {
        alert("Selecciona un evento");
        return;
    }

    const en = validarNombre(nombreEditar.value);
    const eu = validarUbicacion(ubicacionEditar.value);
    const ef = validarFecha(fechaEditar.value);
    const eh = validarHora(horaEditar.value);

    mostrarErrorSmall("#error-nombre-editar", nombreEditar, en);
    mostrarErrorSmall("#error-ubicacion-editar", ubicacionEditar, eu);
    mostrarErrorSmall("#error-fecha-editar", fechaEditar, ef);
    mostrarErrorSmall("#error-hora-editar", horaEditar, eh);

    if (en.length === 0 && eu.length === 0 && ef.length === 0 && eh.length === 0) {

        fetch(`${endpoint}/edit/${idEditar.value}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                nombre: nombreEditar.value.trim(),
                ubicacion: ubicacionEditar.value.trim(),
                fecha: fechaEditar.value,
                hora: horaEditar.value
            })
        })
            .then(r => r.json())
            .then(mostrarEventos);
    }
});


// =========================================================
// ELIMINAR EVENTO
// =========================================================

document.querySelector("#eliminar").addEventListener("click", () => {

    if (idEliminar.value === "") {
        alert("Selecciona un evento para eliminar");
        return;
    }

    fetch(`${endpoint}/delete/${idEliminar.value}`, { method: "DELETE" })
        .then(r => r.json())
        .then(mostrarEventos);
});


// =========================================================
// BUSCAR POR NOMBRE
// =========================================================

nombreBuscar.addEventListener("input", () => {
    const errores = validarNombre(nombreBuscar.value);
    mostrarErrorSmall("#error-nombre-buscar", nombreBuscar, errores);
});

document.querySelector("#buscar-nombre").addEventListener("click", () => {

    const errores = validarNombre(nombreBuscar.value);
    mostrarErrorSmall("#error-nombre-buscar", nombreBuscar, errores);

    if (errores.length > 0) return;

    fetch(endpoint + "?nombre=" + nombreBuscar.value)
        .then(r => r.json())
        .then(ev => {
            divEventoNombre.innerHTML = ev ?
                `<br>${ev.nombre} ${ev.ubicacion} ${ev.fecha} ${ev.hora}` :
                "No se encontró el evento";
        });
});


// =========================================================
// BUSCAR POR FECHAS
// =========================================================

document.querySelector("#buscar-fecha").addEventListener("click", () => {

    const e1 = validarFecha(fechaInicioBuscar.value);
    const e2 = validarFecha(fechaFinBuscar.value);
    const e3 = validarRangoFechas(fechaInicioBuscar.value, fechaFinBuscar.value);

    mostrarErrorSmall("#error-fecha-inicio-buscar", fechaInicioBuscar, e1);
    mostrarErrorSmall("#error-fecha-fin-buscar", fechaFinBuscar, [...e2, ...e3]);

    if (e1.length || e2.length || e3.length) return;

    fetch(`${endpoint}?fechaInicio=${fechaInicioBuscar.value}&fechaFin=${fechaFinBuscar.value}`)
        .then(r => r.json())
        .then(eventos => {
            divEventoFecha.innerHTML = "";

            if (!eventos.length) {
                divEventoFecha.textContent = "No hay eventos en ese rango";
            } else {
                eventos.forEach(ev => {
                    divEventoFecha.innerHTML += `<br>${ev.nombre} ${ev.ubicacion} ${ev.fecha} ${ev.hora}`;
                });
            }
        });
});
