function nombreEstudiante(){
    nombre = prompt(`Ingrese el nombre del estudiante: `);
    return nombre;
}

function ctnNotas(){
    ctn = Number(prompt('Ingrese la cantidad de notas del estudiante: '));
    return ctn;
}

function notas(){
    let notas = [];
    cantidadDeNotas = ctnNotas();
    for (i=1 ; i <= cantidadDeNotas ; i++){
        notaTmp = Number(prompt(`Ingrese la nota #${i}: `));
        notas.push(notaTmp); 
    }
    return notas
}

function promedio(arregloNotas){
    sumaNotas = 0;
    for(i=0 ; i<arregloNotas.length ; i++){
        sumaNotas = sumaNotas + arregloNotas[i];
    }
    let promedio = sumaNotas / arregloNotas.length;
    promedio_redondeado = promedio.toFixed(2); //Este lo que hace es redondear con 2 decimales
    return promedio_redondeado; 

}

function condicionEstudiante(promedioNotas){
    condicion = ''
    if (promedioNotas < 60){
        condicion = 'REPROBADO';
    }else if (promedioNotas >=60 && promedioNotas < 75){
        condicion = 'APLAZADO';
    }else{
        condicion = 'APROBADO';
    }
    return condicion
}

function main(){
    nombre = nombreEstudiante();
    listaNotas = notas();
    promedioNotas = promedio(listaNotas);
    condicion = condicionEstudiante(Number(promedioNotas)); 
    alert(`el estudiante ${nombre} obtuvo un promedio de ${promedio_redondeado} con condicion de ${condicion}` );
}

main();