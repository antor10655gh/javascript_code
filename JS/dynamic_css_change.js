var myHeading = document.querySelector("h1");

function addStyle1(){
	myHeading.innerHTML = "My name is Antor";
	myHeading.classList.add("heading1");
	myHeading.classList.remove("heading2");
}

function addStyle2(){
	myHeading.innerHTML = "My name is Shimu";
	myHeading.classList.add("heading2");
}