
//Tenemos nuestro objeto: 

const objeto = {
    name: "Adrian",
    lastname: "Solimano",
    email: "adrian@ada.com"
};



//********* ASIGNACIÓN POR DESESTRUCTURACIÓN **************/

//Para guardar en variables const los valores de nuestros objetos, se escribe así:

const name = objeto.name;
const lastname = objeto.lastname;
const email = objeto.email;

//Esto de arriba... es lo mismo que poner esto de abajo!

const { name, lastname, email } = objeto;


console.log(name); // Adrian
console.log(lastname); // Solimano
console.log(email); // adrian@ada.com


//Si yo ahora hago: 
const name = "Mi aplicación Web"; // ERROR



//********* CAMBIANDO EL NOMBRE DE VARIABLES DESESTRUCTURADAS **************/

//hay que volver a declarar: 

const {name: name2, lastname, email } = objeto; 

console.log(name, name2); //Miaplicacion Web, Adrian




//********* DESESTRUCTURACIÓN ANIDADA **************/

//Tenemos nuestro objeto: 

const objeto = {
    name: "Adrian",
    lastname: "Solimano",
    email: "adrian@ada.com",
    edad: 37, 
    datosBancarios: {
        cbu: 123123123123123,
        numeroCuenta: '098098098',
        alias: 'UNO.DOS.TRES',
    }
};


//la desestructuración anidada sería así: 

const { datosBancarios: { numeroCuenta } } = objeto; //098098098

//entonces, acabamos de desestructurar un elemento que está ADENTRO de OTRO elemento. Y si numeroCuenta tuviera adentro otro objeto también podrías llamarlo haciendo otra desestructuración:

const { datosBancarios: { numeroCuenta: { algunOtroElemento } } } = objeto;

//PERO...!!!!
console.log(datosBancarios); // ERROR!!
//porque ya lo desestructuré entonces ya NO EXISTE MÁS!


//Si yo quisiera utilizar datosBancarios debería desestructurarlo individualmente:

const { 
    datosBancarios,
    datosBancarios: { numeroCuenta },
    } = objeto; 


console.log(datosBancarios); //cbu: 123123123123123, numeroCuenta: '098098098', alias: 'UNO.DOS.TRES'




//Ejemplo con FOR IN:

for(let props in objeto){
    if(typeof objeto[props] === "object"){
        const { numeroCuenta } = objeto[props];

        console.log(numeroCuenta); //098098098
    }
}


//y si quisiera acceder a los elementos de datosBancarios, sería así: 

for(let props in objeto){
    if(typeof objeto[props] === "object"){
        
        for(let datos in objeto[props]){
            console.log(datos); // cbu, numeroCuenta, alias
        }
    }
}


//y si quisiera acceder a los datos de los elementos de datosBancarios, sería así: 

for(let props in objeto){
    if(typeof objeto[props] === "object"){
        
        for(let datos in objeto[props]){
            console.log(objeto[props][datos]); // 123123123123123, '098098098', 'UNO.DOS.TRES'
        }
    }
}




//********* DESESTRUCTURANDO PARÁMETROS **************/


const miFuncion = ({ datosBancarios}) => {
    console.log(datosBancarios); //{cbu: 123123123123123, numeroCuenta: '098098098', alias: 'UNO.DOS.TRES'}
}
miFuncion(objeto);


//también puede ser así: 

const miFuncion = ({ name, datosBancarios }) => {
    console.log(name, datosBancarios);//Adrian {cbu: 123123123123123, numeroCuenta: '098098098', alias: 'UNO.DOS.TRES'}
}
miFuncion(objeto);







//********* OBJETOS COMO PARÁMETROS **************/

const miFuncion = ({ obj }) => {
    console.log(obj.name, obj.datosBancarios);//Adrian {cbu: 123123123123123, numeroCuenta: '098098098', alias: 'UNO.DOS.TRES'}
}
miFuncion(objeto);






//******* OPERADOR SPREAD: ***********//

//Si yo hago lo siguiente: Qué pasa?

const { name } = objeto; 

console.log(objeto); // {
                        //name: "Adrian",
                        //lastname: "Solimano",
                        //email: "adrian@ada.com",
                        //edad: 37, 
                        //datosBancarios: {
                            //cbu: 123123123123123,
                            //numeroCuenta: '098098098',
                            //alias: 'UNO.DOS.TRES',
                        //}
                    //};


//No pasó nada... PERO SI YO HAGO EL OPERADOR SPREAD: 

const { name, ...restoDelObjeto } = objeto; 

console.log(restoDelObjeto); // {
                        //lastname: "Solimano",
                        //email: "adrian@ada.com",
                        //edad: 37, 
                        //datosBancarios: {
                            //cbu: 123123123123123,
                            //numeroCuenta: '098098098',
                            //alias: 'UNO.DOS.TRES',
                        //}
                    //};


//Otro ejemplo: 

const { name, lastname, email, ...restoDelObjeto } = objeto; 

console.log(restoDelObjeto); // {
                        //edad: 37, 
                        //datosBancarios: {
                            //cbu: 123123123123123,
                            //numeroCuenta: '098098098',
                            //alias: 'UNO.DOS.TRES',
                        //}
                    //};




//IMPORTANTE: El SPREAD lo que permite es AGARRAR EL RESTO DEL OBJETO QUE QUEDÓ. 



//Ahora, si yo pongo 2 console.log: 

const { name, edad, email, ...restoDelObjeto } = objeto; 

console.log(restoDelObjeto); // {
                        //lastname: "Solimano",
                        //datosBancarios: {
                            //cbu: 123123123123123,
                            //numeroCuenta: '098098098',
                            //alias: 'UNO.DOS.TRES',
                        //}
                    //};
                    
console.log(objeto); // {
                    //lastname: "Solimano",
                    //email: "adrian@ada.com",
                    //edad: 37, 
                    //datosBancarios: {
                        //cbu: 123123123123123,
                        //numeroCuenta: '098098098',
                        //alias: 'UNO.DOS.TRES',
                    //}
                //};


//Acá se ve que el objeto original no se modificó. Esto quiere decir que los datos ingresados { name, edad, email ...restoDelObjeto }, son nuevos datos. NO estoy pisando el objeto original. 




//ENTONCES, si eliminamos los elementos y solo dejo ...restoDelObjeto:

const { ...restoDelObjeto } = objeto; 

console.log(restoDelObjeto); // {
                            //lastname: "Solimano",
                            //email: "adrian@ada.com",
                            //edad: 37, 
                            //datosBancarios: {
                                //cbu: 123123123123123,
                                //numeroCuenta: '098098098',
                                //alias: 'UNO.DOS.TRES',
                            //}
                        //};
                    
console.log(objeto); // {
                    //lastname: "Solimano",
                    //email: "adrian@ada.com",
                    //edad: 37, 
                    //datosBancarios: {
                        //cbu: 123123123123123,
                        //numeroCuenta: '098098098',
                        //alias: 'UNO.DOS.TRES',
                    //}
                //};






//ENTONCES con esto el restoDelObjeto lo puedo modificar:


const { ...restoDelObjeto } = objeto; 

restoDelObjeto.otroDato = "Otro Dato";
restoDelObjeto.name = "J Adrian";


console.log(restoDelObjeto);// {
                            //name: "J Adrian"
                            //lastname: "Solimano",
                            //email: "adrian@ada.com",
                            //edad: 37, 
                            //datosBancarios: {
                                //cbu: 123123123123123,
                                //numeroCuenta: '098098098',
                                //alias: 'UNO.DOS.TRES',
                            //},                  
                            //otroDato: "Otro Dato"
console.log(objeto); // {
                    //name: "Adrian"
                    //lastname: "Solimano",
                    //email: "adrian@ada.com",
                    //edad: 37, 
                    //datosBancarios: {
                        //cbu: 123123123123123,
                        //numeroCuenta: '098098098',
                        //alias: 'UNO.DOS.TRES',
                    //}



//******* OPERADOR REST: ***********//





//******* INMUTABILIDAD: ***********//

//Lo que esto hace es: tiene 2 formas. 

//1. Que el objeto se congele, osea que no se puedan modificar los datos o que no se puedan agregar datos nuevos al objeto

//2. Se puede conseguir que NO se puedan agregar nuevos datos pero que SÍ se puedan modificar los que ya existen. 


//POR EJEMPLO: Si nosotros haciamos esto: 

name = "Adrian";
console.log(name); // Adrian

//funcionaba. 

//AHORA, hay una forma de utilizar JS de una forma más estricta:

"use strict"

const objeto = {
    name: "Adrian",
    lastname: "Solimano",
    email: "adrian@ada.com",
    edad: 37, 
    datosBancarios: {
        cbu: 123123123123123,
        numeroCuenta: '098098098',
        alias: 'UNO.DOS.TRES',
    }
};

name = "Adrian";
console.log(name); // ERRORRR

//IMPORTANTE: Ahora, me da error, porque name es como si no existiera, es como que no está declarada. JS en su modo estricto lo que hace es que me fuerza a declarar las variables de forma correcta. 


//Entonces, lo que tendría que hacer es:

let name = "Adrian";
console.log(name); // Adrian


/*
INMUTABILIDAD tiene varios METODOS: 

1. Object.freeze()
			Que hace esto?
Ejemplo:
*/

Object.freeze(objeto);
objeto.name = "J. Adrian"; //este existe y lo estamos modificando
objeto.otroDato = "Otro dato"; //este dato no existe es nuevo. 

console.log(objeto); //ERRRORRRR


//Sale error porque no deja modificar. La consola tira "Cannot assign to read only property 'name' of object'


Object.freeze(objeto);
objeto.otroDato = "Otro dato"; //este dato no existe es nuevo. 

console.log(objeto); //ERRRORRRR

//Nuevamente sale error porque cuando usamos FREEZE no podemos ni modificar lo que está dentro del objeto, ni podemos agregar nuevos datos. 


//si le quitamos el "use strict"
const objeto = {
    name: "Adrian",
    lastname: "Solimano",
    email: "adrian@ada.com",
    edad: 37, 
    datosBancarios: {
        cbu: 123123123123123,
        numeroCuenta: '098098098',
        alias: 'UNO.DOS.TRES',
    }
};

//y hacemos nuevamente: 
Object.freeze(objeto);
objeto.name = "J. Adrian"; //este existe y lo estamos modificando
objeto.otroDato = "Otro dato"; //este dato no existe es nuevo. 

console.log(objeto); //{
                    //name: "Adrian",
                    //lastname: "Solimano",
                    //email: "adrian@ada.com",
                    //edad: 37, 
                    //datosBancarios: {
                    //   cbu: 123123123123123,
                    //   numeroCuenta: '098098098',
                    //   alias: 'UNO.DOS.TRES',
                    //   }
                    //};





/*


2. Object.seal()
			Que hace esto?
Ejemplo:
*/


"use strict"

const objeto = {
    name: "Adrian",
    lastname: "Solimano",
    email: "adrian@ada.com",
    edad: 37, 
    datosBancarios: {
        cbu: 123123123123123,
        numeroCuenta: '098098098',
        alias: 'UNO.DOS.TRES',
    }
};



//Ejemplo:


Object.seal(objeto);

objeto.name = "J. Adrian"; //este existe y lo estamos modificando

console.log(objeto); //{
                    //name: "J. Adrian",
                    //lastname: "Solimano",
                    //email: "adrian@ada.com",
                    //edad: 37, 
                    //datosBancarios: {
                    //   cbu: 123123123123123,
                    //   numeroCuenta: '098098098',
                    //   alias: 'UNO.DOS.TRES',
                    //   }
                    //};


//pero si quiero poner una nueva propiedad:

Object.seal(objeto);

objeto.name = "J. Adrian"; //este existe y lo estamos modificando
objeto.otroDato = "Otro dato"; //este dato no existe es nuevo.

console.log(objeto); //NO ME TIRA ERROR, PERO TAMPOCO ME APARECE EL OBJETO (SALE UN TEXTO).



//Entonces,  OBJECT.SEAL me deja modificar un dato ya existente, pero NO me deja agregar un dato nuevo. 





//******* PASAJE POR VALOR VS PASAJE POR REFERENCIA: ***********//


//******* SHALLOW COPY VS DEEP COPY: ***********//

let objeto2 = objeto;


