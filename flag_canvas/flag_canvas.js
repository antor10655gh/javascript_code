var c = document.getElementById("myCanvas");

var ctx = c.getContext("2d");

ctx.fillStyle = "green";
ctx.fillRect(12,12,366,350);

ctx.lineWidth = 3;
ctx.strokeStyle = "black"
ctx.strokeRect(10,10,370,354);

ctx.beginPath();
ctx.arc(150,80,50,0,2*Math.PI,false);
ctx.fillStyle = "red";
ctx.fill();
ctx.stroke();