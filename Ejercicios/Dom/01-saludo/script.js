// Hacer un programa que al iniciarse pida mediante un prompt ingresar un nombre, y una vez ingresado muestre un saludo con el nombre dentro de un h1. El h1 debe estar centrado y tener un tamaño de letra y una tipografía distinta de la que viene por defecto.

const saludo = () => {
    let name = prompt("Hola, Cuál es tu nombre?");

    document.querySelector('.saludo').innerHTML += ` ${name}!`;
}

saludo();