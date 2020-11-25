
// Hacer un programa que al iniciarse pregunte mediante un prompt por un temperatura, y con ese dato modifique un h1 en el html, de forma tal que diga, por ejemplo, Temperatura actual: 20°. Cambiar el color del h1 dependiendo de la temperatura ingresada, siguiendo las siguientes reglas:

// Temperatura	Color
// Menor a 0°	                        => Azul
// Mayor o igual a 0° y menor a 15°	    => Celeste
// Mayor o igual a 15° y menor a 25°	=> Verde
// Mayor o igual a 25° y menor a 30°	=> Amarillo
// Mayor o igual a 30° y menor a 35°	=> Naranja
// Mayor a 35°                          => Rojo


const temperatura = Number(prompt("Cuál es la temperatura actual?"));
const documento = document.body;
const h1 = document.createElement('h1');
h1.textContent = `Temperatura actual: ${temperatura}ª`;

if(temperatura < 0 ){
    h1.style.color= "blue";
} 
if(temperatura >= 0 && temperatura < 15){
    h1.style.color = "lightblue";
}
if(temperatura >= 15 && temperatura < 25){
    h1.style.color = "green";
}
if(temperatura >= 25 && temperatura < 30){
    h1.style.color = "yellow";
}
if(temperatura >= 30 && temperatura < 35){
    h1.style.color = "orange";
} else {
    h1.style.color = "red";
}