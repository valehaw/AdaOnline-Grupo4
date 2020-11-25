
// // Crear una función repetir que tome como argumento un valor valor y un número entero cantidad, y devuelva una array con valor repetido cantidad de veces.




const repetir = (valor, cantidad) => {

    let nuevoArray = [];

    for(i = 1; i <= cantidad; i++)
    nuevoArray = nuevoArray.concat(valor);
    return nuevoArray
}

console.log(repetir("lovelace", 3)); // ['lovelace', 'lovelace', 'lovelace']
console.log(repetir("a", 5)); // ['a', 'a', 'a', 'a', 'a']
console.log(repetir("html", 0)); // []