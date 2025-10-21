const numeros = [1,2,3,4,5]
const numeros2 = new Array(1,2,3,4,5)
const numeros3 = [1,2,3,4,5, [1,2,3,4,5]]

console.log(numeros);
//console.table(numeros2)
//console.table(numeros3)

//Recorrer un array secuencial
for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i])
}

//Agregar algo al final
numeros.push(100)

const carrito = []

const producto1 = {
    nombre: "Impresora 3D", 
    precio:250
}

carrito.push(producto1)
console.table(carrito)

//Agregar al inicio de un array
carrito.unshift(producto1);

//Eliminar el ultimo elemento
carrito.pop()
//Eliminar el primer elemento
carrito.shift()
//Eliminar cualquier elemento de un array
carrito.splice(0)
//Actualizar primero cual quieres actualizar, segundo cuantos quieres borrar, el tercero que quieres poner 
