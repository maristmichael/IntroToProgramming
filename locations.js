/* 
 * Michael Gutierrez
 * Matthew Johnson
 * CMPT 120L-115
 * November 24, 2015
 * Project 5 Corrections
*/


// The function below sets the player's locations.
function setRoomTo(roomName) {
	switch (roomName) {
	case "startingRoom":
		player.currentRoom = locations[0];
	break;
			
	case "safeRoom":
		player.currentRoom = locations[1];
	break;
		
	case "ratHall":
		player.currentRoom = locations[2];
	break;

	case "redMarkedRoom":
		player.currentRoom = locations[3];
	break;
		
	case "deadEnd":
		player.currentRoom = locations[4];
	break;

	case "signHall":
		player.currentRoom = locations[5];
	break;
		
	case "giantSnakeRoom":
		player.currentRoom = locations[6];
	break;
			
	case "falseSafeRoom":
		player.currentRoom = locations[8];
	break;
		
	case "trapRoom":
		player.currentRoom = locations[9];
	break;
		
	case "choseToDieRoom":
		player.currentRoom = locations[7];
	break;
		
	case "freedomHallway":
		player.currentRoom = locations[10];
	break;
			
	case "freedom":
		player.currentRoom = locations[11];
	break;
		
	case "thePitt":
		player.currentRoom = locations[12];
	break;		
	}
}

// These are location functions
function backToStart() {
	startingRoom.visitCount ++;
	pushRoom("safeRoom");
	disableButton("east");
	disableButton("south");
	enableButton("west");
	enableButton("north");
}

function safeRoomEvent() {
	safeRoom.visitCount ++;
	pointsSafeRoom();
	pushRoom("startingRoom");
	disableButton("south");
	disableButton("west");
	enableButton("north");
	enableButton("east");
}

function backToSafeRoomSouth(){
	safeRoom.visitCount ++;
	pushRoom("ratHall");
	disableButton("west");
	disableButton("south");
	enableButton("north");
	enableButton("east");
}

function ratHallEvent(){
    ratHall.visitCount ++;
	pointsRatHall();
	pushRoom("safeRoom");
	disableButton("west");
	enableButton("south");
}

function backToRatHall(){
    var message;
	
    message = "This is the room with the rat statues and pitt to the east.";
	pushRoom("redMarkedRoom");
	enableAllButtons();
	disableButton("west");
    return message;
}

function redMarkedRoomEvent(){
	redMarkedRoom.visitCount ++;
	pointsRedRoom();
	pushRoom("ratHall");
	disableButton("north");
	enableButton("west");
}

function backToRedRoom(){
    var message;
    
	message = "You are back in the room with red marks toward" + "the west.";
	redMarkedRoom.visitCount ++;
	pushRoom("signHall");
	enableAllButtons();
	disableButton("north");
	return message;
}

function deadEndEvent(){
	deadEnd.visitCount ++;
	pushRoom("redMarkedRoom");
	disableAllButtons();
}

function signHallEvent(){
    signHall.visitCount ++;
	pointsSignHall();
	pushRoom("redMarkedRoom");
	enableAllButtons();
	disableButton("north");
}

function backToSignHall(){
    var message;
	
    message = "This is the room with the sign.<br>" +
	"Are you going to follow the sign south?";
	pushRoom("giantSnakeRoom");
	enableAllButtons();
	disableButton("north");
    return message;
}

function giantSnakeRoomEvent(){
	giantSnakeRoom.visitCount ++;
	pointsSnakeRoom();
	pushRoom("signHall");
	enableAllButtons();
}

function backToGiantSnakeWest(){
    var message;
	
    message = "You went back to the room with the Giant Snake.<br>" + 
	"Great decision...<br>" + "South or East...";
	pushRoom("falseSafeRoom");
	enableAllButtons();
    return message;
}

function backToGiantSnakeNorth(){
    var message;
	
    message = "You went back to the room with the Giant Snake.<br>" + 
	"Great decision...<br>" + "South or East...";
	pushRoom("freedomHallway");
	enableAllButtons();
    return message;
}

function choseToDieRoomEvent(){
	choseToDieRoom.visitCount ++;
	pushRoom("giantSnakeRoom");
	disableAllButtons();
}

function falseSafeRoomEvent(){
	falseSafeRoom.visitCount ++;
	pointsFalseSafe();
	pushRoom("giantSnakeRoom");
	disableButton("north");
	disableButton("south");
	enableButton("west");
	enableButton("east");
}

function trapRoomEvent(){
	trapRoom.visitCount ++;
	pushRoom("falseSafeRoom");
	disableAllButtons();
}

function freedomHallwayEvent(){
 	freedomHallway.visitCount ++;
	pointsFreedomHall();
	pushRoom("giantSnakeRoom");
	enableAllButtons();
	disableButton("east");
}

function freedomEvent(){
	freedomHallway.visitCount ++;
	pushRoom("freedomHallway");
	disableAllButtons();
}

function thePittNorth(){
 	startingRoom.visitCount ++;
	pushRoom("startingRoom");
	disableAllButtons();
}

function thePittSouth( ){
    var message;
	
    message = "It was not freedom...<br>" + 
	"You walked into the pitt which means you are dead.";
	signHall.visitCount ++;
	pushRoom("signHall");
	disableAllButtons();
    return message;
}

function thePittEast(){
	ratHall.visitCount ++;
	pushRoom("ratHall");
	disableAllButtons();
}

function thePittWest(){
	freedomHallway.visitCount ++;
	pushRoom("freedomHallway")
	disableAllButtons();
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

function hitWallEvent(){
    var message;
    message = "You bumped into a wall, and fell hilariously.<br>" + 
	"Choose a different direction.";
    return message;
}
