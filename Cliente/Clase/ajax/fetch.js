const endpoint = 'http://localhost:8080/public/api/users'

document.querySelector("#getFETCH").addEventListener('click', () => {
    fetch(endpoint)
        .then(response => response.json())
        .then(datos => console.log(datos))
})

document.querySelector("#postFETCH").addEventListener('click', () => {
    const datos = {
        name: "Alejandro",
        email: "asm0126@alu.medac.es",
        password: "password"
    }
    fetch(endpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
    })
        .then(response => response.json())
        .then(datos => console.log(datos))
})

// document.querySelector("#putFETCH").addEventListener('click', () => {
//     const datos = {
//         id: 1,
//         name: "Pablo",
//         email: "pmp05055@alu.medac.es",
//         password: "password"
//     }
//     fetch(endpoint, {
//         method: 'PUT',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(datos)
//     })
//         .then(response => response.json())
//         .then(datos => console.log(datos))
// })

document.querySelector("#putFETCH").addEventListener('click', () => {
    const datos = {
        name: "Miguel",
        email: "mrm00181@alu.medac.es",
        password: "password"
    }

    const id = 3

    fetch(endpoint+"/edit/"+id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
    })
        .then(response => response.json())
        .then(datos => console.log(datos))
})


// document.querySelector("#deleteFETCH").addEventListener('click', () => {
//     const datos = {
//         id: 10,
//     }
//     fetch(endpoint, {
//         method: 'DELETE',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(datos)
//     })
//         .then(response => response.json())
//         .then(datos => console.log(datos))
// })

document.querySelector("#deleteFETCH").addEventListener('click', () => {
    const id = 8;

    fetch(endpoint+"/delete/"+id, {
        method: 'DELETE'
    })
        .then(response => response.json())
        .then(datos => console.log(datos))
})