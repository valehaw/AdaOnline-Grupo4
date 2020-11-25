
//02-sumar

// Crear una función sumar que tome como argumento un array de números "numeros"
//y devuelva la suma de ellos. Ejemplo:

//sumarNumeros([5, 7, 10, 12, 24]); // 58


//CON REDUCE:

let sumarNumeros = [5, 7, 10, 12, 24];

let total = sumarNumeros.reduce((a, b) => a + b, 0);

console.log(total); // 58


//CON FOR OF:

let totalDos = 0,
sumarNumerosDos = [5, 7, 10, 12, 24];

for(let i of sumarNumerosDos) totalDos += i;

//console.log(totalDos); //58


