// Crear las siguientes funciones con "Arrow functions":
// Mostrar por consola los 100 primeros números pares.
    const numPares = () => {
        for (let i = 0; i <= 200; i++) {
            if (i % 2 == 0) {
                console.log(i);
            }        
        }
    };

    numPares();
// Mostrar la tabla de multiplicar de un número pasado por parámetro.
    const table = (n) => {
        for (let i = 0; i <= 10; i++) {
            console.log(n + "x" + i + " = " + n*i);
        }
    };

    table(5);
// Crear una función `operarArray` que acepte dos parámetros, un array y un callback:
//     - por cada valor del array debe ejecutar la función callback, que recibirá un parámetro y deberá devolver su valor duplicado. 
//     - obtener su resultado
//     - meterlo en el nuevo array
//     - devolver un nuevo array con el resultado de cada una de las llamadas al callback.
// Mostrar el resultado de la función `operarArray`.
    // primera forma: utilizando functions. 
    function operateArray(array, callback) {
        let newArray = [];
        
        for (let i = 0; i < array.length; i++) {
            let result = callback(array[i]);
            newArray.push(result);          
        }

        return newArray;
    }

    // callback: funcion que se la paso por parámetro a otra función. 
    function duplicate(number){
        return number * 2;
    }

    let array = [2, 3, 4, 5, 6];
    console.log(operateArray(array, duplicate));

    // segunda forma: utilizando arrow functions. 
    // const operateArray = (array, callback) => {
    //     let newArray = [];

    //     for (let i = 0; i < array.length; i++) {
    //         let result = callback(array[i]);
    //         newArray.push(result);          
    //     }

    //     return newArray;
    // };

    // const duplicate = (number) => number * 2;

    // let array = [2, 3, 4, 5, 6];
    // console.log(operateArray(array, duplicate));




