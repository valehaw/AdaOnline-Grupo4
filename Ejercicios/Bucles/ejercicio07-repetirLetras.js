// // Crear una función repetirLetras que tome como argumento un string palabra y un número entero cantidad, y devuelva una string donde cada letra de palabra esté repetida cantidad de veces.



const repetirLetras= (palabra, cantidad) => {
  var palabra = Array.prototype.map.call(palabra, function(caracter) {
    var cadaLetra = '';
    while (cadaLetra.length < cantidad) {
      cadaLetra += caracter;
    }
    return cadaLetra;
  }).join('');
  return palabra;
}





console.log(repetirLetras("hola", 2)); // 'hhoollaa'
console.log(repetirLetras("ada", 3)); // 'aaadddaaa'
console.log(repetirLetras("ah!", 5)); // 'aaaaahhhhh!!!!!'
console.log(repetirLetras("basta", 1)); // 'basta'