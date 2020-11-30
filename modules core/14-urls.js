'use strict'

const { inspector } = require('inspector')

/*
URl
Este modulo dispone de utilidades para la resolucion y analisis de urls

Query String
Este modulo proporciona utilidades para hacer frente a las cadenas de consulta
*/

let http = require('http'),
	path = require('path'),
	url = require('url'),
	urls = [
		{
			id: 1,
			route: '/',
			output: '<h2>Home</h2>'
		},
		{
			id: 2,
			route: 'acerca',
			output: '<h2>Acerca</h2>'
		},
		{
			id: 3,
			route: 'contacto',
			output: '<h2>Contacto</h2>'
		}
	]

	function webServer(req, res){
		let message = '<h1>Progando escritura</h1>',
			pathURL = path.basename(req.url),
			id = url.parse( req.url, true ).query.id

			console.log(`path:${pathURL}, id:${id}`)
			for (const pos of urls) {
				if(pos.route == pathURL || pos.id == id){
					res.writeHead(200, {'Content-Type': 'text/html'})
					res.end(message + pos.output)
				}
			}
			// url.forEach(pos => {
			// 	if(pos.route == pathURL){
			// 		res.writeHead(200, {'Content-Type': 'text/html'})
			// 		res.end(message + pos.output)
			// 	}
			// });
			if(!res.finished){
				res.writeHead(404, {'Content-Type': 'text/html'})
				res.end('<h1>Lo que estas buscando no se encuentra aqui xd</h1>')
			}
	}

http.createServer(webServer).listen(3000)

console.log('13-PATH.JS Servidor corriendo en http://localhost:3000/')