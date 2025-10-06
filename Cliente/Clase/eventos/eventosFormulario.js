const formulario = document.querySelector("#formulario1")

formulario.addEventListener('submit', (e) => {
    e.preventDefault() //para el submit
    console.log('Holaa')
    window.location.href = "/login"
})

