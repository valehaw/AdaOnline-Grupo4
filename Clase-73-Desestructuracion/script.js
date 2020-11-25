const inhabitants = {
  id: 0,
  name: "Tobus Quickwhistle",
  thumbnail:
    "http://www.publicdomainpictures.net/pictures/10000/nahled/thinking-monkey-11282237747K8xB.jpg",
  age: 306,
  weight: 39.065952,
  height: 107.75835,
  hair_color: "Pink",
  professions: [
    "Metalworker",
    "Woodcarver",
    "Stonecarver",
    " Tinker",
    "Tailor",
    "Potter",
  ],
  family: {
    couple: "Milli Wrongratchet",
    childs: ["Malbert Chillwidget", "Ecki Quickpower"],
  },
  friends: ["Cogwitz Chillwidget", "Tinadette Chillbuster"],
};


  //ASIGNACIÓN POR DESTRUCTURACIÓN

//************ CON ARRAY **************:

  const array = ["Sabrina", "Matias", "Adrián"];

  const [profe1, profe2, profe3] = array;


  console.log(profe1)//Sabrina
  


/////// OTRO EJEMPLO ///////: 

/*
  //Si escribo: 
  const [, , profe1]= array;

  //Entonces me da:
  console.log(profe1)//Adrián
*/

//*************** CON OBJETOS ***************:

  const person = {
    name: "Adrian", 
    lastname2: "Solimano", 
    email: "adrian@ada.com"
  }

  const {...person2} = person;
  const {lastname2} = person;
  console.log(person2) //{name: "Adrian", lastname: "Solimano", email: "adrian@ada.com"}
  console.log(person.lastname2)//Solimano

 /////// Ejemplo 2 /////////: 

  const personDos = {
    name: "Adrian", 
    lastname: "Solimano", 
    email: "adrian@ada.com"
  }

  const {lastname} = personDos;
  
  console.log(lastname)//Solimano


////////// Ejemplo 3 ///////////: 

const personTres = {
  nameDos: "Adrian", 
  lastnameDos: "Solimano", 
  emailDos: "adrian@ada.com"
}


const {nameDos, lastnameDos, emailDos} = personTres;

console.log(personTres)//{nameDos: "Adrian", lastnameDos: "Solimano", emailDos: "adrian@ada.com"}



////////// OTRO EJEMPLO: ///////////

const personA = {
  nameA: "Adrian", 
  lastnameA: "Solimano", 
  emailA: "adrian@ada.com"
}

//ESCRIBIR ESTO:    
  //const nameA = person.name
  //const lastnameA = person.lastname
  //const emailA = person.email 


//ES IGUAL A ESCRIBIR ESTO: 
const {nameA, lastnameA, emailA} = personA





///////// Ejemplo 4: ///////////

const personCuatro = {
  name: "Adrian", 
  lastname: "Solimano", 
  email: "adrian@ada.com"
}

const {name, ...datosResto} = personCuatro;

console.log(datosResto)//{lastnameDos: "Solimano", emailDos: "adrian@ada.com"}






//CAMBIANDO EL NOMBRE DE VARIABLES DESTRUCTURADAS


////////// Ejemplo 1: ///////////

const inhabitant = 
    {
      id: 0,
      name: "Tobus Quickwhistle",
      thumbnail:
        "http://www.publicdomainpictures.net/pictures/10000/nahled/thinking-monkey-11282237747K8xB.jpg",
      age: 306,
      weight: 39.065952,
      height: 107.75835,
      hair_color: "Pink",
      professions: [
        "Metalworker",
        "Woodcarver",
        "Stonecarver",
        " Tinker",
        "Tailor",
        "Potter",
      ],
      friends: ["Cogwitz Chillwidget", "Tinadette Chillbuster"],
    };
  



const {age:edades} = inhabitants;

console.log(edades)//306

let age = 20; 

const {age: edad, friends} = inhabitants;
console.log(age);




///////// Ejemplo 2: ///////////

const inhabitantDos = 
    {
      id: 0,
      name: "Tobus Quickwhistle",
      thumbnail:
        "http://www.publicdomainpictures.net/pictures/10000/nahled/thinking-monkey-11282237747K8xB.jpg",
      age: 306,
      weight: 39.065952,
      height: 107.75835,
      hair_color: "Pink",
      professions: [
        "Metalworker",
        "Woodcarver",
        "Stonecarver",
        " Tinker",
        "Tailor",
        "Potter",
      ],
      friends: ["Cogwitz Chillwidget", "Tinadette Chillbuster"],
    };


const {age:edad2, friends:amigos} = inhabitantDos;

console.log (edad2, amigos)//306  ["Cogwitz Chillwidget", "Tinadette Chillbuster"]


//////////// Ejemplo 3: ////////////

//****ACCEDIENDO A UN  ARRAY QUE ESTÁ DENTRO DE UN OBJETO QUE ESTÁ DENTRO DE OTRO OBJETO:***********

const inhabitantTres = 
    {
      id: 0,
      name: "Tobus Quickwhistle",
      thumbnail:
        "http://www.publicdomainpictures.net/pictures/10000/nahled/thinking-monkey-11282237747K8xB.jpg",
      age: 306,
      weight: 39.065952,
      height: 107.75835,
      hair_color: "Pink",
      professions: [
          "Metalworker",
          "Woodcarver",
          "Stonecarver",
          " Tinker",
          "Tailor",
          "Potter",
        ],
      family: {
          couple: "Milli Wrongratchet",
          childs: ["Malbert Chillwidget", "Ecki Quickpower"],
        },
      friends: ["Cogwitz Chillwidget", "Tinadette Chillbuster"],
    };


const {
  family,
  age: edad3,
  family: { childs },
} = inhabitantTres;

console.log(inhabitantTres.family.childs);






//////////// Otro ejemplo: ///////////

const inhabitantCinco = 
    {
      id: 0,
      name: "Tobus Quickwhistle",
      thumbnail:
        "http://www.publicdomainpictures.net/pictures/10000/nahled/thinking-monkey-11282237747K8xB.jpg",
      age: 306,
      weight: 39.065952,
      height: 107.75835,
      hair_color: "Pink",
      professions: [
        "Metalworker",
        "Woodcarver",
        "Stonecarver",
        " Tinker",
        "Tailor",
        "Potter",
      ],
      friends: ["Cogwitz Chillwidget", "Tinadette Chillbuster"],
    };



const mostrarNombre = ({ name }) => {
  console.log(name);
};

mostrarNombre(inhabitantCinco); //Tobus Quickwhistle



//////// Otro ejemplo 2: ////////

const inhabitantSeis = 
    {
      id: 0,
      name: "Tobus Quickwhistle",
      thumbnail:
        "http://www.publicdomainpictures.net/pictures/10000/nahled/thinking-monkey-11282237747K8xB.jpg",
      age: 306,
      weight: 39.065952,
      height: 107.75835,
      hair_color: "Pink",
      professions: [
        "Metalworker",
        "Woodcarver",
        "Stonecarver",
        " Tinker",
        "Tailor",
        "Potter",
      ],
      friends: ["Cogwitz Chillwidget", "Tinadette Chillbuster"],
    };

    const calcularVolumen = ({ height, weight }) => {
      console.log(height * weight);
    }

    calcularVolumen(inhabitantSeis) //4209.6825286992





