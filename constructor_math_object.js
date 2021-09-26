var value  = parseInt(prompt("Enter a value: "));
var value1 = parseInt(prompt("Enter a negetive value: "));
var value2 = parseInt(prompt("Enter a value: "));
var x      = parseInt(prompt("Enter x: "));
var y      = parseInt(prompt("Enter y: "));
var value3 = parseFloat(prompt("Enter a float value: "));
var value4 = parseFloat(prompt("Enter a float value: "));
var value5 = parseFloat(prompt("Enter a float value: "));
var value6 = parseFloat(prompt("Enter a value: "));

function Mathh(value,value1,value2,x,y,value3,value4,value5,value6){
	this.value  = value;
	this.value1 = value1;
	this.value2 = value2;
	this.x      = x;
	this.y      = y;
	this.value3 = value3;
	this.value4 = value4;
	this.value5 = value5;
	this.value6 = value6;

	this.display = function(){
		document.write(Math.sqrt(this.value)+"</br>");
		document.write(Math.abs(this.value1)+"</br>");
		document.write(Math.sin(this.value2,)+"</br>");
		document.write(Math.pow(this.x , this.y)+"</br>");
		document.write(Math.floor(this.value3)+"</br>");
		document.write(Math.ceil(this.value4)+"</br>");
		document.write(Math.round(this.value5)+"</br>");
		document.write(Math.random(this.value6));
	}
}

var math_object = new Mathh(value , value1 , value2 , x , y , value3 , value4 , value5 , value6);

math_object.display();