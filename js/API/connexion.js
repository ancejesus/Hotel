// Conexión  <> {} []
function isConnected(){
	if(navigator.connection.type == Connection.NONE) //No importa el tipo de conexion que haya siempre y cuando haya conexion a internet *WiFi Ethernet 3G etcs
	return false;
	else
	return true;	
}