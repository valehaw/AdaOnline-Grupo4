

//propiedades y valores 

const user = {
    name: "Adrian",
    lastName: "Solimano",
    age: 37,
    phone: "123 123 123",
};


//Leer, agregar, modificar y eliminar propiedades

//console.log(user.name)

user.address = "Una dirección 1234";
user.address = "Otra dirección 1234";

delete user.name

console.log(user)



//Chequeando propiedades: operador IN

//console.log("name" in user);


//Notación de puntos y corchetes

// console.log(user.name);
// console.log(user["name"]);


//Accediendo a propiedades mediante variables

const formControls = ["name", "email", "phone", "password"];

for(let value of formControls){
    user[value];
}


const key = "lastName";

//console.log(user[key])   




//Propiedades computadas (vs literales)

//user ["txt" + "Descriptivo"] = "Esto es un texto";

//user[3 + 4] = "Esto es un texto";

//console.log(user); // me devuelve "7": E Esto es un texto". 


user["txt"] = "Esto es un texto";

user["txt" + 4]= "Otro valor";

user.txt4 = "Cambio de texto";

console.log(user); //txt: "Esto es un texto"   txt4: "Cambio de texto"






//for... in 


const inhabitants = getInhabitants();

for(const inhabitant of inhabitants){
    for(const prop in inhabitant){
        console.log(prop, inhabitant[prop]); //el for of es para arrays / for in para objetos. 
    }
}