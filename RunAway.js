/* Michael Gutierrez
 * Matthew Johnson
 * CMPT 120L-115
 * November 8, 2015
 * Project 4
 */


var currentRoom = "startingRoom";
var currentPoints = 0;

// The functions below serve for convenience.
function pointCount() {
	return "Points: " + currentPoints;
}

function zeroPoints() {
	return "Points: 0";
}

// The variables below keep track if a room was visited.
var safeRoomVisit = false;
var ratHallVisit = false;
var redRoomVisit = false;
var signHallVisit = false;
var snakeRoomVisit = false;
var falseSafeVisit = false;
var freedomHallVisit = false;

// The functions below are display functions.
function showScene(message) {
    document.getElementById("message").innerHTML = message;
}

function showPoints(message) {
    document.getElementById("points").innerHTML = message;
}

function showInvalidDirection(error) {
	document.getElementById("invalidDirection").innerHTML = error;
}

// The functions below disable/enable html buttons.
function disableButton(button){
	if (button === "north") {
		document.getElementById("northButton").disabled = true;
	} else if (button === "west") {
		document.getElementById("westButton").disabled = true;
	} else if (button === "east") { 
		document.getElementById("eastButton").disabled = true;
	} else if (button === "south") {
		document.getElementById("southButton").disabled = true;
	} else if (button === "go") {
		document.getElementById("goButton").disabled = true;
	}
}

function enableButton(button){
	if (button === "north") {
		document.getElementById("northButton").disabled = false;
	} else if (button === "west") {
		document.getElementById("westButton").disabled = false;
	} else if (button === "east") { 
		document.getElementById("eastButton").disabled = false;
	} else if (button === "south") {
		document.getElementById("southButton").disabled = false;
	} else if (button === "go") {
		document.getElementById("goButton").disabled = false;
	}
}

function disableAllButtons(){
	disableButton("north");
	disableButton("west");
	disableButton("east");
	disableButton("south");
	disableButton("go");
}

function enableAllButtons(){
	enableButton("north");
	enableButton("west");
	enableButton("east");
	enableButton("south");
	enableButton("go");
}

// The function below handels the text input.
function textInput(userInput) {
	var error;
	var userInput = document.getElementById("command").value;
	
	if (userInput === "N") {
		moveNorth();
		error = "";
	} else if (userInput === "n") {
		moveNorth();
		error = "";
	} else if (userInput === "S") {
		moveSouth();
		error = "";
	} else if (userInput === "s") {
		moveSouth();
		error = "";
	} else if (userInput === "E") {
		moveEast();
		error = "";
	} else if (userInput === "e") {
		moveEast();
		error = "";
	} else if (userInput === "W") {
		moveWest();
		error = "";
	} else if (userInput === "w") {
		moveWest();
		error = "";
	} else {
		error = "You entered an invalid direction. Try again.";
	}
	showInvalidDirection(error);
}

// The functions below add score. 
function pointsSafeRoom(){
	if (safeRoomVisit === false) {
        currentPoints += 5;
        safeRoomVisit = true;
		return currentPoints;
	}
}

function pointsRatHall(){
	if (ratHallVisit === false) {
        currentPoints += 5;
        ratHallVisit = true;
		return currentPoints;
	}
}

function pointsRedRoom(){
	if (redRoomVisit === false) {
        currentPoints += 5;
        redRoomVisit = true;
		return currentPoints;
	}
}

function pointsSignHall(){
	if (signHallVisit === false) {
        currentPoints += 5;
        signHallVisit = true;
		return currentPoints;
	}
}

function pointsSnakeRoom(){
	if (snakeRoomVisit === false) {
        currentPoints += 5;
        snakeRoomVisit = true;
		return currentPoints;
	}
}

function pointsFalseSafe(){
	if (falseSafeVisit === false) {
        currentPoints += 5;
        falseSafeVisit = true;
		return currentPoints;
	}
}

function pointsFreedomHall(){
	if (freedomHallVisit === false) {
        currentPoints += 5;
        freedomHallVisit = true;
		return currentPoints;
	}
}

// The functions below moves player to a direction.
function moveNorth() {
    var message;
    var points;
    
	switch (currentRoom) {
		case "startingRoom":
			currentRoom = "thePitt";
			message = dumbDeath();
			points = zeroPoints();
			disableAllButtons();
		break;

		case "thePitt":
			message = stillAreDead();
			points = zeroPoints();
			disableAllButtons();
		break;

		case "safeRoom":
			currentRoom = "ratHall";
			pointsRatHall();
			message = ratHall();
			points = pointCount();
			disableButton("west");
			enableButton("south");
		break;

		case "ratHall":
			currentRoom = "redMarkedRoom";
			pointsRedRoom();
			message = redMarkedRoom();
			points = pointCount();
			disableButton("north");
			enableButton("west");
		break;

		case "freedomHallway":
			currentRoom = "giantSnakeRoom";
			message = backToGiantSnake();
			points = pointCount();
			enableAllButtons();
		break;

		case "giantSnakeRoom":
			currentRoom = "choseToDieRoom";
			message = choseToDieRoom();
			points = zeroPoints();
			disableAllButtons();
		break;

		case "choseToDieRoom":
			message = youreDevoured();
			points = zeroPoints();
			disableAllButtons();
		break;

		case "deadEnd":
			message = yourEaten();
			points = zeroPoints();
			disableAllButtons();
		break;
			
		case "trapRoom":
			message = youreDevoured();
			points = zeroPoints();
			disableAllButtons();
		break;

		case "freedom":
			message = freedom();
			points = pointCount();
			disableAllButtons();
		break;

		default:
			message = hitWall();
			points = pointCount();
	}
	
    showScene(message);
    showPoints(points);
}

function moveWest() {
    var message;
    var points;
    
	switch (currentRoom) {
		case "startingRoom":
			currentRoom = "safeRoom";
			pointsSafeRoom();
        	message = safeRoom();
			points = pointCount();
			disableButton("south");
			disableButton("west");
		break;

		case "startingRoom":
			currentRoom = "safeRoom";
			pointsSafeRoom();
			message = safeRoom();
			points = pointCount();
			disableButton("south");
			disableButton("west");
		break;
    	
		case "redMarkedRoom":
			currentRoom = "deadEnd";
			message = deadEnd();
			points = zeroPoints();
			disableAllButtons();
		break;

		case "deadEnd":
			message = yourEaten();
			points = zeroPoints();
			disableAllButtons();
		break;

		case "thePitt":
			message = stillAreDead();
			points = zeroPoints();
			disableAllButtons();
		break;

		case "signHall":
			currentRoom = "redMarkedRoom";
			message = backToRedRoom();
			points = pointCount();
			disableButton("north");
		break;

		case "giantSnakeRoom":
			currentRoom = "signHall";
			message = backToSignHall();
			points = pointCount();
			disableButton("north");
		break;

		case "falseSafeRoom":
			currentRoom = "giantSnakeRoom";
			message = backToGiantSnake();
			points = pointCount();
			enableAllButtons();
		break;

		case "trapRoom":
			message = youreDevoured();
			points = zeroPoints();
			disableAllButtons();
		break;

		case "freedomHallway":
			currentRoom = "thePitt";
			message = dumbDeath();
			points = zeroPoints();
			disableAllButtons();
		break;

		case "choseToDieRoom":
			message = youreDevoured();
			points = zeroPoints();
			disableAllButtons();
		break;

		case "freedom":
			message = freedom();
			points = pointCount();
			disableAllButtons();
		break;

		default:
			message = hitWall();
			points = pointCount(); 
		break;
	}
	
    showScene(message);
    showPoints(points);
}

function moveEast() {
    var message;
    var points;
    
	switch (currentRoom) {
		case "safeRoom":
			currentRoom = "startingRoom";
			message = backToStart();
			points = pointCount();
			disableButton("east");
			disableButton("south");
			enableButton("west");
		break;
			
		case "ratHall":
			currentRoom = "thePitt";
			message = dumbDeath();
			points = zeroPoints();
			disableAllButtons();
		break;

		case "thePitt":
			message = stillAreDead();
			points = zeroPoints();
			disableAllButtons();
		break;
			
		case "deadEnd":
			message = yourEaten();
			points = zeroPoints();
			disableAllButtons();
		break;
			
		case "redMarkedRoom":
			currentRoom = "signHall";
			pointsSignHall();
			message = signHall();
			points = pointCount();
			disableButton("north");
		break;
			
		case "signHall":
			currentRoom = "giantSnakeRoom";
			pointsSnakeRoom();
			message = giantSnakeRoom();
			points = pointCount();
			enableAllButtons();
		break;

		case "giantSnakeRoom":
			currentRoom = "falseSafeRoom";
			pointsFalseSafe();
			message = falseSafeRoom();
			points = pointCount();
			disableButton("north");
			disableButton("south");
		break;
			
		case "falseSafeRoom":
			currentRoom = "trapRoom";
			message = trapRoom();
			points = zeroPoints();
			disableAllButtons();
		break;
			
		case "trapRoom":
			message = youreDevoured();
			points = zeroPoints();
			disableAllButtons();
		break;
			
		case "choseToDieRoom":
			message = youreDevoured();
			points = zeroPoints();
			disableAllButtons();
		break;
			
		case "freedom":
			message = freedom();
			points = pointCount();
			disableAllButtons();
		break;
			
		default:
			message = hitWall();
			points = pointCount();
		break;
    }
	
    showScene(message);
    showPoints(points);
}

function moveSouth() {
    var message;
    var points;

	switch (currentRoom) {
		case "safeRoom":
			message = backToSafeRoom();
			points = pointCount();
			disableButton("west");
			disableButton("south");
		break;

		case "redMarkedRoom":
			currentRoom = "ratHall";
			message = backToRatHall();
			points = pointCount(); 
			disableButton("west");
			enableButton("north");
		break;

		case "signHall":
			currentRoom = "thePitt";
			message = signDeath();
			points = zeroPoints();
			disableAllButtons();
		break;

		case "thePitt":
			message = stillAreDead();
			points = zeroPoints();
			disableAllButtons();
		break;

		case "deadEnd":
			message = yourEaten();
			points = zeroPoints();
			disableAllButtons();
		break;

		case "trapRoom":
			message = youreDevoured();
			points = zeroPoints();
			disableAllButtons();
		break;
			
		case "choseToDieRoom":
			message = youreDevoured();
			points = zeroPoints();
			disableAllButtons();
		break;
			
		case "giantSnakeRoom":
			currentRoom = "freedomHallway";
			pointsFreedomHall();
			message = freedomHallway();
			points = pointCount();
			disableButton("east");
		break;
			
		case "freedomHallway":
			currentRoom = "freedom";
			message = freedom();
			points = pointCount();
			disableAllButtons();
		break;
			
		case "freedom":
			message = freedom();
			points = pointCount();
			disableAllButtons();
		break;
			
		default:
			message = hitWall();
			points = pointCount();
		break;
    }
	
    showScene(message);
    showPoints(points);
}