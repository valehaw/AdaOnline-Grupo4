// En un documento html hacer un post de una red social que contenga:

// un h3 con la usuaria
// un p con un lorem ipsum
// 3 spans de reacciones con un ícono (por ejemplo Me gusta, Me encanta, Me asombra) más un número con la cantidad
// Dar estilos para que

// la tipografía sea distinta a la default
// los spans estén en línea, separados con márgenes, tengan un color de fondo gris suave y un border radius
// Hacer un programa que al iniciarse pregunte mediante tres prompts por la cantidad de cada una de las reacciones y actualice los valores de los spans correspondientes



   
const user = document.getElementById("user");
const body = document.getElementById("body");
const uno = document.getElementById("uno");
const dos = document.getElementById("dos");
const tres = document.getElementById("tres");


 const hacerPost = () => {
     const elements = [uno, dos, tres];
     let usuario = prompt("Ingrese su nombre");
     let reactUno = prompt("Ingrese un valor",0);
     let reactDos = prompt("Ingrese un segundo valor",0);
     let reactTres = prompt("Ingrese un tercer valor",0);
     
     user.innerHTML = usuario;
     body.style.fontFamily = "Helvetica";
     dos.style.margin = "0 20px";
     for (element of elements) {
         element.style.border = "2px solid blue";
         element.style.borderRadius = "10px";
         element.style.padding = "5px 20px";
         element.style.background = "#c2c2c2";
         element.style.color = "blue";
         element.style.cursor = "pointer";
     }
     uno.textContent += ` ${reactUno}`;
     dos.textContent += ` ${reactDos}`;
     tres.textContent += ` ${reactTres}`; 
    }

    hacerPost();







