module.exports = function ( app ) {
	// Tratando rota objetos
	app.get( '/objetos', function( requisicao, resposta ) {
		let connection = app.infra.connectionFactory();
		let objetoDAO = new app.infra.ObjetosDAO( connection );

		// Consulta - Retorno em json
		objetoDAO.lista( function( erro, resultado ) {
			resposta.render('objetos/lista', { lista: resultado });
		});

		connection.end();
	});

	app.get( '/objetos/cadastro', function( requisicao, resposta ) {
		resposta.render('objetos/form');
	});

	app.post( '/objetos', function( requisicao, resposta ) {
		let connection = app.infra.connectionFactory();
		let objetoDAO = new app.infra.ObjetosDAO( connection );

		let objeto = requisicao.body;

		objetoDAO.salva( objeto, function( erro, resultado ) {
			app.get('io').emit('novoObjeto', {objeto: objeto} );
			resposta.redirect( '/objetos' );
		});
	});
}