let contador1 = 0;
let contador2 = 0;

for (let index = 1; index < 6; index++) {
    let jugador1 = prompt("Turno jugador 1")
    let jugador2 = prompt("Turno jugador 2")

    if (jugador1 == jugador2) {
        alert("Empate")
    } else if (jugador1 == "piedra" && jugador2 == "tijera") {
        alert("El jugador 1 gana")
        contador1++;
    } else if (jugador1 == "piedra" && jugador2 == "papel") {
        alert("El jugador 2 gana")
        contador2++;
    } else if (jugador1 == "tijera" && jugador2 == "piedra") {
        alert("El jugador 2 gana")
        contador2++
    } else if (jugador1 == "tijera" && jugador2 == "papel") {
        alert("El jugador 1 gana")
        contador1++;
    } else if (jugador1 == "papel" && jugador2 == "piedra") {
        alert("El jugador 2 gana")
        contador2++
    } else if (jugador1 == "papel" && jugador2 == "tijera") {
        alert("El jugador 1 gana")
        contador1++;
    }
}

console.log("Partidas ganadas del jugador 1: " + contador1)
console.log("Partidas ganadas del jugador 2: " + contador2)
