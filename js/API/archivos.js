// Archivos	<> {}
function subirFoto(foto){
	
	
	//var win = 

	//var fail = 

	var options = new FileUploadOptions();
	options.fileKey = "archivo"; // nombre del archivo en el arreglo
	options.fileName = "chucho"; //Nombre del archivo con el que se va a subior en el servidor
	//fileURI.substr(fileURI.lastIndexOf('/') + 1)
	//options.mimeType = "text/plain";  Dejamos el mimetype que tiene por defecto

	//var params = {};
	//params.value1 = "test";
	//params.value2 = "param";		Quitamos  los parametros
	//options.params = params;
	
	var ft = new FileTransfer(); //Creamos una variable y la instanciamos para ser un bojeto de filetransfer llamada ft
	ft.upload(foto, "http://igitsoft.com/pgtest.php", function (r) {
  //  console.log("Code = " + r.responseCode);
    if (r,response==1){
		 navigator.notification.confirm('Datos subidos Correctamente', function(btn){
                switch(btn){
                    case 1:
                        navigator.notification.vibrate(2000); //Tiempo en milisegundos de Vibración
                        break;
                    case 2:
                        navigator.notification.beep(3); //Número de beep 
                        break;
						//Para el caso de cancelar no asignamos nada lo dejamos así
                }
				window.location.href='#page';
            },'Confirmación','Vibrar, Beep, Cancelar'); //Modificamos la funcion que resivimos de nuestro servidor por una notificacion de phonegap	""alert( "Data Saved: " + msg );
		 }else{
            navigator.notification.alert('Error al Subir Datos', null, 'Error','Aceptar');
        }
//	console.log("Response = " + r.response);
  //  console.log("Sent = " + r.bytesSent);
	}, function (error) {
    alert("An error has occurred: Code = " + error.code);
   // console.log("upload error source " + error.source);
   // console.log("upload error target " + error.target);
	}, options);
	
	//Ha FT le mandamos a llamas el evento upload, y le pasa 5 parametros, la primera manda a llamar la variable fileURI, 2do manda a llamar el servidor pero lo codifica usando la funcion encodeURI, 3ro funcion win, 4to funcion fail y por ultimo a las opciones
	//Cambiamos el nombre de la funcion por la de nosotos "foto" por fileURI
	//Remplazamos el link por el de nuestro servidor ""http://igitsoft.com/pgtest.php""
	// Quitamos la codificacion encodeURI ya que no funciona lo mandamos como cadena de texto
	//donde llamamos la funcion WIN lo reemplazamos por compelto 
		
}