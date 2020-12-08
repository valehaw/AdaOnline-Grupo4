
/********* CLASE 77 -DOM ***********/









//innerHTML


const elem = document.getElementById("texto");

// console.log(elem.getAttribute("data-ref")); //ref
// console.log(elem);//<div id=​"texto" data-ref=​"ref">​</div>​
// console.log(elem.getAttribute("id")); //texto




/***** TRABAJANDO CON ATRIBUTOS: ******/
//getAttribute  -  setAttribute  -  removeAttribute


//Ahora si yo hago esto: 


// console.log(elem); //<div id=​"texto" data-ref=​"ref">​</div>​

// elem.setAttribute('class', 'bg-primary'); 

// console.log(elem); //<div id=​"texto" data-ref=​"ref" class="bg-primary">​</div>​

// console.log(elem.getAttribute("data-ref")); //ref

// elem.removeAttribute('data-ref'); 

// console.log(elem); //<div id=​"texto" class="bg-primary">​</div>​



/***** MODIFICANDO EL HTML: ******/
//createTextNode - CreateElement - removeChild - replaceChild - appendChild - append - prepend



//El appendChild crea un nodo dentro de un elemento.

// const h1 = document.createElement("h1"); //Este me crea un nuevo elemento en el DOM.

// const texto = document.createTextNode("Lorem ipsum dolor sit amet");

// h1.appendChild(texto);

// elem.appendChild(h1); //ahí creamos un nuevo elemento "h1" DENTRO del div, porque el div era una variable elem... y le hemos dicho que es un appendChild de elem. 




//Ahora trabajando con un array de objetos INHABITANTS.JS: 

const habitantes = getInhabitants();
console.log(habitantes);


const primerHabitante = habitantes[0];
console.log(primerHabitante); //{id: 0, name: "Tobus Quickwhistle", thumbnail: "http://www.publicdomainpictures.net/pictures/10000/nahled/thinking-monkey-11282237747K8xB.jpg", age: 306, weight: 39.065952, …}


const h1 = document.createElement("h1");

const imagen = document.createElement("img");
imagen.setAttribute('src', primerHabitante.thumbnail)

const texto = document.createTextNode(primerHabitante.name);

h1.appendChild(texto);


//para crear una lista:
const ul = document.createElement("ul");


//hay que hacer un bucle porque vamos a crear una celda por la cantidad de profesiones, y como esto puede variar.. se necesita un for. 

for(data of primerHabitante.professions){
    //console.log(data);//nos tira en la consola las profesiones... Ahora hay que volverlo una lista.
    
    const li = document.createElement("li");
    //con esto creo la lista, como esto depende de la cantidad de elementos, se crea en el FOR.
    const texto = document.createTextNode(data);
    //luego, hay que volver una variable la info que va a ir dentro de la lista. 
    li.appendChild(texto);
    //acá le decimos que este texto va dentro del li. 
    ul.appendChild(li);
}



const p = document.createElement('p');
p.appendChild(document.createTextNode("Texto de ejemplo")); //esta es como una forma rápida. En lugar de guardarlo en una variable, lo pasamos directamente. 



elem.appendChild(h1);

//con esto lo que hice fue sacar el nombre del primer objeto del inhabitants-short.js y lo volví un h1. 

elem.appendChild(imagen);

elem.appendChild(ul);

elem.removeChild(imagen); //Si queremos eliminar algun elemento que aún no lo tenemos identificado en js, tenemos que llamarlo (crear una variable con ese elemento) y luego poner "removeChild"

elem.appendChild(imagen);

elem.replaceChild(p, ul);//el elemento que va, el elemento que va a ser reemplazado. 




//APPEND: 

//elem.append("Escribo un texto directamente"); //acá lo hace directamente.. y acá se puede agregar una imagen.
//elem.prepend("Escribo un texto directamente al principio")//escribe un texto al principio del elemento. 



//********* TEMPLATE STRING **********/


elem.append(`Este personaje se llama ${primerHabitante.name} y tiene ${primerHabitante.age} años.`);//Esto vendría a ser un TEMPLATE STRING y con esto se puede escribir dentro del string, datos a nuestras variables. 



//Para que quede más lindo, se puede usar DESTRUCTURACIÓN: 


const { name, age } = primerHabitante;

elem.append(`Este personaje se llama ${name} y tiene ${age} años.`);





//********* innerHTML **********/

elem.innerHTML = `<p>Este personaje se llama ${name} y tiene ${age} años </p>`
//este me reemplaza todo lo anterior y me muestra solo este ultimo. 



