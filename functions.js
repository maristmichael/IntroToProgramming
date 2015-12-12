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
	}
		
	if (locations[6].visitCount > 1) {
		locations[6].description = descriptionOf("backToGiantSnake");	
	}
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
		event = "";
	} else if (stated === "Snakes") {
		win();
		event = "";
	} else if (stated === "snake") {
		win();
		event = "";
	} else if (stated === "Snake") {
		win();
		event = "";
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
