const turnoJug = document.querySelector("#turno");
const celdas = document.querySelectorAll(".celda");
const btnReiniciar = document.querySelector("#reiniciar"); // reiniciar marcador
const btnOtra = document.querySelector("#otra"); // reiniciar partida
const marcadorJ1 = document.querySelector("#j1");
const marcadorJ2 = document.querySelector("#j2");

let matriz = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
];
let turno = "X";
let mj1 = 0;
let mj2 = 0;

// ---- EVENTOS DE CELDAS ----
celdas.forEach(c => {
    c.addEventListener('click', () => {
        const [fila, columna] = buscarPosicion(c);

        if (matriz[fila][columna] == "") {
            matriz[fila][columna] = turno;
            pintarMatriz(matriz);

            const posicionesGanadoras = comprobarGanador(matriz);
            if (posicionesGanadoras) {
                // Colorea las tres casillas ganadoras
                posicionesGanadoras.forEach(([fila, col]) => {
                    const indice = fila * 3 + col;
                    celdas[indice].style.backgroundColor = "limegreen";
                });

                setTimeout(() => {
                    alert("Ha ganado " + turno + " !");
                    if (turno == "X") {
                        mj1++;
                        marcadorJ1.textContent = "J1: " + mj1;
                    } else {
                        mj2++;
                        marcadorJ2.textContent = "J2: " + mj2;
                    }
                }, 100);
            } else if (comprobarMatrizLlena(matriz)) {
                setTimeout(() => {
                    alert("¡Empate!");
                }, 100);
            } else {
                turno = (turno == "X") ? "O" : "X";
                turnoJug.textContent = "Turno de: " + turno;
            }
        }
    });
});

// ---- BOTONES ----
btnReiniciar.addEventListener('click', () => {
    mj1 = 0;
    mj2 = 0;
    marcadorJ1.textContent = "J1: 0";
    marcadorJ2.textContent = "J2: 0";
    nuevaPartida();
});

btnOtra.addEventListener('click', () => {
    nuevaPartida();
});

// ---- FUNCIONES ----
const pintarMatriz = (m) => {
    let cont = 0;
    for (let i = 0; i < m.length; i++) {
        for (let j = 0; j < m[i].length; j++) {
            celdas[cont].textContent = m[i][j];
            cont++;
        }
    }
};

const buscarPosicion = (celda) => {
    let posicionFila = -1;
    let posicionColumna = -1;
    let contador = 0;

    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            if (celdas[contador] == celda) {
                posicionFila = i;
                posicionColumna = j;
            }
            contador++;
        }
    }
    return [posicionFila, posicionColumna];
};

// ---- COMPROBAR GANADOR ----
const comprobarGanador = (m) => {
    let posiciones = [];

    for (let i = 0; i < m.length; i++) {
        for (let j = 0; j < m[i].length; j++) {
            if (m[i][j] != "") {

                // Fila
                if (j + 2 < m[i].length &&
                    m[i][j] == m[i][j + 1] &&
                    m[i][j] == m[i][j + 2]) {
                    posiciones = [[i, j], [i, j + 1], [i, j + 2]];
                    return posiciones;
                }

                // Columna
                if (i + 2 < m.length &&
                    m[i][j] == m[i + 1][j] &&
                    m[i][j] == m[i + 2][j]) {
                    posiciones = [[i, j], [i + 1, j], [i + 2, j]];
                    return posiciones;
                }

                // Diagonal principal
                if (i + 2 < m.length &&
                    j + 2 < m[i].length &&
                    m[i][j] == m[i + 1][j + 1] &&
                    m[i][j] == m[i + 2][j + 2]) {
                    posiciones = [[i, j], [i + 1, j + 1], [i + 2, j + 2]];
                    return posiciones;
                }

                // Diagonal inversa
                if (i + 2 < m.length &&
                    j - 2 >= 0 &&
                    m[i][j] == m[i + 1][j - 1] &&
                    m[i][j] == m[i + 2][j - 2]) {
                    posiciones = [[i, j], [i + 1, j - 1], [i + 2, j - 2]];
                    return posiciones;
                }
            }
        }
    }
    return null;
};

const comprobarMatrizLlena = (m) => {
    for (let i = 0; i < m.length; i++) {
        for (let j = 0; j < m[i].length; j++) {
            if (m[i][j] == "") {
                return false;
            }
        }
    }
    return true;
};

const nuevaPartida = () => {
    matriz = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
    ];
    pintarMatriz(matriz);
    turno = "X";
    turnoJug.textContent = "Turno de: " + turno;

    // Restaurar color original
    celdas.forEach(c => c.style.backgroundColor = "rgb(23, 37, 84)"); // azul original
};
