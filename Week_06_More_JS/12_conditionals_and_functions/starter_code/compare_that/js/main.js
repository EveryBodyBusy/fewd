// $("#submit").click(compare);

console.log("sup dude");




$("#submit").click(compare);

	function compare() {
	var stringA = $("#a").val();
	var stringB = $("#b").val();
	var span = $("#comparison");

	var a = parseInt(stringA);
	var b = parseInt(stringB);

	if( isNaN(a) || isNaN(b) ) {
		span.html('');
		alert("Please enter a number, bro");
	
	} else if (a > b) {
		span.html(">");
	} else if (a < b) {
		span.html("<");
	} else {
		span.html("=");
	}
}

