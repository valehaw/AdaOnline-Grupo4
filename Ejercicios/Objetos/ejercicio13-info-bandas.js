// Tenemos un objeto en la variable banda, con datos de una banda (nombre, año de lanzamiento, si sigue en actividad, una foto, los integrantes y una lista de sus discos).
// Queremos mostrar:
// La duración total del disco (suma de la duración de cada canción)
// La duración promedio por canción (un promedio entre todas las duraciones)

const banda = {
    name: "Led Zeppelin",
    year: 1968,
    active: false,
    thumbnail:
      "http://townsquare.media/site/295/files/2014/10/Led-Zeppelin1.jpg?w=980&q=75",
    members: ["Jimmy Page", "Robert Plant", "John Paul Jones", "John Bonham"],
    albums: [
      {
        name: "Led Zeppelin",
        year: 1969,
        songs: ["Good Times, Bad Times", "Communication Breakdown"],
        duration: 2691,
      },
      {
        name: "Led Zeppelin II",
        year: 1969,
        songs: ["Whole Lotta Love", "Moby Dick", "Ramble On"],
        duration: 2502,
      },
      {
        name: "Led Zeppelin III",
        year: 1970,
        songs: ["Immigrant Song"],
        duration: 2489,
      },
      {
        name: "Led Zeppelin IV",
        year: 1971,
        songs: ["Rock and Roll", "Stairway to Heaven", "Four Sticks"],
        duration: 2559,
      },
    ],
  };
  
  // completa el codigo para lograr el resultado esperado
  



  ///// RESULTADO
  console.log("Led Zeppelin se fundó en el año " + banda.year);
  console.log("Tiene " + banda.members.length + " miembros: " + banda.members);
  console.log("Tiene en total " + banda.albums.length + " discos"); 
  
  //console.log(
    //"Tiene en total " +
      //banda.albums.songs.length +
      //" canciones entre todos los discos."
  //); 
  
  //AUN NO ME SALE

  //console.log("En promedio, cada canción dura " + promedioDuracion + " segundos"); //FALTA
 

  
  // ESPERADO
  // Led Zeppelin se fundó en el año 1968
  // Tiene 4 miembros: Jimmy Page, Robert Plant, John Paul Jones, John Bonham
  // Tiene en total 4 discos
  // Tiene en total 10 canciones entre todos los discos.
  // En promedio, cada canción dura 1137.888888888889 segundos