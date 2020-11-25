//TRABAJO PRÁCTICO 2 - JS

//LOCAL DE VENTAS DE PCs

/*
Una empresa de venta de computadoras está desarrollando un sistema para llevar registro de ventas. Para ello cuenta con la siguiente información:

Lista de las vendedoras de la empresa
Lista de ventas. Un array con objetos. Cada objeto representa una venta y tiene las propiedades fecha, nombreVendedora (un String con el nombre), componentes (un array Strings con el nombre de cada componente vendido).
Lista de precios de los componentes, de la forma (nombre componente, precio).
*/

var local = 
{
    vendedoras: ["Ada", "Grace", "Hedy", "Sheryl"],
  
    ventas: 
    [
      // tener en cuenta que Date guarda los meses del 0 (enero) al 11 (diciembre)
      { 
          fecha: new Date(2019, 1, 4), 
          nombreVendedora: "Grace", 
          componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"] 
        },
      { 
          fecha: new Date(2019, 0, 1), 
          nombreVendedora: "Ada", 
          componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"] 
        },
      { 
          fecha: new Date(2019, 0, 2), 
          nombreVendedora: "Grace", 
          componentes: ["Monitor ASC 543", "Motherboard MZI"] 
        },
      { 
          fecha: new Date(2019, 0, 10), 
          nombreVendedora: "Ada", 
          componentes: ["Monitor ASC 543", "Motherboard ASUS 1200"] 
        },
      { 
          fecha: new Date(2019, 0, 12), 
          nombreVendedora: "Grace", 
          componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1200"] 
        }
    ],
  
    precios: 
    [
      { 
          componente: "Monitor GPRS 3000", 
          precio: 200 
        },
      { 
          componente: "Motherboard ASUS 1500", 
          precio: 120 
        },
      { 
          componente: "Monitor ASC 543", 
          precio: 250 
        },
      { 
          componente: "Motherboard ASUS 1200", 
          precio: 100 
        },
      { 
          componente: "Motherboard MZI", 
          precio: 30 
        },
      { 
          componente: "HDD Toyiva", 
          precio: 90 
        },
      { 
          componente: "HDD Wezter Dishital", 
          precio: 75 
        },
      { 
          componente: "RAM Quinston", 
          precio: 110 
        },
      { 
          componente: "RAM Quinston Fury", 
          precio: 230 
        }
    ]
};



/* ***************************************************

1. SE PIDE DESARROLLAR LAS SIGUIENTES FUNCIONES:

A) precioMaquina(componentes): recibe un array de componentes y devuelve el precio de la máquina que se puede armar con esos componentes, que es la suma de los precios de cada componente incluido.
*/

//FORMA 1:

    const precioMaquina = (componentesBusqueda) => {
        
        const resultado = local.precios.filter(precio => componentesBusqueda.includes(precio.componente))
        //.map(componente => console.log(componente.precio))
        .map(componente => componente.precio)
        
        .reduce((c1, c2) => c1 + c2, 0)
            
            
    return resultado ;
    }

    
//FORMA 2:
/*
    const precioMaquina = (componentes) => {
      let suma = 0;
      local.precios.filter(element => {
          for (let i = 0; i < componentes.length; i++) {
              if(element.componente === componentes[i]){
                  suma += element.precio;
              }
          }
      });
      return suma;
  }
*/


 //map: 
  //reduce: reducir todo el array a un valor usando una función

console.log(precioMaquina(["Monitor GPRS 3000", "Motherboard ASUS 1500"])); 
// 320 ($200 del monitor + $120 del motherboard)




/*
B) cantidadVentasComponente(componente): recibe un componente y devuelve la cantidad de veces que fue vendido, o sea que formó parte de una máquina que se vendió. La lista de ventas no se pasa por parámetro, se asume que está identificada por la variable ventas.
*/

const cantidadVentasComponente = (componente) => {
    const componentesVendidos = local.ventas.filter(venta => venta.componentes.includes(componente))
    return componentesVendidos.length
}


console.log( cantidadVentasComponente("Monitor ASC 543") ); // 2



/*
C) vendedoraDelMes(mes, anio), se le pasa dos parámetros numéricos, (mes, anio) y devuelve el nombre de la vendedora que más vendió en plata en el mes. O sea no cantidad de ventas, sino importe total de las ventas. El importe de una venta es el que indica la función precioMaquina. El mes es un número entero que va desde el 1 (enero) hasta el 12 (diciembre).
*/

const vendedoraDelMes = (mes, anio) => {
    const vendedoraMes = local.ventas.filter(venta => venta.fecha.getFullYear() == anio && venta.fecha.getMonth() == mes -1)
    .map(venta => [venta.nombreVendedora, precioMaquina(venta.componentes)])
    let ventasPorMes = {};
    //console.log(vendedoraMes) //Me indica las 4 ventas que se hicieron dentro de esas fechas y su total por venta. 
    vendedoraMes.forEach(venta => {
        if(!ventasPorMes[venta[0]]){
            ventasPorMes[venta[0]] = 0
    }
    ventasPorMes[venta[0]] += venta[1]
    });

    ventasOrdenadas = Object.keys(ventasPorMes).sort(function(a,b){
      return ventasPorMes[b]-ventasPorMes[a]
    });
    //console.log(ventasPorMes)// Me muestra el total de venta por vendedora

    return ventasOrdenadas[0] //Me muestra la vendedora con mayor venta. 

    }


console.log(vendedoraDelMes(1, 2019)); // "Ada" (vendio por $670, una máquina de $320 y otra de $350)




/*
D) ventasMes(mes, anio): Obtener las ventas de un mes. El mes es un número entero que va desde el 1 (enero) hasta el 12 (diciembre).
*/

//FORMA 1:
/*
    const ventasMes = (mes, anio) => {
        const ventasPorRangoDeMes = local.ventas.filter(venta => venta.fecha.getFullYear() == anio && venta.fecha.getMonth() == mes -1)
        .map(venta => precioMaquina(venta.componentes)).reduce((a, b) => a + b)
        //map: muestra todas las ventas en ese rango.  //reduce: para sumar todos los resultados
        return ventasPorRangoDeMes
    }

  
  console.log(ventasMes(1, 2019)); // 1250
*/

  //FORMA 2: 

  const ventasMes = (mes, anio) => {

  let ventasPorRangoDeMes = 0;
  for (venta of local.ventas) {
      if(venta.fecha.getFullYear() == anio && venta.fecha.getMonth() == mes -1){
        ventasPorRangoDeMes += precioMaquina(venta.componentes);
      }
  }
  return ventasPorRangoDeMes;
}
console.log(ventasMes(1, 2019)); // 1250





/*
E)ventasVendedora(nombre): Obtener las ventas totales realizadas por una vendedora sin límite de fecha.
 ** Osea, el monto de la venta total por vendedora (que yo ingreso el nombre), independientemente del mes. 
*/

//FORMA 1:

const ventasVendedora = (nombre) => {
  
    const ventasTotales = local.ventas.filter(venta => venta.nombreVendedora.includes(nombre))
    return ventasTotales//Acá ya tengo el total de ventas x vendedora (G=3, A=2).
    .map(venta => precioMaquina(venta.componentes)).reduce((a, b) => a + b)
    //Me indica las 3 ventas de Grace y el total por venta.      
}


 console.log( ventasVendedora("Grace") ); // 900



//FORMA 2:
/*
 const ventasVendedora = (nombre) => {
  let total = 0;
  for (venta of local.ventas) {
      if (venta.nombreVendedora === nombre) {
          total += precioMaquina(venta.componentes);
      }
  }
  return total;
}
//console.log(ventasVendedora("Ada"));
console.log('La vendedora elegida vendió ' + ventasVendedora("Grace") + ' dólares en total');
*/



/*
F) componenteMasVendido(): Devuelve el nombre del componente que más ventas tuvo historicamente. El dato de la cantidad de ventas es el que indica la función cantidadVentasComponente
 */



const componenteMasVendido = () => {
  let todosLosComponentes = [];
  const masVendido = local.ventas.map(componente => componente.componentes)
 

for (let key in masVendido) todosLosComponentes = todosLosComponentes.concat(masVendido[key]);
//Me devuelve un array con los componentes como strings.
//console.log(todosLosComponentes)

 var cantidadComponentesIguales = {};
 //mejor usar for of


 
 todosLosComponentes.map( function (i) { 
   if (i in cantidadComponentesIguales){ 
     cantidadComponentesIguales[i] ++; 
    }else {
      cantidadComponentesIguales[i] = 1; 
    }
  } 
   );

                                //lo convierte en array de las keys
   topMasVendido = Object.keys(cantidadComponentesIguales).sort(function(a,b){
     return cantidadComponentesIguales[b]-cantidadComponentesIguales[a]
    });

   return topMasVendido[0]

    }


console.log( componenteMasVendido() ); // Monitor GPRS 3000







/*
G) huboVentas(mes, anio): que indica si hubo ventas en un mes determinado. El mes es un número entero que va desde el 1 (enero) hasta el 12 (diciembre).
*/

const huboVentas = (mes, anio) => {

const ventasPorRangoDeMes = local.ventas.filter(venta => venta.fecha.getFullYear() == anio && venta.fecha.getMonth() == mes -1)

  if(ventasPorRangoDeMes.length >= 1){
    return true
    } else{
      return false
    }
}
 
console.log( huboVentas(3, 2019) ); // false



/* ***************************************************

2. SE PIDE DESARROLLAR LO SIGUIENTE: 

Como se abrió una nueva sucursal en Caballito, ahora los datos de las ventas también tienen el nombre de la sucursal en la cual se realizó. Por ejemplo: 
{ 
  fecha: new Date(2019, 1, 1), 
  nombreVendedora: "Ada", 
  componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], 
  sucursal: 'Centro' 
}

Por este cambio, se pide:


A) En las ventas ya existentes, tenemos que agregar la propiedad sucursal con el valor Centro (ya que es la sucursal original).
*/


const nuevaSucursal = () => {
  local.ventas.forEach(venta => {
    venta.sucursal = "Centro";
  });
}
nuevaSucursal()

console.log(local.ventas)



/*
B) Agregar al objeto principal la propiedad sucursales: ['Centro', 'Caballito']
*/

const nuevasSucursales = () => {
  local.sucursales = ['Centro', 'Caballito'];
} 

nuevasSucursales()

console.log(local)



/*
C) Cargar la siguiente información en el array ventas, creando sus respectivos objetos siguiendo el patrón: fecha, nombreVendedora, componentes, sucursal
*/

const nuevasVentas = () => {
  
  
  local.ventas.push({fecha: new Date(2019, 2, 12), nombreVendedora: "Hedy", componentes: ["Monitor GPRS 3000", "HDD Toyiva"], sucursal: "Centro"});  
  local.ventas.push({fecha: new Date(2019, 2, 24), nombreVendedora: "Sheryl", componentes: ["Motherboard ASUS 1500", "HDD Wezter Dishital"], sucursal: "Caballito"});
  local.ventas.push({fecha: new Date(2019, 2, 01), nombreVendedora: "Ada", componentes: ["Motherboard MZI", "RAM Quinston Fury"], sucursal: "Centro"});
  local.ventas.push({fecha: new Date(2019, 2, 11), nombreVendedora: "Grace", componentes: ["Monitor ASC 543", "RAM Quinston"], sucursal: "Caballito"});
  local.ventas.push({fecha: new Date(2019, 2, 15), nombreVendedora: "Ada", componentes: ["Motherboard ASUS 1200", "RAM Quinston Fury"], sucursal: "Centro"});
  local.ventas.push({fecha: new Date(2019, 2, 12), nombreVendedora: "Hedy", componentes: ["Motherboard ASUS 1500", "HDD Toyiva"], sucursal: "Caballito"});
  local.ventas.push({fecha: new Date(2019, 2, 21), nombreVendedora: "Grace", componentes: ["Motherboard MZI", "RAM Quinston"], sucursal: "Centro"});
  local.ventas.push({fecha:new Date(2019, 2, 08), nombreVendedora: "Sheryl", componentes: ["Monitor ASC 543", "HDD Wezter Dishital"], sucursal: "Centro"});
  local.ventas.push({fecha: new Date(2019, 2, 16), nombreVendedora: "Sheryl", componentes: ["Monitor GPRS 3000", "RAM Quinston Fury"], sucursal: "Centro"});
  local.ventas.push({fecha: new Date(2019, 2, 27), nombreVendedora: "Hedy", componentes: ["Motherboard ASUS 1200", "HDD Toyiva"], sucursal: "Caballito"});
  local.ventas.push({fecha: new Date(2019, 2, 22), nombreVendedora: "Grace", componentes: ["Monitor ASC 543", "HDD Wezter Dishital"], sucursal: "Centro"});
  local.ventas.push({fecha: new Date(2019, 2, 05), nombreVendedora: "Ada", componentes: ["Motherboard ASUS 1500", "RAM Quinston"], sucursal: "Centro"});
  local.ventas.push({fecha: new Date(2019, 2, 01), nombreVendedora: "Grace", componentes: ["Motherboard MZI", "HDD Wezter Dishital"], sucursal: "Centro"});
  local.ventas.push({ fecha: new Date(2019, 2, 07),nombreVendedora: "Sheryl", componentes: ["Monitor GPRS 3000", "RAM Quinston"], sucursal: "Caballito"});
  local.ventas.push({ fecha: new Date(2019, 2, 14), nombreVendedora: "Ada", componentes: ["Motherboard ASUS 1200", "HDD Toyiva"], sucursal: "Centro"});

} 

nuevasVentas();
console.log(local.ventas)

/*
D) Crear la función ventasSucursal(sucursal), que obtiene las ventas totales realizadas por una sucursal sin límite de fecha.
*/

const ventasSucursal = (sucursal) => {
  const ventasSucursales = local.ventas.filter(venta => venta.sucursal === sucursal)
  .map(venta => precioMaquina(venta.componentes)).reduce((a,b) => a + b)
  
  return ventasSucursales
}

console.log( ventasSucursal("Centro") ); // 4195




/*
E) Las funciones ventasSucursal y ventasVendedora tienen mucho código en común, ya que es la misma funcionalidad pero trabajando con una propiedad distinta. Entonces, ¿cómo harías para que ambas funciones reutilicen código y evitemos repetir?
*/

const sumaDeElementos = (ventas) => {
  return ventas.map(venta => precioMaquina(venta.componentes)).reduce((a,b) => a + b)
}


/******** ENTONCES la función "ventasSucursal" sería: 

const ventasSucursal = (sucursal) => {
  const ventasSucursalesFiltradas = local.ventas.filter(venta => venta.sucursal === sucursal)
  return sumaDeElementos(ventasSucursalesFiltradas)
}

console.log( ventasSucursal("Centro") ); // 4195

********/


/******** ENTONCES la función "ventasVendedora" sería: 

const ventasVendedora = (nombre) => {
  
  const ventasTotales = local.ventas.filter(venta => venta.nombreVendedora.includes(nombre))
  return sumaDeElementos(ventasTotales)      
}


console.log( ventasVendedora("Grace") ); // 1830 (El monto cambió porque se agregaron nuevas ventas)

********/




/*
F) Crear la función sucursalDelMes(mes, anio), que se le pasa dos parámetros numéricos, (mes, anio) y devuelve el nombre de la sucursal que más vendió en plata en el mes. No cantidad de ventas, sino importe total de las ventas. El importe de una venta es el que indica la función precioMaquina. El mes es un número entero que va desde el 1 (enero) hasta el 12 (diciembre).
*/


const sucursalDelMes = (mes, anio) => {
  const sucursalMes = local.ventas.filter(venta => venta.fecha.getFullYear() == anio && venta.fecha.getMonth() == mes -1)
  .map(venta => [venta.sucursal, precioMaquina(venta.componentes)])
  //console.log(sucursalMes)

  let ventasSucursalPorMes = {};
  sucursalMes.forEach(venta =>{
    if(!ventasSucursalPorMes[venta[0]]){
      ventasSucursalPorMes[venta[0]] = 0
    }
    ventasSucursalPorMes[venta[0]] += venta[1]
  });

  //console.log(ventasSucursalPorMes) //Esto lo que hace es sumar los montos para que me de la sucursal y el monto total de las ventas dentro de ese periodo de tiempo. 

  sucursalQueMasVendio = Object.keys(ventasSucursalPorMes).sort(function(a,b) {
    return ventasSucursalPorMes[b]-ventasSucursalPorMes[a]
  });

  
  return sucursalQueMasVendio[0]
}

console.log( sucursalDelMes(1, 2019) ); // "Centro"





/* ***************************************************

3. SE PIDE DESARROLLAR LO SIGUIENTE: 

Para tener una mejor muestra de como está resultando el local, queremos desarrollar un reporte que nos muestre las ventas por sucursal y por mes. Para esto, necesitamos crear las siguientes funciones:

a) renderPorMes(): Muestra una lista ordenada del importe total vendido por cada mes/año
*/

let primerTrimestre = [ "", "enero", "febrero", "marzo"];

const renderPorMes = (anio) => {
  console.log("Ventas por mes:"); 

   const listaRenderPorMes = primerTrimestre.forEach((key, value) => {
       if (ventasMes(value, anio) != 0 ) {
           console.log(`\tTotal de ${key} ${anio}: `, ventasMes(value, anio),`dólares`);
       }
      
   });
   return listaRenderPorMes;
}

console.log( renderPorMes(2019) );
// Ventas por mes:
//   Total de enero 2019: 1250
//   Total de febrero 2019: 4210 
//esto no puede ser porque la segunda lista de ventas, tiene 2 como mes y si 0 era 1, entonces 2 es 3(marzo), por ende, hay ventas en enero, febrero y marzo. 


//   Total de enero 2019: 1250
//   Total de febrero 2019: 320 
//   Total de marzo 2019: 3890 





/*
b) renderPorSucursal(): Muestra una lista del importe total vendido por cada sucursal
*/


const renderPorSucursal = () => {
  console.log("Ventas por sucursal:"); 

  local.sucursales.forEach(key => {
      if (ventasSucursal(key) != 0) {
          console.log(`\tTotal de ${key}: `, ventasSucursal(key),`dólares`);
      }
     
  });
  return ;
}

console.log( renderPorSucursal() );
// Ventas por sucursal:
//   Total de Centro: 4195
//   Total de Caballito: 1265



/*
c) render(): Tiene que mostrar la unión de los dos reportes anteriores, cual fue el producto más vendido y la vendedora que más ingresos generó.
*/



const render = () => {
  console.log("Reporte");
  renderPorMes(2019);
  renderPorSucursal();
  console.log(`Producto estrella: \n\t${componenteMasVendido()}`);

}

//me faltó la última. No sé cómo hacerlo. 





console.log( render() );
// Reporte
// Ventas por mes:
//   Total de enero 2019: 1250
//   Total de febrero 2019: 4210
// Ventas por sucursal:
//   Total de Centro: 4195
//   Total de Caballito: 1265
// Producto estrella: Monitor GPRS 3000
// Vendedora que más ingresos generó: Grace

