// Palabra a adivinar (puedes cambiarla o hacer un array con varias)
let palabra = "casa";

// Convertimos la palabra en array
let letras = palabra.split("");

// Array oculto con guiones bajos
let oculto = [];
for (let i = 0; i < letras.length; i++) {
    oculto.push("_");
}

// Intentos permitidos
let intentos = 5;

// Array de letras usadas
let usadas = [];

// Bucle principal
while (intentos > 0 && oculto.includes("_")) {

    // Mostrar estado actual
    alert("Palabra: " + oculto.join(" ") +
        "\nLetras usadas: " + usadas.join(", ") +
        "\nIntentos restantes: " + intentos);

    // Pedir una letra
    let letra = prompt("Introduce una letra:");

    // Bandera para controlar si seguimos comprobando
    let salto = false;

    // Comprobar si la letra ya fue usada
    for (let i = 0; i < usadas.length; i++) {
        if (usadas[i] === letra) {
            alert("Ya usaste esa letra. Prueba otra.");
            salto = true;
        }
    }

    // Solo seguimos si la letra no estaba repetida
    if (salto === false) {
        usadas.push(letra);

        // Comprobar si la letra está en la palabra
        let acierto = false;
        for (let i = 0; i < letras.length; i++) {
            if (letras[i] === letra) {
                oculto[i] = letra;
                acierto = true;
            }
        }

        // Si no hubo acierto, restar intento
        if (acierto === false) {
            intentos--;
        }
    }
}

// Resultado final
if (!oculto.includes("_")) {
    alert("¡Ganaste! La palabra era " + palabra);
} else {
    alert("Perdiste. La palabra era " + palabra);
}
