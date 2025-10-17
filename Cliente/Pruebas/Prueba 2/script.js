const turnoTexto = document.querySelector("#turno")
const j1 = document.querySelector("#j1")
const j2 = document.querySelector("#j2")
const dado = document.querySelector("#dado")
const btnTirar = document.querySelector("#btnTirar")
const btnPasar = document.querySelector("#btnPasar")
const marcador = document.querySelector("#marcador")
const marcadorJ1 = document.querySelector("#marcadorJ1")
const marcadorJ2 = document.querySelector("#marcadorJ2")
const puntuacion = document.querySelector("#puntuacion")
let turno = 1
let puntuacion1 = 0;
let puntuacion2 = 0;
let total1 = 0;
let total2 = 0;

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

btnTirar.addEventListener('click', () => {
    let aleatorio = getRandomInt(1, 6)
    let num;
    let nuevaImg = document.createElement("img")

    if (aleatorio == 1) {
        num = 0;
        nuevaImg.src = "img/cara1.png"
        if (turno == 1) {
            turno = 2
            puntuacion1 = 0
            puntuacion.textContent = 0
            turnoTexto.textContent = "Turno: Jugador " + turno
        } else {
            turno = 1
            puntuacion2 = 0
            puntuacion.textContent = 0
            turnoTexto.textContent = "Turno: Jugador " + turno
        }
    } else if (aleatorio == 2) {
        num = 2;
        nuevaImg.src = "img/cara2.png"
    } else if (aleatorio == 3) {
        num = 3;
        nuevaImg.src = "img/cara3.png"
    } else if (aleatorio == 4) {
        num = 4;
        nuevaImg.src = "img/cara4.png"
    } else if (aleatorio == 5) {
        num = 5;
        nuevaImg.src = "img/cara5.png"
    } else if (aleatorio == 6) {
        num = 6;
        nuevaImg.src = "img/cara6.png"
    }

    dado.innerHTML = "";
    dado.appendChild(nuevaImg);

    if (aleatorio != 1) {
        if (turno == 1) {
            puntuacion1 += num;
            puntuacion.textContent = puntuacion1;
        }

        if (turno == 2) {
            puntuacion2 += num;
            puntuacion.textContent = puntuacion2;
        }
    }
})

btnPasar.addEventListener('click', () => {
    if (turno == 1) {
        total1+=puntuacion1
        marcadorJ1.textContent = total1;
        puntuacion1 = 0;
        puntuacion.textContent = 0;
        turno = 2
        turnoTexto.textContent = "Turno: Jugador " + turno;
    } else {
        total2+=puntuacion2
        marcadorJ2.textContent = total2;
        turno = 1
        turnoTexto.textContent = "Turno: Jugador " + turno;
        puntuacion2 = 0;
        puntuacion.textContent = 0;
    }
})

