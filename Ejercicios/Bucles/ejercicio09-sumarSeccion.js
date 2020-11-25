  
// // Crear una función sumarSeccion que tome como argumento un array de números enteros array, un número entero comienzo y un número entero cantidad, y que devuelva la suma de cantidad de números de array empezando a contar desde el ítem con índice comienzo.


const sumarSeccion = (array, comienzo, cantidad) => {
    for(i = 0; i < array.length; i++){
        const resultado = array.length[comienzo] + array.length[cantidad];
        return resultado
    }
}



console.log(sumarSeccion([2, 2, 4, 3, 10, 20, 5], 0, 3)); // 8 (2 + 2 + 4 = 8)
console.log(sumarSeccion([2, 2, 4, 3, 10, 20, 5], 2, 4)); // 37 (4 + 3 + 10 + 20 = 37)
console.log(sumarSeccion([2, 2, 4, 3, 10, 20, 5], 4, 1)); // 10