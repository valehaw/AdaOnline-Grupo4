// Crear una funcion que devuelva los personajes por ID en base a un rango numerico.


const personajes = getInhabitants();
//console.log(personajes);



const personajeId = (min, max) => {
    const resultado = personajes.filter(personaje => personaje.id >= min && personaje.id <= max);
    return resultado ;
};



console.log(personajeId(10,15));