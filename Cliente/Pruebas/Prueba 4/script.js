const endpoint = "http://localhost/public/api/eventos"

const divEventos = document.querySelector("#resultado-eventos")

const nombreCrear = document.querySelector("#nombre-crear")
const ubicacionCrear = document.querySelector("#ubicacion-crear")
const fechaCrear = document.querySelector("#fecha-crear")
const horaCrear = document.querySelector("#hora-crear")

const idEditar = document.querySelector("#id-editar")
const nombreEditar = document.querySelector("#nombre-editar")
const ubicacionEditar = document.querySelector("#ubicacion-editar")
const fechaEditar = document.querySelector("#fecha-editar")
const horaEditar = document.querySelector("#hora-editar")

const idEliminar = document.querySelector("#id-eliminar")

const nombreBuscar = document.querySelector("#nombre-buscar")
const divEventoNombre = document.querySelector("#resultado-evento-nombre")

const fechaInicioBuscar = document.querySelector("#fecha-inicio-buscar")
const fechaFinBuscar = document.querySelector("#fecha-fin-buscar")
const divEventoFecha = document.querySelector("#resultado-evento-fecha")

function mostrarEventos() {
    fetch(endpoint)
        .then(response => response.json())
        .then(datos => {
            idEditar.innerHTML = '<option value="">Seleccione un evento</option>'
            idEliminar.innerHTML = '<option value="">Seleccione un evento</option>  '
            divEventos.innerHTML = ''

            datos.forEach(evento => {
                const option1 = document.createElement("option")
                option1.value = evento.id
                option1.textContent = evento.nombre + " " + evento.ubicacion + " " + evento.fecha + " " + evento.hora

                const option2 = document.createElement("option")
                option2.value = evento.id
                option2.textContent = evento.nombre + " " + evento.ubicacion + " " + evento.fecha + " " + evento.hora

                idEditar.appendChild(option1)
                idEliminar.appendChild(option2)

                const div = document.createElement("div")
                div.innerHTML = "<br>" + evento.nombre + " " + evento.ubicacion + " " + evento.fecha + " " + evento.hora
                divEventos.appendChild(div)
            })
        })
}

document.addEventListener('DOMContentLoaded', () => {
    mostrarEventos()
})

document.querySelector('#crear').addEventListener('click', () => {
    const datos = {
        nombre: nombreCrear.value,
        ubicacion: ubicacionCrear.value,
        fecha: fechaCrear.value,
        hora: horaCrear.value
    }

    fetch(endpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
    })
        .then(response => response.json())
        .then(datos => {
            mostrarEventos()
        })
})

document.querySelector("#editar").addEventListener('click', () => {
    const datos = {
        nombre: nombreEditar.value,
        ubicacion: ubicacionEditar.value,
        fecha: fechaEditar.value,
        hora: horaEditar.value
    }

    const id = idEditar.value

    fetch(endpoint + "/edit/" + id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
    })
        .then(response => response.json())
        .then(datos => {
            mostrarEventos()
        })
})

document.querySelector("#eliminar").addEventListener('click', () => {
    const id = idEliminar.value

    fetch(endpoint + "/delete/" + id, {
        method: 'DELETE'
    })
        .then(response => response.json())
        .then(datos => {
            mostrarEventos()
        })
})

document.querySelector("#buscar-nombre").addEventListener('click', () => {
    const nombre = nombreBuscar.value
    console.log(nombre)
    fetch(endpoint + "?nombre=" + nombre)
        .then(response => response.json())
        .then(evento => {
            divEventoNombre.innerHTML = ''
            const div = document.createElement("div")
            div.innerHTML = "<br>" + evento.nombre + " " + evento.ubicacion + " " + evento.fecha + " " + evento.hora
            divEventoNombre.appendChild(div)
        })
})

document.querySelector("#buscar-fecha").addEventListener('click', () => {
    const fechaInicio = fechaInicioBuscar.value
    const fechaFin = fechaFinBuscar.value
    fetch(endpoint + "?fechaInicio=" + fechaInicio + "&fechaFin=" + fechaFin)
        .then(response => response.json())
        .then(evento => {
            evento.forEach(e => {
                divEventoFecha.innerHTML = ''
                const div = document.createElement("div")
                div.innerHTML = "<br>" + e.nombre + " " + e.ubicacion + " " + e.fecha + " " + e.hora
                divEventoFecha.appendChild(div)
            })
        })
})

