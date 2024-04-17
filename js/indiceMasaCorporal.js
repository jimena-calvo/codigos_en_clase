let peso = 0;
let estatura = 0;
let condicion = '';
let indice = 0;

peso = parseFloat(prompt('Por favor ingrese su peso en Kilogramos: '));

estatura = parseFloat(prompt('Por favor ingrese su estatura en metros: '));

indice = peso / (estatura)**2;

if (indice < 18.5){
    condicion =  '**BAJO PESO**';
}else if (indice >= 18.5 && indice <= 24.9){
    condicion = '**SALUDABLE**';
}else if (indice >= 25 && indice <= 29.9){
    condicion = '**SOBREPESO**';
}else if (indice >= 30 && indice <= 39.9){
    condicion = '**OBESIDAD**';
}else {
    condicion = '**OBESIDAD SEVERA**';
}


alert(`Su índice de masa corporal es ${indice} por lo que su condición es ${condicion}` );
