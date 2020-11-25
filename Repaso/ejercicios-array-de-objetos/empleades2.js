 //EJERCICIO 6:   
// sueldoPromedioEmpleades, que devuelva el sueldo promedio de todos los empleades

const tests = [
    {
      nombre: "Wade Morgan",
      pais: "México",
      edad: 20,
      area: "QA",
      puesto: "Backend Developer",
      seniority: "Semisenior",
      sueldo: 80000,
      haceGuardia: false,
      lenguajes: ["Java"],
    },
    {
      nombre: "Pepito Morgan",
      pais: "México",
      edad: 20,
      area: "QA",
      puesto: "Backend Developer",
      seniority: "Semisenior",
      sueldo: 80000,
      haceGuardia: false,
      lenguajes: ["Java"],
    },
    {
      nombre: "Pepita Morgan",
      pais: "México",
      edad: 20,
      area: "QA",
      puesto: "Backend Developer",
      seniority: "Semisenior",
      sueldo: 20000,
      haceGuardia: false,
      lenguajes: ["Java"],
    },
  ];
  
  // pasos    acc   -   empleade          index
  // inicial  0     -   'Wade Morgan'     0
  // 1        80000 -   'Pepito Morgan'   1
  // 2        160000 -  'Pepita Morgan'   2
  // 3        180000
  
  const sueldoPromedioTests = () => {
    const sueldoPromedioTests = tests.reduce((acc, test, index) => {
      console.log({ acc, test, index }); // esto nos va a mostrar el valor de los parametros en cada vuelta.
  
      return acc + test.sueldo;
    }, 0);
  
    return sueldoPromedioTests / tests.length
  };




