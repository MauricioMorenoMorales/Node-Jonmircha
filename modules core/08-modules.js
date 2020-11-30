'use strict'

let myData = require('./my-data.js'),
	Clock = require('./clock-es6'),
	cucu = new Clock()

console.log(
	myData.name,
	myData.email,
)

cucu.on('ticktack', function(){
	cucu.theTime()
})