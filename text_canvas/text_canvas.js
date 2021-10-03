// var c1 = document.getElementById("myCanvas1");
// var ctx1 = c1.getContext("2d");

// ctx1.fillStyle = "green";
// ctx1.fillRect(10,10,300,200);

// ctx1.lineWidth = 3;
// ctx1.strokeStyle = "black";
// ctx1.strokeRect(8,8,304,204);

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

ctx.font = "30px Arial";
ctx.fillText("Hello World",10,50);

ctx.fillStyle = "transparent";
ctx.fillRect(10,10,300,200);

ctx.lineWidth = 3;
ctx.strokeStyle = "black";
ctx.strokeRect(8,8,304,204);
