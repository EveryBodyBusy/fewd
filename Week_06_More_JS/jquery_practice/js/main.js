$("#answer1").hide()

$("#question1").click(toggle1);

function toggle1() {
	$("#answer1").slideToggle(50);
	$("#answer1").css("color", "green");
}


