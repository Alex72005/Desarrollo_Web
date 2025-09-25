//Ejercicio 1: cara o cruz. 
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


//Ejercicio 2. 

let oculto = ["X", "X", "X", "X", "X", "X", "X", "X"];
let cartas = ["O", "B", "O", "E", "C", "B", "E", "C"];

while (ocultos ) {
    alert("Cartas: " + oculto);

    let cartausuario = prompt("Introduzca dos cartas a relevar: ");

    let arrayDeCadenas = cartausuario.split(",");

    for (let i = 0; i < oculto.length; i++) {
        oculto[i] = arrayDeCadenas[i];
    }
}



