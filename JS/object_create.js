
var name = prompt("Enter your name: ");
var age = prompt("Enter your age: ");
var phone = prompt("Enter your phone: ");
var address = prompt("Enter your address: ");


function Student(name , age , phone , address){  //Student() is a constructor and also function
	this.name    = name;
	this.age     = age;
	this.phone   = phone;
	this.address = address;

	this.display = function(){
		document.write("Name: "+this.name+"</br>");
		document.write("Age: "+this.age+"</br>");
		document.write("Phone: "+this.phone+"</br>");
		document.write("Address: "+this.address);
	}
}

var student1 = new Student(name , age , phone , address);  //student1 is a object

student1.display();