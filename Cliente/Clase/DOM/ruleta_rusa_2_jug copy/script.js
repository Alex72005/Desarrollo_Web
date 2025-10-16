const turnoTexto = document.querySelector("#turno")
const jugador1Img = document.querySelector("#jugador1")
const jugador2Img = document.querySelector("#jugador2")
const btnReiniciar = document.querySelector("#reiniciar")
const btnReiniciarMarcador = document.querySelector("#reiniciarMarcador")
const mensaje = document.querySelector("#mensaje")
const ronda = document.querySelector("#ronda")
const marcador = document.querySelector("#marcador")

let bala = Math.floor(Math.random() * 6) + 1           // posición de la bala
let posicionActual = Math.floor(Math.random() * 6) + 1 // posición inicial del tambor
let turno = 1 // Jugador 1 empieza
let intento = 1
let jugando = true

let victorias1 = 0;
let victorias2 = 0;

function setMensaje(texto, color) {
    mensaje.classList.remove("verde", "rojo", "gris")
    mensaje.textContent = texto
    mensaje.classList.add(color)
}

function actualizarMarcador() {
    marcador.textContent = "Victorias → Jugador 1: " + victorias1 + " | Jugador 2: " + victorias2;
}

function disparar() {
    if (jugando) {
        console.log("Bala: " + bala + " | Cámara actual: " + posicionActual + " | Turno: Jugador " + turno)

        // COMPROBAR SI SALE LA BALA
        if (posicionActual == bala) {
            setMensaje("¡BANG! Jugador " + turno + " ha muerto.", "rojo")
            jugando = false

            if (turno == 1) {
                victorias2++;
                turnoTexto.textContent = "🏆 Jugador 2 gana la partida"
            } else {
                victorias1++;
                turnoTexto.textContent = "🏆 Jugador 1 gana la partida"
            }

            actualizarMarcador()

        } else {
            setMensaje("¡Click! Jugador " + turno + " se ha salvado.", "verde")

            // AVANZAR TAMBOR
            posicionActual = posicionActual + 1
            if (posicionActual > 6) {
                posicionActual = 1
            }

            // CAMBIAR DE TURNO
            if (turno == 1) {
                turno = 2
            } else {
                turno = 1
            }

            turnoTexto.textContent = "Turno: Jugador " + turno

            intento = intento + 1
            ronda.textContent = "Ronda actual: " + intento
        }
    }

}

// EVENTOS DE CLIC EN LAS IMÁGENES
jugador1Img.addEventListener("click", function () {
    if (turno == 1 && jugando == true) {
        disparar();
    }
});

jugador2Img.addEventListener("click", function () {
    if (turno == 2 && jugando == true) {
        disparar();
    }
});

btnReiniciar.addEventListener("click", () => {
    console.clear()
    bala = Math.floor(Math.random() * 6) + 1
    posicionActual = Math.floor(Math.random() * 6) + 1
    turno = 1
    intento = 1
    jugando = true

    setMensaje()
    ronda.textContent = "Ronda actual: 1"
    turnoTexto.textContent = "Turno: Jugador 1"
    actualizarMarcador()
    console.log('Nueva bala: ' + bala + ' Posición inicial: ' + posicionActual)
})

btnReiniciarMarcador.addEventListener("click", function () {
    console.clear()

    victorias1 = 0
    victorias2 = 0
    actualizarMarcador()

    bala = Math.floor(Math.random() * 6) + 1
    posicionActual = Math.floor(Math.random() * 6) + 1
    turno = 1
    intento = 1
    jugando = true

    setMensaje()
    ronda.textContent = "Ronda actual: 1"
    turnoTexto.textContent = "Turno: Jugador 1";

    console.log("Marcador reiniciado. Nueva bala: " + bala + " | Posición inicial: " + posicionActual)
})
