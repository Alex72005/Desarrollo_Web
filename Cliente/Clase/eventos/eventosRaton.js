/*
DOMContentLoaded cuando carge todo el html.
*/

const boton = document.querySelector("#prueba");
//Eventos raton
//Evento click 
boton.addEventListener('click', () => {
    console.log('Has hecho click en nav');
});

//Evento mouseenter: posicionar el raton encima del elemento 
boton.addEventListener('mouseenter', () => {
    console.log("Has puesto el raton encima del boton");
    boton.style.backgroundColor = 'red';
});

//Evento mouseout: cuando deje de posicionar el elemento
boton.addEventListener('mouseout', () => {
    console.log('Has salido del boton');
});

//Evento mousedown: 
//no detecta el intro el evento click si
boton.addEventListener('mousedown', () => {
    console.log('Has clickado');
});

//mouseup: cuando levantas 
boton.addEventListener('mouseup', () => {
    console.log('Has levantado');
});

//dblclick: doble click
boton.addEventListener('dblclick', () => {
    console.log('Has hecho doble click');
});

//