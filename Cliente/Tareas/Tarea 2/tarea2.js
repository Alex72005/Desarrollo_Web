function Candidato(experiencia, tecnologias, localizacion, salario) {
    this.experiencia = experiencia;
    this.tecnologias = tecnologias;
    this.localizacion = localizacion;
    this.salario = salario;
}

function Oferta(experiencia, tecnologias, localizacion, salario) {
    this.experiencia = experiencia;
    this.tecnologias = tecnologias;
    this.localizacion = localizacion;
    this.salario = salario;
}

function esValido(candidato, oferta) {
    //tiene igual o más años de experiencia que la oferta
    if (candidato.experiencia < oferta.experiencia) {
        return false;
    }

    //las tecnologías que conoce son los que contiene la oferta (puede conocer más, pero no afecta en nada)
    for (let tec of oferta.tecnologias) {
        if (!candidato.tecnologias.includes(tec)) {
            return false;
        }
    }

    //su localización está incluida dentro de las localizaciones posibles de la oferta
    let ubicacionValida = false;

    for (let loc of candidato.localizacion) {
        if (oferta.localizacion.includes(loc)) {
            ubicacionValida = true;
        }
    }

    if (!ubicacionValida) {
        return false;
    }

    //su salario pretendido es igual o menor a la de la oferta
    if (candidato.salario > oferta.salario) {
        return false;
    }

    return true;
}

//Ejemplo 
let candidato = new Candidato(1, ["JavaScript", "HTML"], ["Madrid"], 30000);
let oferta = new Oferta(0, ["JavaScript"], ["Madrid", "Málaga"], 24000);

console.log(esValido(candidato, oferta));