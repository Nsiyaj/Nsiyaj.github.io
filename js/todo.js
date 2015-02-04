/*
To do list
Author: Nader
Jan 2015
*/


var input = document.getElementById('task_description');
var tasks = document.getElementById('task_list');
var done = document.getElementById('done_list');


function addTask(){
	tasks.innerHTML += "<li class='task' onclick='check(this)'>" + input.value +"</li>";

}


function check(li){
	
	if (li.style.opacity == .5){
		li.style.backgroundImage = "url(img/unchecked.jpg)";
		li.style.opacity = 1;
	} else{
		li.style.backgroundImage = "url(img/checked.jpg)";
		li.style.opacity = .5;
		
	}

}

function moveToCompleted(){
	var list= tasks.getElementsByTagName('li');
	
		for( var i=list.length-1; i>=0; i--){
			
				if (list[i].style.opacity==.5){
					done.innerHTML += "<li class='done'>"+ list[i].innerHTML + "</li>";	
					tasks.removeChild(list[i]);
			
				}
			
		}
}

