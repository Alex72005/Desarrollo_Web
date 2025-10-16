// === RULETA RUSA CON IMÁGENES (sin efecto de opacidad) ===
// Juego básico por turnos con dos jugadores. Cada uno dispara por turnos
// hasta que la bala coincide con su disparo o se terminan las 6 rondas.

// ----------------------------------------------------------
// DOCUMENTO CARGADO
// ----------------------------------------------------------
// Este evento garantiza que todo el HTML esté cargado antes de ejecutar el código.
// Así nos aseguramos de que los elementos (imágenes, botones, texto, etc.) existan.
document.addEventListener("DOMContentLoaded", () => {

    // ----------------------------------------------------------
    // FUNCIÓN: Generar un número entero aleatorio entre 0 y (max - 1)
    const getRandomInt = max => Math.floor(Math.random() * max);

    // ----------------------------------------------------------
    // VARIABLES DEL JUEGO
    let posicionBala = 0;      // Posición aleatoria donde está la bala (0 a 5)
    let turno = 1;             // Jugador que tiene el turno actual (1 o 2)
    let disparoActual = 0;     // Número de disparos que se han hecho
    let juegoIniciado = false; // Controla si la partida está activa o no

    // ----------------------------------------------------------
    // ELEMENTOS DEL DOM (del documento HTML)
    const btnEmpezar = document.getElementById("btn_empezar"); // Botón de inicio
    const j1 = document.getElementById("j1");                  // Imagen del jugador 1
    const j2 = document.getElementById("j2");                  // Imagen del jugador 2
    const textoTurno = document.getElementById("turno");       // Texto que indica de quién es el turno

    // ----------------------------------------------------------
    // EVENTO: cuando se pulsa el botón "Empezar juego"
    btnEmpezar.addEventListener("click", () => {

        // Se genera la posición aleatoria de la bala (entre 0 y 5)
        posicionBala = getRandomInt(6);

        // Se reinician variables del juego
        disparoActual = 0;
        turno = getRandomInt(2) + 1; // Elige aleatoriamente qué jugador empieza (1 o 2)
        juegoIniciado = true;        // Activa la partida

        // Mensajes informativos en consola
        console.log("Juego iniciado");
        console.log("La bala está en la posición " + (posicionBala + 1));
        console.log("====================");

        // Mensajes en pantalla
        alert("¡La bala está en la posición " + (posicionBala + 1) + "!");
        alert("Empieza el jugador " + turno);

        // Actualiza el texto visible en pantalla
        textoTurno.textContent = "Turno del jugador " + turno;
    });

    // ----------------------------------------------------------
    // EVENTO: cuando el jugador 1 hace clic en su imagen
    j1.addEventListener("click", () => {

        // Solo se ejecuta si el juego está iniciado y es el turno del jugador 1
        if (juegoIniciado == true && turno == 1) {

            console.log("Jugador 1 dispara en posición " + (disparoActual + 1));

            // Comprueba si la bala coincide con la posición actual
            if (disparoActual == posicionBala) {
                // Si coincide, el jugador 1 muere y termina la partida
                alert("Jugador 1 MUERTO. Gana el jugador 2.");
                console.log("Jugador 1 MUERTO. Gana el jugador 2.");
                console.log("Juego terminado.");
                console.log("====================");
                juegoIniciado = false;
                textoTurno.textContent = "Jugador 1 ha muerto. Fin del juego.";
            }
            else {
                // Si no coincide, el jugador 1 sobrevive y pasa el turno al jugador 2
                alert("Click! Jugador 1 sigue vivo. Turno del jugador 2.");
                turno = 2; // Pasa el turno al jugador 2
                disparoActual = disparoActual + 1; // Se incrementa el disparo
                textoTurno.textContent = "Turno del jugador " + turno;

                // Si ya se han hecho 6 disparos y nadie ha muerto
                if (disparoActual == 6) {
                    alert("Fin del juego. Nadie ha muerto.");
                    console.log("Fin del juego. Nadie ha muerto.");
                    console.log("Juego terminado.");
                    console.log("====================");
                    juegoIniciado = false;
                    textoTurno.textContent = "Fin del juego. Nadie ha muerto.";
                }
            }
        }
    });

    // ----------------------------------------------------------
    // EVENTO: cuando el jugador 2 hace clic en su imagen
    j2.addEventListener("click", () => {

        // Solo se ejecuta si el juego está iniciado y es el turno del jugador 2
        if (juegoIniciado == true && turno == 2) {

            console.log("Jugador 2 dispara en posición " + (disparoActual + 1));

            // Comprueba si la bala coincide con la posición actual
            if (disparoActual == posicionBala) {
                // Si coincide, el jugador 2 muere y termina la partida
                alert("Jugador 2 MUERTO. Gana el jugador 1.");
                console.log("Jugador 2 MUERTO. Gana el jugador 1.");
                console.log("Juego terminado.");
                console.log("====================");
                juegoIniciado = false;
                textoTurno.textContent = "Jugador 2 ha muerto. Fin del juego.";
            }
            else {
                // Si no coincide, el jugador 2 sobrevive y pasa el turno al jugador 1
                alert("Click! Jugador 2 sigue vivo. Turno del jugador 1.");
                turno = 1; // Pasa el turno al jugador 1
                disparoActual = disparoActual + 1; // Se incrementa el disparo
                textoTurno.textContent = "Turno del jugador " + turno;

                // Si ya se han hecho 6 disparos y nadie ha muerto
                if (disparoActual == 6) {
                    alert("Fin del juego. Nadie ha muerto.");
                    console.log("Fin del juego. Nadie ha muerto.");
                    console.log("Juego terminado.");
                    console.log("====================");
                    juegoIniciado = false;
                    textoTurno.textContent = "Fin del juego. Nadie ha muerto.";
                }
            }
        }
    });

}); // ← Fin del DOMContentLoaded