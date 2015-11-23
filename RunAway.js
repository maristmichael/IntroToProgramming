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
		setRoomTo("thePitt");
		message = dumbDeath();
		points = zeroPoints();
		pushRoom("startingRoom");
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
		pushRoom("safeRoom");
		disableButton("west");
		enableButton("south");
	break;

	case "ratHall":
		setRoomTo("redMarkedRoom");
		pointsRedRoom();
		message = redMarkedRoom();
		points = pointCount();		
		pushRoom("ratHall");
		disableButton("north");
		enableButton("west");
	break;

	case "freedomHallway":
		setRoomTo("giantSnakeRoom");
		message = backToGiantSnake();
		points = pointCount();		
		pushRoom("freedomHallway");
		enableAllButtons();
	break;

	case "giantSnakeRoom":
		setRoomTo("choseToDieRoom");
		message = choseToDieRoom();
		points = zeroPoints();		
		pushRoom("giantSnakeRoom");
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
	showItemEvent(event);
}

function moveWest() {
    var message;
    var points;
	var event = "";
    
	switch (currentRoom) {
	case "startingRoom":
		setRoomTo("safeRoom");
		pointsSafeRoom();
       	message = safeRoom();
		points = pointCount();
		pushRoom("startingRoom");
		disableButton("south");
		disableButton("west");
		enableButton("north");
		enableButton("east");
	break;

	case "redMarkedRoom":
		setRoomTo("deadEnd");
		message = deadEnd();
		points = zeroPoints();
		pushRoom("redMarkedRoom");
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
		pushRoom("signHall");
		enableAllButtons();
		disableButton("north");
	break;

	case "giantSnakeRoom":
		setRoomTo("signHall");
		message = backToSignHall();
		points = pointCount();
		pushRoom("giantSnakeRoom");
		enableAllButtons();
		disableButton("north");
	break;

	case "falseSafeRoom":
		setRoomTo("giantSnakeRoom");
		message = backToGiantSnake();
		points = pointCount();
		pushRoom("falseSafeRoom");
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
		pushRoom("freedomHallway")
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
	showItemEvent(event);
}

function moveEast() {
    var message;
    var points;
	var event = "";
    
	switch (currentRoom) {
	case "safeRoom":
		setRoomTo("startingRoom");
		message = backToStart();
		points = pointCount();	
		pushRoom("safeRoom");
		disableButton("east");
		disableButton("south");
		enableButton("west");
		enableButton("north");
	break;
			
	case "ratHall":
		setRoomTo("thePitt");
		message = dumbDeath();
		points = zeroPoints();		
		pushRoom("ratHall");
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
		pushRoom("redMarkedRoom");
		enableAllButtons();
		disableButton("north");
	break;
			
	case "signHall":
		setRoomTo("giantSnakeRoom");
		pointsSnakeRoom();
		message = giantSnakeRoom();
		points = pointCount();		
		pushRoom("signHall");
		enableAllButtons();
	break;

	case "giantSnakeRoom":
		setRoomTo("falseSafeRoom");
		pointsFalseSafe();
		message = falseSafeRoom();
		points = pointCount();		
		pushRoom("giantSnakeRoom");
		disableButton("north");
		disableButton("south");
		enableButton("west");
		enableButton("east");
	break;
			
	case "falseSafeRoom":
		setRoomTo("trapRoom");
		message = trapRoom();
		points = zeroPoints();			
		pushRoom("falseSafeRoom");
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
	showItemEvent(event);
}

function moveSouth() {
    var message;
    var points;
	var event = "";

	switch (currentRoom) {
	case "ratHall":
		setRoomTo("safeRoom");
		message = backToSafeRoom();
		points = pointCount();	
		pushRoom("ratHall");
		disableButton("west");
		disableButton("south");
		enableButton("north");
		enableButton("east");
	break;

	case "redMarkedRoom":
		setRoomTo("ratHall");
		message = backToRatHall();
		points = pointCount();		
		pushRoom("redMarkedRoom");
		enableAllButtons();
		disableButton("west");
	break;

	case "signHall":
		setRoomTo("thePitt");
		message = signDeath();
		points = zeroPoints();	
		pushRoom("signHall");
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
		pushRoom("giantSnakeRoom");
		enableAllButtons();
		disableButton("east");
	break;
			
	case "freedomHallway":
		setRoomTo("freedom");
		message = freedom();
		points = pointCount();		
		pushRoom("freedomHallway");
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
		event = "You picked up the figurine. Maybe it'll give you good luck.";
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