// JavaScript Document
/*
This is a template which will execute 4 different feature programs
version: 0.0.1
author: Nader
created: January 2015
*/

//Declaration of global variables
var portfolio;
var htmlSiteTitle="";
var htmlsiteMenu="";
var htmlmajor="";
var htmlwrapperStyle2="";
var htmlFooter="";


function init(){
	document.getElementById("logo").innerHTML=siteTitle('JAVASCRIPT')
	document.getElementById("nav").innerHTML=siteMenu('Home','index.html','Timer','timer.html','Calendar','calendar.html','Tax','tax.html','Todo','todo.html');
	document.getElementById('portfolio').innerHTML = renderPortfolio();
}


function siteTitle(title) {
	htmlSiteTitle += '<h1>'+ title + '</h1>';
	return htmlSiteTitle;
	}
	
function siteMenu(item1,line1,item2,line2,item3,line3,item4,line4,item5,line5) {
	/* Applay the link to the active class */
	htmlsiteMenu += '<ul><li class="active"><a href="'+line1+'">'+item1+'</a></li>';
	htmlsiteMenu +=	'<li><a href="'+line2+'" target="_blank">'+item2+'</a></li>';
	htmlsiteMenu +=	'<li><a href="'+line3+'" target="_blank">'+item3+'</a></li>';
	htmlsiteMenu +=	'<li><a href="'+line4+'" target="_blank">'+item4+'</a></li>';
	htmlsiteMenu +=	'<li><a href="'+line5+'" target="_blank">'+item5+'</a></li>';
	htmlsiteMenu +=	'</ul>';
	return htmlsiteMenu;
	}
	
function portfolio(title,subtitle,item2,line2,item3,line3,item4,line4,item5,line5,desc){
	var htmlportfolio = "";
  	htmlportfolio += '<section class="container">';
	htmlportfolio += '<header class="major">';
	htmlportfolio += '<h2>JavaScript Projects'+title+'</h2>';
	htmlportfolio += '<span class="byline">'+subTitle+'</span>';
	htmlportfolio += '</header>';
	htmlportfolio += '<div class="row no-collapse-1">';
	htmlportfolio += '<section class="4u">';
	htmlportfolio += '<a href="'+line2+'">'+item2+'" alt=""></a>';
	htmlportfolio += '<p>This is a nice watch that displays the time and also the current date.'+desc+'</p>';	
	htmlportfolio += '</section>';
	htmlportfolio += '<section class="4u">';
	htmlportfolio += '<a href="'+line3+'">'+item3+'" alt=""></a>';
	htmlportfolio += '<p>This is an advance calendar that can display the date up to 10 years ahead or prior, it can also display in 3 different languages and 3 different sizes too.'+desc+'</p>';	
	htmlportfolio += '</section>';
	htmlportfolio += '<section class="4u">';
	htmlportfolio += '<a href="'+line4+'">'+item4+'" alt=""></a>';
	htmlportfolio += '<p>This is a simple calculator  that can calculate the taxes for the province of Quebec, Canada.'+desc+'</p>';	
	htmlportfolio += '</section>';
	htmlportfolio += '<section class="4u">';
	htmlportfolio += '<a href="'+line5+'">'+item5+'" alt=""></a>';
	htmlportfolio += '<p>This is a simple calculator  that can calculate the taxes for the province of Quebec, Canada.'+desc+'</p>';	
	htmlportfolio += '</section>';
	htmlportfolio += '</div>';
	htmlportfolio += '</div>';
	return htmlportfolio;		
	}
	
  //or fetch patterns in the code.. for example columns 1,2,3,4.. or the name of images, titles
  html += renderPortfolioItem('1', '#', 'images/img01.jpg', '', 'Title', 'desc', 'name');
  html += renderPortfolioItem('2', '#', 'images/img02.jpg', '', 'Title', 'desc', 'name');
  html += renderPortfolioItem('3', '#', 'images/img03.jpg', '', 'Title', 'desc', 'name');
  html += renderPortfolioItem('4', '#', 'images/img04.jpg', '', 'Title', 'desc', 'name');
  

//build a function to fetch for the columns, etc
function renderPortfolioItem(col, href,  src, alt, title, desc, name){
 
     //instead of var html = '<div class="column1">';
   var html = '<div class="column'+col+'">';
   html += '<a href="'+href+'">';
   html +='<img src="'+src+'" alt="'+alt+'"/>'
   html +='<p>desc</p>';
   html += name + '</a>';
   html +='</div>';
  
 return html;
}








	
	

