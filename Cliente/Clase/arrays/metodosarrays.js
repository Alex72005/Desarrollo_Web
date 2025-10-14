const meses = ['Enero', 'Febrero', 'Marzo', 'Abril']
const meses2 = ['Mayo', 'Junio', 'Julio', 'Agosto']

const producto1 = {
    nombre: "Impresora 3D", 
    precio: 250
}

const producto2 = {
    nombre: "Ninebot", 
    precio: 500
}

const producto3 = {
    nombre: "Cata ATX RGB", 
    precio: 30
}

const carrito = [
    producto1, 
    producto2, 
    producto3
]

for (let p of carrito) {
    console.log(p.nombre)
}

carrito.forEach((producto,i) => {
    console.log(producto.nombre)
})

//some para un array asociativo saber si existe en el array devuelve un booleano
const existe = carrito.some(producto=>producto.precio==30)

const indice = carrito.findIndex(producto => producto.precio==30)

res = carrito.filter(producto => producto.precio > 50)
