
// Crear una función obtenerMenor que tome como argumento un array de números "numeros" y 
//devuelva el menor de ellos. Ejemplo:

//obtenerNumeroMenor([5, 7, 99, 34, 54, 2, 12]); // 2


var numeros = [5, 7, 99, 34, 54, 2, 12];

var max = Math.max(...numeros) //con este obtienes el número mayor
var min = Math.min(...numeros) //con este obtienes el número menor

//esto es igual a escribir:

// var numeros = [1, 2, 3, 4];
// Math.max.apply(null, numeros) // 4
// Math.min.apply(null, numeros) // 1



console.log(min); //2
console.log(max); //99