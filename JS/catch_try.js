// try {
//   tryCode - Block of code to try
// }
// catch(err) {
//   catchCode - Block of code to handle errors
// }
// finally {
//   finallyCode - Block of code to be executed regardless of the try / catch result
// }



function myFunction() {
  var message, x;
  message = document.getElementById("message");
  message.innerHTML = "";
  x = document.getElementById("demo").value;
  try {
    if(x%2==0){
      document.write("Number is Even");
    }

    else{
      document.write("Number is Odd");
    }
  }
  catch(err) {
    message.innerHTML = "Input " + err;
  }
}