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

// These is the item protoype and some instances
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

// The variables below are items that can be in players inventory.

var foundNote = 0;
var foundMiniRatFigurine = 0;
var foundFadedPaper = 0;
var foundGoldenSnake = 0;

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
	if ( safeRoom.visitCount === 1) {
        player.currentPoints += 5;
		return player.currentPoints;
	}
}

function pointsRatHall(){
	if (ratHall.visitCount === 1) {
        player.currentPoints += 5;
		return player.currentPoints;
	}
}

function pointsRedRoom(){
	if (redMarkedRoom.visitCount === 1) {
        player.currentPoints += 5;
		return player.currentPoints;
	}
}

function pointsSignHall(){
	if (signHall.visitCount === 1) {
        player.currentPoints += 5;
		return player.currentPoints;
	}
}

function pointsSnakeRoom(){
	if (giantSnakeRoom.visitCount === 1) {
        player.currentPoints += 5;
		return player.currentPoints;
	}
}

function pointsFalseSafe(){
	if (falseSafeRoom.visitCount === 1) {
        player.currentPoints += 5;
		return player.currentPoints;
	}
}

function pointsFreedomHall(){
	if (freedomHallway.visitCount === 1) {
        player.currentPoints += 5;
		return player.currentPoints;
	}
}

// The functions below moves player to a direction.
function moveNorth() {
    var message;
    var points;
	var event = "";
    
	switch (player.currentRoom) {
	case locations[0]:
		thePittNorth();
		message = thePitt.description;
		points = zeroPoints();
	break;
		
	case locations[1]:
		ratHallEvent();
		message = ratHall.description;
		points = pointCount();			
	break;

	case locations[2]:
		redMarkedRoomEvent();
		message = redMarkedRoom.description;
		points = pointCount();		
	break;

	case locations[10]:
		message = backToGiantSnakeNorth();
		points = pointCount();		
	break;

	case locations[6]:
		choseToDieRoomEvent;
		message = choseToDieRoom.description;
		points = zeroPoints();		
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
	case locations[0]:
		safeRoomEvent();
		message = safeRoom.description;
		points = pointCount();
	break;

	case locations[3]:
		deadEndEvent();
		message = deadEnd.description;
		points = zeroPoints();
	break;

	case locations[5]:
		message = backToRedRoom();
		points = pointCount();
	break;

	case locations[6]:
		message = backToSignHall();
		points = pointCount();
	break;

	case locations[8]:
		message = backToGiantSnakeWest();
		points = pointCount();
	break;

	case locations[10]:
		thePittWest();
		message = thePitt.description;
		points = zeroPoints();
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
	case locations[1]:
		backToStart();
		message = startingRoom.description;
		points = pointCount();
	break;
			
	case locations[2]:
		thePittEast();
		message = thePitt.description;
		points = zeroPoints();		
	break;
			
	case locations[3]:
		signHallEvent();
		message = signHall.description;
		points = pointCount();		
	break;
			
	case locations[5]:
		giantSnakeRoomEvent();
		message = giantSnakeRoom.description;
		points = pointCount();		
	break;

	case locations[6]:
		falseSafeRoomEvent();
		message = falseSafeRoom.description;
		points = pointCount();
	break;
			
	case locations[8]:
		trapRoomEvent();
		message = trapRoom.description;
		points = zeroPoints();			
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
	case locations[2]:
		backToSafeRoomSouth();
		message = safeRoom.description;
		points = pointCount();
	break;

	case locations[3]:
		message = backToRatHall();
		points = pointCount();
	break;

	case locations[5]:
		signDeath();
		message = signDeath();
		points = zeroPoints();
	break;

	case locations[6]:
		freedomHallwayEvent();
		message = freedomHallway.description;
		points = pointCount();
	break;
			
	case locations[10]:
		freedomEvent();
		message = freedom.description;
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
		foundNote = true;
		player.inventory.push(note.name);
		event = note.description;
	} else if (player.currentRoom === "ratHall") {
		foundMiniRatFigurine = true;
		player.inventory.push(miniRatFigurine.name);
		event = miniRatFigurine.description; 
	} else if (player.currentRoom === "falseSafeRoom") {
		foundFadedPaper = true;
		player.inventory.push(fadedPaper.name);
		event = fadedPaper.description;
	} else if (player.currentRoom === "freedomHallway") {
		foundGoldenSnake = true;
		player.inventory.push(goldenSnake.name);
		event = goldenSnake.description;
	} else {
		event = "Nothing to take here."
	}
	showItemEvent(event);
}

//This function handles when player looks around
function lookAround() {
	var message
	var spotNote = "You spot a note on the ground.";
	var spotFigurine = "There's a mini figurine of a rat behind" +
	"one of the statues.";
	var spotFadedPaper = "You notice a paper is on the wall";
	var spotGoldSnake = "There's something shiny in the grass";
	
	if (player.currentRoom === locations[1]) {
		message = spotNote;
	} else if (player.currentRoom === locations[2]) {
		message = spotFigurine;
	} else if (player.currentRoom === locations[8]) {
		message = fadedPaper;
	} else if (player.currentRoom === locations[10]) {
		message = spotGoldSnake;
	} else {
		message = "Nothing here...";
	}
	showScene(message);
}
// This function handles listing player inventory.  
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