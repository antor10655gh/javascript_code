var total_win  = 0 ;
var total_loss = 0;

for(var i = 1; i<=5; i++){
	var guessnumber = parseInt(prompt("Enter a number from 1 to 5: "));

	var randomnumber = Math.floor(Math.random() * 5) + 1;

	if(guessnumber == randomnumber){
		document.write("You have Won"+"</br>");
		total_win++;
	}

	else{
		document.write("You have lost because random number was: "+randomnumber+"</br>");
		total_loss++;
	}
}

document.write("Total win: "+total_win+"</br>");
document.write("Total loss: "+total_loss);
