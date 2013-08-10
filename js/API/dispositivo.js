// Dispositivo <> {} []
function disp() {
	//Una funcion que no tiene ningun parametro
	var arr = new Array();
	//Creamos un arreglo en JavaScript o abriendo u cerrando corchetes []
	arr['name']=device.name;
	arr['phonegap']=device.cordova;
	arr['platform']=device.platform;
	arr['id']=device.uuid;
	arr['version']=device.version;
	arr['model']=device.model;	
	
	return arr; //Retornamos el arreglo para ponerlo en otro archivo
}