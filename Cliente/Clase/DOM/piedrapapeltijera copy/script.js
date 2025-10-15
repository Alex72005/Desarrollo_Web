const imagenes = document.querySelectorAll("img")
const resultado = document.querySelector("#imagenes2")
const mensaje = document.querySelector("#mensaje")
const contador1 = document.querySelector("#contador1")
const contador2 = document.querySelector("#contador2")
const rachaJug = document.querySelector("#racha")
const rachaMaxJug = document.querySelector("#rachaMax")
const getRandomInt = max => Math.floor(Math.random() * max);

let jugador1 = 0;
let jugador2 = 0;
let racha = 0;
let rachaMax = 0;

imagenes.forEach(img => {
    img.addEventListener("click", () => {
        imagenes.forEach(img => img.classList.remove("seleccionarImagen"))
        img.classList.add("seleccionarImagen")

        let aleatorio = getRandomInt(3)
        let resultadoJuego = ""
        let nuevaImg = document.createElement("img")

        if (aleatorio == 0) {
            resultadoJuego = "piedra"
            nuevaImg.src = "img/piedra.png"
        } else if (aleatorio == 1) {
            resultadoJuego = "papel"
            nuevaImg.src = "img/papel.png"
        } else if (aleatorio == 2) {
            resultadoJuego = "tijera"
            nuevaImg.src = "img/tijera.png"
        }

        resultado.innerHTML = ""
        resultado.appendChild(nuevaImg)

        setTimeout(() => {
            if (img.id == resultadoJuego) {
                mensaje.textContent = "Empate"
                mensaje.className = "gris"
            } else if (img.id == "piedra" && resultadoJuego == "tijera" || img.id == "papel" && resultadoJuego == "piedra" || img.id == "tijera" && resultadoJuego == "papel") {
                mensaje.textContent = "Ganaste"
                mensaje.className = "verde"
                jugador1++
                racha++
                if (racha > rachaMax) {
                    rachaMax = racha
                }
            } else {
                jugador2++
                racha = 0;
                mensaje.textContent = "Perdiste"
                mensaje.className = "rojo"
            }

            contador1.textContent = jugador1
            contador2.textContent = jugador2
            rachaJug.textContent = "Racha actual:" + racha;
            rachaMaxJug.textContent = "Racha maxima:" + rachaMax;

        }, 300)
    })
})
