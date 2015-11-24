/*
 * Michael Gutierrez
 * Matthew Johnson
 * CMPT 120L-115
 * November 9, 2015
 * Project 4 Corrections
 */


var currentRoom = "startingRoom";
var currentPoints = 0;
var breadcrumbTrail = [];

// The functions below serve for convenience.
function pointCount() {
	return "Points: " + currentPoints;
}

function zeroPoints() {
	return "Points: 0";
}

function allTypeCommands() {
	return "Type 'N' or 'n' to go north.<br>" +
	"Type 'S' or 's' to go south.<br>" +
	"Type 'E' or 'e' to go east.<br>" +
	"Type 'W' or 'w' to go west.<br>" +
	"Type 'T' or 't' to grab item.<br>" +
	"Type 'I' or 'i' to check inventory.<br>" + 
	"Type 'P' or 'p' to show locations and moves."
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

var haveNote = false;
var haveMiniRatFigurine = false;
var haveFadedPaper = false;
var haveGoldenSnake = false;

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

function listInventory(items) {
	document.getElementById("inventory").innerHTML = items;
}

function listHelp(help) {
	document.getElementById("commandHelp").innerHTML = help;
}

function listMoveHistory(history) {
	document.getElementById("moveHistory").innerHTML = history;
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
	var error = "";
	var userInput = document.getElementById("command").value;
	
	if (userInput === "N") {
		moveNorth();
	} else if (userInput === "n") {
		moveNorth();
	} else if (userInput === "S") {
		moveSouth();
	} else if (userInput === "s") {
		moveSouth();
	} else if (userInput === "E") {
		moveEast();
	} else if (userInput === "e") {
		moveEast();
	} else if (userInput === "W") {
		moveWest();
	} else if (userInput === "w") {
		moveWest();
	} else if (userInput === "T") {
		grabItem();
	} else if (userInput === "t") {
		grabItem();
	} else if (userInput === "I") {
		showInventory();
	} else if (userInput === "i") {
		showInventory();
	} else if (userInput === "H") {
		showHelp();
	} else if (userInput === "h") {
		showHelp();
	} else if (userInput === "P") {
		previousMoves();
	} else if (userInput === "p") {
		previousMoves();
	} else {
		error = "You entered an invalid command. Try again.";
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
	var event = "";
    
	switch (currentRoom) {
	case "startingRoom":
		message = thePittNorth();
		points = zeroPoints();
	break;

	case "thePitt":
		message = stillAreDead();
		points = zeroPoints();			
	break;

	case "safeRoom":
		message = ratHall();
		points = pointCount();			
	break;

	case "ratHall":
		message = redMarkedRoom();
		points = pointCount();		
	break;

	case "freedomHallway":
		message = backToGiantSnakeNorth();
		points = pointCount();		
	break;

	case "giantSnakeRoom":
		message = choseToDieRoom();
		points = zeroPoints();		
	break;

	case "choseToDieRoom":
		message = youreDevoured();
		points = zeroPoints();		
	break;

	case "deadEnd":
		message = yourEaten();
		points = zeroPoints();		
	break;
			
	case "trapRoom":
		message = youreDevoured();
		points = zeroPoints();		
	break;

	case "freedom":
		message = freedom();
		points = pointCount();			
	break;

	default:
		message = hitWall();
		points = pointCount();
	break;
	}
	
    showScene(message);
    showPoints(points);
	showItemEvent(event);
}

function moveWest() {
    var message;
    var points;
	var event = "";
    
	switch (currentRoom) {
	case "startingRoom":
		message = safeRoom();
		points = pointCount();
	break;

	case "redMarkedRoom":
		message = deadEnd();
		points = zeroPoints();
	break;

	case "deadEnd":
		message = yourEaten();
		points = zeroPoints();
	break;

	case "thePitt":
		message = stillAreDead();
		points = zeroPoints();
	break;

	case "signHall":
		message = backToRedRoom();
		points = pointCount();
	break;

	case "giantSnakeRoom":
		message = backToSignHall();
		points = pointCount();
	break;

	case "falseSafeRoom":
		message = backToGiantSnakeWest();
		points = pointCount();
	break;

	case "trapRoom":
		message = youreDevoured();
		points = zeroPoints();
	break;

	case "freedomHallway":
		message = thePittWest();
		points = zeroPoints();
	break;

	case "choseToDieRoom":
		message = youreDevoured();
		points = zeroPoints();
	break;

	case "freedom":
		message = freedom();
		points = pointCount();
	break;

	default:
		message = hitWall();
		points = pointCount(); 
	break;
	}
	
    showScene(message);
    showPoints(points);
	showItemEvent(event);
}

function moveEast() {
    var message;
    var points;
	var event = "";
    
	switch (currentRoom) {
	case "safeRoom":
		message = backToStart();
		points = pointCount();
	break;
			
	case "ratHall":
		message = thePitt();
		points = zeroPoints();		
	break;

	case "thePitt":
		message = stillAreDead();
		points = zeroPoints();
	break;
			
	case "deadEnd":
		message = yourEaten();
		points = zeroPoints();			
	break;
			
	case "redMarkedRoom":
		message = signHall();
		points = pointCount();		
	break;
			
	case "signHall":
		message = giantSnakeRoom();
		points = pointCount();		
	break;

	case "giantSnakeRoom":
		message = falseSafeRoom();
		points = pointCount();
	break;
			
	case "falseSafeRoom":
		message = trapRoom();
		points = zeroPoints();			
	break;
			
	case "trapRoom":
		message = youreDevoured();
		points = zeroPoints();		
	break;
			
	case "choseToDieRoom":
		message = youreDevoured();
		points = zeroPoints();		
	break;
			
	case "freedom":
		message = freedom();
		points = pointCount();		
	break;
			
	default:
		message = hitWall();
		points = pointCount();		
	break;
    }
	
    showScene(message);
    showPoints(points);
	showItemEvent(event);
}

function moveSouth() {
    var message;
    var points;
	var event = "";

	switch (currentRoom) {
	case "ratHall":
		message = backToSafeRoom();
		points = pointCount();
	break;

	case "redMarkedRoom":
		message = backToRatHall();
		points = pointCount();
	break;

	case "signHall":
		message = signDeath();
		points = zeroPoints();
	break;

	case "thePitt":
		message = stillAreDead();
		points = zeroPoints();		
	break;

	case "deadEnd":
		message = yourEaten();
		points = zeroPoints();		
	break;

	case "trapRoom":
		message = youreDevoured();
		points = zeroPoints();
	break;
			
	case "choseToDieRoom":
		message = youreDevoured();
		points = zeroPoints();		
	break;
			
	case "giantSnakeRoom":
		message = freedomHallway();
		points = pointCount();
	break;
			
	case "freedomHallway":
		message = freedom();
		points = pointCount();		
	break;
			
	case "freedom":
		message = freedom();
		points = pointCount();		
	break;
			
	default:
		message = hitWall();
		points = pointCount();		
	break;
    }
	
    showScene(message);
    showPoints(points);
	showItemEvent(event);
}

// This function handles when player grabs an item.
function grabItem(){
	var event;
	
	if (currentRoom === "safeRoom") {
		haveNote = true;
		event = "You pocketed the note that read:<br>" + 
		"'The risk is worth the reward.'";
	} else if (currentRoom === "ratHall") {
		haveMiniRatFigurine = true;
		event = "You picked up the figurine." +
		"Maybe it'll give you good luck.";
	} else if (currentRoom === "falseSafeRoom") {
		haveFadedPaper = true;
		event = "You pick up the paper that reads:<br>" +
		"'Death Awaits Ahead...'";
	} else if (currentRoom === "freedomHallway") {
		haveGoldenSnake = true;
		event = "You pick up the golden item.<br>" + 
		"It is a snake carved out of pure gold.<br>" +
		"It appears that it has not been touched in ages.<br>" +
		"It'll probably sell for a pretty penny."
	} else {
		event = "Nothing to take here."
	}
	
	showItemEvent(event);
}

// This function handles listing player inventory. HARD w/out using an array 
function showInventory() {
	var allItemsHeld = "";
	var items = "No items";
	var note = "Note";
	var miniRatFigurine = "Mini-Figurine";
	var fadedPaper = "Faded Paper";
	var goldenSnake = "Golden Snake";

	
	if (haveNote === true) {
		allItemsHeld = note;
		items = allItemsHeld;
	}
	
	if (haveMiniRatFigurine === true) {
		allItemsHeld = note + ", " + miniRatFigurine;
		items = allItemsHeld;
	}
	
	if (haveFadedPaper === true) {
		allItemsHeld = note + ", " + miniRatFigurine + ", " +
		fadedPaper;
		items = allItemsHeld;
	}
	
	if (haveGoldenSnake === true) {
		allItemsHeld = note + ", " + miniRatFigurine +", " +
		fadedPaper + ", " + goldenSnake;
	}
	
	listInventory(items);
}

// This function used to show all type commands
function showHelp() {
	var help;
	help = allTypeCommands();
	listHelp(help);
}

// These functions are used to show/push player's move history onto array
function previousMoves() {
	var history;
	history = breadcrumbTrail.toString();
	listMoveHistory(history);
}

function pushRoom(room) {
	switch (room) {
		case "startingRoom":
			breadcrumbTrail.push ("Starting Room");
		break;
			
		case "safeRoom":
			breadcrumbTrail.push ("Safe Room");
		break;
			
		case "ratHall":
			breadcrumbTrail.push ("Rat Hall");
		break;
		
		case "redMarkedRoom":
			breadcrumbTrail.push ("Red Marked Room");
		break;
		
		case "deadEnd":
			breadcrumbTrail.push ("Dead End");
		break;

		case "signHall":
			breadcrumbTrail.push ("Sign Hall");
		break;
		
		case "giantSnakeRoom":
			breadcrumbTrail.push ("Giant Snake Room");
		break;
			
		case "falseSafeRoom":
			breadcrumbTrail.push ("False Safe Room");
		break;
		
		case "trapRoom":
			breadcrumbTrail.push ("Trap Room");
		break;
		
		case "choseToDieRoom":
			breadcrumbTrail.push ("Chose To Die Room");
		break;
		
		case "freedomHallway":
			breadcrumbTrail.push ("Freedom Hallway");
		break;
			
		case "freedom":
			breadcrumbTrail.push ("Freedom");
		break;
		
		case "thePitt":
			breadcrumbTrail.push ("The Pitt");
		break;
	}
}