const inputsTema = document.querySelectorAll('input[name="modo"]')

inputsTema.forEach(input => {
    input.addEventListener('change', () => {
        localStorage.setItem('tema', input.value)
        window.location.reload()
    })
})

document.addEventListener('DOMContentLoaded', () => {
    const tema = localStorage.getItem('tema')

    if (tema) {
        const radio = document.querySelector(`input[name=modo][value="${tema}"]`)
        if (radio) {
            radio.checked = true
        }
    }

    if (tema == "claro") {
        document.body.style.backgroundColor = "white"
    } else if (tema == "oscuro") {
        document.body.style.backgroundColor = "gray"
    } else {
        document.body.style.backgroundColor = "white"
    }
})

//tutorial: sessionstorage
const btnAcceder = document.querySelector('#btnAcceder')
const aTutorial = document.querySelector('#tutorial')

aTutorial.addEventListener('click', (e) => {
    e.preventDefault() //para no ir a youtube
    sessionStorage.setItem('visto', "SI")
})

btnAcceder.addEventListener('click', () => {
    const visto = sessionStorage.getItem('visto')
    if (visto == "SI") {
        console.log("Acceso permitido")
    } else {
        console.log("Debes ver el tutorial")
    }
})

//carrito IMPORTANTE
const inputNombreProducto = document.querySelector('#nombre')
const inputNombrePrecio = document.querySelector('#precio')
const btnAnyadirCarrito = document.querySelector('#btnCarrito')

btnAnyadirCarrito.addEventListener('click', () => {
    let carrito = localStorage.getItem('carrito')

    if (carrito) {
        carrito = JSON.parse(carrito)
    } else {
        carrito = []
    }

    const producto = {
        nombre: inputNombreProducto.value, 
        precio: parseFloat(inputNombrePrecio.value)
    }

    carrito.push(producto)

    localStorage.setItem("carrito", JSON.stringify(carrito))

    inputNombreProducto.value = ""
    inputNombrePrecio.value = ""

    console.log(carrito)
})

//cookie
const btnRegistro = document.querySelector('#btnRegistro')
btnRegistro.addEventListener('click', async () => {
    await cookieStore.set({
        name: 'ultimoAcceso', 
        value: Date.now(), 
        expires: Date.now() + (15 * 1000)
    })
})