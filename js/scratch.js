var imageOne = document.getElementById("imgOne");
var imgTwo = document.getElementById("imgTwo");
var imageThree = document.getElementById("imgThree");
var imageFour = document.getElementById("imgFour");
var imageFive = document.getElementById("imgFive");
var imageSix = document.getElementById("imgSix");
var imageSeven = document.getElementById("imgSeven");
var imageEight = document.getElementById("imgEight");
var imageNine = document.getElementById("imgNine");
var imageTen = document.getElementById("imgTen");
var targetBig = document.getElementById("bigImage");
window.onload = function() {
	swapImage(imageOne);
};

var image = [
document.getElementById("imgOne"),
document.getElementById("imgTwo"),
document.getElementById("imgThree"),
document.getElementById("imgFour"),
document.getElementById("imgFive"),
document.getElementById("imgSix"),
document.getElementById("imgSeven"),
document.getElementById("imgEight"),
document.getElementById("imgNine"),
document.getElementById("imgTen"),
];

var imageCount = 0;


imageOne.onclick = function()
{
    swapImage(imageOne);
    imageCount = 1;
};
imgTwo.onclick = function()
{
	swapImage(imgTwo);
	imageCount = 2;
};
imageThree.onclick = function() 
{
	swapImage(imageThree);
	imageCount = 3;
};

imageFour.onclick = function() 
{
	swapImage(imageFour);
	imageCount = 4;
};

imageFive.onclick = function() 
{
	swapImage(imageFive);
	imageCount = 5;
};

imageSix.onclick = function() 
{
	swapImage(imageSix);
	imageCount = 6;
};

imageSeven.onclick = function() 
{
	swapImage(imageSeven);
	imageCount = 7;
};

imageEight.onclick = function() 
{
	swapImage(imageEight);
	imageCount = 8;
};

imageNine.onclick = function() 
{
	swapImage(imageNine);
	imageCount = 9;
};

imageTen.onclick = function() 
{
	swapImage(imageTen);
	imageCount = 10;
};

function swapImage(image)
{
	targetBig.src = image.src;
    targetBig.alt = image.alt;
}


function nextImage()
{

	var images = ["img/imageOne.jpeg", "img/imageTwo.jpg", "img/imageThree.jpg",
					"img/img4.jpg", "img/image5.jpg", "img/image6.jpg",
					"img/image7.jpg", "img/image8.png", "img/image9.jpg",
					"img/image10.jpg"
					];

	if (imageCount == 10) {
		imageCount = 0;
	} else {
		bigImage.src = images[imageCount];
		image[imageCount].style.boxShadow = "0 3px 3px black";
		imageCount++;
	}
}

setInterval(nextImage, 10000);
