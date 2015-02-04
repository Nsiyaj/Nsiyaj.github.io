// JavaScript Document
/*
This is a calendar
version: 0.0.1
author: Nader
created: January 2015
*/

function Calendar(id, date,  css, language){
	
	console.log ("Create the Calendar");

	var element = document.getElementById(id);
	
	
		if(date){
			var calendar = date;
		}else{
			var calendar = new Date();
		}
		
		var month = calendar.getMonth();
		
		var year = calendar.getFullYear();
		
		if( window.calendar[language] && window.calendar[language].months ){
			var months = window.calendar[language].months;
		}else{
			var months = new Array(12);
				months[0] = "January";
				months[1] = "February";
				months[2] = "March";
				months[3] = "April";
				months[4] = "May";
				months[5] = "June";
				months[6] = "July";
				months[7] = "August";
				months[8] = "September";
				months[9] = "October";
				months[10] = "November";
				months[11] = "Decemeber";
		}
		
		if( window.calendar[language] && window.calendar[language].days ){
			var days = window.calendar[language].days;
		}else{
			 var days = new Array(7);
				days[0]="Sunday";
				days[1]="Monday";
				days[2]="Tuesday";
				days[3]="Wednesday";
				days[4]="Thursday";
				days[5]="Friday";
				days[6]="Saturday";
		}
	
	var dayCSS = ["sun","mon","tue","wed","thu","fri","sat"];
	
	var day = 0;
	
	var first = new Date(year, month, 1).getDay();
	
	var date = 1;
	
	//how many days are in this month
	var length = 32-new Date(year, month, 32).getDate();
	
	var now =new Date();
	
	var today = {
		year:now.getFullYear(),
		month:now.getMonth(),
		date:now.getDate()
		}
	

	function getNewCalendar(year,month,day){
		return "new Calendar('"+id+"',new Date("+year+","+month+","+day+"),'"+css+"','"+language+"')";	
	}
	
	var selected="";
		
	var HTML = '<table class="calendar '+css+'" ';
	HTML += 'cellpadding="1" cellspacing="1" border="0">';
	
	//Adding the controls & the selects to the table
	HTML += '<tr><td colspan="7" class="controls">';
	HTML += '<select onchange="'+getNewCalendar(year,"this.value",1)+'">';
	for (var i=0; i<12; i++){
		selected=(i===month)?' selected="selected"':'';
		HTML += '<option value="'+i+'"'+selected+'>'+months[i].substr(0,3)+'</option>';
	}
	HTML += '</select>';
	selected="";
	HTML += '<select onchange="'+getNewCalendar("this.value",month,1)+'">';
	for (var i=year-10, l=year+10; i<l; i++){
		selected=(i===year)?' selected="selected"':'';
		HTML +=	'<option'+selected+'>'+i+'</option>';
	}
	HTML += '</select>';
	HTML += '</td></tr>'; 
	
	HTML += '<tr>';
	HTML += '<th><button onclick="'+getNewCalendar(year,month,0)+'">&lt;</button></th>';
	HTML += '<th colspan="5">'+months[month]+' '+year+'</th>';
	HTML += '<th><button onclick="'+getNewCalendar(year,month,32)+'">&gt;</button></th>';
	HTML += '</tr>';
	
	HTML +=	'<tr class="week">';
	for (var i=0; i<7; i++){
	HTML +=	'<td class="'+dayCSS[i]+'">'+days[i].substr(0,1);
	HTML += '<span>'+days[i].substr(1)+'</span></td>';
	}	
	HTML += '</tr>';
					
	for (var i=0; i<42; i++){
	
		var style = "";
	
		if( day === 0 ){
			HTML += '<tr>';
		}
		
		if(today.year === year && today.month === month && today.date === date){
			style +=" today"; 
		}
	
		if(i>= first && date <= length ){
			HTML  += '<td class="'+dayCSS[day]+style+'">'+date+'</td>';
			date++;	
		}else{
			HTML  += '<td class="'+dayCSS[day]+style+'"></td>';
		}
		
		day++;
	
		if (day ===7){
			HTML+='</tr>';
			day = 0;
		}
				
	}
	HTML+='</table>';
	
	document.getElementById('calendar').innerHTML = HTML;
}



