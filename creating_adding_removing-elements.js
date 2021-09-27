var myDiv = document.querySelector(".my-div");


//crate element by using createElement() method
var heading1 = document.createElement("h1");
var text1    = document.createTextNode("This is heading1");
heading1.appendChild(text1);
myDiv.appendChild(heading1);

//create element by using createElement() method
var heading2 = document.createElement("h1");
var text2    = document.createTextNode("This is heading2");
heading2.appendChild(text2);
myDiv.appendChild(heading2);

//remove element by using removeChild() method
myDiv.removeChild(heading2);

//add a element 
var heading0 = document.createElement("h1");
var text0    = document.createTextNode("This is heading0");
heading0.appendChild(text0);
myDiv.insertBefore(heading0,heading1);
