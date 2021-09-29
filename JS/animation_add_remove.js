
document.getElementById("button1").addEventListener("click",animation1);

function animation1(){
  var btn = document.getElementById("button1");
  btn.classList.add("anim");
  btn.classList.add("button");
  setTimeout(function(){
	btn.classList.remove("anim");
},1000);
}

document.getElementById("button2").addEventListener("click",animation2);

function animation2(){
  var btn = document.getElementById("button2");
  btn.classList.add("anim");
  btn.classList.add("button");
  setTimeout(function(){
	btn.classList.remove("anim");
},1000);
}



