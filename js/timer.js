// JavaScript Document
/*
This is a Timer whatch
version: 0.0.1
author: Nader
created: January 2015
*/



function digital(i){
		if (i < 10){
			return "0" + i;
		}else{
			return i;
		}
	}
	

var clock = document.getElementById('clock');

	
	
function displayTime(){
	var now = new Date();
	
	var time = digital (now.getHours()) + ":";
		time += digital(now.getMinutes())+":";
		time += digital (now.getSeconds());

	clock.innerHTML = time;
	
};

setInterval(function(){
	
	displayTime();
}, 1000);

displayTime();


//Display Year, Month, Date
var day = document.getElementById('day');

function displayDay(){

	var calendar = new Date();		
	var monthName = new Array();
		monthName = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
	var dayName = new Array();
		dayName = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
	day.innerHTML = calendar.getFullYear() + ", " + dayName[calendar.getDay()] + ", " + monthName[calendar.getMonth()] + " " + digital(calendar.getDate());	

};
displayDay();


