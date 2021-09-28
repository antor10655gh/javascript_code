
function calcuate(){
	var f = prompt("Enter a Farhenhite value: ");

	var celsius = (f - 32) * (5/9);
	return celsius;
}

document.write("Celcius: "+calcuate());