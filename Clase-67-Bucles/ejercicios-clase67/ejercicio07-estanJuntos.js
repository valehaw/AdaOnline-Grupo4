
//07-estanJuntos

// Crear una función estanJuntos que tome como argumento un array de strings personajes, y 
//devuelva true si Sam se encuentra al lado de Frodo, ya sea antes o después, o false sino. 
//Ejemplo:





let personajes = []

const estanJuntos = (personajes) => {
    for(i = 0; i < personajes.length; i++){
        return true
    }
}


console.log(estanJuntos(["Sam", "Frodo", "Legolas"])); //true
console.log(estanJuntos(["Aragorn", "Frodo", "Frodo"])); //true
console.log(estanJuntos(["Sam", "Orco", "Frodo"])); //true