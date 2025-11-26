const divClinicas = document.querySelector("#resultado-clinicas")

const direccionCrear = document.querySelector("#direccion-crear")
const correoCrear = document.querySelector("#correo-crear")
const telefonoCrear = document.querySelector("#telefono-crear")
const nombreCrear = document.querySelector("#nombre-crear")
const estadoCrear = document.querySelector("#estado-crear")

const idMostrar = document.querySelector("#id-mostrar")
const divClinica = document.querySelector("#resultado-clinica")

const selectEditar = document.querySelector("#id-editar")
const direccionEditar = document.querySelector("#direccion-editar")
const correoEditar = document.querySelector("#correo-editar")
const telefonoEditar = document.querySelector("#telefono-editar")
const nombreEditar = document.querySelector("#nombre-editar")
const estadoEditar = document.querySelector("#estado-editar")

const selectEliminar = document.querySelector("#id-eliminar")

const endpoint = "http://localhost:8080/public/api/clinicas"

function mostrarClinicas() {
    fetch(endpoint)
        .then(response => response.json())
        .then(datos => {
            selectEditar.innerHTML = '<option value="">Seleccione una clinica</option>'
            selectEliminar.innerHTML = '<option value="">Seleccione una clinica</option>'
            divClinicas.innerHTML = ''

            datos.forEach(clinica => {
                const option1 = document.createElement("option")
                option1.value = clinica.id
                option1.textContent = clinica.nombre

                const option2 = document.createElement("option")
                option2.value = clinica.id
                option2.textContent = clinica.nombre

                selectEditar.appendChild(option1)
                selectEliminar.appendChild(option2)

                const div = document.createElement("div")
                div.innerHTML = "<br>" + clinica.id + " nombre: " + clinica.nombre + " direccion: " + clinica.direccion + " estado: " + clinica.estado
                divClinicas.appendChild(div)
            })
        })
}

document.addEventListener('DOMContentLoaded', () => {
    mostrarClinicas()
})

document.querySelector("#crear").addEventListener('click', () => {
    const datos = {
        direccion: direccionCrear.value,
        correo: correoCrear.value,
        telefono: telefonoCrear.value,
        nombre: nombreCrear.value,
        estado: estadoCrear.value
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
            mostrarClinicas()
        })
})

document.querySelector("#mostrar-id").addEventListener('click', () => {
    const id = idMostrar.value

    fetch(endpoint + "/" + id)
        .then(response => response.json())
        .then(clinica => {
            divClinica.innerHTML = ''
            const div = document.createElement("div")
            div.innerHTML = "<br>" + clinica.id + " " + clinica.nombre
            divClinica.appendChild(div)
        })
})

document.querySelector("#editar").addEventListener('click', () => {
    const datos = {
        direccion: direccionEditar.value,
        correo: correoEditar.value,
        telefono: telefonoEditar.value,
        nombre: nombreEditar.value,
        estado: estadoEditar.value
    }

    const id = selectEditar.value

    fetch(endpoint + "/" + id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
    })
        .then(response => response.json())
        .then(datos => {
            mostrarClinicas()
        })
})


document.querySelector("#eliminar").addEventListener('click', () => {
    const id = selectEliminar.value

    fetch(endpoint + "/" + id, {
        method: 'DELETE'
    })
        .then(response => response.json())
        .then(datos => {
            mostrarClinicas()
        })
})
