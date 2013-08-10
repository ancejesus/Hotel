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