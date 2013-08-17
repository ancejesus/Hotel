// Eventos <> {}
$(document).ready(function(e) { // Cargamos la libreria de Java
	document.addEventListener("deviceready",function(){ //Cargamos la libreria de Phonegap
	if (!isLogin()) //Si no esta registrado que nos redireccione
	window.location.href="#login"; //Mandamos nuestra página de Login
	$('#regSend').tap(function(){; //Capturamos el boton clic cambiamos clic por tap
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
	$('#nr1 div[data-role=content] ul li').tap(function(){
		if($(this).index()>0){; //MAnda el indice del div en que posicion esta o damos clic del tap
		var padre = $(this).parents('ul');
		padre.find('li').removeAttr('style');
		$(this).css('background','#F60');
		$('#nr1').attr('th',$(this).index()); //A el div seleccionado le agrega el aributo th
		
		}
		});
		//Vamos a capturar el id del boton siguiente
		$('#resSig').tap(function(){
			if($('#nr1').attr('th')!=undefined && $('#nr1').attr('th')!='')
			{
				window.location.href='#nr2';				
				}
			});		
			
		$('#resSend').tap(function(){
			var th=$('#nr1').attr('th');		
			var pr=$('#resPer').val();
			var ha=$('#resHab').val();
			var di=$('#resDia').val();
			if(isConnected()){
			//Enviar a Servidor	
			subirReservas(th,pr,ha,di,1);			
			}else{
			//Guardar localmente	
			guardarReservas(th,pr,ha,di);			
			}
		});
		document.addEventListener("Online",function(){
			leerReservas();
		}, false);		
	}, false); //Librerias de Phonegap	
});