

// JSON.parse


// const url = "http://url-de-la-api.com";

// fetch(url + '/users')
//     .then(response => {
//         return response.json() //retorna una nueva promesa y podíamos volver a acceder al then siguiente.
//     }).then(data => {
//         console.log(data); //resultado de forma amigable de esos datos que me devolvió la API.
//     });



/*********** POST **************/
// JSON.stringify


const urlBase = "http://server.formacion-continua-web-api.development.magnetico.com.ar";

const tag = {
    id: 4,
    isActive: true,
    name: "Tag de prueba",
};

let tagToJsonString = JSON.stringify({ tag : tag });
// console.log({ tag : tag });
// console.log(tagToJsonString);

const string = '{"user": {"name": "Adrián"}}';

let stringToJSONToObject = JSON.parse(string);

// console.log(stringToJSONToObject.user);
// console.log(stringToJSONToObject.user.name);

 


const personaje = {
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

  let personajeToJsonString = JSON.stringify(personaje);
  console.log(personaje);
  console.log(personajeToJsonString);



  const personaje2 = '{"id":0,"name":"Tobus Quickwhistle","thumbnail":"http://www.publicdomainpictures.net/pictures/10000/nahled/thinking-monkey-11282237747K8xB.jpg","age":306,"weight":39.065952,"height":107.75835,"hair_color":"Pink","professions":["Metalworker","Woodcarver","Stonecarver"," Tinker","Tailor","Potter"],"friends":["Cogwitz Chillwidget","Tinadette Chillbuster"]}';

  let stringToJSONToObject2 = JSON.parse(personaje2);
 
    console.log(stringToJSONToObject2.name); //Tobus Quickwhistle





//POSTMAN le pasamos una URL, los parámetros, enviar y listo. POSTMAN cuando queremos una petición POST, permite setearle un body, donde vamos a especificar los datos que queremos enviar. Como estamos trabajando con objetos de JS y JSON, vamos a enviarle un objeto convertido a string. 