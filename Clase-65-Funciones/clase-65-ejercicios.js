
/***************** EJERCICIO 1 *****************/ 

/*
1. calcularPorcentaje(numero, porcentaje)

/Crear una función calcularPorcentaje que tome como argumentos un número y un porcentaje y 
devuelva el valor del porcentaje correspondiente al número

calcularPorcentaje(100, 15) // 15
calcularPorcentaje(10, 50) // 5
calcularPorcentaje(200, 10) // 20
*/


const calcularPorcentaje = (numero, porcentaje) => {
    let resultado = numero * (porcentaje / 100 )
    return resultado
}

console.log(calcularPorcentaje(100, 15))
console.log(calcularPorcentaje(10, 50))
console.log(calcularPorcentaje(200, 10))





/***************** EJERCICIO 2 *****************/ 

/*
2. restarPorcentaje(numero, porcentaje)
Crear una función restarPorcentaje que tome como argumentos un número y un porcentaje y devuelva 
la resta de dicho número con la de su porcentaje. Usar la función calcularPorcentaje para obtener el porcentaje a restar

restarPorcentaje(100, 15) // 85
restarPorcentaje(10, 40) // 6
restarPorcentaje(200, 10) // 180
*/


const restarPorcentaje = (numero, porcentaje) => {
    let paraRestar = calcularPorcentaje(numero, porcentaje);
    let restar =  numero - paraRestar;
    return restar;
}
mostrar = restarPorcentaje(100,15);
console.log(mostrar);



/***************** EJERCICIO 3 *****************/ 

/*
3. burlarse(str)
Crear una función burlarse que tome como argumento un string str y devuelva el mismo string 
con todas las vocales reemplazadas por la letra i

burlarse('programar es dificil') // 'prigrimir is dificil'

*/


const burlarse = (str) => {

    const vocales = ["a", "e", "o", "u"];

    for(let i = 0; str.length > i; i++) {

        if(vocales.includes(str[i])){

            str = str.replace(str[i], 'i');

        }
    }

    return str;
}

const rta = burlarse('programar es dificil');

console.log(rta);



/*
FORMA INTERNET 1:

var cadena = "programar es dificil";
var nuevaCadena = cadena.replace(/programar es/i, "prigrimir is");
console.log(nuevaCadena); // prigrimir is dificil 
*/


//FORMA INTERNET 2:
/*
const burlarse = (str) => {
    let reemplazo= str.replace((/a|e|o|u/gi), function(i){
        return "i";
    })
    return reemplazo;
}

//console.log(burlarse("programar es dificil")) // "prigrimir is dificil"
*/



/***************** EJERCICIO 4 *****************/ 

/*
4. aHackerSpeak(str)
Crear una función aHackerSpeak que tome como argumento un string str y devuelva el mismo string 
convertido a H4CK3R 5P3AK, siguiendo las siguientes reglas:

- Las i se transforman en 1
- Las e se transforman en 3
- Las a se transforman en 4
- Las s se transforman en 5
- Las 0 se transforman en 0
*/



const aHackerSpeak = (string) => {

    const vocalA = ["a", "A"];
    const vocalE = ["e", "E"];
    const vocalI = ["i", "I"];
    const vocalO = ["o", "O"];
    const vocalS = ["s", "S"];

    for(let i = 0; string.length > i; i++) {

        if(vocalA.includes(string[i])){
            string = string.replace(string[i], '4');
        }
        if(vocalE.includes(string[i])){
            string = string.replace(string[i], '3');
        }
        if(vocalI.includes(string[i])){
            string = string.replace(string[i], '1');
        }
        if(vocalO.includes(string[i])){
            string = string.replace(string[i], '0');
        }
        if(vocalS.includes(string[i])){
            string = string.replace(string[i], '5');
        }
    }

    return string;
}


console.log(aHackerSpeak('javascript')); // 'j4v45cr1pt'
console.log(aHackerSpeak('soy una hacker')); // '50y un4 h4ck3r'
console.log(aHackerSpeak('ADA LOVELACE')); // '4D4 L0V3L4C3'









