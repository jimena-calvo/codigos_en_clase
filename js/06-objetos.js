let libro = {
    titulo: "El Hobbit",
    autor: "J.R.R Tolkien",
    publicado: 1937, 
    disponibilidad: true
};

console.log(libro.titulo);


//simular que el libro fue prestado

const prestarLibro = function(){
    libro.disponibilidad =  false
};
prestarLibro();

if(libro.disponibilidad){ //si se pone aqui ==true es redundante para el codigo
    console.log(`El libro ${libro.titulo} que fue escrito por ${libro.autor} esta disponible !!!`)
}else{
    console.log(`El libro ${libro.titulo} se encuentra en prestamo !!!`);
};

let biblioteca = [
    {titulo : 'El Hobbit', autor: 'J.R.R Tolkien', publicado: 1937, disponible:true},
    {titulo : '1984', autor: 'Geroge Orwell', publicado: 1949, disponible:true},
    {titulo : 'La Fundacion', autor: 'Isaac Asimov', publicado: 1951, disponible:true},
];

// console.log(biblioteca);

for(i=0;i<biblioteca.length;i++){
    console.log(biblioteca[i].titulo);
}