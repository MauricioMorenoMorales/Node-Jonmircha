'use strict'
const http = require('http');
let options = {
	host: 'jonmircha.com',
	port: 80,
	path: '/en'
}

http
	.get(options, function(res){
		console.log(`El sitio ${options.host} ha respondido, Código de Estado: ${res.statusCode}`)
	})
	.on('error', function(err){
		console.log(`El sitio ${options.host} no respondio, Código de Estado: ${err.code} Error: ${err.message}`)
	})