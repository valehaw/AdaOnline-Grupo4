
//03-Contiene

// Crear una función contiene que tome como argumentos un número numero y un array de números numeros 
//y devuelva true o false dependiendo de si dicho numero se encuentra en el array de numeros. 
//Ejemplo:

//contiene(numero, numeros);

 const numerosEjercicio03 = [1, 2, 3, 4, 5];

const contiene = (numero) => {
    const ejercicio03 = numerosEjercicio03.includes(numero);
    return ejercicio03
}

console.log(contiene(3,4))//true
console.log(contiene(3,8))//true
console.log(contiene(0,9))//false
