'use strict'

class Clock {
	constructor(){
		setInterval(() => {
			this.theTime()
		}, 1000);
	}

	theTime(){
		var date = new Date(),
			hrs = addZero(date.getHours()),
			min = addZero(date.getMinutes()),
			sec = addZero(date.getSeconds()),
			ampm = ( hrs <= 12 ) ? hrs : hrs - 12,
			AMPM = ( hrs <= 12) ? 'AM' : 'PM',
			//msg = ampm + ':' + min + ':' + sec + ' ' + AMPM
			msg = `${ampm}:${min}:${sec}:${AMPM}`

		function addZero(num){
			return(num < 10) ? ('0' + num) : num
		}

			console.log(msg)
	}
}

module.exports = Clock