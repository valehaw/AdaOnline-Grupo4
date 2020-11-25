/*************EJERCICIO 01 ****************/

//01. Crear una función puedeVerPelicula que tome como argumentos un número edad y
//un booleano tieneAutorizacion, y devuelva true si la persona está habilitada para ver 
//la película o false si no. Sólo puede ver la película si: tiene 15 años o más, 
//o tiene autorización de sus padres.


const puedeVerPelicula = (edad, tieneAutorizacion) => {
    if(edad >= 15 || tieneAutorizacion){
        return true;
    } else {
        return false;
    }

}
// console.log(puedeVerPelicula(12, false)); 
// console.log(puedeVerPelicula(12, true)); 
// console.log(puedeVerPelicula(16, false));
// console.log(puedeVerPelicula(18, true)); 




/*************EJERCICIO 02 ****************/

//02. Crear una función estaEnRango que tome como argumentos tres números, un valor, 
//un número minimo y un número maximo, y devuelva true si el valor se encuentra entre 
//los números minimo y maximo o false si no (si el valor es igual a uno de los extremos se 
//considera que está dentro del rango)



const estaEnRango = (valor, numMin, numMax) => {
    if(valor >= numMin && valor <= numMax){
    return true
     
    } else {
        return false
    } 
} 

/*
console.log(estaEnRango(3, 1, 10));  // true
console.log(estaEnRango(1, 1, 10));  // true
console.log(estaEnRango(10, 1, 10)); // true
console.log(estaEnRango(12, 1, 10)); // false
console.log(estaEnRango(-3, 1, 10));  // false
*/


//OPERADOR TERNARIO: 
/*
const estaEnRango = (valor, numMin, numMax) => {
    let estaEnRango = (valor >= numMin && valor <= numMax) ? true : false;
    return estaEnRango
}

console.log(estaEnRango(3, 1, 10));  // true
console.log(estaEnRango(1, 1, 10));  // true
console.log(estaEnRango(10, 1, 10)); // true
console.log(estaEnRango(12, 1, 10)); // false
console.log(estaEnRango(-3, 1, 10));  // false
*/



/*************EJERCICIO 03 ****************/

// 03. Crear una función puedeAvanzar que tome como argumento un string con el color del semáforo y 
// devuelva true si puede avanzar o false si no. Si no se ingresa un color válido, debe devolver un 
// string que diga: Error: color de semáforo inválido


//FORMA 1:
/*
const puedeAvanzar = (colorSemaforo) => {
    if(colorSemaforo == "verde"){
        return true
    }else if(colorSemaforo == "amarillo" || colorSemaforo == "rojo"){
        return false
    }else {
        console.log("Error: color de semáforo inválido")
    }
}

console.log(puedeAvanzar('verde'));     // true
console.log(puedeAvanzar('amarillo'));  // false
console.log(puedeAvanzar('rojo'));      // false
console.log(puedeAvanzar('lila'));      // 'Error: color de semáforo inválido'
*/

//FORMA 2:

const puedeAvanzar = (colorSemaforo) => {
    switch(colorSemaforo){
        case "verde":
            console.log(true);
            break;
        case "amarillo":
            console.log(false);
            break;
        case "rojo":
            console.log(false);
            break;
        default:
            console.log("Error: color de semáforo inválido")
            break;
    }
}

// console.log(puedeAvanzar('verde'));     // true
// console.log(puedeAvanzar('amarillo'));  // false
// console.log(puedeAvanzar('rojo'));      // false
// console.log(puedeAvanzar('lila'));      // 'Error: color de semáforo inválido'




/*************EJERCICIO 04 ****************/

//04. Crear una función esVocal que tome como argumento un string letra y devuelva true 
//si letra es una vocal o false si no lo es.


//FORMA 1:
/*
const esVocal = (str) => /[aeiou]/g.test(str);

console.log(esVocal('a')); // true
console.log(esVocal('n')); // false
console.log(esVocal('e')); // true
console.log(esVocal('f')); // false
console.log(esVocal('u')); // true
console.log(esVocal('i')); // true
*/

//FORMA 2:
/*
const esVocal = (str) => {    
    const vocales = ["a", "e", "i", "o", "u"];    
    if(vocales.includes(str)){            
        return true;       
    }else {
        return false;
    } 
}    
    
console.log(esVocal('a')); // true
console.log(esVocal('n')); // false
console.log(esVocal('e')); // true
console.log(esVocal('f')); // false
console.log(esVocal('u')); // true
console.log(esVocal('i')); // true
*/


//FORMA 3:
const esVocal = (str) => {    
    const vocales = ["a", "e", "i", "o", "u"];    
    return vocales.includes(str)  
}    
/*
console.log(esVocal('a')); // true
console.log(esVocal('n')); // false
console.log(esVocal('e')); // true
console.log(esVocal('f')); // false
console.log(esVocal('u')); // true
console.log(esVocal('i')); // true
*/


/*************EJERCICIO 05 ****************/

// 04. Crear una función esConsonante que tome como argumento un string letra y devuelva true si 
//letra es una consonante o false si no lo es.

//FORMA 1:

const esConsonante = (letra) => {
    const vocales = ["a", "e", "i", "o", "u"];
    return !vocales.includes(letra)
}
// console.log(esVocal('a')); // true
// console.log(esVocal('n')); // false
// console.log(esVocal('e')); // true
// console.log(esVocal('f')); // false
// console.log(esVocal('u')); // true
// console.log(esVocal('i')); // true


//FORMA 2:

//const esConsonante = !esVocal("a");
//console.log(esConsonante)




/*************EJERCICIO 06 ****************/

// Crear una función esHoraValida que tome como argumento un string hora con el 
//formato HH:mm y determine si es una hora válida del día o no



 const esHoraValida = (string) => {
    
   let stringSeparado = string.split(":");
    
    let sHora = Number(stringSeparado[0]);
    let sMinutos = Number(stringSeparado[1]);
    
    if(sHora >= 00 && sHora < 24 && sMinutos >= 00 & sMinutos <= 59) {
        return true;
        }else {
          return false;
    }
 }


console.log(esHoraValida('12:23')) // true
console.log(esHoraValida('12:65')) // false
console.log(esHoraValida('28:05')) // false
console.log(esHoraValida('00:00')) // true





/*************EJERCICIO 07 ****************/

// Crear una función puedeRenovarCarnet que tome como argumentos tres booleanos, pasoTests, 
//tieneMultasImpagas y pagoImpuestos, y devuelva true si una persona está habilitada para 
//renovar su carnet de conducir o false si no. Una persona puede renovar su carnet si pasó los tests, 
//no tiene multas impagas y pagó todos los impuestos




const puedeRenovarCarnet = (pasoTests, tieneMultasImpagas, pagoImpuestos) => {
    if(pasoTests === true && tieneMultasImpagas === false && pagoImpuestos === true){
        return true;
    }else {
        return false
    }
}



console.log(puedeRenovarCarnet(true, true, true))    // false
console.log(puedeRenovarCarnet(true, true, false))   // false
console.log(puedeRenovarCarnet(true, false, true))   // true
console.log(puedeRenovarCarnet(true, false, false))  // false
console.log(puedeRenovarCarnet(false, true, true))   // false
console.log(puedeRenovarCarnet(false, true, false))  // false
console.log(puedeRenovarCarnet(false, false, true))  // false
console.log(puedeRenovarCarnet(false, false, false)) // false





/*************EJERCICIO 08 ****************/

// Crear una función puedeGraduarse que tome como argumentos dos números asistencia y 
//materiasAprobadas y un booleano tesisAprobada, y devuelva true si una persona puede 
//gruadarse o false si no. Una persona puede graduarse si tiene un 75% de asistencia o más, 
//50 materias aprobadas o más y la tesis aprobada.


const puedeGraduarse = (asistencia, materiasAprobadas, tesisAprobada) => {
    if(asistencia >= 75 && materiasAprobadas >= 50 && tesisAprobada === true){
        return true;
    } else{
        return false;
    }
}




console.log(puedeGraduarse(80, 50, true))  // true
console.log(puedeGraduarse(80, 50, false)) // false
console.log(puedeGraduarse(80, 45, true))  // false
console.log(puedeGraduarse(80, 45, false)) // false
console.log(puedeGraduarse(65, 50, true))  // false
console.log(puedeGraduarse(33, 55, false)) // false
console.log(puedeGraduarse(42, 45, true))  // false
console.log(puedeGraduarse(28, 45, false)) // false







/*************EJERCICIO 09 ****************/

// Crear una función esParOImpar que acepte como argumento un numero y devuelva el string 
// par si el numero es par, o el string impar si el numero es impar


//FORMA 1:

/*
const esParOImpar = (numero) => {
    if(numero % 2 == 0) {
        console.log("par");
    }else {
        console.log("impar");
    }
}
*/

//FORMA 2:
/*
const esParOImpar = (numero) => {
     let esParOImpar = (numero % 2 == 0) ? "par" : "impar";
     return esParOImpar
}
*/

//FORMA 3: 

const esParOImpar = (numero) => (numero % 2 == 0) ? "par" : "impar";
    
// console.log(esParOImpar(3)); // 'impar'
// console.log(esParOImpar(10)); // 'par'
// console.log(esParOImpar(31)); // 'impar'
// console.log(esParOImpar(98)); // 'par'
// console.log(esParOImpar(55)); // 'impar'
// console.log(esParOImpar(1042)); // 'par'




/*************EJERCICIO 10 ****************/

// Crear una función esPositivoONegativo que acepte como argumento un numero y 
//devuelva el string positivo si el numero es positivo, o el string negativo si el numero es negativo

// esPositivoONegativo(3)  // 'positivo'
// esPositivoONegativo(-5) // 'negativo'


//FORMA 1:
/*
const esPositivoONegativo = (numero) => {
    if(numero >= 0){
        return ("positivo");
    }else {
        return ("negativo");
    }
}*/


//FORMA 2:

const esPositivoONegativo = (numero) => (numero >= 0) ? "positivo" : "negativo";

// console.log (esPositivoONegativo(3))  // 'positivo'
// console.log (esPositivoONegativo(-5)) // 'negativo'





/************* EJERCICIO 11 ****************/

// Crear una función avanzarSemaforo que acepte como argumento un string colorActual y 
//devuelva un string con el siguiente color del semáforo, siguiendo el orden: 
//verde -> amarillo -> rojo -> verde


const avanzarSemaforo = (semaforo) => {
    switch(semaforo){
        case "verde":
            console.log("amarillo");
            break;

        case "amarillo":
            console.log("rojo");
            break;

        case "rojo":
            console.log("verde");
            break;

        default:
            console.log("ese color no es válido");
            break;
    }
}

// avanzarSemaforo('verde')     // 'amarillo'
// avanzarSemaforo('amarillo')  // 'rojo'
// avanzarSemaforo('rojo')      // 'verde'





/************* EJERCICIO 12 ****************/

// Crear una función obtenerDiasMes que tome como argumento un string mes y devuelva un número dependiendo de la cantidad de días que tenga ese mes


const obtenerDiasMes = (mes) => {
    switch(mes){
        case "enero":
            console.log(31);
            break;
        
        case "febrero":
            console.log(29);
            break;

        case "marzo":
            console.log(31);
            break;

        case "abril":
            console.log(30);
            break;

        case "mayo":
            console.log(31);
            break;
        
        case "junio":
            console.log(30);
            break;

        case "julio":
            console.log(31);
            break;

        case "agosto":
            console.log(31);
            break;

        case "septiembre":
            console.log(30);
            break;

        case "octubre":
            console.log(31);
            break;

        case "noviembre":
            console.log(30);
            break;

        case "diciembre":
            console.log(31);
            break;

        default:
            console.log("el mes ingresado no es válido");
    }
}

//obtenerDiasMes("diciembre") // 31
//obtenerDiasMes("febrero")   // 29




/************* EJERCICIO 13 ****************/

// Crear una función obtenerGeneracion que tome como argumento un número anioNacimiento y 
// devuelva un string con la generación a la que pertenece, siguientdo estas reglas:

// Baby boomer	    => 1949-1968
// Generación X	    => 1969-1980
// Millennials	    => 1981-1993
// Generación Z	    => 1994-2010


const obtenerGeneracion = (anioNacimiento) => {
    if(anioNacimiento >= 1949 && anioNacimiento <= 1968){
        console.log("Tu generación es Baby Boomer");
    }else if(anioNacimiento >= 1969 && anioNacimiento <= 1980){
        console.log("Tu generación es Generación X");
    }else if(anioNacimiento >= 1981 && anioNacimiento <= 1993){
        console.log("Tu generación es Millenials");
    }else if(anioNacimiento  >= 1994 && anioNacimiento <= 2010){
        console.log("Tu generación es Generación Z");
    } else{
        console.log("Tu generación no existe!");
    }
}




/************* EJERCICIO 14 ****************/

// Crear una función obtenerSensacion que tome como argumento un número temperatura y 
//devuelva un string dependiendo de la temperatura, con las siguientes reglas:

// Menor a 0°	                            => ¡Está helando!
// Mayor o igual a 0° y menor a 15°	        => ¡Hace frío!
// Mayor o igual a 15° y menor a 25°	    => Está lindo
// Mayor o igual a entre 25° y menor a 30°	=> Hace calor
// Mayor o igual de 30°	                    => ¡Hace mucho calor!



const obtenerSensacion = (temperatura) => {
    if(temperatura <= 0){
        console.log("¡Está helando!");
    }else if(temperatura >= 0 && temperatura < 15){
        console.log("¡Hace frío!");
    }else if(temperatura >= 15 && temperatura < 25){
        console.log("Está lindo");
    }else if(temperatura >= 25 && temperatura < 30){
        console.log("Hace calor"); 
    }else if(temperatura >= 30){
        console.log("¡Hace mucho calor!");
    }else {
        console.log("Ese número no es válido!");
    }
}






/************* EJERCICIO 15 ****************/


// Crear una función obtenerNota que tome como argumento un número puntaje y 
//devuelva un string dependiendo del puntaje redondeado, con las siguientes reglas:

// Menor a 6	                        => Desaprobado
// Mayor o igual a 6 y menor a 7	    => Regular
// Mayor o igual a 7 y menor a 8	    => Bueno
// Mayor o igual a entre 8 y menor a 10 => Muy bueno
// 10	                                => Excelente
// Menor a 0 o mayor a 10	            => Puntaje inválido



const obtenerNota = (puntaje) => {
    if(puntaje >= 0 && puntaje < 6){
        console.log("Desaprobado");
    }else if(puntaje >= 6 && puntaje < 7){
        console.log("Regular");
    }else if(puntaje >= 7 && puntaje < 8){
        console.log("Bueno");
    }else if(puntaje >= 8 && puntaje < 10){
        console.log("Muy bueno");
    }else if(puntaje == 10){
        console.log("Excelente");
    }else{
        console.log("Puntaje inválido");
    }
} 




/************* EJERCICIO 16 ****************/

// Crear una función jugarPiedraPapelTijera que tome como argumentos dos strings a y b 
//que representen una jugada (piedra, papel, tijera) y dependiendo el devuelva un string 
//con un mensaje avisando qué jugada ganó (o si hubo empate)

// jugarPiedraPapelTijera('tijera', 'piedra')  // ¡Ganó piedra!
// jugarPiedraPapelTijera('piedra', 'tijera')  // ¡Ganó piedra!
// jugarPiedraPapelTijera('papel', 'piedra')   // ¡Ganó papel!
// jugarPiedraPapelTijera('piedra', 'papel')   // ¡Ganó papel!
// jugarPiedraPapelTijera('papel', 'tijera')   // ¡Ganó tijera!
// jugarPiedraPapelTijera('tijera', 'papel')   // ¡Ganó tijera!
// jugarPiedraPapelTijera('piedra', 'piedra')  // ¡Empate!
// jugarPiedraPapelTijera('papel', 'papel')    // ¡Empate!
// jugarPiedraPapelTijera('tijera', 'tijera')  // ¡Empate!



const jugarPiedraPapelTijera = (opcionUno, opcionDos) => {
    if(opcionUno == "tijera" && opcionDos == "piedra"){
        console.log("¡Ganó piedra!");
    }else if(opcionUno == "piedra" && opcionDos == "tijera"){
        console.log("¡Ganó piedra!");
    }else if(opcionUno == "papel" && opcionDos == "piedra"){
        console.log("¡Ganó papel!");
    }else if(opcionUno == "piedra" && opcionDos == "papel"){
        console.log("¡Ganó papel!");
    }else if(opcionUno == "papel" && opcionDos == "tijera"){
        console.log("¡Ganó tijera!");
    }else if(opcionUno == "tijera" && opcionDos == "papel"){
        console.log("¡Ganó tijera!");
    }else if(opcionUno == "piedra" && opcionDos == "piedra"){
        console.log("¡Empate!");
    }else if(opcionUno == "papel" && opcionDos == "papel"){
        console.log("¡Empate!");
    }else if(opcionUno == "tijera" && opcionDos == "tijera"){
        console.log("¡Empate!");
    }else{
        console.log("La opción ingresada no es válida.")
    }
}