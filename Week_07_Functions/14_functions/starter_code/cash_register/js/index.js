var total = 0;
var newEntry;
var newFloat;


$("#add").click(addToReceipt);

function addToReceipt () {
	newEntry = $("#newEntry").val();
	newFloat = parseFloat(newEntry);

	if (isNaN(newFloat)) {
        
        alert('Please enter a number.');
        input.val('');

    } else {

	$("#entries").append("<tr><td></td><td>" + "$" + newFloat.toFixed(2) + "</td></tr>")

	total = total + newFloat;
	// long version is total = total + newFloat;
	// console.log(total);

	$("#total").html(formatTotal(total));
	
	}
}

function formatTotal(number) {
	return "$" + number.toFixed(2);

}


