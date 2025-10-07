let categorias = {
    dwec: [],
    dwes: [],
    empleo: [],
    personal: []
};
//Agregar una tarea
document.querySelector("#btnAgregar").addEventListener("click", () => {
    let categoria = document.querySelector("#categoriaAgregar").value;
    let tarea = document.querySelector("#tareaInput").value;

    if (tarea != "") {
        categorias[categoria].push(tarea);
        alert("Tarea agregada correctamente");
        document.querySelector("#tareaInput").value = "";
    } else {
        alert("No escribio nada");
    }
});
//Borrar una tarea
document.querySelector("#btnBorrar").addEventListener("click", () => {
    let categoria = document.querySelector("#categoriaBorrar").value;
    let posicion = parseInt(document.querySelector("#numeroBorrar").value);

    if (posicion > 0 && posicion <= categorias[categoria].length) {
        categorias[categoria].splice(posicion - 1, 1);
        alert("Tarea borrada correctamente");
        document.querySelector("#numeroBorrar").value = "";
    } else {
        alert("El numero de la tarea introducido no es valido");
    }
});
//Listar tareas
document.querySelector("#btnListar").addEventListener("click", () => {
    let texto = "";

    for (let c in categorias) {
        texto += c.toUpperCase() + "\n";
        let tareas = categorias[c];
        if (tareas.length != 0) {
            for (let i = 0; i < tareas.length; i++) {
                texto += (i + 1) + ". " + tareas[i] + "\n";
            }
        }
        texto += "\n";
    }

    document.querySelector("#lista").textContent = texto;
});