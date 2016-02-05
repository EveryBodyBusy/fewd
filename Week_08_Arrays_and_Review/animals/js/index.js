var index = 0; // initial state, when page loads, it starts at zero
var images = ["images/animal1.jpg", "images/animal2.jpg", "images/animal3.jpg", "images/animal4.jpg", "images/animal5.jpg", "images/animal6.jpg", "images/animal7.jpg"];
var newSrc;

$("#image").attr("src", images[0]);

$("#next").click(nextImage);
$("#previous").click(prevImage);

// console.log('nextImage fired');

function nextImage() {
	index += 1;
	newSrc = images[index];
	$("#image").attr("src",newSrc);



}

function prevImage() {
	index = index - 1;
	newSrc = images[index];
	$("#image").attr("src",newSrc);

}

//there's no image when the page loads, add one
//how to not let index increment above the number of images i.e. 'how long is an array'?