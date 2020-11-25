// Hacer un programa que al iniciarse pregunte mediante prompts por
// - un título
// - una url de una imagen
// - una url a un artículo

// Utilizar esos datos para completar en el html una card que tenga
// - una imagen, con la url de la imagen ingresada
// - un título, con el texto del título ingresado
// - un link que diga Leer más, con la url al artículo ingresado



const titulo = document.getElementById("titulo");
const imagen = document.getElementById("imagen");
const articulo = document.getElementById("articulo");
const tarjeta = document.getElementById("tarjeta");
const verMas = document.getElementById("ver-mas");

tarjeta.style.backgroundColor = '#7f3952';
tarjeta.style.width = "50%";
tarjeta.style.padding = "20px";
tarjeta.style.border = "2px solid black";
tarjeta.style.display = "flex";
tarjeta.style.justifyContent = "center";
tarjeta.style.alignItems = "center";
tarjeta.style.flexDirection = "column";
tarjeta.style.margin = "auto";
tarjeta.style.boxShadow = "5px 5px 10px black";
tarjeta.style.borderRadius = "5px";
tarjeta.style.fontFamily = "helvetica";
titulo.style.fontSize = "50px";
titulo.style.margin = "0";
titulo.style.textAlign = "center";
titulo.style.paddingBottom = "20px";
articulo.style.fontSize = "15px";
articulo.style.textAlign = "justify";
titulo.style.color = "#24051a";
articulo.style.color = "#3f092e";
imagen.style.paddingBottom = "20px";
imagen.style.width = "100%";
verMas.style.color = "#24051a";
verMas.style.fontSize = "12px";


const card = () => {
    let title = prompt('Ingrese un titulo');
    let image = prompt('Ingrese una url de una imagen');
    let article = prompt ('Ingrese una url de un articulo');

    titulo.innerHTML = title;
    imagen.setAttribute('src', image);
    verMas.setAttribute('href', article);
    

    
    
}

card();


// Dar algunos estilos mínimos a la card:
// - centrarla con respecto a la pantalla
// - agregarle un borde
// - agregarle un sombreado
// - cambiarle la tipografía
// - cambiarle los tamaños de fuente
// - cambiarle los colores por defecto