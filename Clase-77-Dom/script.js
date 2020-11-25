
/********* CLASE 77 ***********/



//Trabajando con atributos
//      getAttribute   -   setAttribute   -   removeAttribute

//Modificando HTML
//      createTextNode   - CreateElement   -   removeChild   -   replaceChild   -   appendChild   -   append   -   prepend

//innerHTML y template strings
const elem = document.getElementById("texto");





//VER CLASE Y PONERME AL DÍA PRIMEROS 27MIN. 





const habitantes = getInhabitants();

//console.log(habitantes);

const primerHabitante = habitantes[0];

const h1 = document.createElement("h1");
const imagen = document.createElement("img");
imagen.setAttribute('src', primerHabitante.thumbnail);


const texto = document.createTextNode(primerHabitante.name);

h1.appendChild(texto);


const ul = document.createElement("ul");
const li = document.createElement("li");

for(data of primerHabitante.professions){
    
    const li = document.createElement("li");
    const texto = document.createTextNode(data);

    li.appendChild(texto);
    ul.appendChild(li);
}

const p = document.createElement("p");
p.appendChild(document.createTextNode("Texto de ejemplo"));


//ESTO es como el que manda el go para que se publique en el HTML, sin esto no funciona.
elem.appendChild(h1);
elem.appendChild(imagen);
elem.appendChild(ul);
elem.removeChild(imagen); // si pongo esto, me borra la imagen. Primero tengo que tener el objeto para poder eliminarlo. 
elem.appendChild(imagen);
elem.replaceChild(p, ul)//se tienen que pasar 2 parametros, el nuevo y el antiguo.


const { name, age } = primerHabitante;

//elem.append("Escribo un texto directamente");

elem.append(`Este personaje se llama ${name} y tiene ${age} años`);
elem.prepend("Escribo un texto directamente al principio")
//elem.innerHTML = `<p>Este personaje se llama ${name} y tiene ${age} años </p>`
//este me reemplaza todo lo anterior y me muestra solo este ultimo. 