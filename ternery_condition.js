var num = Number(prompt("Enter a nuber: "));

// if (num>0) {
// 	document.write("Positive");
// }

// else if(num<0){
// 	document.write("Negative");
// }

// else{
// 	document.write("Zero");
// }

var result = num > 0 ? "Positive" : num<0 ? "Negative" : "Zero";
document.write(result);