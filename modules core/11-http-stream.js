'use strict'

const webServer = (req, res) => {
	res.writeHead(200, {'Content-Type': 'text/html'})
	index.pipe(res)
}

const http = require('http').createServer(webServer),
	fs = require('fs'),
	index = fs.createReadStream('./assets/index.html')

http.listen(3000)

console.log('Server initialized in localhost:3000')