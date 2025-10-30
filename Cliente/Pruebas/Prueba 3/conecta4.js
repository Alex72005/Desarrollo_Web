/**
 * MATRIZ QUE IDENTIFICA EL ESTADO DEL TABLERO
 * 0 -> No se ha introducido ninguna ficha
 * 1 -> Jugador 1 ha introducido una ficha
 * 2 -> Jugador 2 ha introducido una ficha
*/
let matriz = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0]
]

let ganador = false;

const filas = 6
const columnas = 7
const tableroHTML = document.querySelector('#tablero-juego')
const controlesColumnas = document.querySelector('#controles-columnas')

let turno = 1
const turnoJug = document.querySelector("#turno")

//FUNCIÓN QUE DIBUJA EL TABLERO EN HTML A PARTIR DE LA MATRIZ
const dibujarTablero = () => {
  // Limpiar el contenido anterior del tablero
  tableroHTML.innerHTML = ''
  controlesColumnas.innerHTML = ''

  // Crear y añadir botones para cada columna
  for (let j = 0; j < columnas; j++) {
    const boton = document.createElement('button')
    boton.classList.add('boton-columna');
    // Añadimos evento click para cada botón pasándole la columna seleccionada que corresponde con el id de cada botón
    boton.addEventListener('click', () => {
      jugar(j)
    })
    boton.textContent = `FICHA`
    controlesColumnas.appendChild(boton)
  }

  // Recorrer las filas y columnas para crear las celdas
  for (let i = 0; i < filas; i++) {
    const filaDiv = document.createElement('div')
    filaDiv.classList.add('fila');
    for (let j = 0; j < columnas; j++) {
      const celdaDiv = document.createElement('div')
      celdaDiv.classList.add('celda')
      if (matriz[i][j] == 1) {
        celdaDiv.classList.add('celdaJ1')
      }
      else if (matriz[i][j] == 2) {
        celdaDiv.classList.add('celdaJ2')
      }
      filaDiv.appendChild(celdaDiv)
    }
    tableroHTML.appendChild(filaDiv)
  }
}

document.addEventListener('DOMContentLoaded', () => {
  // Llama a la función para dibujar el tablero al cargar la página
  dibujarTablero(matriz)
})



/////////////////////////// INICIO PRUEBA PRÁCTICA ///////////////////////////

// FUNCIÓN QUE CONTROLA LA LÓGICA DEL JUEGO
const jugar = (j) => {
  console.log(j)
  let salir = false
  ///////////////////////// ESCRIBIR CÓDIGO AQUÍ /////////////////////////
  for (let i = 5; i >= 0 && !salir; i--) {
    if (matriz[i][j] == 0) {
      matriz[i][j] = turno;
      salir = true
    }
  }

  dibujarTablero();

  comprobarGanador();

  if (ganador) {
    alert("El jugador" + turno + " ha ganado")
  }

  if (turno == 1) {
    turno = 2
    turnoJug.textContent = turno
  } else {
    turno = 1
    turnoJug.textContent = turno
  }
}

/* 
  FUNCIÓN QUE COMPRUEBA SI HAY 4 FICHAS CONECTADAS EN CUALQUIER DIRECCIÓN EN LÍNEA RECTA
  COMBINACIÓN 1: 4 FICHAS CONECTADAS HORIZONTALMENTE
  COMBINACIÓN 2: 4 FICHAS CONECTADAS VERTICALMENTE
*/
const comprobarGanador = () => {
  ganador = false;
  ///////////////////////// ESCRIBIR CÓDIGO AQUÍ /////////////////////////
  //filas
  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < 4; j++) {
      if (matriz[i][j] == turno &&
        matriz[i][j + 1] == turno &&
        matriz[i][j + 2] == turno &&
        matriz[i][j + 3] == turno) {
        ganador = true;
      }
    }
  }

  //columnas
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < columnas; j++) {
      if (matriz[i][j] == turno &&
        matriz[i + 1][j] == turno &&
        matriz[i + 2][j] == turno &&
        matriz[i + 3][j] == turno) {
        ganador = true;
      }
    }
  }

}

/////////////////////////// FIN PRUEBA PRÁCTICA ///////////////////////////