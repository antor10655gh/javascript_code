//shift() method
let student_info = ["Name: Antor" , "Id: 181-15-10655" , "Section: I"];

student_info.shift();  //shift() opposite method of pop

document.write("Student Info: " + student_info);


//unshift() method
let student_info1 = ["Id: 181-15-10655" , "Section: I"];

student_info1.unshift("Name: Antor"); //unshift() opposite method of push

document.write("</br>"+"</br>"+"Student Info: " + student_info1);

//splice(index position , how many element you want to delete , add element) method

let student_info2 = ["Name: Antor" , "Department: CSE"];

student_info2.splice(1,0,"Id: 181-15-10655" , "Section: I"); //splice() method use for element add 

document.write("</br>"+"</br>"+"Student Info: " + student_info2)

//remove element by using splice() method
let student_info3 = ["Name: Antor" , "Id: 181-15-10655" , "Section: I" , "Department: CSE"];

student_info3.splice(2,3); //splice() method use for element remove

document.write("</br>"+"</br>"+"Student Info: " + student_info3);

//sort() method for letter
let letter = ["D" , "B" , "E" , "C" , "A"];
document.write("</br>"+"</br>"+"Before Sorted: "+letter);

var sorted_array = letter.sort(); //sorted letter array by using sort() method

document.write("</br>"+"After Sorted: "+sorted_array);

//sort method for number
let number = [4 , 2 , 1 , 5 ,3];
document.write("</br>"+"</br>"+"Before Sorted: "+number);
number.sort(function(a,b){
	return a-b;  //(b-a) for reverse sorting
})
document.write("</br>"+"After Sorted: "+number);