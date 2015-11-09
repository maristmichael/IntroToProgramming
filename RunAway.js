/* Michael Gutierrez
 * Matthew Johnson
 * CMPT 120L-115
 * November 8, 2015
 * Project 4
 */


var currentRoom = "startingRoom";
var currentPoints = 0;

// The function below serve for convenience.
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

// The functions below are location and scenerio descriptions.
function backToStart() {
    var message;
    message = "There are snakes in here you idiot. GET OUT!";
    return message;
}

function safeRoom() {
    var message;
    message = "You are in a safe room.<br>" +
"There are no snakes in the room, but the snakes will follow you if you dawdle for too long.";
    return message;
}

function backToSafeRoom(){
    var message;
    message = "You are back in the safe room.<br>" + 
"You have to leave this place eventually...";
    return message;
}

function ratHall(){
    var message;
    message = "This is a long hallway, with statues of giant rats.<br>" +
"The pitt is to the east.";
    return message;
}

function backToRatHall(){
    var message;
    message = "This is the room with the rat statues and pitt to the east.";
    return message;
}

function redMarkedRoom(){
    var message;
    message = "This room has two directions you can take.<br>" + 
"There appears to be red marks all over the the path toward the west path.<br>" + "West or East, choose wisely...";
    return message;
}

function backToRedRoom(){
    var message;
    message = "You are back in the room with red marks toward the west.";
    return message;
}

function deadEnd(){
    var message;
    message = "Dead end...<br>" + 
"The snakes caught up to you and had you for dinnner.";
    return message;
}

function signHall(){
    var message;
    message = "This room has a sign that states 'Freedom is South.'<br>" + "Seems legit...";
    return message;
}

function signDeath(){
    var message;
    message = "It was not freedom...<br>" + 
"You walked into the pitt which means you are dead.";
    return message;
}

function backToSignHall(){
    var message;
    message = "This is the room with the sign.<br>Are you going to follow the sign south?";
    return message;
}

function giantSnakeRoom(){
    var message;
    message = "THERE IS A 30 FOOT SNAKE NEAR THE NORTH WALL FACING EASTWARD.<br>" + "DONT DISTURB IT!<br>" + "You can escape by heading East or South.";
    return message;
}

function backToGiantSnake(){
    var message;
    message = "You went back into the room with the Giant Snake.<br>" + "Great decision...<br>" + "South or East...";
    return message;
}

function choseToDieRoom(){
    var message;
    message = "For some reason you decided to wake the snake.<br>" + 
"It goes without saying, you were eaten...";
    return message;
}

function falseSafeRoom(){
    var message;
    message = "You escaped that huge snake, atleast for now.<br>Continue onwards.";
    return message;
}

function trapRoom(){
    var message;
    message = "There's no where to go...<br>" + 
"The giant snake slithered to your location and ate you whole with its massive mouth.";
    return message;
}

function freedomHallway(){
    var message;
    message = "You entered another room with statues of giant rats, and the pitt is to the west.<br>" +
"This time however, there appears to be greenerie in the ground.<br>" 
"That is a good sign.";
    return message;
}

function freedom(){
    var message;
    message = "You've escaped this wretched place. No more snakes!<br> FREEDOM!";
    return message;
}

function dumbDeath(){
    var message;
    message = "You somehow fell into the pitt that is in clear sight.<br>You are dead.";
    return message;
}

function stillAreDead(){
    var message;
    message = "You are still dead."
    return message;
}

function youreDevoured(){
    var message;
    message = "You were devoured";
    return message;
}

function yourEaten(){
    var message;
    message = "You have been eaten."
    return message;
}

function hitWall(){
    var message;
    message = "You bumped into a wall, and fell hilariously.<br>" +
"Choose a different direction.";
    return message;
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
    
    if (currentRoom === "startingRoom") {
        currentRoom = "thePitt";
        message = dumbDeath();
        points = zeroPoints();
		disableAllButtons();
    } else if (currentRoom === "thePitt") {
        message = stillAreDead();
        points = zeroPoints();
		disableAllButtons();
    } else if (currentRoom === "safeRoom") {
        currentRoom = "ratHall";
		pointsRatHall();
        message = ratHall();
        points = pointCount();
		disableButton("west");
		enableButton("south");
    } else if (currentRoom === "ratHall") {
        currentRoom = "redMarkedRoom";
		pointsRedRoom();
        message = redMarkedRoom();
        points = pointCount();
		disableButton("north");
		enableButton("west");
    } else if (currentRoom === "freedomHallway") {
        currentRoom = "giantSnakeRoom";
        message = backToGiantSnake();
        points = pointCount();
		enableAllButtons();
    } else if (currentRoom === "giantSnakeRoom") {
        currentRoom = "choseToDieRoom";
        message = choseToDieRoom();
        points = zeroPoints();
		disableAllButtons();
    } else if (currentRoom === "choseToDieRoom") {
        message = youreDevoured();
        points = zeroPoints();
		disableAllButtons();
    } else if (currentRoom === "deadEnd") {
        message = yourEaten();
        points = zeroPoints();
		disableAllButtons();
    } else if (currentRoom === "trapRoom") {
        message = youreDevoured();
        points = zeroPoints();
		disableAllButtons();
    } else if (currentRoom === "freedom") {
        message = freedom();
        points = pointCount();
		disableAllButtons();
    } else {
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
    
    if (currentRoom === "safeRoom") {
        currentRoom = "startingRoom";
        message = backToStart();
        points = pointCount();
		disableButton("east");
		disableButton("south");
		enableButton("west");
    } else if (currentRoom === "ratHall") {
        currentRoom = "thePitt";
        message = dumbDeath();
        points = zeroPoints();
		disableAllButtons();
    } else if (currentRoom === "thePitt") {
        message = stillAreDead();
        points = zeroPoints();
		disableAllButtons();
    } else if (currentRoom === "deadEnd") {
        message = yourEaten();
        points = zeroPoints();
		disableAllButtons();
    } else if (currentRoom === "redMarkedRoom") {
        currentRoom = "signHall";
		pointsSignHall();
        message = signHall();
        points = pointCount();
		disableButton("north");
    } else if (currentRoom === "signHall") {
        currentRoom = "giantSnakeRoom";
		pointsSnakeRoom();
        message = giantSnakeRoom();
        points = pointCount();
		enableAllButtons();
    } else if (currentRoom === "giantSnakeRoom") {
        currentRoom = "falseSafeRoom";
		pointsFalseSafe();
        message = falseSafeRoom();
        points = pointCount();
		disableButton("north");
		disableButton("south");
    } else if (currentRoom === "falseSafeRoom") {
        currentRoom = "trapRoom";
        message = trapRoom();
        points = zeroPoints();
		disableAllButtons();
	} else if (currentRoom === "trapRoom") {
        message = youreDevoured();
        points = zeroPoints();
		disableAllButtons();
    } else if (currentRoom === "choseToDieRoom") {
        message = youreDevoured();
        points = zeroPoints();
		disableAllButtons();
    } else if (currentRoom === "freedom") {
        message = freedom();
        points = pointCount();
		disableAllButtons();
    } else {
        message = hitWall();
        points = pointCount(); 
    }
    showScene(message);
    showPoints(points);
}

function moveSouth() {
    var message;
    var points;
    
    if (currentRoom === "ratHall") {
        currentRoom = "safeRoom";
        message = backToSafeRoom();
        points = pointCount();
		disableButton("west");
		disableButton("south");
    } else if (currentRoom === "redMarkedRoom") {
        currentRoom = "ratHall";
        message = backToRatHall();
        points = pointCount(); 
		disableButton("west");
		enableButton("north");
    } else if (currentRoom === "signHall") {
        currentRoom = "thePitt";
        message = signDeath();
        points = zeroPoints();
		disableAllButtons();
    } else if (currentRoom === "thePitt") {
        message = stillAreDead();
        points = zeroPoints();
		disableAllButtons();
    } else if (currentRoom === "deadEnd") {
        message = yourEaten();
        points = zeroPoints();
		disableAllButtons();
    } else if (currentRoom === "trapRoom") {
        message = youreDevoured();
        points = zeroPoints();
		disableAllButtons();
    } else if (currentRoom === "choseToDieRoom") {
        message = youreDevoured();
        points = zeroPoints();
		disableAllButtons();
    } else if (currentRoom === "giantSnakeRoom") {
        currentRoom = "freedomHallway";
		pointsFreedomHall();
        message = freedomHallway();
        points = pointCount();
		disableButton("east");
    } else if (currentRoom === "freedomHallway") {
        currentRoom = "freedom";
        message = freedom();
        points = pointCount();
		disableAllButtons();
    } else if (currentRoom === "freedom") {
        message = freedom();
        points = pointCount();
		disableAllButtons();
    } else {
        message = hitWall();
        points = pointCount(); 
    }
    showScene(message);
    showPoints(points);
}