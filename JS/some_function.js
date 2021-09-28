//The square function
function square(){
	var num = Number(prompt("Enter a value: "));

	result = num * num ;

	document.write("</br>"+"Square is: "+result);
}

//The addition function
function addition(){
	var num1 = Number(prompt("Enter a 1st value: "));
	var num2 = Number(prompt("Enter a 2nd value: "));

	var result = num1 + num2 ;
	document.write("</br>" + "Addition is: " +result);
}
//The substraction function
function substraction(){
	var num1 = Number(prompt("Enter a 1st value: "));
	var num2 = Number(prompt("Enter a 2nd value: "));

	var result = num1 - num2 ;
	document.write("</br>" + "Substraction is: " +result);
}
//The multiplication function
function multiplication(){
	var num1 = Number(prompt("Enter a 1st value: "));
	var num2 = Number(prompt("Enter a 2nd value: "));

	var result = num1 * num2 ;
	document.write("</br>" + "Multiplication is: " +result);
}

//The division function
function division(){
	var num1 = Number(prompt("Enter a 1st value: "));
	var num2 = Number(prompt("Enter a 2nd value: "));

	var result = num1 / num2 ;
	document.write("</br>" + "Division is: " +result);
}

square();
addition();
substraction();
division();