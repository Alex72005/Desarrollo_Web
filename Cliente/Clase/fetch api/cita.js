const divCitas = document.querySelector("#resultado-citas")

const fechaCrear = document.querySelector("#fecha-crear")
const motivoCrear = document.querySelector("#motivo-crear")

const idMostrar = document.querySelector("#id-mostrar")
const divCita = document.querySelector("#resultado-cita")

const selectEditar = document.querySelector("#id-editar")
const fechaEditar = document.querySelector("#fecha-editar")
const motivoEditar = document.querySelector("#motivo-editar")

const selectEliminar = document.querySelector("#id-eliminar")
const endpoint = "http://localhost:8080/public/api/citas"

function mostrarCitas() {
    fetch(endpoint)
        .then(response => response.json())
        .then(datos => {
            divCitas.innerHTML = ''
            selectEditar.innerHTML = '<option value="">Seleccione una cita</option>'
            selectEliminar.innerHTML = '<option value="">Seleccione una cita</option>'

            datos.forEach(cita => {
                const option1 = document.createElement("option")
                option1.value = cita.id
                option1.textContent = cita.motivo

                const option2 = document.createElement("option")
                option2.value = cita.id
                option2.textContent = cita.motivo

                selectEditar.appendChild(option1)
                selectEliminar.appendChild(option2)

                const div = document.createElement("div")
                div.innerHTML =
                    "<br>" + cita.id + " " + cita.fecha + " " + cita.motivo
                divCitas.appendChild(div)
            })
        })

}

document.addEventListener('DOMContentLoaded', () => {
    mostrarCitas()
})

document.querySelector("#crear").addEventListener('click', () => {
    const datos = {
        fecha: fechaCrear.value,
        motivo: motivoCrear.value
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
            mostrarCitas()
        })
})

document.querySelector("#mostrar-id").addEventListener('click', () => {
    const id = idMostrar.value

    fetch(endpoint + "/" + id)
        .then(response => response.json())
        .then(cita => {
            divCita.innerHTML = ""
            const div = document.createElement("div")
            div.innerHTML =
                "<br>" + cita.fecha + " " + cita.motivo
            divCita.appendChild(div)
        })

})

document.querySelector("#editar").addEventListener('click', () => {
    const datos = {
        fecha: fechaEditar.value,
        motivo: motivoEditar.value
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
            mostrarCitas()
        })
})

document.querySelector("#eliminar").addEventListener('click', () => {
    const id = selectEliminar.value

    fetch(endpoint + "/" + id, {
        method: 'DELETE'
    })
        .then(response => response.json())
        .then(datos => {
            mostrarCitas()
        })
})