
// // Crear una función capitalizarPalabras tome como argumento un string string y devuelva un string donde cada palabra está capitalizada (con la primera letra ma´yuscula). Dejar las demás letras como están.



const capitalizarPalabras = (string) => {
    const palabra = string.split(' '); //Si las comillas las pongo juntas, separa x letra. Con 
                                      //espacio, por string.

    for(i = 0; i < palabra.length; i++){
        palabra[i] = palabra[i][0].toUpperCase()  + palabra[i].substr(1);
    }

    return palabra.join(' ');//con espacio sino me une todas las palabrasjuntas. <--así 
}

/*Entonces:
Primero, divido la oración por strings independientes. Ej: "Esto" "es" "un" "título"
Una vez hecho esto, le indico que el primer caracter [0] tiene que ser mayúscula. 
Si yo lo dejo ahí (luego del toUpperCase) la consola me muestra SOLO las primeras letras en mayúscula.
Ej: E E U T
Esto lo que hace es cortarme la primera letra y reemplazarla por la mayuscula. Si al substr(2) le pusiera 2, me mostraría esto: Eto E U Ttulo. Reemplaza la mayúsucula pero me elimina el segundo caracter.
Lo mismo pasaria si pongo 3, 4 o 5. Al ponerle 1. Me quita el primer caracter y lo reemplaza por la mayúscula.
*/



console.log(capitalizarPalabras("Esto es un título")); // 'Esto Es Un Título'
console.log(capitalizarPalabras("había una vez")); // 'Había Una Vez'
console.log(capitalizarPalabras("OMG")); // 'OMG'