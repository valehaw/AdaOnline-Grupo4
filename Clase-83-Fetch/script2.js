

// /************* EJERCICIO API MOVIE VERSIÓN 2 ****************/

const base = "https://api.themoviedb.org/3/";
const baseImg = "https://image.tmdb.org/t/p/w500/";      
const apiKey = "0bce2b3619ac231ad6ce364b6d8015ab";
let page = 1;



const table = document.createElement('table');
const thead = document.createElement('thead');
const tbody = document.createElement('tbody');
const pageNumber = document.getElementById('page');


table.setAttribute('border', '1');

table.appendChild(thead);
table.appendChild(tbody);

document.body.appendChild(table);


const getMovies = (page) => {

    pageNumber.innerHTML = page; 

    tbody.innerHTML = '';
    thead.innerHTML = '';

    fetch(`${base}movie/top_rated?api_key=${apiKey}&page=${page}`)
        .then(response => {
            return response.json();
        })

        .then(data => {
            const { results } = data

            /****** Esto es para poner la CABECERA *******/

            const trHead = document.createElement('tr');
            
            for(prop in results[0]){
                th = document.createElement('th');
                th.innerHTML = prop;
                trHead.appendChild(th);
            }

            /****** FIN *******/

            thead.appendChild(trHead);


            
            for(movie of results) {
                const tr = document.createElement('tr');

                //todo esto sería la generación del tr
                for (prop in movie)  {
                    const td = document.createElement('td');


                /****** Esto es para poner las IMÁGENES *******/

                if(prop === 'backdrop_path' || prop === 'poster_path'){
                    const img = document.createElement('img');
                    img.src = baseImg + movie[prop];
                    img.setAttribute('height', 100);
                    td.appendChild(img);
                }else {
                    td.innerHTML = movie[prop];
                }
                
                tr.appendChild(td);
            }

            /****** FIN *******/

            tbody.appendChild(tr);
        }
  });
    
}

getMovies(page);
const btnSiguiente = document.getElementById('btn-siguiente');
const btnAnterior = document.getElementById('btn-anterior');


btnSiguiente.addEventListener('click', () => {
    page++;
    getMovies(page);
})

btnAnterior.addEventListener('click', () => {
    page--;
    getMovies(page);
    })








