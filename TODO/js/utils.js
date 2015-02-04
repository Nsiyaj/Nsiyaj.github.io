// JavaScript Document

//if both files >utils and >main have both a foo function it will create error- so encapsulate the function!!

//TRICKY !!

/*anonymous function, sent as a parameter for something without name, and it gets called.. if  i put foo inside, nothing happens
(function(){
	
})();


(function(context){

})(window);
*/



(function(context){

	function toggle(){
		
		if(document.getElementById(id){
			
			var element = document.getElementById(id);
			
			if(element.style.display === "none){
				
				element.style.display = "block";
					
			}else{
				element.style.display = "none";
				
			}
			
		}else{
			
			console.log("element id " + id + "not found in the document");
		
	}
				
	
	context.Utils={};
	context.Utils.toggle = toggle;


})(window);

