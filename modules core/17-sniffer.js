+'use strict'
const http = require('http');
let options = {
	host: 'jonmircha.com',
	port: 80,
	path: '/en'
}
let htmlCode = ''

function httpClient(res){
	console.log(`El sitio ${options.host} ha respondido, Código de Estado: ${res.statusCode}`)
	res.on('data', function(data){
		htmlCode += data
		console.log(
			data,
			data.toString()
		)
	})
}

function httpError(err){
	console.log(`El sitio ${options.host} no respondio, Código de Estado: ${err.code} Error: ${err.message}`)
}

function webServer(req, res){
	res.writeHead(200, {'Content-Type': 'text/html'})
	res.end(htmlCode)
	console.log('servidor corriendo en el puerto 3000')
}

http
	.get(options,httpClient)
	.on('error', httpError)
http
	.createServer(webServer)
	.listen(3000)