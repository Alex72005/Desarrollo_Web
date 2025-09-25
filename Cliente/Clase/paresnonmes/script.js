let jugador1 = prompt("Nombre del jugador 1:");
let jugador2 = prompt("Nombre del jugador 2:");

let eleccion = prompt(jugador1 + ", elige: pares o nones");

let num1 = parseInt(prompt(jugador1 + ", saca un número (0-5):"));
let num2 = parseInt(prompt(jugador2 + ", saca un número (0-5):"));

let suma = num1 + num2;

alert("Números: " + num1 + " + " + num2 + " = " + suma);

if (suma % 2 === 0) {
    // Caso par
    if (eleccion === "pares") {
        alert("¡Gana " + jugador1 + "!");
    } else {
        alert("¡Gana " + jugador2 + "!");
    }
} else {
    // Caso impar (no hace falta comprobar de nuevo)
    if (eleccion === "nones") {
        alert("¡Gana " + jugador1 + "!");
    } else {
        alert("¡Gana " + jugador2 + "!");
    }
}
