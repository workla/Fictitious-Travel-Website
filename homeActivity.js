//carousel
//don't start till page dom loads
document.addEventListener('DOMContentLoaded', setup);

//build carousel
//adapted from https://www.youtube.com/watch?v=4YQ4svkETS0
var pictures = [];
pictures[0] = 'elephant.jpg';
pictures[1] = 'boraViews.jpg';
pictures[2] = 'peruTextile.jpg';

//start at image 0
var i = 0;
var totalPics = pictures.length;
var contSlides;

function changePictures()
{
	//check if i is outside of pic array size
	//if it is, start from beginning
	if(i >= totalPics)
	{
		i = 0;
	}

	//put a pic on the page
	document.getElementById("homePageSlideshow").src = pictures[i];

	//set pic number to next pic
	i++;

	//call change pictures again after 4 seconds
	contSlides = setTimeout(changePictures, 4000);
}

function moveForward()
{
	clearTimeout(contSlides);
	//check if i is outside of pic array size
	//if it is, start from beginning
	if(i >= totalPics)
	{
		i = 0;
	}

	//put a pic on the page
	document.getElementById("homePageSlideshow").src = pictures[i];

	//set pic number to next pic
	i++;

	//call change pictures again after 4 seconds
	contSlides = setTimeout(changePictures, 4000);	
}

function moveBack()
{
	clearTimeout(contSlides);
	i--; //i now at current (as change fxn sets to next to prep for next call)
	//now set to one prev
	if(i == 0)
	{
		i = (totalPics - 1);
	}
	else
	{
		i--;
	}
	//put a pic on the page
	document.getElementById("homePageSlideshow").src = pictures[i];

	//set pic number to next pic
	i++;

	//call change pictures again after 4 seconds
	contSlides = setTimeout(changePictures, 4000);
}

function setup()
{
	var nextButton = document.getElementById("next");
	nextButton.addEventListener("click", moveForward);
	var prevButton = document.getElementById("prev");
	prevButton.addEventListener("click", moveBack);
	changePictures();
}