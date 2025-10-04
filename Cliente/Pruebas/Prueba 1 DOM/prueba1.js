let oculto = ["X", "X", "X", "X", "X", "X", "X", "X"];
let cartas = ["O", "B", "O", "E", "C", "B", "E", "C"];
let tablero = document.getElementById("tablero");
let parejasEncontradas = 0;

while (parejasEncontradas < (cartas.length / 2)) {
    alert("Cartas: " + oculto.join(" "));

    let cartausuario = prompt("Introduzca dos cartas a relevar: (1-8)");

    let arrayPosicionesUsuario = cartausuario.split(",");

    for (let i = 0; i < arrayPosicionesUsuario.length; i++) {
        arrayPosicionesUsuario[i] = parseInt(arrayPosicionesUsuario[i] - 1);
    }

    for (let i = 0; i < oculto.length; i++) {
        for (let j = 0; j < arrayPosicionesUsuario.length; j++) {
            if (i == arrayPosicionesUsuario[j]) {
                oculto[i] = cartas[i];
            }
        }
    }

    alert("Cartas: " + oculto.join(" "));

    if (cartas[arrayPosicionesUsuario[0]] == cartas[arrayPosicionesUsuario[1]]) {
        alert("Has encontrado una pareja");
        parejasEncontradas++;
    } else {
        alert("No son iguales");
        for (let i = 0; i < arrayPosicionesUsuario.length; i++) {
            oculto[arrayPosicionesUsuario[i]] = "X";
        }
    }
}

alert("Has encontrado todas las parejas. Enhorabuena");