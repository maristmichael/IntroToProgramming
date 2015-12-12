/*
 * Michael Gutierrez
 * Matthew Johnson
 * CMPT 120L-115
 * December 11, 2015
 * Version 1.0
*/

// These is the item constructer and objects that were created with it
function Item(name, observed, description) {
	this.name = name;
	this.observed = observed;
	this.description = description;
}

var note = new Item(
	"Note",
	"You spot a note on the ground.",
	"You pick up the note, it reads:<br>"
	 + "'You can never escape the Pitt'"
);

var miniRatFigurine = new Item(
	"Rat Figurine",
	"There's a mini figurine of a rat behind one of the statues.",
	"This is a rat figurine, possibly a good luck charm."
);

var fadedPaper = new Item(
	"Faded Paper",
	"You notice a paper is on the wall.",
	"You pick up the note on the wall, it reads:<br>"
	 + "'The risk is worth the reward.'"
);

var goldenSnake = new Item(
	"Golden Snake",
	"There's something shiny in the grass.",
	"You found a snake carved out of pure gold.<br>"
	 + "It has been sitting there for quite some time so "
	 + "it'll probably sell for a pretty penny. <br>"
	 + "Engraved in the bottom is 'Yell the danger you're running from.'"
);

//These are the integer direction constants
const NORTH = 0;
const SOUTH = 1;
const WEST = 2;
const EAST = 3;

// Location constructor and prototype
function Location(name, description, visitCount, item) {
	this.name = name;
	this.description = description;
	this.visitCount = visitCount;
	this.item = item;
}

// A toString method for the locations
Location.prototype.toString = function() {
    return this.descrip;
}

// These are all of the locations
var locations = [
/*0*/	new Location("Starting Room", descriptionOf("startingRoom"), 1, null),
/*1*/	new Location("Safe Room", descriptionOf("safeRoom"), 0, note),
/*2*/	new Location("Rat Hall", descriptionOf("ratHall"), 0, miniRatFigurine),
/*3*/	new Location("Red Marked Room", descriptionOf("redMarkedRoom"), 0, null),
/*4*/	new Location("Dead End", descriptionOf("deadEnd"), 0, null),
/*5*/	new Location("Sign Hall", descriptionOf("signHall"), 0,null),
/*6*/	new Location("Giant Snake Room", descriptionOf("giantSnakeRoom"), 0, null),
/*7*/	new Location("Chose To Die Room", descriptionOf("choseToDieRoom"), 0, null),
/*8*/	new Location("False Safe Room", descriptionOf("falseSafeRoom"), 0, fadedPaper),
/*9*/	new Location("Trap Room", descriptionOf("trapRoom"), 0, null),
/*10*/	new Location("Freedom Hallway", descriptionOf("freedomHallway"), 0, goldenSnake),
/*11*/	new Location("Freedom", descriptionOf("freedom"), 0, null),
/*12*/	new Location("The Pitt", descriptionOf("thePitt"), 0, null),
];

// This is the navigation matrix
var map = [
	/* [North, South, West, East] */
	[ locations[12], null, locations[1], null ], // from Starting Room --> Safe Room(west), The Pitt(north)
    [ locations[2], null, null, locations[0] ], // from Safe Room --> Rat Hall(north), Starting Room(east)
	[ locations[3], locations[1], null, locations[12] ], // from Rat Hall --> R.M. Room(north), The Pitt(east), Safe Room(south)
	[ null, locations[2], locations[4], locations[5] ], // from Red Marked Room --> Dead End(west), Sign Hall(east), Rat Hall(south) 
	[ null, null, null, null ], // from Dead End --> Nowhere
	[ null, locations[12], locations[3], locations[6] ], // from Sign Hall --> R.M. Room(west), G.S. Room(east), The Pitt(south)
	[ locations[7], locations[10], locations[5], locations[8] ], // from Giant Snake Room --> C.T.D. Room(north), Sign Hall(west), False Safe Room(east), Freedom Hall(south)
	[ null, null, null, null ], // from Choose To Die Room --> Nowhere
	[ null, null, locations[6], locations[9] ], // from False Safe Room --> G.S. Room(west), Trap Room(east)
	[ null, null, null, null ], // from Trap Room --> Nowhere
	[ locations[6], null, locations[12], null ], // from Freedom Hallway --> G.S. Room(north), The Pitt(west)
	[ null, null, null, null ], // from Freedom --> Nowhere
	[ null, null, null, null ], // from The Pitt --> Nowhere
	
];

// This is the Global Player Object
var player = {
	currentRoom: locations[0],
	currentPoints: 0,
	inventory: [],
	breadcrumbTrail: []
};

// Converts the integer direction constant into the name of the direction.
function directionToString(dir) {
    switch (dir) {
    	case NORTH: return "North";
            break;
    	case EAST:	return "East";
			break;
    	case SOUTH: return "South";
			break;
    	case WEST:	return "West";
        	break;
    }
}

// The functions below serve for convenience.
function pointCount() {
	return "Points: " + player.currentPoints;
}

function zeroPoints() {
	return "Points: 0";
}

function allTypeCommands() {
	return "Type 'N' to go north.<br>" +
	"Type 'S' to go south.<br>" +
	"Type 'E' to go east.<br>" +
	"Type 'W' to go west.<br>" +
	"Type 'G' to grab an item.<br>" +
	"Type 'M' to toggle the map on or off.<br>" +
	"Type 'L' to look around your current room.<br>" +
	"Type 'Y' to yell something outloud.";
}

function descriptionOf(location) {
	switch (location) {
	case "safeRoom":
		return "You are in a safe room.<br>" +
		"There are no snakes in the room, but the " +
		"snakes will follow you if you dawdle for too long.";
	break;
			
	case "ratHall":
		return "This is a long hallway, with two statues of giant rats.<br>" +
		"The pitt is to the east.<br>";
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
		"This time however, there appears to be greenerie in the ground.<br>" +
		"That is a good sign.<br>";
	break;
			
	case "freedom":
		return "You woke up from your nightmare.<br>" +
		"You've been having snake nightmares since going to college.<br>" +
		"You truly thought that you were trapped in a weird location escaping from snakes...";
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
			
	case "startingRoom":
		return "You wake up to find that you are in a room filled with snakes.<br>" +
		"Your are terrified of snakes, so you look for a way to escape.<br>" +
		"Infront of you, to the north, there is a bottomless pitt.<br>" +
		"(It might be a good idea to not fall in...)";
	break;
	}
}

// This function changes location description after it has been visited
function newDescriptions() {
	if (locations[0].visitCount > 1) {
		locations[0].description = descriptionOf("backToStart");
		
	}
	if (locations[1].visitCount > 2) {
		locations[1].description = descriptionOf("backToSafeRoom");
		
	}
	if (locations[2].visitCount > 1) {
		locations[2].description = descriptionOf("backToRatHall");
		
	}
	if (locations[3].visitCount > 1) {
		locations[3].description = descriptionOf("backToRedRoom");
		
	}
	if (locations[5].visitCount > 1) {
		locations[5].description = descriptionOf("backToSignHall");
		
	if (locations[6].visitCount > 1) {
		locations[6].description = descriptionOf("backToGiantSnake");	
	}

// The functions below are display functions.
function showScene(loc) {
    document.getElementById("message").innerHTML = loc.description;
}

function showPoints(message) {
    document.getElementById("points").innerHTML = message;
}

function showItemEvent(event) {
	document.getElementById("itemEvent").innerHTML = event;
}

function showInventory(items) {
	document.getElementById("displayInventory").innerHTML = items;
}

function listHelp(help) {
	document.getElementById("commandHelp").innerHTML = help;
}

function listMoveHistory(history) {
	document.getElementById("previousMoves").innerHTML = history;
}

function showInvalidDirection(error) {
	document.getElementById("invalidDirection").innerHTML = error;
}

// The functions below disable/enable directional buttons.
function disableButton(){
	if (from(player.currentRoom, NORTH) === null) {
		document.getElementById("northButton").disabled = true;
	}
	if (from(player.currentRoom, SOUTH) === null) {
		document.getElementById("southButton").disabled = true;
	}
	if (from(player.currentRoom, WEST) === null) {
		document.getElementById("westButton").disabled = true;
	}
	if (from(player.currentRoom, EAST) === null) {
		document.getElementById("eastButton").disabled = true;
	}
}

function enableButton(){
	if (from(player.currentRoom, NORTH) !== null) {
		document.getElementById("northButton").disabled = false;
	}
	if (from(player.currentRoom, SOUTH) !== null) {
		document.getElementById("southButton").disabled = false;
	}
	if (from(player.currentRoom, WEST) !== null) {
		document.getElementById("westButton").disabled = false;
	}
	if (from(player.currentRoom, EAST) !== null) {
		document.getElementById("eastButton").disabled = false;
	}
}

// Toggles game map.
function toggleMap(id){
	var gameMap = document.getElementById("RunAwayMap.png");
	
	if (gameMap.style.display === "none") {
		gameMap.style.display = "block";
	
	} else {
		gameMap.style.display = "none";
	}
}

// The function below handels the text input.
function textInputCommands() {
	var error;
    var cmd = document.getElementById("command").value;
	
    switch (cmd.toUpperCase()) {
    case "N": move(NORTH); error = ""; break;
    case "E": move(EAST); error = ""; break;
    case "S": move(SOUTH); error = ""; break;
    case "W": move(WEST); error = ""; break;
	case "G": grabItem(); error = ""; break;
	case "L": lookAround(); error = ""; break;
	case "G": grabItem(); error = ""; break;
	case "M": toggleMap(); error = ""; break;
	case "Y": yell(); error = ""; break;
    
	default: error = cmd + " is not a valid command."; console.log("TEST")
	break;
    }
	showInvalidDirection(error);
}

// The functions below add score. 
function score(){
	var addPoints = 5;
	player.currentRoom.visitCount++;
	
	if (locations[1].visitCount === 1) {
        player.currentPoints += addPoints;
		player.currentRoom.visitCount++;
		return player.currentPoints;

	} else if (locations[2].visitCount === 1) {
        player.currentPoints += addPoints;
		player.currentRoom.visitCount++;
		return player.currentPoints;
		
	} else if (locations[3].visitCount === 1) {
        player.currentPoints += addPoints;
		player.currentRoom.visitCount++;
		return player.currentPoints;
		
	} else if (locations[5].visitCount === 1) {
        player.currentPoints += addPoints;
		player.currentRoom.visitCount++;
		return player.currentPoints;
		
	} else if (locations[6].visitCount === 1) {
        player.currentPoints += addPoints;
		player.currentRoom.visitCount++;
		return player.currentPoints;
		
	} else if (locations[8].visitCount === 1) {
        player.currentPoints += addPoints;
		player.currentRoom.visitCount++;
		return player.currentPoints;
		
	} else if (locations[10].visitCount === 1) {
        player.currentPoints += addPoints;
		player.currentRoom.visitCount++;
		return player.currentPoints;
	} else if (locations[12].visitCount === 1) {
		player.currentPoints = 0;
		player.currentRoom.visitCount++;
		return player.currentPoints;
	} else {
		pointCount();
	}
}

// These functions looks at player's current location, determines next possible loc, and moves player
function from(loc, dir) {
    var locId = locations.indexOf(loc);
    return map[locId][dir];
}

function move(dir) {
	var points;
	var items;
	var event = "";
	var error;
    var nextLocation = from(player.currentRoom,dir);
	
    if (nextLocation !== null) {
		previousMoves();
        player.currentRoom = nextLocation;
		score();
		listInventory();
		disableButton();
		enableButton();
		newDescriptions();
		error = "";
		points = pointCount();
        showScene(player.currentRoom);
		console.log(player.currentRoom);
    } else {
        error = "You cannont go " + directionToString(dir);
		points = pointCount();
    }

	showPoints(points);
	showItemEvent(event);
	showInvalidDirection(error);

}

// This function handles when player grabs an item.
function grabItem(){
	var event;
	var itemHere = player.currentRoom.item;
	
    if (itemHere) {
		player.inventory.push(itemHere.name);
		player.currentRoom.item = null;
        event = itemHere.description;
		listInventory();
    } else {
		event = "There is nothing to take here...";
    }
	
	showItemEvent(event);
}

//This function handles when player looks around
function lookAround() {
	var event;
	var itemHere = player.currentRoom.item;
	
    if (itemHere) {
        event = itemHere.observed;
    } else {
		event = "You observe nothing out of the ordinary in this room.";
    }
	showItemEvent(event);
}

//This function hadles when player talks
function yell(){
	var stated = prompt("Yes? Do you have something to say?");
	function win () { 
		player.currentRoom = locations[11];
		disableButton();
		showInventory("");
		showPoints("");
		showScene(player.currentRoom);
		showItemEvent("");
	}
	
	if (stated === null){
		event = "You decide not to say something.<br>" +
				 "What are you too scared to speak?";
	} else {
		event = 'For some reason you yelled "' + stated + '" outloud to yourself.<br>' + 
				"What a weird person you are...";
	}
	
	if (stated === "snakes") {
		win();
	} else if (stated === "Snakes") {
		win();
	} else if (stated === "snake") {
		win();
	} else if (stated === "Snake") {
		win();
	}
	showItemEvent(event);
}

// This function handles showing player inventory.  
function listInventory() {
	var items = "No items in your inventory";
	if (player.inventory.length !== 0) {
		items = player.inventory;
	}	
	showInventory(items);
}

// This function used to show all type commands
function showHelp() {
	var help = allTypeCommands();
	listHelp(help);
	
	var gameMap = document.getElementById("commandHelp");
	if (gameMap.style.display === "none") {
		gameMap.style.display = "block";
	} else {
		gameMap.style.display = "none";
	}
}

// This functions are used to show the player's prior moves push player's move history onto array
function previousMoves() {
	player.breadcrumbTrail.unshift (player.currentRoom.name);
	if (player.breadcrumbTrail.length > 5) {
		player.breadcrumbTrail.pop();
	}
	var history = player.breadcrumbTrail.join(", ");
	listMoveHistory(history);
}

// This function allows for the user to press enter key instead of go button
function pressReturn() {
	var error;
	
	document.getElementById("command").onkeydown = function(event){
		if (event.keyCode === 13){
			textInputCommands()
			return error;
		} else {
			error = "";
		}
		showInvalidDirection(error);
	}
}

// Sets up conditions when game is loaded
window.onload = function(){
	console.log(locations[0].description);
	player.currentRoom = locations[0];
	disableButton();
	showScene(player.currentRoom);
	listInventory();
};