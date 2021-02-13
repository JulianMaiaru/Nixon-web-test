var nombre = document.getElementById('name');
var email = document.getElementById('email');
var mensaje = document.getElementById('mensaje');
var error = document.getElementById('error')


function enviarFormulario(){
    console.log('Enviando formulario...')

    var mensajesError = [];

    if(nombre.value === null || nombre.value === ''){
    mensajesError.push('Please provide a Name');
}

if(email.value === null || email.value === ''){
    mensajesError.push('Please provide a Name');
}

if(mensaje.value === null || mensaje.value === ''){
    mensajesError.push('Please provide a Name');
}

error.innerHTML = mensajesError.join(', ');

return false;
}