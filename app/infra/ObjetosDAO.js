function ObjetosDAO( connection ) {
	this._connection = connection;
}

ObjetosDAO.prototype.lista = function( callback ) {
	this._connection.query( 'SELECT * FROM objetos', callback );
}

ObjetosDAO.prototype.salva = function( produto, callback ) {
	this._connection.query( 'INSERT INTO objetos SET ?', produto, callback );
}

module.exports = function() {
	return ObjetosDAO;
}