
/********** EJERCICIO 1: CREAR UN NAV **************/

/*
<div id="nav">
<ul>
    <li>
        <a href="http://www.ada.com">Inicio</a>
    </li>
    <li>
        <a href="http://www.ada.com">Servicios</a>
    </li>
    <li>
        <a href="http://www.ada.com">Contacto</a>
    </li>
</ul>
</div>
*/

const header = document.getElementById('header');
const nav = document.getElementById('nav-primary');
const ul = document.createElement('ul');

const ROOT = "http://www.ada.com";

const items = [
    {link: "/", text: "Inicio"}, 
    {link: "/servicios", text: "Servicios"}, 
    {link: "/sucursales", text: "Sucursales"}, 
    {link: "/contacto", text: "Contacto"}];


for(let i = 0; i < items.length; i++){

    const li = document.createElement('li');//estos se crean acá y no afuera como el ul, xq estos varían
                                            //segun la cantidad de tabs que vayamos a poner en el nav. 
    const a = document.createElement('a');
    a.setAttribute('href', `${ROOT + items[i].link}`);
    a.innerHTML = items[i].text;

    li.appendChild(a);
    ul.appendChild(li);
}

    nav.appendChild(ul);




// Cuál es la diferencia entre createTextNode e innerHTML?

//createTextNode lo único que permite es crear texto y eso lo que hizo fue crear un elemento en el DOM HTML que podemos agregarlo a otro elemento. Lo que estamos creando cuando usamos el createTextNode es un texto que, a partir de crearlo de esa manera, ya es un nodo que le hacemos appendChild a algo y le vamos metiendo ese texto creado.

//El innerHTML, en cambio, lo que nos permite es meter dentro de un HTML lo que nosotros querramos. O sea, nosotros podríamos agarrar un HTML y meterlo dentro de otro HTML.  El innerHTML es un poquito más permisivo. El innerHTML acepta etiquetas HTML y las interpreta. Si pongo un <p></p> lo toma como un párrafo. En cambio el createTextNode, no. Si le pones una etiqueta lo muestra en el navegador como texto. 






/********** EJERCICIO 2: CREAR UN ARTÍCULO **************/

/*
<article>
          <header>
            <h3>Titulo de la Noticia</h3>
          </header>
            <div class="main">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum esse rem saepe sed? Eius architecto modi quisquam distinctio in, recusandae reiciendis praesentium quam sit voluptatem possimus hic commodi accusantium sapiente.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum esse rem saepe sed? Eius architecto modi quisquam distinctio in, recusandae reiciendis praesentium quam sit voluptatem possimus hic commodi accusantium sapiente.</p>
            </div>
            <footer>
              <div class="autor">Adrian</div>
            </footer>
        
        </article>
*/


const section = document.getElementById('noticias');

const article = document.createElement('article');
const articleHeader = document.createElement('header');
const articleMain = document.createElement('div');
const articleFooter = document.createElement('footer');
const articleH3 = document.createElement('h3');
const articleAuthor = document.createElement('div');
const articleP = document.createElement('p');
const articleText = document.createTextNode('Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum esse rem saepe sed? Eius architecto modi quisquam distinctio in, recusandae reiciendis praesentium quam sit voluptatem possimus hic commodi accusantium sapiente.');


articleH3.innerHTML = "Título de la noticia";
articleHeader.appendChild(articleH3);

article.appendChild(articleHeader);

articleP.appendChild(articleText);

articleMain.appendChild(articleP);
articleMain.setAttribute('class', 'main');

section.appendChild(article);

article.appendChild(articleMain);

articleAuthor.innerHTML = "Adrian";
articleAuthor.setAttribute('class', 'author');

articleFooter.appendChild(articleAuthor);

article.appendChild(articleFooter);





