// Crear una barra de progreso con dos divs anidados. Hacer un programa que al iniciarse pregunte mediante un prompt por un porcentaje de progreso y modifique el ancho de la barra de progreso respectivamente (si se ingresa 75 la barra de progreso tiene que ocupar el 75% de la barra contenedora)



const modificarBarraProgreso = () => {
    const progreso  = Number(prompt('Indique porcentaje de progreso'));
    const div1 = document.createElement('div');
    const div2 = document.createElement('div');
    div1.appendChild(div2);
    console.log(div1)


    div2.style.height = '25px';
    
    div2.style.backgroundColor = 'blue';

    div1.style.width = '500px';
    div1.style.backgroundColor = 'red';

    document.body.appendChild(div1);

    for(i=0; i<`${progreso}`; i++){
        setTimeout(() => {
            div2.style.width = `${i}%` 
        }, 100);
        
    }

   // document.innerHTML = `La barra de progreso actualmente me ocupa un ${progreso}% del ancho de la barra contenedora`;
}

modificarBarraProgreso();


/*
let contenedor = document.getElementById("contenedor");
let barra = document.getElementById("barra");
const progressBar = () => {
    let valor = parseInt(prompt("Ingrese un porcentaje"));
    contenedor.style.width = "500px";
    contenedor.style.height = "50px";
    contenedor.style.background = "#c2c2c2";
    barra.style.width = `${valor}%`;
    barra.style.height = "50px";
    barra.style.background = "red";
    barra.innerHTML = `${valor}%`;
}
// progressBar();

*/