/*
Streams
	'Chorros' de informacion que se transmiten en 'Pedazos' (Chunks)
	3 tipos: Lectura / Escritura / Duplex
	Acceso asincrono
	Es raro crear streams directamente
	Pero muchos recursos nos ofrecen este interfaz
	Detras de muchos mecanismos de Node.JS
		stdin/stdout
		request de HTPP
		Sockets
		Manipulacion de Ficheros/Imagenes
 */

'use strict'

let fs = require('fs'),
	readStream = fs.createReadStream('./assets/nombres.txt'),
	writeStream = fs.createWriteStream('./assets/nombres_copy.txt')

readStream
	.pipe( writeStream )

readStream
	.on('data', function(chunks){
		console.log(
			'he leido estos nombres:',
			chunks.length,
			'Caracteres'
		)
	})
	.on('end', function () {
	console.log('Termine de leer el archivo')
	})