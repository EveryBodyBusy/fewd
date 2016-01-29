/*

click 'lightswitch' bg color turns #xyz
toggle turns it on/off


*/

console.log()
var light = "on";
var dark = "off";



$("#light_switch").click(switchLight);


function switchLight() {
	if (light === "on") {
		turnOff();
	} else {
		turnOn();
	}
}


function turnOff() {
	$("body").addClass("dark");
	light = 'off';
}

function turnOn() {
	$("body").removeClass("dark");
	light = 'on';
}




