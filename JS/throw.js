var checkButton = document.querySelector("#checkButton");
checkButton.addEventListener("click", function(){
  var textField = document.querySelector("#textField").value;

  try{
  	if(textField < 5){

  	    throw "Value is too low";

	  }
	else if(textField > 10){

	  	throw "Value is too high";

	  }
	else{
		document.write("Value is perfect");
	}  

  }catch(err){
  	document.write(err);
  }
}); 

