//Archivos
function subirFoto(foto){
	var options = new FileUploadOptions();
	options.fileKey = "archivo";
	options.fileName = "Carlos";

	var ft = new FileTransfer();
	ft.upload(foto, "http://igitsoft.com/pgtest.php", function(r){
		if(r.response==1){
			navigator.notification.confirm('Datos subidos Correctamente', function(btn){
                switch(btn){
                    case 1:
                        navigator.notification.vibrate(500);
                        break;
                    case 2:
                        navigator.notification.beep(2);
                        break;
                }
				window.location.href = '#page';
            },'Confirmación','Vibrar, Beep, Cancelar');
		}else{
            navigator.notification.alert('Error al Subir Foto', null, 'Error','Aceptar');
        }
	}, function(error){
		alert("An error has occurred: Code = " + error.code);
	}, options);
}