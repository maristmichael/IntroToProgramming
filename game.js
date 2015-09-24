alert("Welcome to the Game");

var name = prompt("Please enter your name:");
var years = prompt("How old are you, " + name + "?")

if ( isNaN(years) ) {
	alert("Naughty " + name + "! That's not a number! You lose...");
} else {
	var petCount = prompt("How many pets do you have, " + name + "?");
	if ( isNaN(petCount) ) {
	alert("Naughty " + name + "! That's not a number! You lose...");
	}
	else {
		var maxYears = 70 + 5 * petCount;
		var yearsLeft = maxYears - years;
		alert("The oracle scries thats you will yet live for " + yearsLeft + "years. Do not squander them!");
	}

	alert("Thank you for playing. Please come again! ");
