const endpoint = "http://localhost:8080/public/api/users"

document.addEventListener('DOMContentLoaded', () => {

})  

document.querySelector('#get').addEventListener('click', () => {
    $.ajax({
        type: 'GET',
        url: endpoint,
        data: {
            id: 1,

        },
        success(response) {
            console.log(response)

            let resultado = document.querySelector('#resultado')

            response.forEach(usuario => {
                console.log(usuario)
                let nodo = document.createElement('div')
                nodo.textContent=usuario.name
                resultado.appendChild(nodo)
            })
        }
    })
})

document.querySelector('#post').addEventListener('click', () => {
    $.ajax({
        type: 'POST',
        url: endpoint,
        data: {
            id: 1,

        },
        success(response) {
            console.log(response)
        }
    })
})

document.querySelector('#put').addEventListener('click', () => {
    $.ajax({
        type: 'PUT',
        url: endpoint,
        data: {
            id: 1,

        },
        success(response) {
            console.log(response)
        }
    })
})

document.querySelector('#delete').addEventListener('click', () => {
    $.ajax({
        type: 'DELETE',
        url: endpoint,
        data: {
            id: 1,

        },
        success(response) {
            console.log(response)
        }
    })
})