// app para calcular el promedio de un estudiante y determinar si el estudiante reprobo (Notas inferiores a 60), aplazo(Nota mayor a 60 pero menos que 75) o aprobo el curso. 

let nombre = '';
let cntNotas = 0;
let notas = [];
let sumaArreglo = 0
let promedio = 0
let condicion = ''

nombre = prompt('Por favor ingrese el nombre del estudiante: ');

cntNotas = Number(prompt('Ingrese la cantidad de notas a evaluar: '));

for (i = 1; i <= cntNotas; i++){
    notaTmp = Number(prompt(`Ingrese la nota #${i}`));
    notas.push(notaTmp);

}
for (i=0; i<notas.length;i++){
    sumaArreglo=sumaArreglo + notas[i];
}

promedio=sumaArreglo/cntNotas;

if (promedio < 60){
    condicion = 'REPROBADO';
}else if (promedio > 60 && promedio < 75){
    condicion = 'APLAZADO';
}else{
    condicion = 'APROBADO';
}

alert(`El alumno ${nombre} obtubo un promedio de ${promedio}, por lo que tiene una condicion de ${condicion}`);








