//would be fetched from a db if there was something backing this
var images = [ "../img/kat_1.jpg", "../img/kat_2.jpg", 
				"../img/kat_3.jpg", "../img/kat_4.jpg"];
var titles = [ "Katarina", "Red Card Katarina", 
				"Kitty Cat Katarina", "High Command Katarina"];
var descriptions = [ "Fruitcake bonbon donut jelly-o brownie biscuit marzipan pie.", 
					"Cheesecake marzipan cupcake biscuit candy canes pudding.",
					"Applicake topping halvah lemon drops wypas cotton candy.",
					"Oat cake macaroon souffle cupcake chupa chups chocolate bar bear claw dragee lemon drops."];
var curImage = 0;
var autoSwitch = 0;

function moveToImage(value) {
	/*
	here there be actual movements
	if (value == 0)
		curImage = 0; //move to the first
	else if (value == images.length-1)
		curImage = images.length-1; //move to the last
	else
		*/
	curImage += value*1 //move forward or back by x steps
	if(curImage < 0) //loop me
		curImage = images.length-1;
	if(curImage >= images.length) //loop the other way
		curImage = 0;
	switchImage(curImage);
}

function switchImage(index) {
	var curImage = document.getElementById("rotateImg");
	//lets get rid of the "old image"
	var deadImage = document.getElementById("oldImage");
	if(deadImage)
	{
		deadImage.parentNode.removeChild(deadImage);
	}
	var newImage = new Image()
	newImage.src = images[index];
	curImage.parentNode.insertBefore(newImage, curImage);
	curImage.id = "oldImage";
	newImage.id = "rotateImg";
	//transition magic
	curImage.setAttribute("class", "imagehide");
	//add the text and go
	document.getElementById("rotateTitle").innerHTML = titles[index];
	document.getElementById("rotateDesc").innerHTML = descriptions[index];
}

function rotate() {
	moveToImage(1);
}

function checkMouse(event, parent) {
	//were checking the targets...
	var element = event.relatedTarget || event.toElement || event.fromElement

	//while we can, search for the parent
	while (element && element !== parent) {
		//keep traversing up to check...
		element = element.parentNode;
	}
	//if we find the parent, then we're still inside.
	if (element !== parent) {
		return true
	}
}

var rotator = document.getElementById("rotator")

//the mousever pause effect lives here
rotator.onmouseover = rotator.onmouseout = function(e) {
	e = e || event

	if(checkMouse(e, this)) {
		if (e.type == "mouseover")
		{
			//clear the interval switcher
			clearInterval(autoSwitch)
			document.getElementById("rotateTextbox").setAttribute('class', 'show');
		}
		else if (e.type == "mouseout")
		{
			//javascript can sometimes get confused with fast mouse movements
			//hinder it's plans by clearing any existing switchers too.
			clearInterval(autoSwitch)
			autoSwitch = setInterval(rotate, 3000);
			document.getElementById("rotateTextbox").setAttribute('class', '');
		}
	}
}

window.onload=function() {
	autoSwitch = setInterval(rotate, 3000);
}