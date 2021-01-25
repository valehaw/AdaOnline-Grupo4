//Qué es un event handler
//Eventos de mouse y teclado
//Callbacks
//El objeto Event
//Propagación de eventos (bublling)
//stopPropagation


// const suma = (value1, value2, callback) => {
//             //esta función va a tomar un valor1, un valor2, y una función

//             callback(value1 + value2)
// }

// suma(10, 12, (resultado) => {
//     console.log(`La suma es ${resultado}`); //La suma es 22
// });



// //otro ejemplo: 

// const personajes = getInhabitants();


// const personas = ["Sabrina", "Matias", "Adrian"];

// //Ejemplo1:

// const filter2 = (array, find, callback) => {
//     for(data of array){
//         if(data.includes(find)) {
//             callback(data); 
//         }
//     }
// }

// filter2(personas, "ia", (persona) => {
//     console.log(persona); //Matias, Adrian
// })


// //Ejemplo2:

// const animales = ["Perro", "Zorro", "Gato"];


// const filter3 = (array, find, callback) => {
//     for(data of array){
//         if(data.includes(find)) {
//             callback(data); 
//         }
//     }
// }

// const fn = (persona) => {
//     console.log(persona);
// }
// filter3(animales, "rro", fn); //Perro, Zorro




// //Ejemplo3: 
// const filter = (array, find, callback) => {

//     for(data of array){
//         if(data.name.includes(find)) callback(data);
//     }
// };

// filter(personajes, 'stle', (personaje) => {
//     console.log(personaje)//Y me aparece la lista de personajes con esas letras en su nombre. 
// })

// //lo que hemos hecho: 
// //Creamos una función filter a la que le pasamos un array de personajes.




// //Ejemplo4: Reutilizando la misma función para filtrar en diferentes casos

// const filter4 = (array, prop, find, callback) => {

//     for(data of array){
//         if(data[prop].includes(find)) {
//             callback(data);
//         }
//     }
// };

// filter4(personajes, "hair_color", "Pink", (personaje) => {
//     console.log(personaje);
// });

// console.log("------------------");

// filter4(personajes, "name", "rome", (personaje) =>{
//     console.log(personaje);
// });





/*********** EVENTOS *************/


const btn = document.querySelector('#btn-enviar');

document.addEventListener('click', () => {
    //console.log("funciona");
}, btn);


//Esto sería esto: 


document.addEventListener('click', (event) => {
    console.log(event);
}, btn); //MouseEvent {isTrusted: true, screenX: 609, screenY: 152, clientX: 18, clientY: 7, …}




//agregar una tabla


const btn2 = document.querySelector("#btn-agregar");
const tabla = document.getElementById("personas");
                       //!!!acá no hace falta el # porque ya estoy especificando que es por id.

const agregar = (name, email) => {
    const tr = document.createElement("tr");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");

    td1.innerHTML = name; 
    td2.innerHTML = email;

    tr.appendChild(td1);
    tr.appendChild(td2);
    tbody = tabla.getElementsByTagName('tbody')[0];
    tbody.appendChild(tr);
}

btn2.addEventListener("click", (e) => {
    agregar("Adrian", "adrian@ada.com");
});//cuando haga click a btn debería ejecutarse esta función agregar. 

//Ahora igual en este ejemplo, estos datos ingresados son hardcodeados.. la idea es que sean dinámicos (siguiente clase).





/******** INGRESO DE DATOS A FORM DE FORMA DINÁMICA **************/ 


const inputName = document.getElementById('control-name');
const inputEmail = document.getElementById('control-email');
//así estoy agarrando los dos elementos del HTML de manera independiente.

// inputName.addEventListener('blur', () => {
//     document.body.style.backgroundColor = 'green';
// });


// inputName.addEventListener('change', () => {
//     console.log('cambiando');
// });


// inputName.addEventListener('input', () => {
//     console.log('cambiando');
// });

// inputName.addEventListener('focus', () => {
//      inputName.style.borderColor = "red";
// });

// inputName.addEventListener('keyup', () => {
//     inputName.style.borderColor = "yellow";
// });

// inputName.addEventListener('keydown', () => {
//     inputName.style.borderColor = "blue";
// });


const formUsers = document.getElementById('form-users');

formUsers.addEventListener('submit', event => {
    event.preventDefault();
    
    const name = inputName.value;
    const email = inputEmail.value;

    agregar(name, email);

    inputName.value = '';
    inputEmail.value = '';
});