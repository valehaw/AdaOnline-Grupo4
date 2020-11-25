// 1 Mostrar en pantalla al/los personajes mas enanos de "Brastlewark"

const personajes = getInhabitants();
//console.log(personajes);


//EJERCICIO CON BUCLE NORMAL:
/*
let elMasBajo = personajes[0];

personajes.forEach((inhabitant) => {
    if(elMasBajo.height > inhabitant.height){
        elMasBajo = inhabitant
    }
});

console.log(elMasBajo)
*/



//EJERCICIO CON DESTRUCTURACIÓN:

let elMasBajo = personajes[0];

personajes.forEach((inhabitant) => {
    const {height: height1} = elMasBajo;
    const {height: height2} = inhabitant
    if(height1 > height2){
        elMasBajo = inhabitant
    }
});

console.log(elMasBajo)




