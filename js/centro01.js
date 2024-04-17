// function sumaNumeros(n){
//     acumulador = 0;
//     for(i=1; i<=n; i++){
//         acumulador = acumulador + i;
//         console.log(i);
//     }
//     console.log(acumulador);
// }

// function recibeDatosNumericos(){ //va a recibir parametros
//     parametro = Number(prompt());
//     return parametro
// }

function nombre(){
    nombrePaciente= prompt('Ingrese su nombre: ');
    return nombrePaciente;
}

function imc(){
    peso = Number(prompt(`Ingrese su peso en Kilogramos: `));
    altura = Number(prompt(`Ingrese su altura en Metros: `));

    imc = peso/(altura**2);

    return imc;
}

function condicionImc (imc){
    condicion = '';
    if (imc < 18.5 ){
        condicion = '***BAJO PESO***';
    }else if(imc >= 18.5 && imc <= 24.9){
        condicion = '***SALUDABLE***';
    }else if(imc >= 25 && imc < 30){
        condicion = '***SOBREPESO***';
    }else if (imc <=30 && imc <40){
        condicion = '***OBESIDAD***';
    }else{
        condicion = '***OBESIDAD SEVERA***';
    }
    return condicion;
}

 function main(){
    nombreCliente = nombre();
    imcCliente = imc();
    condicionCliente = condicionImc(imcCliente);
    alert(`${nombreCliente}, su indice de masa corporal es ${imcCliente}, por lo que su condicion es de ${condicionCliente}`);
 }

main()
