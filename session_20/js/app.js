// this lesson is from p. 254
// this lesson covers .addEventListner
// in a -click- context
// with both simple named function
// &
// a function with a parameter

document.addEventListener("DOMContentLoaded", function(event) {

	//setup your div' variables here
	var greetBtnDiv = document.getElementById('greetDivId');
	var greetParamBtn = document.getElementById('greetparam');
	
	greetBtnDiv.addEventListener("click", greetFunc, false);
	
	//sending a func parameter through a button has complex syntax
	greetParamBtn.addEventListener("click", function(){greetParam("rudy")}, false);

});


function greetFunc(){
    console.log('hello world');
}
// greet(); // we are not calling it here simple no param function

function greetParam(x){
    console.log('hello' + x);
}
// greetParam( 'rudy' ); we are holding off on calling it