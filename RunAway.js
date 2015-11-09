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

// The variables below are items that can be in players inventory.
var note = false;
var miniStatue = false;
var goldenSnake = false;

// The functions below are display functions.
function showScene(message) {
    document.getElementById("message").innerHTML = message;
}

function showPoints(message) {
    document.getElementById("points").innerHTML = message;
}

function showItemEvent(event) {
	document.getElementById("itemEvent").innerHTML = event;
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

// Show/Hides game map.
function toggleMap(id){
	var gameMap = document.getElementById(id);
	
	if (gameMap.style.display === "none") {
		gameMap.style.display = "block";
	} else {
		gameMap.style.display = "none";
	}
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
			setRoomTo("thePitt");
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
			setRoomTo("redMarkedRoom");
			pointsRedRoom();
			message = redMarkedRoom();
			points = pointCount();
			disableButton("north");
			enableButton("west");
		break;

		case "freedomHallway":
			setRoomTo("giantSnakeRoom");
			message = backToGiantSnake();
			points = pointCount();
			enableAllButtons();
		break;

		case "giantSnakeRoom":
			setRoomTo("choseToDieRoom");
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
			setRoomTo("safeRoom");
			pointsSafeRoom();
        	message = safeRoom();
			points = pointCount();
			disableButton("south");
			disableButton("west");
			enableButton("north");
			enableButton("east");
		break;

		case "redMarkedRoom":
			setRoomTo("deadEnd");
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
			setRoomTo("redMarkedRoom");
			message = backToRedRoom();
			points = pointCount();
			enableAllButtons();
			disableButton("north");
		break;

		case "giantSnakeRoom":
			setRoomTo("signHall");
			message = backToSignHall();
			points = pointCount();
			enableAllButtons();
			disableButton("north");
		break;

		case "falseSafeRoom":
			setRoomTo("giantSnakeRoom");
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
			setRoomTo("thePitt");
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
			setRoomTo("startingRoom");
			message = backToStart();
			points = pointCount();
			disableButton("east");
			disableButton("south");
			enableButton("west");
			enableButton("north");
		break;
			
		case "ratHall":
			setRoomTo("thePitt");
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
			setRoomTo("signHall");
			pointsSignHall();
			message = signHall();
			points = pointCount();
			enableAllButtons();
			disableButton("north");
		break;
			
		case "signHall":
			setRoomTo("giantSnakeRoom");
			pointsSnakeRoom();
			message = giantSnakeRoom();
			points = pointCount();
			enableAllButtons();
		break;

		case "giantSnakeRoom":
			setRoomTo("falseSafeRoom");
			pointsFalseSafe();
			message = falseSafeRoom();
			points = pointCount();
			disableButton("north");
			disableButton("south");
			enableButton("west");
			enableButton("east");
		break;
			
		case "falseSafeRoom":
			setRoomTo("trapRoom");
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
		case "ratHall":
			setRoomTo("safeRoom");
			message = backToSafeRoom();
			points = pointCount();
			disableButton("west");
			disableButton("south");
			enableButton("north");
			enableButton("east");
		break;

		case "redMarkedRoom":
			setRoomTo("ratHall");
			message = backToRatHall();
			points = pointCount();
			enableAllButtons();
			disableButton("west");
		break;

		case "signHall":
			setRoomTo("thePitt");
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
			setRoomTo("freedomHallway");
			pointsFreedomHall();
			message = freedomHallway();
			points = pointCount();
			enableAllButtons();
			disableButton("east");
		break;
			
		case "freedomHallway":
			setRoomTo("freedom");
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

// Grab item function
function grabItem(){
	var event;
	
	if (currentRoom === "safeRoom") {
		note = true;
		event = "The note reads: 'The risk is worth the reward.'"
		
	}
	
	showItemEvent(event);
}