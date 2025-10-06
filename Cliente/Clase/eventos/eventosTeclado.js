const inputtexto = document.querySelector("#pruebaText");

inputtexto.addEventListener('keydown', () => {
    console.log('Has presionado una tecla')
})

inputtexto.addEventListener('keyup', () => {
    console.log('Has levantado una tecla')
})

inputtexto.addEventListener('blur', () => {
    console.log("Has salido del input")
})

inputtexto.addEventListener('copy', () => {
    console.log("has copiado un elemento del input")
})

inputtexto.addEventListener('cut', () => {
    console.log("has cortado un elemento del input")
})

inputtexto.addEventListener('paste', () => {
    console.log("has pegado un contenido en el input")
})


/*filtrar utilizas el keyup */