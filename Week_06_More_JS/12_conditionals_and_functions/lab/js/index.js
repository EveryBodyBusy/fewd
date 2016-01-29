


$("#convert").click(conversion);

function conversion() {
	var stringC = $("#a").val();
	var c = parseInt(stringC);
	var f = c*1.8+32;
	
	$("#newtemp").html(f);


// if( isNaN(a)) {
// 		span.html("");
// 		alert("That is not a number");
// 	} else if (c*9 / 5 + 32) {
// 		span.html("f");

// 	}


}




