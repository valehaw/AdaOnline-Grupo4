
/************* EJERCICIO 11 ****************/

// Crear un programa que muestre el dinero inicial, y que permita retirar dinero preguntando 
// cuánto se desea retirar, y mostrando el dinero restante a continuación. Si se intenta retirar 
// más dinero del disponible, o no cuenta con dinero disponible, debe mostrar un mensaje alertándolo 
// e impedir seguir retirando.

let dineroInicial = 1000; 

let retirar = parseInt(prompt("Su saldo actual es: " + dineroInicial + " pesos. Cuánto dinero desea retirar?"));
   
    if(retirar <= dineroInicial){
        montoRestante = dineroInicial - retirar;
        alert('Su saldo es: ' + montoRestante + ' pesos');
    }else {
        alert("Ese monto no es válido");
    }




