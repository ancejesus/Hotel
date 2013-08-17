// Conexión  <> {} []
function isConnected(){
	if(navigator.connection.type==Connection.NONE)
		return false;
	else
		return true;
}