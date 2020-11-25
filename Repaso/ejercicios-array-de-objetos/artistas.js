/*
const artistas = [
    {
      nombre: 'Ochoa Chang',
      solista: true,
      edad: 33,
      instrumento: 'batería',
      paisNacimiento: 'Mayotte',
      ultimoRecital: {
        pais: 'Vatican City State (Holy See)',
        anio: 2016,
        entradasVendidas: 68197,
        costoEntradas: 2987
      },
      discos: [
        {
          titulo: 'pariatur excepteur dolore',
          canciones: 13,
          anioLanzamiento: 1993,
          copiasVendidas: 20393
        },
        {
          titulo: 'aliquip est esse',
          canciones: 9,
          anioLanzamiento: 2017,
          copiasVendidas: 69303
        },
        {
          titulo: 'reprehenderit est aliquip',
          canciones: 12,
          anioLanzamiento: 2011,
          copiasVendidas: 1861
        },
        {
          titulo: 'do magna irure',
          canciones: 9,
          anioLanzamiento: 2018,
          copiasVendidas: 29126
        },
        {
          titulo: 'proident id amet',
          canciones: 13,
          anioLanzamiento: 2017,
          copiasVendidas: 22989
        },
        {
          titulo: 'cillum velit est',
          canciones: 15,
          anioLanzamiento: 2010,
          copiasVendidas: 17449
        },
        {
          titulo: 'nulla incididunt laborum',
          canciones: 11,
          anioLanzamiento: 2019,
          copiasVendidas: 90743
        },
        {
          titulo: 'commodo sint fugiat',
          canciones: 13,
          anioLanzamiento: 2014,
          copiasVendidas: 70766
        },
        {
          titulo: 'elit adipisicing eu',
          canciones: 8,
          anioLanzamiento: 2006,
          copiasVendidas: 89143
        }
      ],
      genero: 'punk'
    }, 
*/



// EJERCICIO 1:

//1.artistasSolistas, que tome por parámetro un array de artistas y devuelva un array con 
//les artistas que sean solistas


const artistasSolistasConVariables = (artistas) => {
    const solistas = artistas.filter(artista => artista.solista === true)
    return solistas;
} 
//en consola: artistasSolistas(artistas)    y me tira todos los que sí son solistas.


// OTRA FORMA DE ESCRIBIR ESTE CÓDIGO...
const artistasSolistasConReturn = (artistas) => {
    return artistas.filter(artista => artista.solista)
    
} 

// OTRA FORMA DE ESCRIBIR ESTE CÓDIGO...
const artistasSolistasConReturnImplicito = (artistas) => artistas.filter(artista => artista.solista)


/* REVISARRRRRRRRR

//EJERCICIO 2:

//2.artistasPorEdad, que tome un parámetro "edad" y un array de artistas y devuelva un array 
//con les artistas que tengan dicha edad


const artistasPorEdad = (edad) => {
    const edadArtistas = artistas.filter(artista => artista.edad === edad)
    return edadArtistas;
}

console.log(edadArtistas(26));

*/





//EJERCICIO 3:

//3.cantidadDeArtistasPorInstrumento, que tome por parámetro un array de artistas y 
//devuelva un objeto donde cada "instrumento" es una propiedad y su valor la cantidad de artistas 
//que tocan dicho instrumento.



const cantidadDeArtistasPorInstrumento = (artistas) =>{
    return artistas.reduce((acc,artista)=>{

        if(acc[artista.instrumento]){
            acc[artista.instrumento]++;
        }else {
            acc[artista.instrumento] = 1;
        }
        
        return acc;
    },{}); //especifica que es un objeto con esa información
}






//EJERCICIO 4:

//4.cantidadDeArtistasPorGenero, que tome por parámetro un array de artistas y 
//devuelva un objeto donde cada "género" es una propiedad y su valor la cantidad de artistas 
//de dicho género



/*
LO QUE TENEMOS QUE HACER:

1. Preguntar si existe ese genero.
    A. SI existe le sumo 1
    B. NO existe lo creo con valor 1.
*/

/*
EL ACUMULADOR:
Funciona así: 
[15,28,3,4];


const cantidadDeArtistasPorGenero = (artistas) => {
    const generos = artistas.reduce((acc, artista) => {

        //SIN ACUMULADOR:
         // vuelta 1 => 15  28 = 43
         // vuelta 1 => 43  3 = 46
         // vuelta 1 => 46  4 = 50

        //CON ACUMULADOR:
         // vuelta 1 => 30  15 = 45
         // vuelta 2 => 30  28 = 58
         // vuelta 3 => 30  3 = 33

        return acc + artista
    },30)
}
*/

//[punk, rock, rock, punk, pop];
//genero[1]



const cantidadDeArtistasPorGenero = (artistas) =>{
    /*
        vuelta 1 => {} , punk
        vuelta 2 => {punk: 1} , rock
        vuelta 3 => {punk: 1,rock: 1} ,rock
        vuelta 4 => {punk: 1,rock: 2} ,punk
        vuelta 5 => {punk: 2,rock: 2} ,pop
        vuelta 6 => {punk: 2,rock: 2,pop: 1}
    */

    return artistas.reduce((acc,artista)=>{
        console.log("antes",{...acc},artista.genero);

        if(acc[artista.genero]){
            acc[artista.genero]++;
        }else{
            acc[artista.genero]=1;
        }

        console.log("despues",{...acc},artista.genero);
        return acc;
    }, {})

}





//EJERCICIO 5:

//5.artistasConMasDiscosQue, que tome por parámetro "cantidadDeDiscos" y un array de artistas 
//y devuelva un array con les artistas que tiene más de esa cantidad de discos, 
//ordenados de mayor a menor según cantidad de discos

const artistasConMasDiscosQue = (artistas, discos) => {
    return artistas.filter(artista => artista.discos.length > discos).sort((a,b) => b.discos.length - a.discos.length);
    
}
console.log(artistasConMasDiscosQue(artistas, 4))




