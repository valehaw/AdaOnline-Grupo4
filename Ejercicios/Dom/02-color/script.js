// Hacer un programa que al iniciarse pida mediante un prompt ingresar un color en sistema hexadecimal, y una vez ingresado ponga el color de fondo del body con dicho color.


const pedirColor = () => {
    let color = prompt("De qué color te gustaría ver el fondo de la página. (Tiene que ser hexadecimal, por ejemplo: #FAFAFA)");
    const  background = document.querySelector('.fondo');
    background.style.backgroundColor = color;
}

pedirColor()