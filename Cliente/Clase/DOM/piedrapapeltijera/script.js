const piedra1 = document.querySelector("#piedra1")
const papel1 = document.querySelector("#papel1")
const tijera1 = document.querySelector("#tijera1")
const imagenes = document.querySelector("#imagenes")

const piedra2 = document.querySelector("#piedra2")
const papel2 = document.querySelector("#papel2")
const tijera2 = document.querySelector("#tijera2")
const imagenes2 = document.querySelector("#imagenes2")

let jugadaJugador1 = ""
let jugadaJugador2 = ""
let puntos1 = 0
let puntos2 = 0
const btnJugar = document.querySelector("#btnJugar")

//Jugador1
imagenes.addEventListener("click", () => {
    piedra1.classList.remove("seleccionarImagen")
    papel1.classList.remove("seleccionarImagen")
    tijera1.classList.remove("seleccionarImagen")
}, true)


piedra1.addEventListener("click", () => {
    piedra1.classList.add("seleccionarImagen")
})

papel1.addEventListener("click", () => {
    papel1.classList.add("seleccionarImagen")
})

tijera1.addEventListener("click", () => {
    tijera1.classList.add("seleccionarImagen")
})

//Jugador 2 
imagenes2.addEventListener("click", () => {
    piedra2.classList.remove("seleccionarImagen")
    papel2.classList.remove("seleccionarImagen")
    tijera2.classList.remove("seleccionarImagen")
}, true)


piedra2.addEventListener("click", () => {
    piedra2.classList.add("seleccionarImagen")
})

papel2.addEventListener("click", () => {
    papel2.classList.add("seleccionarImagen")
})

tijera2.addEventListener("click", () => {
    tijera2.classList.add("seleccionarImagen")
})

//Boton (LOGICA)
btnJugar.addEventListener("click", () => {
    const contador1 = document.querySelector("#contador1")
    const contador2 = document.querySelector("#contador2")

    if (piedra1.classList.contains("seleccionarImagen")) {
        jugadaJugador1 = "piedra"
    } else if (papel1.classList.contains("seleccionarImagen")) {
        jugadaJugador1 = "papel"
    } else if (tijera1.classList.contains("seleccionarImagen")) {
        jugadaJugador1 = "tijera"
    }

    if (piedra2.classList.contains("seleccionarImagen")) {
        jugadaJugador2 = "piedra"
    } else if (papel2.classList.contains("seleccionarImagen")) {
        jugadaJugador2 = "papel"
    } else if (tijera2.classList.contains("seleccionarImagen")) {
        jugadaJugador2 = "tijera"
    }

    if (jugadaJugador1 != "" && jugadaJugador2 != "") {
        if (jugadaJugador1 == jugadaJugador2) {
            alert("Empate")
        } else if (jugadaJugador1 == "piedra" && jugadaJugador2 == "tijera" || jugadaJugador1 == "papel" && jugadaJugador2 == "piedra" || jugadaJugador1 == "tijera" && jugadaJugador2 == "papel") {
            puntos1++
        } else {
            puntos2++
        }

        contador1.textContent = puntos1
        contador2.textContent = puntos2

    } else {
        alert ("Seleccione las jugadas")
    }
})