function subirDatos(nom,email,tel,foto){
    $.ajax({
        type: "POST",
        url: "http://igitsoft.com/pgtest.php",
        data: 'nom='+nom+'&mai='+email+'&tel='+tel
    }).done(function(msg) {
        if(msg==1){
            subirFoto(foto, nom);
        }else{
            navigator.notification.alert('Error al Procesar Datos', null, 'Error','Aceptar');
        }
    });
}

function subirReservas(th,pr,ha,di,tp){
	$.ajax({
        type: "POST",
        url: "http://igitsoft.com/pgtest.php",
        data: 't='+th+'&pr='+pr+'&ha='+ha+'&di='+di
    }).done(function(msg){
        if(msg==1){
            navigator.notification.alert('Reserva Realizada Correctamente',function(){
				if(tp==1)
					guardarHistorial(th,pr,ha,di);
				else
					eliminarReserva(tp.id);
			},'Reservación','Aceptar');
        }else{
            navigator.notification.alert('Error al Procesar Datos', null, 'Error','Aceptar');
        }
    });
}