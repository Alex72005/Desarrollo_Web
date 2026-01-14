const selectIdioma = document.querySelector('#idioma')

selectIdioma.addEventListener('change', () => {
    localStorage.setItem('idioma', selectIdioma.value)
    window.location.reload()
})

document.addEventListener('DOMContentLoaded', () => {
    const idioma = localStorage.getItem('idioma')

    if (idioma) {
        selectIdioma.value = idioma
    }
})

const btnAceptar = document.querySelector('#btnAceptar')
btnAceptar.addEventListener('click', async () => {
    await cookieStore.set({
        name: 'cookiesAceptadas',
        value: "true",
        expires: Date.now() + (60 * 1000)
    })
})

const inputUsuario = document.querySelector('#usuario')
const btnLogin = document.querySelector('#btnLogin')
const btnLogout = document.querySelector('#btnLogout')
const btnAccion = document.querySelector('#btnAccion')

btnLogin.addEventListener('click', () => {
    sessionStorage.setItem('nombre', inputUsuario.value)
})

btnLogout.addEventListener('click', () => {
    sessionStorage.removeItem('nombre')
})

btnAccion.addEventListener('click', () => {
    const usuario = sessionStorage.getItem('nombre')

    if (usuario) {
        console.log("Acción realizada por " + usuario)
    } else {
        console.log("Debes iniciar sesión")
    }
    
    let historial = localStorage.getItem('historial')

    if (historial) {
        historial = JSON.parse(historial)
    } else {
        historial = []
    }

    const accion = {
        usuario: usuario,
        fecha: Date.now()
    }

    historial.push(accion)

    localStorage.setItem('historial', JSON.stringify(historial))
})
