
//WINDOW

//console.log(window.outerHeight);



//GETELEMENTBYID

const elem = document.getElementById('noticias');
//console.log(elem)

const btn = document.getElementById('btn');




//QUERYSELECTOR

const noticia = document.querySelector('.noticia');
//console.log(noticia); //<article class="noticia bg-primary important"><h2>Esto es una sección 1</h2></article>

//aca me da uno solo. osea, me muestra lo que está en el HTML




//QUERYSELECTORALL

const noticias = document.querySelectorAll('.noticia');
console.log(noticias); //NodeList(3) [article.noticia.bg-primary.important, article.noticia, article.noticia.bg-primary]

//ESTO ME DA UNA LISTA DE NODOS (NODELIST ESTO ES UN ARRAY) Con esto lo que se puede hacer es iterar, por ejemplo.. esto permite hacerle algo con JS al html. 

//Al tenerlo ya como array, ya lo puedo trabajar!!

//acá me da varios y por eso puedo iterar.. si no fuera una colección no podría. 


// noticias.forEach((noti, i) => {
//     noti.innerHTML = "<h2>Esto es otra cosa</h2>"
// });



//CLASSLIST
    //add
    //remove
    //toggle
    //contains

const agregarClass = () => {

    for(let i=0; i < noticias.length; i++){
        if(!noticias[i].classList.contains('important')){
        noticias[i].classList.add('nuevo-class');
    }
    }


// noticias.forEach((noti, i) => {
//     noti.classList.add('nuevo-class');
// });
 
}


const noticia3 = document.getElementById('titulo-noticia');
noticia3.classList.remove('valornuevo');

const bodyClassToggle = () => {
document.body.classList.toggle('on');
}



document.addEventListener('click', function() {
    agregarClass();
    //bodyClassToggle();
}, btn);




//style


noticia3.style.color = "blue";
noticia3.style.fontSize = "50px";

//desde acá yo puedo agregar un color de fondo, borde, etc


//getComputedStyle

//me da un listado de todos los valores de estilos que tiene el DOM.
//no es muy comun pero nos da un listado de las propiedades de este eleemnto. 

console.log(window.getComputedStyle(noticia3)).fontSize;