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
	setRoomTo("startingRoom");
	pushRoom("safeRoom");
	disableButton("east");
	disableButton("south");
	enableButton("west");
	enableButton("north");
}

function safeRoomEvent() {
	safeRoom.visitCount ++;
	foundNote = false;
	setRoomTo("safeRoom");
	pointsSafeRoom();
	pushRoom("startingRoom");
	disableButton("south");
	disableButton("west");
	enableButton("north");
	enableButton("east");
}

function backToSafeRoomSouth(){
	safeRoom.visitCount ++;
	setRoomTo("safeRoom");
	pushRoom("ratHall");
	disableButton("west");
	disableButton("south");
	enableButton("north");
	enableButton("east");
}

function ratHallEvent(){
    ratHall.visitCount ++;
	foundMiniRatFigurine = false;
	setRoomTo("ratHall");
	pointsRatHall();
	pushRoom("safeRoom");
	disableButton("west");
	enableButton("south");
}

function backToRatHall(){
    var message;
	
    message = "This is the room with the rat statues and pitt to the east.";
	setRoomTo("ratHall");
	pushRoom("redMarkedRoom");
	enableAllButtons();
	disableButton("west");
    return message;
}

function redMarkedRoomEvent(){
	redMarkedRoom.visitCount ++;
	setRoomTo("redMarkedRoom");
	pointsRedRoom();
	pushRoom("ratHall");
	disableButton("north");
	enableButton("west");
}

function backToRedRoom(){
    var message;
    
	message = "You are back in the room with red marks toward" + 	 	 "the west.";
	redMarkedRoom.visitCount ++;
    setRoomTo("redMarkedRoom");
	pushRoom("signHall");
	enableAllButtons();
	disableButton("north");
	return message;
}

function deadEndEvent(){
	deadEnd.visitCount ++;
	setRoomTo("deadEnd");
	pushRoom("redMarkedRoom");
	disableAllButtons();
}

function signHallEvent(){
    signHall.visitCount ++;
	setRoomTo("signHall");
	pointsSignHall();
	pushRoom("redMarkedRoom");
	enableAllButtons();
	disableButton("north");
}

function backToSignHall(){
    var message;
	
    message = "This is the room with the sign.<br>" +
	"Are you going to follow the sign south?";
	setRoomTo("signHall");
	pushRoom("giantSnakeRoom");
	enableAllButtons();
	disableButton("north");
    return message;
}

function giantSnakeRoomEvent(){
	giantSnakeRoom.visitCount ++;
	setRoomTo("giantSnakeRoom");
	pointsSnakeRoom();
	pushRoom("signHall");
	enableAllButtons();
}

function backToGiantSnakeWest(){
    var message;
	
    message = "You went back to the room with the Giant Snake.<br>" + 
	"Great decision...<br>" + "South or East...";
	setRoomTo("giantSnakeRoom");
	pushRoom("falseSafeRoom");
	enableAllButtons();
    return message;
}

function backToGiantSnakeNorth(){
    var message;
	
    message = "You went back to the room with the Giant Snake.<br>" + 
	"Great decision...<br>" + "South or East...";
	setRoomTo("giantSnakeRoom");
	pushRoom("freedomHallway");
	enableAllButtons();
    return message;
}

function choseToDieRoomEvent(){
	choseToDieRoom.visitCount ++;
	setRoomTo("choseToDieRoom");
	pushRoom("giantSnakeRoom");
	disableAllButtons();
}

function falseSafeRoomEvent(){
	falseSafeRoom.visitCount ++;
	foundFadedPaper = false;
	setRoomTo("falseSafeRoom");
	pointsFalseSafe();
	pushRoom("giantSnakeRoom");
	disableButton("north");
	disableButton("south");
	enableButton("west");
	enableButton("east");
}

function trapRoomEvent(){
	trapRoom.visitCount ++;
	setRoomTo("trapRoom");
	pushRoom("falseSafeRoom");
	disableAllButtons();
}

function freedomHallwayEvent(){
 	freedomHallway.visitCount ++;
	foundGoldenSnake = false;
	setRoomTo("freedomHallway");
	pointsFreedomHall();
	pushRoom("giantSnakeRoom");
	enableAllButtons();
	disableButton("east");
}

function freedomEvent(){
	freedomHallway.visitCount ++;
	setRoomTo("freedom");
	pushRoom("freedomHallway");
	disableAllButtons();
}

function thePittNorth(){
 	startingRoom.visitCount ++;
	setRoomTo("thePitt");
	pushRoom("startingRoom");
	disableAllButtons();
}

function thePittSouth( ){
    var message;
	
    message = "It was not freedom...<br>" + 
	"You walked into the pitt which means you are dead.";
	signHall.visitCount ++;
	setRoomTo("thePitt");
	pushRoom("signHall");
	disableAllButtons();
    return message;
}

function thePittEast(){
	ratHall.visitCount ++;
	setRoomTo("thePitt");
	pushRoom("ratHall");
	disableAllButtons();
}

function thePittWest(){
	freedomHallway.visitCount ++;
	setRoomTo("thePitt");
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


/*CANNOT FIGURE THIS OUT :( This function intellegently converts strings
safeRoom.prototype.toString = function safeRoomRevisit(){
	var newEvent;
	
	if (safeRoom.visitCount > 1) {
		safeRoom.description = "You are now back in the safe room. " + 
		"You spot a note on the ground."
	}
}
*/ 
