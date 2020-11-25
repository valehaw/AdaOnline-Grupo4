// Hacer ejercicios de estudiantes acá


/***************** EJERCICIO 1 *****************/

// 1. estudiantesPorHechizo, que tome por parámetro el nombre de un hechizo 
// y un array de estudiantes y devuelva un array con todos les estudiantes que tengan 
//ese hechizo como hechizoPreferido

/*
const estudiantesPorHechizo = (hechizo) => {
    return estudiantes.reduce((acc, estudiante) => {
        if(estudiante.hechizoPreferido === hechizo) {
            acc.push(estudiante);
        }
        return acc;
    }, []);
}
 */
const estudiantesPorHechizo = (hechizo) => {
    return estudiantes.filter((estudiante) => estudiante.hechizoPreferido === hechizo)
}

//console.table(estudiantesPorHechizo('Expecto Patronum'))
//console.log (estudiantesPorHechizo("Expecto Patronum"))




/***************** EJERCICIO 2 *****************/

//2. estudiantesConMasAmiguesQue, que tome por parametro un numero y un array de estudiantes y 
//devuelva un array con todos les estudiantes que tengan un número de amigues mayor o igual 
//al número pasado por parámetro

const estudiantesConMasAmiguesQue = (arrayDeEstudiantes, CantidadAmigues) => {
    return arrayDeEstudiantes.filter((estudiante) => {
        return CantidadAmigues <= estudiante.amigues.length
    });
}

//console.table(estudiantesConMasAmiguesQue(estudiantes, 4));





/***************** EJERCICIO 3 *****************/

//3. estudiantesConFamiliares, que tome por parámetro un array con nombres de familiares 
//(p.ej, ["Sapo", "Lechuza"]) y un array de estudiantes y devuelva un array con les estudiantes 
//cuyo familiar sea alguno de los incluidos en el parámetro


const estudiantesConFamiliares = (familiares, arrayDeEstudiantes) => {
    return arrayDeEstudiantes.filter((estudiante) => {
        return familiares.includes(estudiante.familiar)
    });
}

//console.table(estudiantesConFamiliares(["Sapo", "Lechuza"], estudiantes))
//console.log(estudiantesConFamiliares(["Sapo", "Lechuza"], estudiantes))




/***************** EJERCICIO 4 *****************/

//4. obtenerPromedioDeEstudiante, que tome por parámetro une estudiante 
//(que se saca del array estudiantes) y devuelva el promedio total de todas las materias


const obtenerPromedioDeEstudiante = (estudiante) => {
    const promedio = estudiante.materias.reduce((acc, materia) => {
        return acc + materia.promedio;
    }, 0);
    return promedio / estudiante.materias.length;
}




/*

const obtenerPromedioDeEstudiante = (estudiante) => {
    return estudiante.materias.reduce((acc, materia) => {
        return acc + materia.promedio;
    }, 0) / estudiante.materias.length;
}
 console.log(obtenerPromedioDeEstudiante(estudiante, materia))


ARRREGLARRRRRRRRRRRR PEDIRSELO A FLORRRR

*/




/***************** EJERCICIO 5 *****************/

//5. estudiantesConPromedioMayorA, que tome por parámetro un número y un array de estudiantes 
// y devuelva un array con les estudiantes que tengan un promedio total mayor a dicho número 
// (usar la función anterior)

const  estudiantesConPromedioMayorA = (numero, arrayDeEstudiantes) => {
    return arrayDeEstudiantes.filter((estudiante) => obtenerPromedioDeEstudiante(estudiante) > numero)
}                                                       //acá usa la función del ejercicio 4

//console.table(estudiantesConPromedioMayorA(5,estudiantes))
//console.log(estudiantesConPromedioMayorA(6, estudiantes))





/***************** EJERCICIO 6 *****************/

//6. mejoresEstudiantesPorCasa, que tome por parámetro el nombre de una casa y un array 
//de estudiantes y devuelva les estudiantes de dicha casa cuyo promedio total es mayor a 6

const mejoresEstudiantesPorCasa = (casa, arrayDeEstudiantes) => {
    const porCasa = arrayDeEstudiantes.filter((estudiante) => estudiante.casa === casa)
    
    console.log(porCasa)
    return estudiantesConPromedioMayorA(6,porCasa)
}                 //acá usa la función del ejercicio 5

console.table(mejoresEstudiantesPorCasa('Hufflepuff', estudiantes))









/***************** EJERCICIO 8 *****************/

//8. estudiantesPorMateriaAprobada, que tome por parámetro el nombre de una materia 
// y un array de estudiantes y devuelva un array con les estudiantes que tienen en dicha 
// materia un promedio superior a 6
