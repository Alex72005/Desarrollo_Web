const nombreCrear = document.querySelector("#nombre-crear")
const duracionCrear = document.querySelector("#duracion-crear")
const precioCrear = document.querySelector("#precio-crear")
const descripcionCrear = document.querySelector("#descripcion-crear")
const fechaInicioCrear = document.querySelector("#fecha_inicio-crear")
const fechaFinCrear = document.querySelector("#fecha_fin-crear")
const divTratamientos = document.querySelector("#resultado-tratamientos")

const idMostrar = document.querySelector("#id-mostrar")
const divTratamiento = document.querySelector("#resultado-tratamiento")

const selectEditar = document.querySelector("#id-editar")
const nombreEditar = document.querySelector("#nombre-editar")
const duracionEditar = document.querySelector("#duracion-editar")
const precioEditar = document.querySelector("#precio-editar")
const descripcionEditar = document.querySelector("#descripcion-editar")
const fechaInicioEditar = document.querySelector("#fecha_inicio-editar")
const fechaFinEditar = document.querySelector("#fecha_fin-editar")

const selectEliminar = document.querySelector("#id-eliminar")
const endpoint = "http://localhost:8080/public/api/tratamientos"

function mostrarTratamientos() {
    fetch(endpoint)
        .then(response => response.json())
        .then(datos => {
            selectEditar.innerHTML = '<option value="">Selecciona un tratamiento</option>'
            selectEliminar.innerHTML = '<option value="">Selecciona un tratamiento</option>'
            datos.forEach(tratamiento => {
                const option1 = document.createElement("option")
                option1.value = tratamiento.id;
                option1.textContent = tratamiento.nombre

                const option2 = document.createElement("option")
                option2.value = tratamiento.id;
                option2.textContent = tratamiento.nombre

                selectEditar.appendChild(option1)
                selectEliminar.appendChild(option2)
            })
        })
}

document.addEventListener('DOMContentLoaded', () => {
    mostrarTratamientos()
})

document.querySelector("#mostrar-todos").addEventListener('click', () => {
    fetch(endpoint)
        .then(response => response.json())
        .then(datos => {
            divTratamientos.innerHTML = ""

            datos.forEach(tratamiento => {
                const div = document.createElement("div")
                div.innerHTML = 
                    "<br>" + tratamiento.nombre + " " + tratamiento.duracion + " " + tratamiento.precio + " " + tratamiento.descripcion + 
                    " " + tratamiento.fecha_inicio + " " + tratamiento.fecha_fin
                divTratamientos.appendChild(div)
            })
        })
})

document.querySelector("#crear").addEventListener('click', () => {
    const datos = {
        nombre: nombreCrear.value,
        duracion : duracionCrear.value,
        precio : precioCrear.value, 
        descripcion: descripcionCrear.value, 
        fecha_inicio: fechaInicioCrear.value,
        fecha_fin: fechaFinCrear.value
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
            mostrarTratamientos()
        })
})

document.querySelector("#mostrar-id").addEventListener('click', () => {
    const id = idMostrar.value

    fetch(endpoint + "/" + id)
        .then(response => response.json())
        .then(tratamiento => {
            divTratamiento.innerHTML = ""
            const div = document.createElement("div")
            div.innerHTML =
                "<br>" + tratamiento.nombre + " " + tratamiento.duracion + " " + tratamiento.precio + " " + tratamiento.descripcion + 
                " " + tratamiento.fecha_inicio + " " + tratamiento.fecha_fin
            divTratamiento.appendChild(div)
        })
})

document.querySelector("#editar").addEventListener('click', () => {
    const datos = {
        nombre: nombreEditar.value,
        duracion : duracionEditar.value,
        precio : precioEditar.value, 
        descripcion: descripcionEditar.value, 
        fecha_inicio: fechaInicioEditar.value,
        fecha_fin: fechaFinEditar.value
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
            mostrarTratamientos()
        })
})

document.querySelector("#eliminar").addEventListener('click', () => {
    const id = selectEliminar.value

     fetch(endpoint + "/" + id, {
        method: 'DELETE', 
    })
        .then(response => response.json())
        .then(datos => {
            mostrarTratamientos()
        })
})