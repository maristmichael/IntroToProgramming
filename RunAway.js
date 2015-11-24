/*
 * Michael Gutierrez
 * Matthew Johnson
 * CMPT 120L-115
 * November 24, 2015
 * Project 5
 */

// Global Player Object
var player = {
	currentRoom: "startingRoom",
	currentPoints: 0,
	inventory: [],
	breadcrumbTrail: []
};

// These is an item protype and some instances
function Item(name, description) {
	this.name = name;
	this.description = description;
}

var note = new Item("Note", itemDescription("note") );
var miniRatFigurine = new Item("Rat Figurine", itemDescription("miniRatFigurine") );
var fadedPaper = new Item("Paper", itemDescription("fadedPaper") );
var goldenSnake = new Item("Golden Snake", itemDescription("goldenSnake") );


// The functions below serve for convenience.
function pointCount() {
	return "Points: " + player.currentPoints;
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
			
function itemDescription(item) {
	switch (item) {
	case "note":
		return "You pick up the note, it reads: " + 
		"'The risk is worth the reward.'";
	break;

	case "miniRatFigurine":
		return "This is a rat figurine, " + 
		"possibly a good luck charm.";
	break;

	case "fadedPaper":
		return "The paper is very faded but it reads: " +
		"'The risk is worth the reward.'";
	break;

		case "goldenSnake":
		return "It is a snake carved out of pure gold.<br>" +
		"It has been sitting there for quite some time" +
		"It'll probably sell for a pretty penny."
	break;
	}
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
        player.currentPoints += 5;
        safeRoomVisit = true;
		return player.currentPoints;
	}
}

function pointsRatHall(){
	if (ratHallVisit === false) {
        player.currentPoints += 5;
        ratHallVisit = true;
		return player.currentPoints;
	}
}

function pointsRedRoom(){
	if (redRoomVisit === false) {
        player.currentPoints += 5;
        redRoomVisit = true;
		return player.currentPoints;
	}
}

function pointsSignHall(){
	if (signHallVisit === false) {
        player.currentPoints += 5;
        signHallVisit = true;
		return player.currentPoints;
	}
}

function pointsSnakeRoom(){
	if (snakeRoomVisit === false) {
        player.currentPoints += 5;
        snakeRoomVisit = true;
		return player.currentPoints;
	}
}

function pointsFalseSafe(){
	if (falseSafeVisit === false) {
        player.currentPoints += 5;
        falseSafeVisit = true;
		return player.currentPoints;
	}
}

function pointsFreedomHall(){
	if (freedomHallVisit === false) {
        player.currentPoints += 5;
        freedomHallVisit = true;
		return player.currentPoints;
	}
}

// The functions below moves player to a direction.
function moveNorth() {
    var message;
    var points;
	var event = "";
    
	switch (player.currentRoom) {
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
    
	switch (player.currentRoom) {
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
    
	switch (player.currentRoom) {
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

	switch (player.currentRoom) {
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
	
	if (player.currentRoom === "safeRoom") {
		haveNote = true;
		player.inventory.push(note.name);
		event = note.description;
	} else if (player.currentRoom === "ratHall") {
		haveMiniRatFigurine = true;
		player.inventory.push(miniRatFigurine.name);
		event = miniRatFigurine.description; 
	} else if (player.currentRoom === "falseSafeRoom") {
		haveFadedPaper = true;
		player.inventory.push(fadedPaper.name);
		event = fadedPaper.description;
	} else if (player.currentRoom === "freedomHallway") {
		haveGoldenSnake = true;
		player.inventory.push(goldenSnake.name);
		event = goldenSnake.description;
	} else {
		event = "Nothing to take here."
	}
	
	showItemEvent(event);
}

// This function handles listing player inventory. HARD w/out using an array 
function showInventory() {
	var items;

	items = player.inventory;
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
	history = player.breadcrumbTrail;
	listMoveHistory(history);
}

function pushRoom(room) {
	switch (room) {
		case "startingRoom":
			player.breadcrumbTrail.push ("Starting Room");
		break;
			
		case "safeRoom":
			player.breadcrumbTrail.push ("Safe Room");
		break;
			
		case "ratHall":
			player.breadcrumbTrail.push ("Rat Hall");
		break;
		
		case "redMarkedRoom":
			player.breadcrumbTrail.push ("Red Marked Room");
		break;
		
		case "deadEnd":
			player.breadcrumbTrail.push ("Dead End");
		break;

		case "signHall":
			player.breadcrumbTrail.push ("Sign Hall");
		break;
		
		case "giantSnakeRoom":
			player.breadcrumbTrail.push ("Giant Snake Room");
		break;
			
		case "falseSafeRoom":
			player.breadcrumbTrail.push ("False Safe Room");
		break;
		
		case "trapRoom":
			player.breadcrumbTrail.push ("Trap Room");
		break;
		
		case "choseToDieRoom":
			player.breadcrumbTrail.push ("Chose To Die Room ");
		break;
		
		case "freedomHallway":
			player.breadcrumbTrail.push ("Freedom Hallway");
		break;
			
		case "freedom":
			player.breadcrumbTrail.push ("Freedom");
		break;
		
		case "thePitt":
			player.breadcrumbTrail.push ("The Pitt");
		break;
	}
}