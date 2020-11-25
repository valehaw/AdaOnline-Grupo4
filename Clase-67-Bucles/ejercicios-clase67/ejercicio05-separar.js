//05-separar

// Crear una función separar que tome como argumento un string con emojis de perros y gatos y 
//devuelva un string con los perros agrupados por un lado y los gatos por otro. Ejemplo:

//separar(perrosYGatos);

const perrosYGatos = "PGPGGPPPGPG"
// P = emoji de perro
// G = emoji de gato

let perros = ''
let gatos = ''

const separar = (string) => {
    let primerLetra = string[0] // X

    for(let letra of string) {
        if(letra === primerLetra){
            perros += letra
        }else{
            gatos += letra
        }
    }

    return perros+gatos
}

console.log(perrosYGatos);
console.log(separar(perrosYGatos));
