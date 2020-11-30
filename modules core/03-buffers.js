/*
Buffers
	Una tira de bytes (datos binarios)
	Similar a un array de enteros
	Tamaño fijo
	Manipular datos directamente
		Sockets
		Streams
		Implementar protocolos complejos
		Manipulacion de ficherso/imágenes
		Criptografía
*/

'use strict'

let buff = new Buffer.alloc(100),
	buff2 = new Buffer.alloc(26),
	str = '\u00bd + \u00bc = \u00be',
	i = 0

buff.write('abcd', 0, 4, 'ascii')
console.log( buff )

console.log(
	buff,
	buff.toString('ascii'),
	str,
	str.length,
	str.length + ' caracteres',
	Buffer.byteLength(str, 'utf-8') + ' Bites gastados',
	buff2.length + 'posciciones en el buffer'
)

for (let i = 0; i < buff2.length; i++) {
	 buff2[i] = i + 97
}

console.log( buff2.toString('ascii') )

