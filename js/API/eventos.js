// Eventos <> {}
$(document).ready(function(e) { // Cargamos la libreria de Java
	document.addEventListener("deviceready",function(){ //Cargamos la libreria de Phonegap
	window.location.href="#login"; //Mandamos nuestra página de Login
	$('#regSend').click(function(){; //Capturamos el boton clic
    var nom= $('#regNom').val(); 
	var mail=$('#regEmail').val();
	var tel= $('#regTel').val();
	var foto=$('#regFoto').attr('rel');
	
	if(nom != '' && mail != '' && tel !='' && foto!= undefined && foto != ''){ //Comprobamos que no vengan vacíos los campos
	subirDatos(nom,mail,tel,foto); //Este es el js de la funcion Servidor	
		//Modificamos esta línea y la cambiamos por el mandar a llamar nuestra funcion en servidor.js navigator.notification.alert(nom+'\n'+mail+'\n'+tel,null,'Hotel','Bienvenido'); //Mensaje de Phonegap
	}else{
		navigator.notification.alert('Todos los Campos son requeridos',null,'Registro','Aceptar');
	}
	});	
	$('#regFoto').tap(function(){ //Mandamos a llamar la funcion del tab regsend
	tomarFoto();
	}); 	
	}, false); //Librerias de Phonegap
});