// Eventos <> {}
$(document).ready(function(){
	document.addEventListener("deviceready", function(){
		if(!isLogin())
			window.location.href = "#login";
		$('#regSend').tap(function(){
			var nom = $('#regNom').val();
			var mail = $('#regEmail').val();
			var tel = $('#regTel').val();
            var foto = $('#regFoto').attr('rel');

			if(nom != '' && mail != '' && tel != '' && foto != undefined && foto != ''){
				subirDatos(nom,mail,tel,foto);
			}else{
				navigator.notification.alert('Todos los campos son requeridos', null, 'Registro','Aceptar');
			}
		});
        $('#regFoto').tap(function(){
            tomarFoto();
        });
		$('#nr1 div[data-role=content] ul li').tap(function(){
			if($(this).index()>0){
				var padre = $(this).parents('ul');
				padre.find('li').removeAttr('style');
				$(this).css('background','#0F0');
				$('#nr1').attr('th',$(this).index());
			}
		});
		$('#resSig').tap(function(){
			if($('#nr1').attr('th')!=undefined && $('#nr1').attr('th')!=''){
				window.location.href='#nr2';
			}
		});
		$('#resSend').tap(function(){
			var th = $('#nr1').attr('th');
			var pr = $('#resPer').val();
			var ha = $('#resHab').val();
			var di = $('#resDia').val();

			if(isConnected()){
				subirReservas(th,pr,ha,di,1);
			}else{
				guardarReservas(th,pr,ha,di);
			}
		});
		document.addEventListener("online",function(){
			leerReservas();
		}, false);
	}, false);
});