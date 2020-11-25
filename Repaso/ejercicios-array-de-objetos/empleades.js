// Hacer ejercicios de empleades acá

// console.log(empleades); // la variable empleades viene del script data-empleades.js, vamos a poder acceder a ella siempre y cuando en nuestro HTML lo linkeemos antes del script en el que necesitemos usarla.




/***************** EJERCICIO 1 *****************/
//1. empleadesQueHacenGuardias, que devuelva un array con todes les empleades que hacen guardia


//FORMA 1: 

function empleadesQueHacenGuardias(){
    //foreach
    //for
    //filter -- filtra y devuelve un array // este nos va a devolver los que cumplan la condición (que hacen guardia)
    //while
    //map -- este devuelve un array // va a tomar cada elemento de mi array y yo lo voy a trabajar, hacer algo, y luego este lo devuelve al array.

    let hacenGuardia = empleades.filter(empleade => empleade.haceGuardia  //Se declara "empleade", pero su valor no se lee nunca, porque para que se lea habría que llamar al parametro como variable.
        //console.log(empleade);  
    );
    return hacenGuardia //o también se puede escribir de la siguiente forma.
    //console.table(hacenGuardia) 

}



//FORMA 2:

//function empleadesQueHacenGuardias(){
    //let haceGuardia = []
    
    //empleades.forEach(empleade => {
        //if(empleade.haceGuardia === true){
            //haceGuardia.push(empleade)
        //}
    //});

    //return haceGuardia

//}




/***************** EJERCICIO 2 *****************/

//2. empleadesPorPais, que tome por parámetro el nombre de un país y devuelva un array con todes les empleades que son de dicho país. 

const empleadesPorPais = (pais) => {
    let empleadesPorPais = empleades.filter(empleade => empleade.pais === pais)

    return empleadesPorPais
}

// console.log(empleadesPorPais("Uruguay"));
// console.log(empleadesPorPais("Venezuela"));
// console.log(empleadesPorPais("Colombia"));




/***************** EJERCICIO 3 *****************/

//3.empleadesPorArea, que tome por parámetro el nombre de un área y devuelva un array
//con todes les empleades que son de dicho área

const empleadesPorArea = (area) => {
    let empleadesPorArea = empleades.filter(empleade => empleade.area === area)
    return empleadesPorArea
}

// console.log(empleadesPorPais('QA'));




/***************** EJERCICIO 4 *****************/

//4.empleadesConSueldoMayorA, que tome por parámetro un número como sueldo y 
//devuelva un array con todes les empleades que tengan un sueldo mayor a dicho número, 
//ordenados de menor a mayor según sueldo

 // ejemplo A
const empleadesConSueldoMayorA_A = (numero) => {
    const conMayorSueldo = empleades.filter((empleade) => empleade.sueldo > numero)
    conMayorSueldo.sort((a, b) => a.sueldo - b.sueldo)
  
    return conMayorSueldo
  }
  
  // ejemplo B
  const empleadesConSueldoMayorA_B = (numero) => {
    const conMayorSueldo = empleades.filter((empleade) => empleade.sueldo > numero).sort((a, b) => a.sueldo - b.sueldo)
  
    return conMayorSueldo
  }
  
  // ejemplo C
  const empleadesConSueldoMayorA_C = (numero) => {
    const conMayorSueldo = empleades.filter((empleade) => empleade.sueldo > numero)
  
    return conMayorSueldo.sort((a, b) => a.sueldo - b.sueldo)
  }
  
  // ejemplo D
  const empleadesConSueldoMayorA_D = (numero) => {
    return empleades.filter((empleade) => empleade.sueldo > numero).sort((a, b) => a.sueldo - b.sueldo)
  }
  
  // ejemplo E
  const empleadesConSueldoMayorA_E = (numero) => empleades.filter((empleade) => empleade.sueldo > numero).sort((a, b) => a.sueldo - b.sueldo)
  
  // console.log(empleadesConSueldoMayorA_A(53372));
  // console.log(empleadesConSueldoMayorA_B(53372));
  // console.log(empleadesConSueldoMayorA_C(53372));
  // console.log(empleadesConSueldoMayorA_D(53372));
  // console.log(empleadesConSueldoMayorA_E(53372));
  



/***************** EJERCICIO 5 *****************/

//5.empleadesConMasLenguajes, que tome por parámetro un número y devuelva un array con 
//aquelles empleades que sepan más lenguajes que dicho número

const empleadesConMasLenguajes = (empleades, lenguajeQueSabe) => {
   
    return empleades.filter(empleade => empleade.lenguajes.length > lenguajeQueSabe)
   
}
  
// console.table(empleadesConMasLenguajes(5));



/***************** EJERCICIO 6 *****************/ 

// sueldoPromedioEmpleades, que devuelva el sueldo promedio de todos los empleades


const sueldoPromedioEmpleades = () => {
    const sueldoPromedio = empleades.reduce((acc,empleade,index) => {

        console.log({acc,empleade,index})   //esto nos va a mostrar el valor de los parametros en cada vuelta.     
        return acc+empleade.sueldo    
    },0);    
    return (sueldoPromedio/ empleades.length) 
};

    
// console.log(sueldoPromedioEmpleades()); // antes del ejercicio 7
// console.log(sueldoPromedioEmpleades(empleades)); // después del ejercicio 7



/***************** EJERCICIO 7 *****************/

//7.sueldoPromedioPorSeniority, que tome por parámetro un seniority, 
//y devuelva el sueldo promedio de todes les empleades que tengan ese seniority



const sueldoPromedioPorSeniority = (seniority) => {
    const sueldoPromedio = empleades.filter(empleade => empleade.seniority === seniority).reduce((acc,empleade,index)=> {
        console.log({acc,empleade,index})
        return acc+empleade.sueldo
    },0);
    return(sueldoPromedio / empleades.length)
};

// console.log(sueldoPromedioPorSeniority("Semisenior"));



/***************** EJERCICIO 8 *****************/

//8.buscarEmpleades, que tome por parámetros area, puesto y seniority, y 
//devuelva un array con les empleades que pertenezcan a dicha area, puesto y seniority


const buscarEmpleades = (area, puesto, seniority) => {
    const empleadesIguales = empleades.filter(empleade => empleade.area === area).filter(empleade => empleade.puesto === puesto).filter(empleade => empleade.seniority === seniority)
    return empleadesIguales
}


// console.table(buscarEmpleades("Seguridad", "Backend Developer", "Senior"));




/***************** EJERCICIO 9 *****************/

//9.errorEnProduccion, que ponga en true la propiedad haceGuardia de todos los empleados


const errorEnProduccion = () => {
    const todosHacenGuardia = empleades.map((empleade) => {
      empleade.haceGuardia = true
      return empleade
    })
  
    return todosHacenGuardia
  }
  
// console.table(errorEnProduccion());
  
  





/***************** EJERCICIO 10 *****************/

//10.subirDeCategoria, que tome como parámetro un objeto empleade. 
//Si diche empleade no tiene un seniority "Senior", 
//cambiar el valor de su propiedad seniority con el siguiente que le corresponde en orden 
//("Trainee" -> "Junior" -> "Semisenior" -> "Senior"), y le incremente en 10000 el sueldo



//VERSIÓN 1: HECHA EN CLASE


const subirDeCategoria = (empleade) => {
    if(empleade.seniority != "Senior"){
        switch(empleade.seniority){
            case "Trainee": 
            empleade.seniority= "Junior";
            empleade.sueldo = empleade.sueldo + 10000;
            break;

            case "Junior": 
            empleade.seniority= "Semisenior";
            empleade.sueldo = empleade.sueldo + 10000;
            break;

            case "Semisenior": 
            empleade.seniority= "Senior";
            empleade.sueldo = empleade.sueldo + 10000;
            break;

            default:
            empleade.seniority //queda igual.. no se va a modificar
            console.log("Mensaje de error");
        }
         return empleade
    }
}

const primerEmpleade = empleades[1]

console.log("antes " + primerEmpleade.seniority);

subirDeCategoria(primerEmpleade)

console.log("despues " + primerEmpleade.seniority);





//VERSIÓN 2: 

/*
const subirDeCategoria = (empleade) => {
    if(empleade.seniority != "Senior"){
        switch(empleade.seniority){
            case "Trainee": 
            empleade.seniority= "Junior";
            break;

            case "Junior": 
            empleade.seniority= "Semisenior";
            break;

            case "Semisenior": 
            empleade.seniority= "Senior";
            break;

            default:
            empleade.seniority //queda igual.. no se va a modificar
            console.log("Mensaje de error");
        }
         return empleade
    }
    empleade.sueldo = empleade.sueldo + 10000;
}

const primerEmpleade = empleades[1]

console.log("antes " + primerEmpleade.seniority);

subirDeCategoria(primerEmpleade)

console.log("despues " + primerEmpleade.seniority);

*/


//VERSIÓN 3:
/*
const subirDeCategoria = (empleade) => {
  const seniorities = ['Trainee','Junior', 'Semisenior', 'Senior'];
  
  if(empleade.seniority === 'Senior') 
  return;

  let seniorPosition = seniorities.indexOf(empleade.seniority);

  empleade.sueldo = empleade.sueldo + 10000;
  empleade.seniority = seniorities[seniorPosition +1];

}

console.log("subir de categoria: ", subirDeCategoria(empleades[1]));  
console.log(empleades[1]);

*/

//ESTA VERSIÓN ES COMO LA MÁS PRO. 



// console.log("subir de categoria: ", subirDeCategoria(empleades[1]));  
// console.log(empleades[1]);


// const primerEmpleade = empleades[1]

// console.log("antes " + primerEmpleade.seniority);

// subirDeCategoria(primerEmpleade)

// console.log("despues " + primerEmpleade.seniority);







/***************** EJERCICIO 11 *****************/

//11.agregarTecnologias, que agregue a todos los objetos empleades la propiedad tecnologías,
//que es un array conteniendo los valores "GIT" y "Node.js"

const agregarTecnologias = () => {
    const agregarItem = empleades.map((empleade) => {
        const tecnologias = ["GIT", "Node.js"]

        const informacion = {
            nombre: empleade.nombre,
            pais: empleade.pais,
            edad: empleade.edad,
            area: empleade.area,
            puesto:empleade.puesto,
            seniority: empleade.seniority,
            sueldo: empleade.sueldo,
            haceGuardia: empleade.haceGuardia,
            lenguajes: empleade.lenguajes,
            tecnologias,
        };
        return informacion
    });
    return agregarItem;
}


// console.table(gregarTecnologias())





/***************** EJERCICIO 12 *****************/

//12.empleadeSabeLenguaje, que tome por parámetro un objeto empleade 
//(elemento del array empleades) y un lenguaje y devuelva true si dicho empleade sabe dicho lenguaje


const empleadeSabeLenguaje = (empleade, lenguaje) => {
 const sabeLenguaje = empleade.lenguajes.includes(lenguaje)
 
 return sabeLenguaje
}

// console.log(empleadeSabeLenguaje(empleades[0], "Java")); // true
// console.log(empleadeSabeLenguaje(empleades[0], "Javascript")); // false





/***************** EJERCICIO 13 *****************/

//13. empleadesQueSabenLenguaje, que tome por parámetro un lenguaje y 
//devuelva todes les empleades que saben dicho lenguaje (usar la función anterior)


const empleadesQueSabenLenguaje = (lenguajes) => {
    let empleadesQueSabenLenguaje = empleades.filter(empleade => empleade.lenguajes.length === lenguajes.length)
    return empleadesQueSabenLenguaje
}
// console.log(empleades,'QA');
// console.log(empleades,'Java');

//NO FUNCIONA BIEN!!!!




/***************** EJERCICIO 14 *****************/

//14.empleadesQueSabenLenguajes, que tome por parámetro un array de lenguajes y devuelva un array 
//con aquelles empleades que sepan todos esos lenguajes


const empleadesQueSabenLenguajes = () => {
    const lenguajes
}










/***************** EJERCICIO 21 *****************/

//21.obtenerInfoPagos, que devuelva una array donde cada elemento es un objeto con las propiedades
//nombre
//sueldoBruto
//obraSocial
//jubilacion
//sueldoNeto habiendo un elemento por cada empleade, donde
//sueldoBruto es el sueldo del objeto original
//obraSocial es el 3% del sueldoBruto
//jubilacion es el 11% del sueldoBruto
//sueldoNeto es el resultado de restarle a sueldoBruto los valores de obraSocial y jubilacion



const obtenerInfoPagos = () => {
            //tiene que devolver un array
    const infoPagos = empleades.map((empleade) => {
        const obraSocial = empleade.sueldo * 0.3;
        const jubilacion = empleade.sueldo * 0.11;
        const sueldoNeto = empleade.sueldo - obraSocial - jubilacion;
        
        const info = {
            nombre: empleade.nombre,
            sueldoBruto: empleade.sueldo,
            obraSocial,
            jubilacion,
            sueldoNeto,
        };
        return info;
    });
        return infoPagos;
    }


//UNA FORMA MÁS PEQUEÑA:
/*
const obtenerInfoPagos = () => {

    //tiene que devolver un array
    
    return empleades.map((empleade) => {
    const obraSocial = empleade.sueldo * 0.3;
    const jubilacion = empleade.sueldo * 0.11;
    const sueldoNeto = empleade.sueldo - obraSocial - jubilacion;

    return {
        nombre: empleade.nombre,
        sueldoBruto: empleade.sueldo,
        obraSocial,
        jubilacion,
        sueldoNeto,
    };  
});
}
 */









    //VARIABLES:
        //let: vive dentro de la funcion y muere cuando la función deja de ejecutarse.
        //var: es una variable global.
        //const: es constante. Siempre va a tener el mismo dato. 

