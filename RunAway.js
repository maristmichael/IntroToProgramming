/*
 * Michael Gutierrez
 * Matthew Johnson
 * CMPT 120L-115
 * November 24, 2015
 * Project 5 Corrections
*/

// This Array holds the locations
var locations = [startingRoom, safeRoom, ratHall, redMarkedRoom, deadEnd, signHall, giantSnakeRoom, choseToDieRoom, falseSafeRoom, trapRoom, freedomHallway, freedom, thePitt];

// Global Player Object
var player = {
	currentRoom: locations[0],
	currentPoints: 0,
	inventory: [],
	breadcrumbTrail: []
};

// Location Prototype and locationinstances
function Location(name, description, visitCount, item) {
	this.name = name;
	this.description = description;
	this.visitCount = visitCount;
	this.item = item;
	this.toString = description;
}

var startingRoom = new Location("Starting Room", locationDescrip("startingRoom"), 1, "");
var safeRoom = new Location("Safe Room", locationDescrip("safeRoom"), 0, note);
var ratHall = new Location("Rat Hall", locationDescrip("ratHall"), 0, miniRatFigurine);
var redMarkedRoom = new Location("Red Marked Room", locationDescrip("redMarkedRoom"), 0, "");
var deadEnd = new Location("Dead End", locationDescrip("deadEnd"), 0, "");
var signHall = new Location("Sign Hall", locationDescrip("signHall"), 0 ,"");
var giantSnakeRoom = new Location("Giant Snake Room", locationDescrip("giantSnakeRoom"), 0, "");
var choseToDieRoom = new Location("Chose To Die Room", locationDescrip("choseToDieRoom"), 0, "");
var falseSafeRoom = new Location("False Safe Room", locationDescrip("falseSafeRoom"), 0, fadedPaper);
var trapRoom = new Location("Trap Room", locationDescrip("trapRoom"), 0, "");
var freedomHallway = new Location("Freedom Hallway", locationDescrip("freedomHallway"), 0, goldenSnake);
var freedom = new Location("Freedom", locationDescrip("freedom"), 0, "");
var thePitt = new Location("The Pitt", locationDescrip("thePitt"), 0, "");

// These is the item protoype and some instances
function Item(name, description) {
	this.name = name;
	this.description = description;
}

var note = new Item(
	"note",
	"You pick up the note, it reads: " + 
	"'You can never escape the Pitt'"
);

var miniRatFigurine = new Item(
	"Rat Figurine",
	"This is a rat figurine, " + 
	"possibly a good luck charm."
);

var fadedPaper = new Item(
	"Faded Paper",
	"You pick up the note on the wall, it reads: " + 
	"'The risk is worth the reward.'"
);

var goldenSnake = new Item(
	"Golden Snake",
	"It is a snake carved out of pure gold.<br>" +
	"It has been sitting there for quite some time" +
	"It'll probably sell for a pretty penny."
);

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

// This is function serves for convenience 
function locationDescrip(location) {
	switch (location) {
	case "safeRoom":
		return "You are in a safe room.<br>" +
		"There are no snakes in the room, but the " +
		"snakes will follow you if you dawdle for too long.";
	break;
			
	case "ratHall":
		return "This is a long hallway, with two statues of giant rats.<br>" +
		"The pitt is to the east.<br>" 
	break;
			
	case "redMarkedRoom":
		return "This room has two directions you can take.<br>" + 
		"There appears to be red marks all over the the path toward" +
		"the west path.<br>" + "West or East, choose wisely...";
	break;
			
	case "deadEnd":
		return "Dead end...<br>" + 
		"The snakes caught up to you and had you for dinnner.";
	break;
			
	case "signHall":
		return "This room has a sign that states 'Freedom is South.'<br>" +
		"Seems legit...";
	break;
			
	case "giantSnakeRoom":
		return "THERE'S A 30 FOOT SNAKE NEAR THE NORTH WALL FACING EAST.<br>" + 
		"DONT DISTURB IT!<br>" + "You can escape by heading East or South.";
	break;
			
	case "choseToDieRoom":
		return "For some reason you decided to wake the snake.<br>" + 
		"It goes without saying, you were eaten...";
	break;
			
	case "falseSafeRoom":
		return "You escaped that huge snake, atleast for now.<br>" +
		"This room is a long corridor that only goes one way.<br>";
	break;
	
	case "trapRoom":
		return "There's no where to go...<br>" + 
		"The giant snake slithered to you and ate you whole with its massive mouth.";
	break;
			
	case "freedomHallway":
		return "You entered another room with statues of giant rats, " + 
		"and the pitt is to the west.<br>" +
		"This time however, there appears to be greenerie in the ground.<br>" 
		"That is a good sign.<br>";
	break;
			
	case "freedom":
		return "You've escaped this wretched place. No more snakes!<br> FREEDOM!";
	break;
			
	case "backToStart":
		return "There are snakes in here you idiot. GET OUT!";
	break;
			
	case "backToRatHall":
		return "This is the room with the rat statues and pitt to the east.";
	break;
			
	case "backToRedRoom":
		return "You are back in the room with red marks toward the west.";
	break;
			
	case "pittDeathSouth":
		return "It was not freedom...<br>" + 
		"You walked into the pitt which means you are dead.";
	break;
			
	case "backToSignHall":
		return "This is the room with the sign.<br>" +
		"Are you going to follow the sign south?";
	break;
			
	case "backToGiantSnake":
		return "You went back into the room with the Giant Snake.<br>" + 
		"Great decision...<br>" + "South or East...";
	break;
			
	case "backToSafeRoom":
		return "You are back in the safe room.<br>" + 
		"You have to leave this place eventually...";
	break;
			
	case "thePitt":
		return "You somehow fell into the pitt that is in clear sight.<br>" +
		"You are dead.";
	break;
	
	case "hitWall":
		return "You bumped into a wall, and fell hilariously.<br>" + 
		"Choose a different direction.";
	break;
			
	case "startingRoom":
		return "There are snakes in here you idiot. GET OUT!";
	break;
	}
}

// The variables below are items that can be in players inventory.

var found = 0;
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
		choseToDieRoomEvent();
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
		thePittSouth();
		message = thePittSouth();
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
	
	if (player.currentRoom === locations[0]) {
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