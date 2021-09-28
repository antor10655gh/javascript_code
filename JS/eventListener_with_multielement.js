var len = document.querySelectorAll(".myButton").length;

for(var i = 0; i<len; i++){
    var btn = document.querySelectorAll(".myButton")[i].addEventListener("click",function(){
        var text = this.innerHTML;
        document.querySelector("h1").innerHTML = text + " is clicked";
    })
}