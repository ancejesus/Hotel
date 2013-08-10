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