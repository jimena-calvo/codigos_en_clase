document.getElementById('form').addEventListener('submit', function(e){
    e.preventDefault() 

    const inicio = document.getElementById('inicio').value;
    const fin = document.getElementById('fin').value;

    let div = document.getElementById('listaLibros');
    let table = document.getElementById('libros');

    const librosEncontrados = biblioteca.filter(function(libro){
        return libro.añoDePublicacion >= inicio && libro.añoDePublicacion <= fin
    });

    table.innerHTML = '';
    
    if(librosEncontrados.length==0){
        let p = document.createElement('p');
        p.innerHTML = `Ningun libro encontrado :(`
        table.append(p);
        
    }else{
        for(libro of librosEncontrados){
            let td = document.createElement('td');
            td.innerHTML = `
                <strong>Nombre: </strong>${libro.titulo}</br>
                <strong>Autor: </strong>${libro.autor}</br>
                <strong>Año de publicación: </strong>${libro.añoDePublicacion}</br>
            `;

            td.style.marginBottom = "1em";
    
            table.append(td)
        }
        
    }
})