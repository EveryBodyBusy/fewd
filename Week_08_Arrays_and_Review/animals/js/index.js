$(document).ready(function() {
$("#image").attr("src", images[0]);

});

var index = 0; // initial state, when page loads, it starts at zero
var images = ["images/animal1.jpg", "images/animal2.jpg", "images/animal3.jpg", 
"images/animal4.jpg", "images/animal5.jpg", "images/animal6.jpg", "images/animal7.jpg"];
var lastIndex = images.length - 1;
var newSrc;
 

$("#next").click(nextImage);
$("#previous").click(prevImage);

// console.log('nextImage fired');

// function nextImage() {

// 	var lastIndex = images.length - 1;

// 	if (index < lastIndex) {
// 		index += 1;
// 	} else { 
// 		index = lastIndex;
// 	}

// 	newSrc = images[index];
// 	$("#image").attr("src",newSrc);

// }

//This versions wraps the carousel to the beginning
function nextImage() {

	if (index < lastIndex) {
		index += 1;
	} else { 
		index = 0; //this is where you send it to the beginning
	}

	updateImage();

}

function prevImage() {

	if (index > 0 ) {
		index -= 1;
	} else {
		index = lastIndex;
	}
	updateImage();

}

function updateImage() {
	newSrc = images[index];
	$("#image").attr("src",newSrc);
}

//there's no image when the page loads, add one
//how to not let index increment above the number of images i.e. 'how long is an array'?