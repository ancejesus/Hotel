// Cenexión al Servidor Externo
function subirDatos(nom,email,tel,foto){ //Creamos una función llamada subirDatos con 3 parametros que son los datos que solicitamos
    $.ajax({ //Sintaxis en jquery.com API Documentation jQuery.ajax
        type: "POST",
        url: "http://igitsoft.com/pgtest.php", //Cambiamos la ruta de nuestro servidor que tenemos nuestro php '"some.php"'
        data: 'nom='+nom+'&mai='+email+'&tel='+tel //Asignamos variables a nuestros parámetros
		//Modificamos las variables que vamos a enviar al servidor "{ name: "John", location: "Boston" }"
    }).done(function(msg) {
        if(msg==1){
           subirFoto(foto);
        }else{
            navigator.notification.alert('Error al Procesar Datos', null, 'Error','Aceptar');
        }
    });
} //Cerramos la funcion subirDatos