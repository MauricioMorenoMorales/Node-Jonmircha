'use strict'

let EventEmitter = require('events').EventEmitter,
	inherits = require('util').inherits

let Clock = function(){
	let self = this
	let number = 0
	setInterval(() => {
		self.emit('ticktack')
	}, 1000);
}
inherits(Clock, EventEmitter)

Clock.prototype.theTime = () => {
	let date = new Date(),
		hrs = date.getHours(),
		min = date.getMinutes(),
		sec = date.getSeconds(),
		msg = hrs + ':' + min + ':' + sec

		console.log(msg)
}

let cucu = new Clock()

cucu.on('ticktack', function(){
	cucu.theTime()
})

