const btnDisparar = document.querySelector("#disparar");
const btnReiniciar = document.querySelector("#reiniciar");
const mensaje = document.querySelector("#mensaje");
const ronda = document.querySelector("#ronda");

// Variables del juego
let bala = Math.floor(Math.random() * 6) + 1;           // posición de la bala 6 posibles
let posicionActual = Math.floor(Math.random() * 6) + 1; // por dónde empieza el tambor 6 posibles 
let intento = 1;
let jugando = true;

function setMensaje(texto, color) {
    mensaje.classList.remove("verde", "rojo", "gris");
    mensaje.textContent = texto;
    mensaje.classList.add(color);
}

btnDisparar.addEventListener("click", () => {
    if (!jugando) return;

    console.log("🔁 Posición actual:", posicionActual, " | Bala:", bala); // (para entenderlo)

    // ¿disparo mortal?
    if (posicionActual === bala) {
        setMensaje("💀 ¡BANG! Has perdido.", "rojo");
        jugando = false;
    } else {
        setMensaje("😅 ¡Click! Te has salvado.", "verde");
        intento++;
        ronda.textContent = "Ronda actual: " + intento;

        // Avanzar tambor (como si girara)
        posicionActual++;
        if (posicionActual > 6) {
            posicionActual = 1;
        }
    }
});

btnReiniciar.addEventListener("click", () => {
    bala = Math.floor(Math.random() * 6) + 1;
    posicionActual = Math.floor(Math.random() * 6) + 1;
    intento = 1;
    jugando = true;
    ronda.textContent = "Ronda actual: 1";
    setMensaje("", "gris");

    console.log("🔄 Nueva bala:", bala, " | Nueva posición inicial:", posicionActual);
});
