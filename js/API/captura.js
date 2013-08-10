// Toma de Foto <> {}
function tomarFoto(){
	navigator.device.capture.captureImage(function(foto){
			for (i=0;i<foto.length;i++){ //recorremos el arreglo para ver las fotos que se tomaron
				ruta= foto[i].fullPath; //Fullpath indica la ruta donde esta guardada la imagen
			}
			$('#regFoto').attr('rel',ruta); //Le damos el atributo de la rutra abosluta que capturamos
			$('#mostrar').html('<img src="'+ruta+'" width="200"/>'); //Para mostrar la imagen abajo del botón, una vez que la hayamos toamdo
		},function(err){
			navigator.notification.alert('Error: '+err,code,null,'No capturado','Aceptar');
			},{limit: 2}); //En opciones son la cantidad de fotos para Andorid las que pongamos IOS 1 solamente
}