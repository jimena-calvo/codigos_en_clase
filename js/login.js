document.getElementById('loginForm').addEventListener('submit', function(e){
    e.preventDefault() //Evita que el formulario se envie de manera predeterminada
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

// FORMULARIO DE VALIDACION

    const usuario = usuarios.find(u => u.username === username && u.password === password)

    if(usuario){
        alert('Inicio de sesion exitoso.');
    }else{
        alert('Nombre de usuario o contraseña invalidos.');
    }

});



