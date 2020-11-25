
/**************** EJERCICIO 02 ****************/

// Crear una función filtrarPorLongitud que tome como argumentos un número longitud y 
//un array de strings palabras y que devuelva un array con las palabras que tengan una cantidad 
//de letras mayor a longitud. Ejemplo:



const filtrarPorLongitud = (numeroLongitud, arrayPalabras) => {
    let longitudMayor = [];

    for(i = 0; i < arrayPalabras.length; i++){
        if(arrayPalabras[i].length > numeroLongitud){
            longitudMayor.push(arrayPalabras[i]);
        }
    }
    return longitudMayor;
  }


  console.log(filtrarPorLongitud(4, [
    "dia",
    "remolacha",
    "azul",
    "sorpresa",
    "te",
    "verde",
  ])); // ['remolacha', 'sorpresa', 'verde']