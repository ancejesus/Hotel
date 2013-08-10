function subirDatos(nom,email,tel,foto){
    $.ajax({
        type: "POST",
        url: "http://igitsoft.com/pgtest.php",
        data: 'nom='+nom+'&mai='+email+'&tel='+tel
    }).done(function(msg) {
        if(msg==1){
            navigator.notification.confirm('Datos subidos Correctamente', function(btn){
                switch(btn){
                    case 1:
                        navigator.notification.vibrate(500);
                        break;
                    case 2:
                        navigator.notification.beep(2);
                        break;
                }
            },'Confirmación','Vibrar, Beep, Cancelar');
        }else{
            navigator.notification.alert('Error al Procesar Datos', null, 'Error','Aceptar');
        }
    });
}

// Cenexión al Servidor Externo
//function subirDatos(nomb,email,tel,foto){ //Creamos una función llamada subirDatos con 3 parametros que son los datos que solicitamos

	//	$.ajax({ //Sintaxys del AJAX con POST
		//  type: "POST",
		 // url: "http://igitsoft.com/pgtest.php", //Cambiamos la ruta de nuestro servidor que tenemos nuestro php '"some.php"'
		 // data: 'nom='+nom+'&mai='+email+'&tel='+tel //Asignamos variables a nuestros parámetros
		  //Modificamos las variables que vamos a enviar al servidor "{ name: "John", location: "Boston" }"
	//	}).done(function( msg ) { 
		//	if (msg==1){
	//	navigator.notification.confirm('Datos enviados correctamente',function(btn){
		//		switch(btn){ 
			//		case 1:
				//		navigator.notification.vibrate(2000); //Tiempo en milisegundos de Vibración
					//	break;
		//			case 2:
			//			navigator.notification.beep(3); //Número de beep 
				//		break;
					//case 3:
						//Para el caso de cancelar no asignamos nada lo dejamos así
					//break;
		//		}
	//		},'Confirmación','Vibrar, Beep, Cancelar');
		   //Modificamos la funcion que resivimos de nuestro servidor por una notificacion de phonegap	""alert( "Data Saved: " + msg );
		//	}else{
			//	navigator.notification.alert('Error al Procesar Datos',null,'error','Aceptar');
	//		}
	//	});
//	}   //Cerramos la funcion subirDatos