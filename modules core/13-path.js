'use strict'

const { url } = require('inspector')

/*
Path
Contiene utilidades para manejar y transformar las rutas de los directorios y archivos a formato de cadena. El
sistema de archivos no es consultado para comprobar si los caminos son válidos
*/

let http = require('http'),
	path = require('path'),
	urls = [
		{
			route: '/',
			output: '<h2>Home</h2>'
		},
		{
			route: 'acerca',
			output: '<h2>Acerca</h2>'
		},
		{
			route: 'contacto',
			output: '<h2>Contacto</h2>'
		}
	]

	function webServer(req, res){
		let message = '<h1>Hola Node.js</h1>',
			pathURL = path.basename(req.url)

			console.log(pathURL)
			for (const pos of urls) {
				if(pos.route == pathURL){
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
				res.end('<h1>Error 404 Not Found</h1>')
			}
	}

http.createServer(webServer).listen(3000)

console.log('13-PATH.JS Servidor corriendo en http://localhost:3000/')