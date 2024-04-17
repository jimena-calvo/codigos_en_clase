document.getElementById('form').addEventListener('submit', function(e){
    e.preventDefault() 

    const inicio = document.getElementById('inicio').value;
    const fin = document.getElementById('fin').value;

    let div = document.getElementById('listaLibros');
    let ol = document.getElementById('libros');

    const librosEncontrados = biblioteca.filter(function(libro){
        return libro.añoDePublicacion >= inicio && libro.añoDePublicacion <= fin
    });

    ol.innerHTML = '';
    
    if(librosEncontrados.length==0){
        let p = document.createElement('p');
        p.innerHTML = `Ningun libro encontrado :(`
        ol.append(p);
        
    }else{
        let titulo = document.createElement('h2')
        titulo.innerHTML = 'Libros Encontrados:'
        ol.append(titulo)

        for(libro of librosEncontrados){
            let li = document.createElement('li');
            li.innerHTML = `
                <strong>Nombre: </strong>${libro.titulo}</br>
                <strong>Autor: </strong>${libro.autor}</br>
                <strong>Año de publicación: </strong>${libro.añoDePublicacion}</br>
            `;
            li.style.marginBottom = "1em";
            ol.style.paddingRight = '1em';
            ol.style.border = 'dashed rgb(131, 170, 131)';
    
            ol.append(li)

        }
        
    }
})





