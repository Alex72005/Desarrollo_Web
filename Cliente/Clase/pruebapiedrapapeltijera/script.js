let j1 = prompt("Dime el nombre del jugador 1");
let j2 = prompt("Dime el nombre del jugador 2");
let rondas = prompt("Dime el numero de rondas que quieras jugar");

let rondasj1 = 0;
let rondasj2 = 0;

while (rondas > 0) {

    let jugadasj1 = prompt("Dime tus jugadas " + j1);
    let jugadasj2 = prompt("Dime tus jugadas " + j2);

    let contadorj1 = 0;
    let contadorj2 = 0;

    let arrayj1 = jugadasj1.split(" ");
    let arrayj2 = jugadasj2.split(" ");

    for (let i = 0; i < arrayj1.length; i++) {
        if (arrayj1[i] == "piedra" && arrayj2[i] == "tijera") {
            contadorj1++;
        } else if (arrayj1[i] == "piedra" && arrayj2[i] == "papel") {
            contadorj2++;
        } else if (arrayj1[i] == "tijera" && arrayj2[i] == "piedra") {
            contadorj2++
        } else if (arrayj1[i] == "tijera" && arrayj2[i] == "papel") {
            contadorj1++;
        } else if (arrayj1[i] == "papel" && arrayj2[i] == "piedra") {
            contadorj1++
        } else if (arrayj1[i] == "papel" && arrayj2[i] == "tijera") {
            contadorj2++;
        }
    }

    alert("Resultado: " + contadorj1 + "(" + j1 + ")" + " vs " + contadorj2 + "(" + j2 + ")");

    if (contadorj1 > contadorj2) {
        alert("Ganador de la ronda: " + j1);
        rondasj1++;
    } else if (contadorj1 < contadorj2) {
        alert("Ganador de la ronda: " + j2);
        rondasj2++;
    } else {
        alert("Empate de la ronda");
    }

    rondas--;
}

alert("Marcador: " + rondasj1 + "(" + j1 + ")" + " vs " + rondasj2 + "(" + j2 + ")");

if (rondasj1 > rondasj2) {
    alert("Ganador: " + j1);
} else if (rondasj1 < rondasj2) {
    alert("Ganador: " + j2);
} else {
    alert("Empate");
}








