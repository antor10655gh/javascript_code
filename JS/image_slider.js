//create slider by using javascript function
let photos = ["pic1.jpg" , "pic2.jpg" , "pic3.jpg" , "pic4.jpg"];
var slide_image = document.querySelector("img");
slide_image.style.height = "300px";
slide_image.style.width = "400px";

var mySlide = document.querySelector(".slider");
mySlide.style.display = "block";
mySlide.style.marginLeft = "auto";
mySlide.style.marginRight = "auto";
mySlide.style.width = "50%";
count = 0;

function next(){
count++;
if (count >= photos.length) {
	count = 0;
	slide_image.src = photos[count];
 } 

else{
	slide_image.src = photos[count];
 } 
}

function prev(){
	count--;
	if(count<=0){
		count = photos.length - 1;
		slide_image.src = photos[count];
	}

	else{
		slide_image.src = photos[count];
	}
}