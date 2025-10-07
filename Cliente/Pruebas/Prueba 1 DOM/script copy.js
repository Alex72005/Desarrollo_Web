const oculto = ["X", "X", "X", "X", "X", "X", "X", "X"];
const cartas = ["1.jpg", "2.jpg", "1.jpg", "4.jpg", "3.jpg", "2.jpg", "4.jpg", "3.jpg"];
const tablero = document.querySelector("#tablero");
let parejasEncontradas = 0;
let seleccionadas = [];
let intentos = 10;
let juegoActivo = true;

const baseUrl = "img/";
const cartaOculta = baseUrl + "atras.png";

// Crear cartas en el tablero
for (let i = 0; i < oculto.length; i++) {
    const carta = document.createElement("img");
    carta.src = baseUrl + cartas[i];
    carta.dataset.posicion = i;
    tablero.appendChild(carta);
}

const imagenes = tablero.querySelectorAll("img");

setTimeout(() => {
    imagenes.forEach((img) => {
        img.src = cartaOculta;
    });
}, 1500); // 1 y medio segundos para memorizar

imagenes.forEach(img => {
    img.addEventListener("click", () => {
        if (juegoActivo) {
            const indice = parseInt(img.dataset.posicion);

            // Solo si no está ya seleccionada y no hay dos seleccionadas
            if (oculto[indice] == "X" && seleccionadas.length < 2) {
                img.src = baseUrl + cartas[indice];
                oculto[indice] = cartas[indice];
                seleccionadas.push(indice);

                // Cuando hay dos cartas seleccionadas
                if (seleccionadas.length == 2) {
                    intentos--;
                    const carta1 = seleccionadas[0];
                    const carta2 = seleccionadas[1];

                    // Esperamos un poco para que se vea la segunda carta
                    setTimeout(() => {
                        if (cartas[carta1] == cartas[carta2]) {
                            alert("¡Has encontrado una pareja!");
                            parejasEncontradas++;
                        } else {
                            alert("No son iguales");
                            // Tapar las cartas
                            imagenes[carta1].src = cartaOculta;
                            imagenes[carta2].src = cartaOculta;
                            oculto[carta1] = "X";
                            oculto[carta2] = "X";
                        }

                        seleccionadas = [];

                        // Comprobar si se encontraron todas las parejas
                        if (parejasEncontradas == cartas.length / 2) {
                            alert("¡Has encontrado todas las parejas. Enhorabuena!");
                            juegoActivo = false;
                        } else if (intentos === 0) {
                            alert("Te quedaste sin intentos");
                            juegoActivo = false;
                        }
                    }, 500); // 0.5 segundos para que se vea la segunda carta
                }
            }
        }
    });
});