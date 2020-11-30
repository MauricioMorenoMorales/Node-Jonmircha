'use strict'

const webServer = (req, res) => {
	function readFile(err, data){
		if(err) throw err
		res.end(data)
	}
	res.writeHead(200, {'Content-Type': 'text/html'})
	fs.readFile('./assets/index.html', readFile)
}

const http = require('http').createServer(webServer),
	fs = require('fs')

http.listen(3000)

console.log('Server initialized in localhost:3000')