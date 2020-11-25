
/*console.log((5 === "5" || false) && false);

if(5 == "5"){
    console.log("Es verdadero");
}else{
    console.log("Es falso");
}
*/

let _var = (5 === "5") ? 'es verdadero' : 'es falso';

console.log(_var)

//en consola: "es falso"


const texto = 'devuelve true';

let a = (5 == '5')
    ? 'devuelve true' == texto
    ? 'devuelve true'
    : 'devuelve false'
    : 'devuelve false';

    console.log(a);

    //en consola: "devuelve true"
    //esta forma ya es muy complicada de entender... luego si otro toma mi código no va a entener.. o yo al tiempo. 



    const texto2 = 'devuelve true';

let otro = (5 == '5')
    ? 'devuelve true' 
    : 'devuelve true'
   
    console.log(otro);
    
    //en consola: "devuelve true"



const texto3 = 'devuelve true';

//false;
//null = false;
//undefined = false; cuando no ha sido definido
//NaN = false; quieres hacer una cuenta y no se puede hacer (sumar 5 + A)
//0 = false; 
//'' = false;

let valor;
console.log(valor);
//me tira undefined
