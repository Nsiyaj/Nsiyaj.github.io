// JavaScript Document
/*
This is a calendar
version: 0.0.1
author: Nader
created: January 2015
*/

function init(){
	var calendar = new Calendar('calendar', new Date(), '', 'small');
}
	


function small(){
	var calendar = new Calendar('calendar', new Date(), 'small');
}

function medium(){
	var calendar = new Calendar('calendar', new Date(), 'medium');
}

function large(){
		var calendar = new Calendar('calendar', new Date(), 'large');
}

function french(){
		var french = new Calendar('calendar', new Date(), '', 'fr');
}

function french_small(){
		var french_small = new Calendar('calendar', new Date(), 'small', 'fr');
}


function french_large(){
		var french_large = new Calendar('calendar', new Date(), 'large', 'fr');
}


function spanish(){
		var spanish = new Calendar('calendar', new Date(), '', 'sp');
}

function spanish_small(){
		var spanish_small = new Calendar('calendar', new Date(), 'small', 'sp');
}

function spanish_large(){
		var spanish_large = new Calendar('calendar', new Date(), 'large', 'sp');
}