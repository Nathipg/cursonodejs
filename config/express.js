// Módulo criado para configurar o express

let express = require('express');
let load = require('express-load');
let bodyParser = require('body-parser');

module.exports = function () {
	let app = express();

	// Define caminho estático para a pasta public
	app.use( express.static('./app/public') );
	// Define variável que será utilizada em toda aplicação
	// No caso, a engine de renderização
	app.set( 'view engine', 'ejs' );
	app.set( 'views', './app/views' );

	// Utiliza o bodyParser para tratar a requisição
	app.use( bodyParser.urlencoded( {extended: true} ) );

	// Configura o load com o local onde serão carregados os módulos
	// cwd: define a pasta onde vai procurar
	load( 'routes', {cwd: 'app'} )
		.then( 'infra' )
		.into( app );

	return app;
}