
/*validacion de contacto*/

function validation(){
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var asunto = document.getElementById("asunto").value;
    var mensaje = document.getElementById("mensaje").value;
    var respuesta = document.getElementById("respuesta");
    var text;

    respuesta.style.padding = "10px";

    if(nombre.length < 5){
        text = "Por favor ingrese un nombre valido"
        respuesta.innerHTML = text;
        return false;
    }

    if(asunto.length > 10){
        text = "Por favor ingrese un asunto que contenga menos de 10 caracteres"
        respuesta.innerHTML = text;
        return false;
    }

/*     if(isNaN(telefono) || telefono.lenght != 10){
        text = "Por favor ingrese un numero valido"
        respuesta.innerHTML = text;
        return false;
    }
 */
    if(email.indexOf("@") == -1 || email.lenght < 6){
        text = "Por favor ingrese un correo electronico valido"
        respuesta.innerHTML = text;
        return false;
    }
    if(mensaje.length >= 140) {
        text = "Por favor ingrese un mensaje que contenga menos de 140 caracteres"
        respuesta.innerHTML = text;
        return false;
    }

    if(mensaje.length == 0) {
        text = "Por favor ingrese un mensaje"
        respuesta.innerHTML = text;
        return false;
    }

 
    alert("El formulario ha sido enviado!")
    return true;
}





/* const $form = document.querySelector('#contactform')

$form.addEventListener('submit', handleSubmit)

function handleSubmit(event) {
    const form = new FormData($form)
    console.log(form.get('nombre'))
    console.log('Hola funciono')
}

 */