// 3 Crear una funcion que devuelva una lista de los habitantes de "Brastlewark" por el color de pelo.


const personajes = getInhabitants();
//console.log(personajes);


const habitantes = (color) => {
    const colorPelo = personajes.filter(personaje => personaje.hair_color = color);
    return colorPelo;
}

console.log(habitantes("MORADO"));