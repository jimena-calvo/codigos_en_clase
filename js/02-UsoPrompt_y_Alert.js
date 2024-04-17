let nota1 = parseFloat(prompt("Ingrese la nota 1: "));
let nota2 = parseFloat(prompt("Ingrese la nota 2: "));
let nota3 = parseFloat(prompt("Ingrese la nota 3: ")); /*Si es un numero lo convierte, caso contrario devuelve un NaN*/

sumaNotas = (nota1 + nota2 + nota3)
promedio = sumaNotas / 3;


let mensaje = "La condicion del estudiante es: "
let estado = ""

if (promedio >= 75){
    estado = "Aprobado";
}else if (promedio >=60 && promedio < 75){
    estado= "Aplazado"
}else{
    estado = "Reprobado"
}
console.log(`La suma de las notas es ${sumaNotas}`);
console.log(`Promedio calculado: ${promedio}`);
console.log(mensaje+estado);

alert(mensaje+estado)