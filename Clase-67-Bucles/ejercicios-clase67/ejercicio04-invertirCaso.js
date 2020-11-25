
//04-InvertirCaso

// Crear una función invertirCaso que tome como argumento un string string y 
//devuelva un string donde cada letra tiene el caso invertido, es decir, cada letra 
//está mayúscula si estaba en minúscula, y viceversa.

//invertirCaso(string);


//FORMA 1 - INTERNET:

// invertirCaso = function invertirCaso(string) {
//     return string.replace(/([a-z]+)|([A-Z]+)/g, function(match, change) {
//         return change ? match.toUpperCase() : match.toLowerCase();
//     });
// }



//FORMA 2 - PROFESOR:

const invertirCaso = (string) => {

    for(let i = 0; i <string.length; i++){
        const char = string.charAt(i);

        if(char === char.toLowerCase()){
            string = string.replace(char, char.toUpperCase());
        } else{
            string = string.replace(char, char.toLowerCase());
        }
    }
    return string;
};

console.log(invertirCaso("JavaScript"));




//EL EJERCICIO ANTERIOR EN OPERACIÓN TERNARIA:

const invertirCasoDos = (string) => {
    for(let i = 0; i <string.length; i++){
        const char = string.charAt(i);

        string = char === char.toLowerCase()
        ? string.replace(char, char.toUpperCase())
        : string.replace(char, char.toLowerCase());
    }
    return string;
};






