const esPrimo = num => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
};

const primos = [];
let numero = 2;

while (primos.length < 100) {
    if (esPrimo(numero)) {
        primos.push(numero);
    }
    numero++;
}

console.log(primos);

