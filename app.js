// Importa e configura biblioteca do express
let app = require('./config/express')();
let http = require('http').Server( app );
let io = require('socket.io')( http ); // Não aceita o express, precisa ser o do node

app.set( 'io', io );

// Roda servidor
http.listen( 3000, function() {
	console.log('Servidor rodando');
});