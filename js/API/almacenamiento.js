// Almacenamiento <> {} []
function crearUsuario(nombre,did){
	window.localStorage.setItem('Usuario',nombre);
	window.localStorage.setItem('UID',did);
}
function isLogin(){
	if (window.localStorage.getItem(UID)!=undefined)
	return true;
	else
	return false;	
}
function accesoBD(){
	var db = window.openDatabase("hotel", "1.0", "Hotel BD", 2000000);
	return db;
}
function guardarReservas(th,pr,ha,di){
accesoBD.transaction(function(tx){
    tx.executeSql('CREATE TABLE IF NOT EXISTS reservas (id unique, th, pr, ha, di)');
    tx.executeSql('INSERT INTO reservas (th,pr,ha,di) VALUES ("'+th+'","'+pr+'","'+ha+'","'+di+'")');
	
	guardarHistorial(th,pr,ha,di);
	
	
}, function(err){
    alert("Error processing SQL: "+err);
}, function(){
    navigator.notification.alert("Los Datos se han guardado localmente, esperando una sincronización.",function(){
	window.location.href="#page";	
	},'Reserva Guardada','Aceptar');
});
}

function guardarHistorial(th,pr,ha,di){
	accesoBD.transaction(function(tx){
    tx.executeSql('CREATE TABLE IF NOT EXISTS historial (id unique, th, pr, ha, di)');
    tx.executeSql('INSERT INTO historial (th,pr,ha,di) VALUES ("'+th+'","'+pr+'","'+ha+'","'+di+'")');
	}, function(err){
    alert("Error processing SQL: "+err);
}, function(){
    navigator.notification.alert("Los Datos se han guardado en Historial.",null,'Historial Guardado','Aceptar');
});
}

function leerReservas(){
	accesoBD().transaction(function(tx)	{
		tx.executeSQL('SELECT * FROM reservas',[],function(tx2,res){
			for(i=0;i<res.rows.length; i++){
				var th = res.rows.item(i).th;
				var pr = res.rows.item(i).pr;
				var ha = res.rows.item(i).ha;
				var di = res.rows.item(i).di;				
				
				subirReservas(th,pr,ha,di,{id:res.rows.idem.(i).id}); //Estamos enviando un objeto on un atributo id con el valor del id del registro que estamos tomando en ese momento				
		}				
		},function(err){
			alert ('Error al leer registros');	
		});
	},function(err){
		alert ('error al leer reservas');	
	},function(){
		//Lectura Realizada
	});	
}

function eliminarReserva(id){
	accesoDB().transaction(function (tx){
		tx.executeSQL('DELETE FROM reservas WHERE id="'+id+'"');
	},function(err){
	alert('Error al eliminar reserva');	
	},function(){
		navigator.notification.alert('Reserva eliminada exitosamente',null,'Reserva','Aceptar');	
	});
}