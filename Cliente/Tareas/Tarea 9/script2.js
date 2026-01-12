const inputsTema = document.querySelectorAll('input[name="tema"]')

inputsTema.forEach(input => {
    input.addEventListener('change', () => {
        //console.log(input.value)
        localStorage.setItem('tema', input.value)
        window.location.reload()
    })
})

document.addEventListener('DOMContentLoaded', () => {
    const tema = localStorage.getItem('tema')

    if (tema) {
        const radio = document.querySelector(`input[name="tema"][value="${tema}"]`);
        if (radio) radio.checked = true;
    }

    if (tema == "claro") {
        document.body.style.backgroundColor = "white"
    } else if (tema == "oscuro") {
        document.body.style.backgroundColor = "red"
    } else {
        document.body.style.backgroundColor = "white"
    }
})

const btnEnviar = document.querySelector("#btnEnviar")
btnEnviar.addEventListener('click', () => {
    const visto = sessionStorage.getItem("visto")
    if (visto == "ok") {
        console.log("Enviado correctamente")
    } else {
        console.log("no puedes enviar hasta que no veas el tutorial")
    }
})

const aTutorial = document.querySelector("#tutorial")
aTutorial.addEventListener('click', () => {
    sessionStorage.setItem("visto", "ok")
})

const btnRegistroFecha = document.querySelector("#registroFecha")
btnRegistroFecha.addEventListener('click', async () => {
    await cookieStore.set(
        {
            name: 'ultimoRegistro',
            value: Date.now(),
            expires: Date.now() + 10000 //milisegundos
        })
})

//Ej Prueba Practica
const anyadirCarrito = document.querySelector("#anyadirCarrito")
anyadirCarrito.addEventListener('click', () => {
    const carrito = []

    const producto1 = {
        nombre: "teclado",
        precio: 30.52
    }

    const producto2 = {
        nombre: "monitor",
        precio: 258.65
    }

    carrito.push(producto1)
    carrito.push(producto2)

    const stringCarrito = JSON.stringify(carrito) //convierto a string todo el contenido del array

    localStorage.setItem("carrito", stringCarrito)

    const producto3 = {
        nombre: "portatil", 
        precio: 8000.52
    }

    const stringCarrito2 = localStorage.getItem('carrito') //es un string NO un array
    const arrayCarrito2 = JSON.parse(stringCarrito2) //lo convierto en un array
    arrayCarrito2.push(producto3)

    localStorage.setItem('carrito2', JSON.stringify(arrayCarrito2))
})