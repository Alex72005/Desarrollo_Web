const inputNombreUsuario = document.querySelector('#usuario')
const btnLogin = document.querySelector('#btnLogin')
const btnCerrarSesion = document.querySelector('#btnCerrarSesion')
const checkMantenerSesión = document.querySelector('#autoLogin')
const btnAccion = document.querySelector('#btnAccion')
const btnBorrarHistorial = document.querySelector('#btnBorrarHistorial')


document.addEventListener('DOMContentLoaded', () => {
    let usuario = localStorage.getItem('sesion')

    if (usuario) {
        checkMantenerSesión.checked = true
    } else {
        usuario = sessionStorage.getItem('sesion')
        checkMantenerSesión.checked = false
    }

    if (usuario) {
        inputNombreUsuario.value = usuario
    }
})

btnLogin.addEventListener('click', () => {
    const usuario = inputNombreUsuario.value.trim()

    if (usuario) {
        sessionStorage.setItem('loginTime', Date.now())
        if (checkMantenerSesión.checked) {
            localStorage.setItem('sesion', usuario)
            sessionStorage.removeItem('sesion')
        } else {
            sessionStorage.setItem('sesion', usuario)
            localStorage.removeItem('sesion')
        }
    }
})

btnCerrarSesion.addEventListener('click', () => {
    localStorage.removeItem('sesion')
    sessionStorage.removeItem('sesion')

    inputNombreUsuario.value = ""
    checkMantenerSesión.checked = false
})

btnAccion.addEventListener('click', () => {
    const usuario = localStorage.getItem('sesion') || sessionStorage.getItem('sesion')
    let sesionValida = true

    if (!usuario) {
        sesionValida = false
        console.log("No hay sesión activa")
    }

    const loginTime = sessionStorage.getItem('loginTime')
    const ahora = Date.now()

    if (!loginTime || ahora - loginTime > (20 * 1000)) {
        sesionValida = false
        console.log("Sesion expirada")
    }

    if (sesionValida) {
        console.log("Sesion iniciada por " + usuario)
        let historial = localStorage.getItem('historial')

        if (historial) {
            historial = JSON.parse(historial)
        } else {
            historial = []
        }

        const login = {
            usuario: usuario,
            fecha: Date.now(),
            tipo: 'accion'
        }

        historial.push(login)

        if (historial.length > 5) {
            historial.shift()
        }

        localStorage.setItem('historial', JSON.stringify(historial))
    }
})

btnBorrarHistorial.addEventListener('click', () => {
    const usuario = localStorage.getItem('sesion') || sessionStorage.getItem('sesion')
    let puedeBorrar = true

    if (!usuario) {
        puedeBorrar = false
        console.log("Para poder borrar el historial debes inicar sesion")
    }

    if (puedeBorrar) {
        const confirmacion = confirm("¿Seguro que quieres borrar el historial?")

        if (!confirmacion) {
            puedeBorrar = false
            console.log("Borrado cancelado")
        }
    }

    if (puedeBorrar) {
        localStorage.removeItem('historial')
        console.log("Historial borrado correctamente")
    }
})

