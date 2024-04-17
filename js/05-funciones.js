function saludo(){
    console.log('Hola a todos');
}

saludo();

// 02 Funciones con parametros

function saludo2 (nombre){
    console.log(`Hola ${nombre}, como esta usted?`);
}
saludo2('Jimena'); 

// 03 Funciones SIN parametros que retornan un valor 

function saludo3(){
    nombre='Fernando';
    saludo=`Hola ${nombre}, como esta usted?`;
    return saludo; 
}

// console.log(saludo3()) o
variableUno = saludo3();
console.log(variableUno);


function suma2valores(){
    a = 12;
    b = 13;
    c = a+b;
    return c;
}

respuesta = suma2valores();
console.log(respuesta);


// 04 Funciones CON parametros que retornan

function adicionar2valores(valor1,valor2){
    resultado = valor1 + valor2;
    return resultado
}
respuesta = adicionar2valores(23,23);
console.log(respuesta)




































// let sumaValores = 0;

// console.log(sumaValores);

// function suma(){
//     valor1 = 25;
//     valor2 = 33;
//     sumaValores = valor1+valor2;
// }

// suma();

// console.log(sumaValores);

// function sumaNumeros(a,b){
//     sumaValores = a+b
// }

// sumaNumeros(75, 33);

// console.log(sumaValores);

//pegar en funciones de la clase pasada 