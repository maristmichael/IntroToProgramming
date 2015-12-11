/* 
 * Michael Gutierrez
 * Matthew Johnson
 * CMPT 120L-115
 * November 11, 2015
 * Final Project
*/



// These are location functions
function backToStart() {
	pushRoom("safeRoom");
	disableButton("east");
	disableButton("south");
	enableButton("west");
	enableButton("north");
}

function safeRoomEvent() {
	pushRoom("startingRoom");
	disableButton("south");
	disableButton("west");
	enableButton("north");
	enableButton("east");
}

function backToSafeRoomSouth(){
	pushRoom("ratHall");
	disableButton("west");
	disableButton("south");
	enableButton("north");
	enableButton("east");
}

function ratHallEvent(){
	pushRoom("safeRoom");
	disableButton("west");
	enableButton("south");
}

function backToRatHall(){
   /* var message;
	
    message = "This is the room with the rat statues and pitt to the east."; */
	pushRoom("redMarkedRoom");
	enableAllButtons();
	disableButton("west");
    // return message;
}

function redMarkedRoomEvent(){
	pushRoom("ratHall");
	disableButton("north");
	enableButton("west");
}

function backToRedRoom(){
    /* var message;
    
	message = "You are back in the room with red marks toward" + "the west."; */
	pushRoom("signHall");
	enableAllButtons();
	disableButton("north");
	// return message;
}

function deadEndEvent(){
	pushRoom("redMarkedRoom");
	disableAllButtons();
}

function signHallEvent(){
	pushRoom("redMarkedRoom");
	enableAllButtons();
	disableButton("north");
}

function backToSignHall(){
    /* var message;
	
    message = "This is the room with the sign.<br>" +
	"Are you going to follow the sign south?"; */
	pushRoom("giantSnakeRoom");
	enableAllButtons();
	disableButton("north");
    // return message;
}

function giantSnakeRoomEvent(){
	pushRoom("signHall");
	enableAllButtons();
}

function backToGiantSnakeWest(){
    /* var message;
	
    message = "You went back to the room with the Giant Snake.<br>" + 
	"Great decision...<br>" + "South or East..."; */ 
	pushRoom("falseSafeRoom");
	enableAllButtons();
    // return message;
}

function backToGiantSnakeNorth(){
    /* var message;
	
    message = "You went back to the room with the Giant Snake.<br>" + 
	"Great decision...<br>" + "South or East..."; */
	pushRoom("freedomHallway");
	enableAllButtons();
    // return message;
}

function choseToDieRoomEvent(){
	pushRoom("giantSnakeRoom");
	disableAllButtons();
}

function falseSafeRoomEvent(){
	pushRoom("giantSnakeRoom");
	disableButton("north");
	disableButton("south");
	enableButton("west");
	enableButton("east");
}

function trapRoomEvent(){
	pushRoom("falseSafeRoom");
	disableAllButtons();
}

function freedomHallwayEvent(){
	pushRoom("giantSnakeRoom");
	enableAllButtons();
	disableButton("east");
}

function freedomEvent(){
	pushRoom("freedomHallway");
	disableAllButtons();
}

function thePittNorth(){
	pushRoom("startingRoom");
	disableAllButtons();
}

function thePittSouth( ){
    /* var message;
	
    message = "It was not freedom...<br>" + 
	"You walked into the pitt which means you are dead."; */
	pushRoom("signHall");
	disableAllButtons();
    // return message;
}

function thePittEast(){
	pushRoom("ratHall");
	disableAllButtons();
}

function thePittWest(){
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
