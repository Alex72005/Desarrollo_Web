const divPacientes = document.querySelector("#resultado-pacientes")
const dniCrear = document.querySelector("#dni-crear")
const nombreCrear = document.querySelector("#nombre-crear")
const apellidosCrear = document.querySelector("#apellidos-crear")
const direccionCrear = document.querySelector("#direccion-crear")
const sexoCrear = document.querySelector("#sexo-crear")
const codpostalCrear = document.querySelector("#codpostal-crear")
const telefonoCrear = document.querySelector("#telefono-crear")

const selectEditar = document.querySelector("#id-editar")
const dniEditar = document.querySelector("#dni-editar")
const nombreEditar = document.querySelector("#nombre-editar")
const apellidosEditar = document.querySelector("#apellidos-editar")
const direccionEditar = document.querySelector("#direccion-editar")
const sexoEditar = document.querySelector("#sexo-editar")
const codpostalEditar = document.querySelector("#codpostal-editar")
const telefonoEditar = document.querySelector("#telefono-editar")

const selectEliminar = document.querySelector("#id-eliminar")

const divPaciente = document.querySelector("#resultado-paciente")
const idMostrar = document.querySelector("#id-mostrar")

const endpoint = "http://localhost:8080/public/api/pacientes"

document.addEventListener('DOMContentLoaded', () => {
    mostrarPacientes()
})

document.querySelector("#mostrar-todos").addEventListener('click', () => {
    fetch(endpoint)
        .then(response => response.json())
        .then(datos => {
            divPacientes.innerHTML = ""

            datos.forEach(paciente => {
                const div = document.createElement("div")
                div.innerHTML =
                    "<br>" + paciente.nombre + " " + paciente.apellidos
                divPacientes.appendChild(div)
            })
        })
})

document.querySelector("#crear").addEventListener('click', () => {
    const datos = {
        dni: dniCrear.value,
        nombre: nombreCrear.value,
        apellidos: apellidosCrear.value,
        direccion: direccionCrear.value,
        sexo: sexoCrear.value,
        codPostal: codpostalCrear.value,
        telefono: telefonoCrear.value
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
            console.log(datos)
            mostrarPacientes()
        })
})

document.querySelector("#editar").addEventListener('click', () => {
    const datos = {
        dni: dniEditar.value,
        nombre: nombreEditar.value,
        apellidos: apellidosEditar.value,
        direccion: direccionEditar.value,
        sexo: sexoEditar.value,
        codPostal: codpostalEditar.value,
        telefono: telefonoEditar.value
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
            console.log(datos)
            mostrarPacientes()
        })
})

selectEditar.addEventListener('change', () => {
    const id = selectEditar.value;

    if (!id) {
        dniEditar.value = "";
        nombreEditar.value = "";
        apellidosEditar.value = "";
        direccionEditar.value = "";
        sexoEditar.value = "";
        codpostalEditar.value = "";
        telefonoEditar.value = "";
    } else {
        fetch(endpoint + "/" + id)
            .then(response => {
                return response.json();
            })
            .then(paciente => {
                dniEditar.value = paciente.dni;
                nombreEditar.value = paciente.nombre;
                apellidosEditar.value = paciente.apellidos;
                direccionEditar.value = paciente.direccion;
                sexoEditar.value = paciente.sexo;
                codpostalEditar.value = paciente.codPostal;
                telefonoEditar.value = paciente.telefono;
            })
    }
});

document.querySelector("#eliminar").addEventListener('click', () => {
    const id = selectEliminar.value

    fetch(endpoint + "/" + id, {
        method: 'DELETE'
    })
        .then(response => response.json())
        .then(datos => {
            mostrarPacientes()
        })
})

document.querySelector("#mostrar-id").addEventListener('click', () => {
    const id = idMostrar.value

    fetch(endpoint + "/" + id)
        .then(response => response.json())
        .then(paciente => {
            divPaciente.innerHTML = ""
            const div = document.createElement("div")
            div.innerHTML =
                "<br>" + paciente.nombre + " " + paciente.apellidos
            divPaciente.appendChild(div)
        })
})


function mostrarPacientes() {
    fetch(endpoint)
        .then(response => response.json())
        .then(datos => {
            selectEliminar.innerHTML = '<option value="">Selecciona un paciente </option>'
            selectEditar.innerHTML = '<option value="">Selecciona un paciente </option>'

            datos.forEach(paciente => {
                const option1 = document.createElement("option")
                option1.value = paciente.id
                option1.textContent = paciente.nombre + " " + paciente.apellidos

                const option2 = document.createElement("option")
                option2.value = paciente.id
                option2.textContent = paciente.nombre + " " + paciente.apellidos

                selectEliminar.appendChild(option1)
                selectEditar.appendChild(option2)
            })
        })
}