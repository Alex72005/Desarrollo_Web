// Ejercicio 1: cara o cruz. 
// let opcion = "";
// let racha = 0;
// let cantidadrondasseguidas = 0;
// let opcionrandom = 0;
// let opcionsalido = "";

// const getRandomInt = max => Math.floor(Math.random() * max);

// do {
//     opcion = prompt("Introduzca CARA o CRUZ o SALIR: ");
//     opcionrandom = getRandomInt(2);

//     if (opcion != "SALIR") {
//         if (opcionrandom == 0) {
//             alert("La moneda ha salido CARA");
//             opcionsalido = "CARA";
//         } else if (opcionrandom == 1) {
//             alert("La moneda ha salido CRUZ");
//             opcionsalido = "CRUZ";
//         }

//         if (opcion == opcionsalido) {
//             racha++;
//             alert("¡Has acertado! Racha= " + racha + " acierto");
//         } else {
//             cantidadrondasseguidas = racha;
//             racha = 0;
//             alert("¡Has fallado!")
//         }
//     }

// } while (opcion != "SALIR");

// alert("¡Hasta pronto! Cantidad de rondas seguidas de aciertos: " + cantidadrondasseguidas);

// let opcion = "";
// let racha = 0;
// let mejorRacha = 0;
// let cantidadrondasseguidas = 0;
// let opcionrandom = 0;
// let opcionsalido = "";

// const getRandomInt = max => Math.floor(Math.random() * max);

// while (opcion != "SALIR") {
//     opcion = prompt("Introduzca CARA o CRUZ o SALIR: ");

//     if (opcion == "CARA" || opcion == "CRUZ") {
//         opcionrandom = getRandomInt(2);
//         opcionsalido = opcionrandom = 0 ? "CARA" : "CRUZ";
//         alert("Ha salido " + opcionsalido);

//         if (opcion == opcionsalido) {
//             racha++;
//             if (racha > mejorRacha) {
//                 mejorRacha = racha;
//             }
//             alert("¡Has acertado! Racha= " + racha + " acierto");
//         } else {
//             racha = 0;
//             alert("¡Has fallado!")
//         }
//     }
// }

// alert("¡Hasta pronto! Tu mejor racha de aciertos fue: " + mejorRacha + " veces");

// Ejercicio 2.

let oculto = ["X", "X", "X", "X", "X", "X", "X", "X"];
let cartas = ["O", "B", "O", "E", "C", "B", "E", "C"];
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



