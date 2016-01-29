console.log("hi bud");


$("#zero").click(zero);

$("#add1").click(add1);
$("#add5").click(add5);
$("#sub1").click(sub1);
$("#sub5").click(sub5);

var result = 0;


function zero () {
	result = 0;
	$("#result").html(result);
	
}

function add1() {
	result = result + 1;
	$("#result").html(result);
}

function add5() {
	result = result + 5;
	$("#result").html(result);
}

function sub1() {
	result = result - 1;
	$("#result").html(result);
}

function sub5() {
	result = result - 5;
	$("#result").html(result);
}

