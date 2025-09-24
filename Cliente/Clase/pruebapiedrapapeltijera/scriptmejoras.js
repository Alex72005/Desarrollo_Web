let j1 = prompt("Dime el nombre del jugador 1");
let j2 = prompt("Dime el nombre del jugador 2");

let rondas = prompt("Dime el numero de rondas que quieras jugar");
while (isNaN(rondas) || rondas <= 0) {
    rondas = parseInt(prompt("Error, introduce un número válido de rondas"));
}

let rondasj1 = 0;
let rondasj2 = 0;
let jugadasposibles = ["piedra", "papel", "tijera"];

while (rondas > 0) {

    let jugadasj1 = prompt("Dime tus jugadas(separadas por un espacio) " + j1);
    let jugadasj2 = prompt("Dime tus jugadas(separadas por un espacio) " + j2);

    let contadorj1 = 0;
    let contadorj2 = 0;

    let arrayj1 = jugadasj1.split(" ");
    let arrayj2 = jugadasj2.split(" ");

    //Valido que ambos jugadores hayan hecho el mismo número de jugadas. 
    let rondavalida = true;
    if (arrayj1.length !== arrayj2.length) {
        alert("Error, los dos jugadores tienen que hacer el mismo número de jugadas");
        rondavalida = false;
    }

    if (rondavalida) {
        for (let i = 0; i < arrayj1.length; i++) {
            //Valido las jugadas que sean piedra papel o tijera. 
            let jugada1 = arrayj1[i].toLowerCase();
            let jugada2 = arrayj2[i].toLowerCase();
            let jugadavalida = true;

            if (jugadasposibles.indexOf(jugada1) === -1 || jugadasposibles.indexOf(jugada2) === -1) {
                alert("Error, alguna jugada no es válida");
                jugadavalida = false;
            }

            if (jugadavalida) {
                if (jugada1 == "piedra" && jugada2 == "tijera") {
                    contadorj1++;
                } else if (jugada1 == "piedra" && jugada2 == "papel") {
                    contadorj2++;
                } else if (jugada1 == "tijera" && jugada2 == "piedra") {
                    contadorj2++
                } else if (jugada1 == "tijera" && jugada2 == "papel") {
                    contadorj1++;
                } else if (jugada1 == "papel" && jugada2 == "piedra") {
                    contadorj1++
                } else if (jugada1 == "papel" && jugada2 == "tijera") {
                    contadorj2++;
                }
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