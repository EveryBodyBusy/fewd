console.log("hi");

$("#extraP").hide();

$("#trigger").click(revealP);
$("#trigger2").click(revealP);

function revealP () {
	$("#extraP").slideToggle();
	$("#trigger").slideToggle();// body...
}

