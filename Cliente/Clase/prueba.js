// let id = document.getElementById("hola");
// console.log(id)

let horas = 5
let minutos = 10
let segundos = 20

let calcSegHoras = (h) => h * 3600
let calcMinHoras = (m) => m * 60

console.log(calcSegHoras(horas) + calcMinHoras(minutos) + segundos)