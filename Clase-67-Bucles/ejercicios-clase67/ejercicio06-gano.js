//06-gano

// Crear una función gano que tome como argumento un array tragamonedas con 5 símbolos y 
//devuelva true si son iguales y false sino. Si el array tiene más de 5 símbolos, 
//sólo debe comparar los 5 primeros.

//gano(["X", "X", "X", "O", "O"]); // false
//gano(["O", "O", "O", "O", "O"]); // true
//gano(["O", "O", "O", "O", "O", "X"]); // true

// Aca pueden usar x, o, -

const gano = (array) => {
    
    for(let i = 0; i < 4; i++){
        
        if(array[i] !== array[i + 1]) return false;
    }
    return true
};



console.log(gano(["X", "X", "X", "O", "O"])); // false
console.log(gano(["O", "O", "O", "O", "O"])); // true
console.log(gano(["O", "O", "O", "O", "O", "X"])); // true
