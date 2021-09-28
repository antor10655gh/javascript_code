let value = [];
var sum = 0;

for(var i = 0; i<5; i++)
{
	value[i] = Number(prompt("Enter a value: "));
    sum = sum + i;
}

document.write("All Values: "+ value+"</br>");
document.write("Sum is: "+ sum);