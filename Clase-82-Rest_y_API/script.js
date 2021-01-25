/***************PROMESAS***************/

//Las promesas son funciones asincronicas. Cuando yo invoco una promesa estoy esperando que se invoque una formula. Esta bueno relacionarlo con una promesa real. Cómo funcionan? las promesas son objetos. Tiene un agregado con respecto a los objetos que vimos en JavaScript. Las promesas también tienen métodos. 


//const miPromesa = new Promise()

//cuando nosotros queremos crear un objeto o una instancia usamos la palabra "new". Esto se usa en programación orientada a objetos. Igual en este ejemplo el Promise sería el nombre de "la clase". Cuando hablamos de una clase, estamos hablando de un tipo de dato que nosotros podríamos crear y que tienen un comportamiento particular. Por ejemplo: 

let contador = 0; 

//Cuando hablamos de clases lo que estamos creando es algo similar a lo que sería un entero o un string, solo que tiene un comportamiento particular dado por nosotros. 


//La promesa es algo que ya viene con JS. Qué tiene la promesa? Métodos que podemos llamar y que nos permiten ciertas operaciones. POr ejemplo, los arrays. Cuando los creamos y llamaban a un método (ej: filter).

const num = [1,2,3,4];


//la promesa es una clase que está esperando una función, y esta función va a recibir 2 parámetros. Los nombres que ponemos son los que se utilizan por convención. 

// const callback = (resolve, reject) => {
//     const promesaExitosa = true;

//     if (promesaExitosa){
//         resolve("Se cumplió lo prometido");
//     }else {
//         reject("No se cumplió lo prometido");
//     }
// };  


// //se escribe así la promesa: 

// const miPromesa = new Promise(callback);

// console.log(1);


// //Siempre que usamos una promesa sabemos que accedemos al .then

// //la mejor forma de escribir lo de arriba es asi: 
// miPromesa
// .then((respuesta) =>{
//     console.log(respuesta);
// })
// .catch((error) => {
//     console.log(error);
// });


// console.log(2);
// console.log(3);
//una promesa suele devolver algo que yo evaluo si se ejecutó de una forma correcta. 

//Otro ejemplo: 

//EJEMPLO 1

 const callback = (resolve, reject) => { //Los parametros pueden cambiar de nombre, no tienen que llamarse así (pepe, rechazo)
    const promesaExitosa = false;

    const response  = {
        success : promesaExitosa,
        data : {
            user: "Adrian",
            email: "adrian@ada.com",
            password: "as123123",
        },
    }

    if (promesaExitosa){
        resolve(response); //pepe
    }else {
        reject(response); //rechazo
    }
};

const miPromesa1 = new Promise(callback); 

 console.log(1);



miPromesa1
.then((respuesta) => {
    if(respuesta.success){
        console.log(`la promesa devolvió el usuario ${respuesta.data.user}`);
    }
})
.catch((error) => {
        console.log(error);
 });


 //FIN EJEMPLO 1

 //EJEMPLO 2

const miPromesa2 = new Promise((resolve, reject) => {
    const promesaExitosa = false;

    const response = {
        success: promesaExitosa,
        data: {
            user: "Adrián",
            email: "asd@asd.com",
            password: "asd123",
        },
    };

    if (promesaExitosa){
        resolve(response);
    } else {
        reject(response);
    }
});

miPromesa2
    .then((respuesta) => {
        if(respuesta.sucess){
            console.log(`La promesa devolvió el usuario ${respuesta.data.user}`);
        }    
    })
    .catch((error) => {
        console.log(error);
    });



console.log(2);
console.log(3);

//arreglr esto igual... ver clase grabada. 





//PROTOCOLO HTTP y MÉTODOS HTTP

//PETICIÓN: ada.com esto es una peticion a un servidor y el protocolo que se usa es el HTTP. Cuando yo estoy enviando o recibiendo datos, ahora esto se puede hacer a través de METODOS HTTP. Cada uno de estos metodos tienen un uso particular. con GET pedimos datos, con POST para que se guarden en algún lado. PUT enviar datos que necesitan actualizarse. DELETE eliminar un dato que existe en algún lugar. Cada uno de estos métodos se usan para una función en particular. Cada uno tiene que ser utilizado para la operación que corresponde. 







//API
//BACKEND






//ENDPOINTS

