const celdas = document.querySelectorAll(".celda")

const matriz = [
    [3, 5, 6],
    [7, 1, 2],
    [8, 4, 0]
]

document.addEventListener('DOMContentLoaded', () => {
    pintarMatriz(matriz)
})

const pintarMatriz = (m) => {
    let cont = 0
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            celdas[cont].textContent = matriz[i][j]
            cont++
        }
    }
}

const desplazarCelda = (m, celda) => {
    let posicionFilaCero = -1
    let posicionColumnaCero = -1
    let posicionFilaCeldaSeleccionada = -1
    let posicionColumnaCeldaSeleccionada = -1

    for (let i = 0; i < m.length; i++) {
        for (let j = 0; j < m[i].length; j++) {
            if (m[i][j] == 0) {
                posicionFilaCero = i
                posicionColumnaCero = j

            } else if (m[i][j] == celda) {
                posicionFilaCeldaSeleccionada = i
                posicionColumnaCeldaSeleccionada = j
            }
        }
    }

    m[posicionFilaCero][posicionColumnaCero] = celda
    m[posicionFilaCeldaSeleccionada][posicionColumnaCeldaSeleccionada] = 0

}

const puedeDesplazar = (m, celda) => {
    let posicionFilaCero = -1
    let posicionColumnaCero = -1
    let posicionFilaCeldaSeleccionada = -1
    let posicionColumnaCeldaSeleccionada = -1

    for (let i = 0; i < m.length; i++) {
        for (let j = 0; j < m[i].length; j++) {
            if (m[i][j] == 0) {
                posicionFilaCero = i
                posicionColumnaCero = j

            } else if (m[i][j] == celda) {
                posicionFilaCeldaSeleccionada = i
                posicionColumnaCeldaSeleccionada = j
            }
        }
    }

    let validacion = false;

    if (((posicionFilaCero == posicionFilaCeldaSeleccionada) && Math.abs(posicionColumnaCero - posicionColumnaCeldaSeleccionada) == 1) ||
        ((posicionColumnaCero == posicionColumnaCeldaSeleccionada) && Math.abs(posicionFilaCero - posicionFilaCeldaSeleccionada) == 1)) {
        validacion = true
    }

    return validacion
}

const comprobarResultado = (m) => {
    let cont = 1
    let orden = true

    for (let i = 0; i < m.length; i++) {
        for (let j = 0; j < m[i].length; j++) {
            if (!(i == m.length - 1 && j == m[i].length - 1)) {
                if (m[i][j] != cont) {
                    orden = false;
                }
                cont++
            }
        }
    }

    return orden
}

celdas.forEach(celda => {
    celda.addEventListener('click', () => {
        let celdaSeleccionada = celda.textContent
        if (puedeDesplazar(matriz, celdaSeleccionada)) {
            desplazarCelda(matriz, celdaSeleccionada)
            pintarMatriz(matriz)
            if (comprobarResultado(matriz)) {
                setTimeout(() => {
                    alert("HOLA")

                }, 100)
            }

        }
    })
})