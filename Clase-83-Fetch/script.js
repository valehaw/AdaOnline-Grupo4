// /************* REST API ****************/

// /************* ENDPOINT ****************/
// //Seria una ruta creada por backend para ser utilizada y acceder a datos. 

// //Una aplicación necesita una base de datos. 
// //ej: app de películas.
// //Esta va a tener una tabla de peliculas, tabla de generos, tabla de usuarios y contraseñas, etc. Y se van a encargar de crear el codigo capaz de interactuar con esa base de datos y los va a convertir en un JSON. 
// //Ej: Netflix. Backend y Frontend --> estos le preguntan a back, qué necesito para traerme las peliculas que estuvo viendo un usuario. Como frontend necesito saber la API y cuál es el ENDPOINT que me devuelve a mi las peliculas que está viendo el usuario y aún no las termino. Entonces, el backend tiene un ENDPOINT llamado "current movie", por ejemplo. el backend es el que conoce cómo está formada la base de datos. Frontend no tiene ni idea. El backend devuelve los datos necesarios para que el frontend los pueda presentar. Entonces back arma el endpoint para que front arme todo lindo con los datos. 

// //Es una url que crearon los chicos de backend para que los de frontend obtengan la info de la API. 


// //app.get("http://api.mi-api-movies.com/movies");  Esto sería un ENDPOINT



// //////// APIIIIIII

// //https://themoviedb.org
// //https://image.tmdb.org/t/p/w500/

// //https://www.themoviedb.org/

 


// /************* GET ****************/


// /************* FRONTEND ****************/

// const base = "https://api.themoviedb.org/3/";
// const baseImg = "https://image.tmdb.org/t/p/w500/";      
// const apiKey = "0bce2b3619ac231ad6ce364b6d8015ab";
// let page = 1;



// const table = document.createElement('table');
// const thead = document.createElement('thead');
// const tbody = document.createElement('tbody');
// const pageNumber = document.getElementById('page');

// //const peliculaSeleccionada = document.createElement('div');


// table.setAttribute('border', '1');

// table.appendChild(thead);
// table.appendChild(tbody);


// //document.body.appendChild(peliculaSeleccionada);
// document.body.appendChild(table);


// const getMovies = (page) => {

//     pageNumber.innerHTML = page; 

//     tbody.innerHTML = '';
//     thead.innerHTML = '';

//     fetch(`${base}movie/top_rated?api_key=${apiKey}&page=${page}`)
//         .then(response => {
//             return response.json();
//         })

//         .then(data => {
//             const { results } = data

//             /****** Esto es para poner la CABECERA *******/

//             const trHead = document.createElement('tr');
            
//             for(prop in results[0]){
//                 th = document.createElement('th');
//                 th.innerHTML = prop;
//                 trHead.appendChild(th);
//             }

//             /****** FIN *******/

//             thead.appendChild(trHead);


            
//             for(movie of results) {
//                 const tr = document.createElement('tr');

//                 //todo esto sería la generación del tr
//                 for (prop in movie)  {
//                     const td = document.createElement('td');


//                 /****** Esto es para poner las IMÁGENES *******/

//                 if(prop === 'backdrop_path' || prop === 'poster_path'){
//                     const img = document.createElement('img');
//                     img.src = baseImg + movie[prop];
//                     img.setAttribute('height', 100);
//                     td.appendChild(img);
//                 }else {
//                     td.innerHTML = movie[prop];
//                 }
                
//                 tr.appendChild(td);
//             }

//             /****** FIN *******/

//             tbody.appendChild(tr);
//         }
//   });
    
// }

// getMovies(page);
// const btnSiguiente = document.getElementById('btn-siguiente');
// const btnAnterior = document.getElementById('btn-anterior');


// btnSiguiente.addEventListener('click', () => {
//     page++;
//     getMovies(page);
// })

// btnAnterior.addEventListener('click', () => {
//     page--;
//     getMovies(page);
//     })










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
    








