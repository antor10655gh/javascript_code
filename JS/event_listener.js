//.addEventListener() method
var myVar = document.querySelector("h1");
myVar.addEventListener("mouseover", eventlistener1);
myVar.addEventListener("mouseout", eventlistener2);

function eventlistener1(){
	myVar.classList.add("heading1");
}

function eventlistener2(){
	myVar.classList.remove("heading1");
}