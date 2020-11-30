'use strict'


const http = require('http').createServer()

const webServer = (req, res) => {
	res.writeHead(200, {'Content-Type': 'text/html'})
	res.end('<h1>Hola Mundo</h1>')
}

http
	.on('request', webServer)
	.listen(3000, "127.0.0.1")

console.log('Server initialized in localhost:3000')