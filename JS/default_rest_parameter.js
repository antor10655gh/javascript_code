"use strict"

function message(text = "I Love My Country"){  //show default message
	document.write(`${text}`);
}

message(); //show default message
message("</br>"+"My Country Name Is Bangladesh");


function numberPrints(x , y , ...z){ //z is the rest parameter
    document.write("</br>"+`x = ${x}, y = ${y}, z = ${z}`);
}

numberPrints(10,20,30,40,50);