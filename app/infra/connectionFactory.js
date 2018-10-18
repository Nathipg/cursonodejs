// Objeto do mysql
let mysql = require('mysql');

function createDbConnection() {
	// Criando conexão
	return mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: 'root',
		database: 'cadastros_nodejs'
	});
}

module.exports = function() {
	return createDbConnection;
}