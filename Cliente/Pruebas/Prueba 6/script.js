const inputIdTemperaturaAnyadir = document.querySelector('#id_temperatura')
const inputCiudad = document.querySelector('#ciudad')
const inputDia = document.querySelector('#dia')
const inputHora = document.querySelector('#hora')
const inputTemperatura = document.querySelector('#temperatura')
const btnAnyadirTemperatura = document.querySelector('#anyadir')

const inputIdTemperaturaEliminar = document.querySelector('#id_eliminar')
const btnEliminarTemperatura = document.querySelector('#eliminar')

const btnListar = document.querySelector('#listar')

const inputIdTemperaturaActualizar = document.querySelector('#id_actualizar')
const inputCiudadActualizar = document.querySelector('#ciudad_actualizar')
const inputDiaActualizar = document.querySelector('#dia_actualizar')
const inputHoraActualizar = document.querySelector('#hora_actualizar')
const inputTemperaturaActualizar = document.querySelector('#temperatura_actualizar')
const btnActualizar = document.querySelector('#actualizar')

btnAnyadirTemperatura.addEventListener('click', () => {
    let temperaturas = localStorage.getItem('temperaturas')

    if (temperaturas) {
        temperaturas = JSON.parse(temperaturas)
    } else {
        temperaturas = []
    }

    const temperatura = {
        id: inputIdTemperaturaAnyadir.value,
        ciudad: inputCiudad.value,
        dia: inputDia.value,
        hora: inputHora.value,
        temperatura: inputTemperatura.value
    }

    temperaturas.push(temperatura)

    const stringTemperaturas = JSON.stringify(temperaturas)

    localStorage.setItem("temperaturas", stringTemperaturas)
})

btnListar.addEventListener('click', () => {
    let temperaturas = localStorage.getItem('temperaturas') //es un string
    if (temperaturas) {
        console.log(JSON.parse(temperaturas))
    }
})

//FALLA
btnEliminarTemperatura.addEventListener('click', () => {
    let temperaturas = localStorage.getItem('temperaturas') //es un string
    const idEliminar = inputIdTemperaturaEliminar.value

    if (temperaturas) {
        let arrayTemperaturas = JSON.parse(temperaturas) //ahora es un array

        arrayTemperaturas.forEach(t => {
            if (t.id == idEliminar) {
                arrayTemperaturas.splice(0,1)
                localStorage.setItem('temperaturas', JSON.stringify(arrayTemperaturas))
            }
        });
    }
})

btnActualizar.addEventListener('click', () => {
    const id = inputIdTemperaturaActualizar.value
    let temperaturas = localStorage.getItem('temperaturas')
    if (temperaturas) {
        let array = JSON.parse(temperaturas)
        array.forEach(e => {
            if (e.id == id) {
                e.ciudad = inputCiudadActualizar.value
                e.dia = inputDiaActualizar.value
                e.hora = inputHoraActualizar.value
                e.temperatura = inputTemperaturaActualizar.value
                localStorage.setItem('temperaturas',JSON.stringify(array))
            }
        });
    }
})