// let primeraCarta = document.querySelector("#c1")
// console.log(primeraCarta.src);
const c1 = document.querySelector("#c1");
const baseUrl = "http://localhost:8080/";

c1.addEventListener("click", () => {
    if (c1.src == baseUrl + "2.png") {
        c1.src = "3.png"
    } else {
        c1.src = "2.png"
    }
});

const c2 = document.querySelector("#c2");

c2.addEventListener("click", () => {
    c2.classList.add("hidden");
    const c2_1 = document.querySelector("#c2_1");
    c2_1.classList.remove("hidden");

});

//crear elemento html desde js.
const boton_crear = document.querySelector("#btn_crear");
boton_crear.addEventListener("click", () => {
    let nuevaCarta = document.createElement("img");
    nuevaCarta.src = "2.png";
    nuevaCarta.id = "nueva_carta";

    const carta3 = document.querySelector("#cartas");
    carta3.appendChild(nuevaCarta);
});

