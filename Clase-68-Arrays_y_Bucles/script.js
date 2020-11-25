const personas = [
    "Adrian",
    "Sabrina",
    "Agostina",
    ["Mailen", "Valentina", "Ludmila"],
    "Belen",
];

//console.log(personas[3][1]); //poniendo así llama a "Valentina"

const numeros = [1,2,3,4];

let a = 5;
let b = a;

a = 7;

// console.log(a); //7
// console.log(b); //5


/* EJEMPLO: */

//const personas2 = personas;

//personas2.push("Emilce");

// console.log(personas); 
// console.log(personas2); 

//cuando igualamos un array a otro array es como que estamos haciendo UNA REFERENCIA. NO! sobreescribe. 
//cada vez que modifico personas2 estoy modificando personas.


//Entonces: 

const personas2 = personas.slice();

personas2.push("Emilce");

console.log(personas); 
console.log(personas2); 