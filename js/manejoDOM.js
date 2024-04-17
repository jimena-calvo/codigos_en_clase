// cambiar el titulo por medio del boton ///// ASIGNAR VARIABLES A TODO LO QUE TENGA UNA INTERACCION
let titulo = document.getElementById('titulo');

let botonCambiar = document.getElementById('botonCambiar');

let parrafo = document.getElementById('parrafo');

botonCambiar.addEventListener('click', function(){
    titulo.textContent = 'Me cambiaron a traves del DOM';
    titulo.style.color = 'darkblue';
    parrafo.textContent = 'Tambien me cambiaron a traves del DOM';
    parrafo.style.fontSize = '32px';
    parrafo.style.color = 'white';
    parrafo.style.backgroundColor = 'blue';
});

document.getElementById('miBoton').addEventListener('click', function(event){
    alert('Dije que no me presionara!!!!')
});


