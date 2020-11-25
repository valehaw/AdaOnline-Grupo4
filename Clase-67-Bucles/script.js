//MÉTODOS JAVASCRIPT:


//01. ********************* FOR **********************

const array = [1,2,3,4];
const array2 = ["a", "b", "Valeria", "123", 567, {name: "Francesca"}];

//console.log(array2);


limit = 3

for(let i = 0; i < limit; i++){
    //console.log(array2[i]) //a, b, Valeria (porque a es 0, b es 1, valeria es 2 y ahí se para, porque le puse que vaya a menos de 3)

}


//let i = 0; la variable que defino para poder iterar. Esto marca la posición desde la que arranco.
// i < limit; hasta donde recorro,
// i++; el incremento


for(let i = 0; i < array2.length; i++){
    //console.log(array2[i]) //a, b, Valeria (porque a es 0, b es 1, valeria es 2 y ahí se para, porque le puse que vaya a menos de 3)

}



const array3 = [1,2,3,4];
const array4 = [
    {name: "Francesca", lastname:"Gamarra"},
    {name: "Valeria", lastname:"Quiros"}
];


    for(let i = 0; i < array4.length; i++){
        let client = array4[i]; //tb funciona con const. Si yo declaro una constante dentro de la función, solo vale dentro de la función. El recorrido se hace, cuando termina el recorrido y vuelve a iterar, es como que se esa variable se vuelve a declarar y pasa a tener un valor nuevo, por eso puede generar un nuevo usuario. 
        
        //console.log(client.name); //Francesca, Valeria
    }

    //Por ejemplo: Con la realidad de Argentina si un supermercado quiere cambiar su lista de precios y quisiera aumentar un 5%, se hace con for y ya con eso me cambia el precio de todos los precios. 




//02. ********************* FOR OF **********************

const array5 = [
    {name: "Francesca", lastname:"Gamarra"},
    {name: "Valeria", lastname:"Quiros"},
    {name: "Ankara", lastname:"Nuesch"}
];


const userExists = (nameToSearch) => {
    for(const user of array5){ // for .... of

        if(user.name === nameToSearch){
            return true;
        }
    }
    return false;
};

//console.log(userExists("Valeria"));//true
//console.log(userExists("Valera"));//false (porque lo escribí mal)


const userExists2 = (nameToSearch) => {
    for(let i = 0; i < array5.length; i++){ 

        if(array5[i].name === nameToSearch){
            return true;
        }
    }
    return false;
};

//console.log(userExists2("Valera")); // false     Me tira false porque lo escribí mal.. enotnces no lo encuentra
//console.log(userExists2("Ankara"));  // true     Me tira true porque sí existe en mi array.
//console.log(userExists2("Francesca")); // true   Me tira true porque sí existe en mi array.




//03. ********************* POP **********************

//pop: El método pop() elimina el último elemento de un array y lo devuelve. 
//Este método cambia la longitud del array


const array6 = [
    {name: "Francesca", lastname:"Gamarra"},
    {name: "Valeria", lastname:"Quiros"},
    {name: "Ankara", lastname:"Nuesch"},
];

const eliminarDato = array6.pop(); //lo que hace el pop es eliminar el último elemento del array
//console.log(eliminarDato); 
//console.log(array6);



//********************* PUSH **********************

//04. El método push() añade uno o más elementos al final de un array y devuelve la nueva longitud del array.

const array7 = [
    {name: "Francesca", lastname:"Gamarra"},
    {name: "Valeria", lastname:"Quiros"},
    {name: "Ankara", lastname:"Nuesch"},
];

const agregarDato = array7.push({name:"Sofia", lastname:"Nuesch"}, 123);
//console.log(agregarDato);
//console.log(array7);//acá me muestra todos los datos ({name: "Francesca", lastname:"Gamarra"},{name: "Valeria", lastname:"Quiros"},{name: "Ankara", lastname:"Nuesch"}, MÁS el nuevo {name: "Sofia", lastname:"Nuesch"}, 123)




//05. ********************* SHIFT **********************

//shift: El método shift() elimina el primer elemento del array y lo RETORNA. 
        //Este método modifica la longitud del array.

        const array9 = [
            {name: "Francesca", lastname:"Gamarra"},
            {name: "Valeria", lastname:"Quiros"}
        ];


        for(let i = 0; i < array9.length; i++){
            let client = array9[i]; 
            if(i === 0) array9.shift(); //El shift retira un dato del array
            
            //console.log(client.name); //Francesca
        }
    
    
    
        for(let i = 0; i < array4.length; i++){
            let client = array4[i]; 
    
            let user;
    
            if(i == 0){ 
                user = array4.shift(); //El shift retira un dato del array y lo guarda en la nueva variable USER.
            }
            //console.log(user); //{name: "Valeria", lastname:"Quiros"}
        }
    
    



//06. ********************* UNSHIFT **********************

//El método unshift() agrega uno o más elementos al inicio del array, y devuelve la nueva longitud del array.

const array8 = [
    {name: "Francesca", lastname:"Gamarra"},
    {name: "Valeria", lastname:"Quiros"},
    {name: "Ankara", lastname:"Nuesch"},
];

const agregarInicio = array8.unshift({name:"Sofia", lastname:"Nuesch"});

//console.log(agregarInicio);
//console.log(array8); // me devuelve {name: "Sofia", lastname: "Nuesch"},{name: "Francesca", lastname: "Gamarra"}, {name: "Valeria", lastname: "Quiros"}, {name: "Ankara", lastname: "Nuesch"}




//07. ********************* SLICE **********************

//El método slice() devuelve una copia de una parte del array dentro de un nuevo array empezando
//por inicio hasta fin (fin no incluido). El array original no se modificará.

const array10 = [
    {name: "Francesca", lastname:"Gamarra"}, //0
    {name: "Valeria", lastname:"Quiros"},    //1
    {name: "Ankara", lastname:"Nuesch"},     //2
];

const copiaDistintaArray = array10.slice(2,3); //devuelve una copia del array, empezando por inicio hasta el fin. Empezamos por la posición 1 terminando por la posición 2. 
                                    //acá le dije posición 2 hasta la 3 y mi posición 2 es Ankara hasta Nuesch.
//console.log(copiaDistintaArray);
//console.log(array10);




//08. ********************* SPLICE **********************

//El método splice() cambia el contenido de un array eliminando elementos existentes y/o agregando 
//nuevos elementos.


//FORMA 1: 

const array11 = [
    {name: "Francesca", lastname:"Gamarra"}, //0
    {name: "Valeria", lastname:"Quiros"},    //1
    {name: "Ankara", lastname:"Nuesch"},     //2
];

const borrar = array11.splice(1, 1); //primer dato: el indice de donde queremos partir. y el segundo, es la cantidad de elementos a eliminar. 

//console.log(borrar); //{name: "Valeria", lastname: "Quiros"} el elemento que me borro
//console.log(array11); //{name: "Francesca", lastname: "Gamarra"},{name: "Ankara", lastname: "Nuesch"}, como queda mi array.



//FORMA 2: 

const array12 = [
    {name: "Francesca", lastname:"Gamarra"}, //0
    {name: "Valeria", lastname:"Quiros"},    //1
    {name: "Ankara", lastname:"Nuesch"},     //2
];

const borrarDos = array12.splice(1, 1, 'casa'); //primer dato: el indice de donde queremos partir. y el segundo, es la cantidad de elementos a eliminar. 

//console.log(borrarDos); //{name: "Valeria", lastname: "Quiros"} el elemento que me borro
//console.log(array12); //{name: "Francesca", lastname: "Gamarra"}, "casa", {name: "Ankara", lastname: "Nuesch"}
                                                                //ahí me agrega CASA, no lo reemplaza, porque puse 1 en el primer dato.



//FORMA 3: 


const array13 = [
    {name: "Francesca", lastname:"Gamarra"}, //0
    {name: "Valeria", lastname:"Quiros"},    //1
    {name: "Ankara", lastname:"Nuesch"},     //2
];
                                                                
const borrarTres = array13.splice(0, 3); 
                                                                
//console.log(borrarTres); //{name: "Francesca", lastname: "Gamarra"}, {name: "Valeria", lastname: "Quiros"}, {name: "Ankara", lastname: "Nuesch"}
//console.log(array13); // array vacío
            
                                                                
                                                                
//FORMA 4: 

const array14 = [
    {name: "Francesca", lastname:"Gamarra"}, //0
    {name: "Valeria", lastname:"Quiros"},    //1
    {name: "Ankara", lastname:"Nuesch"},     //2
];
                                                                    
const borrarCuatro = array14.splice(1, 2, {name: "Leonel", lastname:"Messi"});  
                                                                    
//console.log(borrarCuatro); // {name: "Valeria", lastname: "Quiros"}, {name: "Ankara", lastname: "Nuesch"}
//console.log(array14); // {name: "Francesca", lastname: "Gamarra"}, {name: "Leonel", lastname: "Messi"}
                
                                


//09. ********************* INDEXOF **********************

//El método indexOf() retorna el primer índice en el que se puede encontrar un elemento dado en el array
// o retorna -1  si el elemento no está presente. 

const array15 = [4, 2, 9, 5, 8, 9, 12, 2, 9, 8, 4];
    //posición   0, 1, 2, 3, 4   



const pos =  array15.indexOf(8); // se utiliza cuando yo quiero encontrar un elemento en una colección.

//console.log(pos); // 4   Me tira la posición en la que está.




//10. ********************* REVERSE **********************

//El método reverse() invierte el orden de los elementos de un array  in place. El primer elemento pasa
//a ser el último y el último pasa a ser el primero.

array15.reverse();
//console.log(array15);  //[4, 8, 9, 2, 12, 9, 8, 5, 9, 2, 4]





//11. ********************* INCLUDES **********************

//El método includes() determina si una matriz incluye un determinado elemento, devuelva true o false
//según corresponda.


//console.log(array15.includes(95)); //false
//console.log(array15.includes(8)); //true   porque el número 8 sí está en el array.



                                                            