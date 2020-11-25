
/**************** EJERCICIO 01 ****************/

// Crear una función multiplicar que tome como argumentos un número multiplicador y 
//un array de números numeros, y que devuelva un array donde cada elemento es el 
//resultado del elemento del primer array (en la misma posición) multiplicado por el número ingresado. 
//Ejemplo:




const multiplicar = (numeroMultiplicador, arrayNumeros) => {
    let resultados = [];
    for(i = 0; i < arrayNumeros.length; i++){
        resultados.push(numeroMultiplicador*arrayNumeros[i]);
    }
    return resultados;
}


console.log(multiplicar(2, [5, 7, 15, 22, 40])); // [10, 14, 30, 44, 80]
console.log(multiplicar(10, [2, 5, 77])); // [20, 50, 770]



