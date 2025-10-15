const imagenes = document.querySelectorAll("img")
const resultado = document.querySelector("#resultado")
const getRandomInt = max => Math.floor(Math.random() * max);
let racha = 0;
let rachaMax = 0;

imagenes.forEach(img => {
    img.addEventListener("click", () => {
        let aleatoria = getRandomInt(2);
        let resultadoJuego = "";
        let nuevaImg = document.createElement("img")

        if (aleatoria == 0) {
            resultadoJuego = "cara"
            nuevaImg.src = "img/cara.png"
        } else if (aleatoria == 1) {
            resultadoJuego = "cruz"
            nuevaImg.src = "img/cruz.png"
        }

        nuevaImg.classList.add("girar");

        resultado.innerHTML = "";
        resultado.appendChild(nuevaImg);

        if (img.id == resultadoJuego) {
            racha += 1;
            if (racha > rachaMax) {
                rachaMax = racha;
            }
        } else {
            racha = 0;
        }

        document.querySelector("#racha").textContent = "Racha actual: " + racha;
        document.querySelector("#rachaMax").textContent = "Racha máxima: " + rachaMax;
    })
})