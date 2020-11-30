'use strict'

var Clock = ((function(){
		var EventEmitter = require('events').EventEmitter,
			inherits = require('util').inherits

		//Este es el metodo constructor
		var Clock = function(){
			var self = this
			var number = 0
			setInterval(() => {
				self.emit('ticktack')
			}, 1000);
		}
		inherits(Clock, EventEmitter)

		Clock.prototype.theTime = () => {
			var date = new Date(),
				hrs = addZero(date.getHours()),
				min = addZero(date.getMinutes()),
				sec = addZero(date.getSeconds()),
				ampm = ( hrs <= 12 ) ? hrs : hrs - 12,
				AMPM = ( hrs <= 12) ? 'AM' : 'PM',
				msg = ampm + ':' + min + ':' + sec + ' ' + AMPM

			function addZero(num){
				return(num < 10) ? ('0' + num) : num
			}

				console.log(msg)
		}
		return Clock
})())

module.exports = Clock