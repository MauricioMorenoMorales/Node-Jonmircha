// 'use strict'
// const http = require('http')

// http.createServer((req, res) => {
// 	res.writeHead(200, {'Content-Type': 'text/html'})
// 	res.end('<h1>Hello World</h1>')
// }).listen(3000, "127.0.0.1")

// console.log('servidor inciado en puerto 3000')

'use strict'

const http = require('http')

const webServer = (req, res) => {
	res.writeHead(200, {'Content-Type': 'text/html'})
	res.end('<h1>Hola Mundo</h1>')
}

http
	.createServer( webServer )
	.listen(3000, "127.0.0.1")

console.log('Server initialized in localhost:3000')