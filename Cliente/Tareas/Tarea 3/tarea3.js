let categorias = {
    dwec: [],
    dwes: [],
    empleo: [],
    personal: []
};

let option = "";

while (option != "4") {
    option = prompt(
        "1. Agregar Tarea \n" +
        "2. Borrar Tarea \n" +
        "3. Listar Tareas \n" +
        "4. Salir"
    );

    switch (option) {
        case "1":
            let elegirCategoriaAñadir = prompt("Eliga la categoria entre estas: dwec, dwes, empleo, personal");
            if (categorias[elegirCategoriaAñadir] != undefined) {
                let tarea = prompt("Escriba la nueva tarea");
                if (tarea != "") {
                    categorias[elegirCategoriaAñadir].push(tarea);
                    alert("Tarea agregada correctamente");
                } else {
                    alert("No escribio ninguna tarea");
                }
            } else {
                alert("La categoria introducida no existe");
            }

            if (confirm("¿Quieres agregar otra tarea?")) {
                option = "1";
            }
            break;

        case "2":
            let elegirCategoriaBorrar = prompt("Eliga la categoria entre estas: dwec, dwes, empleo, personal");
            if (categorias[elegirCategoriaBorrar] != undefined) {
                let todasTareas = categorias[elegirCategoriaBorrar];
                if (todasTareas.length != 0) {
                    let tareas = "Tareas de " + elegirCategoriaBorrar + ":\n";
                    for (let i = 0; i < todasTareas.length; i++) {
                        tareas += (i + 1) + ". " + todasTareas[i] + ":\n";
                    }
                } else {
                    alert("No hay tareas en la categoria elegida");
                }

                let posicion = parseInt(prompt(tareas) + "Digame el numero de la tarea que desee borrar") - 1;
                if (posicion >= 0 && posicion < todasTareas.length) {
                    todasTareas.splice(posicion, 1);
                    alert("Tarea borrada");
                } else {
                    alert("El numero de la tarea no es valido");
                }
            } else {
                alert("La categoria introducida no existe");
            }

            if (confirm("¿Quieres borrar otra tarea?")) {
                option = "2";
            }
            break;

        case "3":
            let texto = "Lista Tareas \n";
            for (let c in categorias) {
                texto += c + "\n";
                let tareas = categorias[c];
                if (tareas.length != 0) {
                    for (let i = 0; i < tareas.length; i++) {
                        texto += "- " + tareas[i] + "\n"; 
                    }
                }
            }

            alert(texto);
            break;

        case "4":
            alert("Adios");
            break;

        default:
            break;
    }
}