'use strict'

const { inspector } = require('inspector')

let
	http = require('http'),
	fs = require('fs'),
	path = require('path'),
	url = require('url'),
	urls = [
		{
			id: 1,
			route: '/',
			output: 'assets/index.html'
		},
		{
			id: 2,
			route: 'acerca',
			output: 'assets/acerca.html'
		},
		{
			id: 3,
			route: 'contacto',
			output: 'assets/contacto.html'
		}
	]

	function webServer(req, res){
		let
			pathURL = path.basename(req.url),
			id = url.parse( req.url, true ).query.id

			console.log(`path:${pathURL}, id:${id}`)
			for (const pos of urls) {
				if(pos.route == pathURL || pos.id == id){
					res.writeHead(200, {'Content-Type': 'text/html'})
					fs.readFile(pos.output, function(err, data){
						if(err){ throw err }
						res.end(data)
					})
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
				fs.readFile('assets/404.html', (err, data) =>{
					if(err) throw err
					res.end(data)
				})
			}
	}

http.createServer(webServer).listen(3000)

console.log('13-PATH.JS Servidor corriendo en http://localhost:3000/')