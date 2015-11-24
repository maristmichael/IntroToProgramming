/* 
 * Michael Gutierrez
 * Matthew Johnson
 * CMPT 120L-115
 * November 9, 2015
 * Project 4 Corrections
 */

// The function below sets the player's locations.
function setRoomTo(roomName) {
	switch (roomName) {
	case "startingRoom":
		currentRoom = "startingRoom";
	break;
			
	case "safeRoom":
		currentRoom = "safeRoom";
	break;
		
	case "ratHall":
		currentRoom = "ratHall";
	break;

	case "redMarkedRoom":
		currentRoom = "redMarkedRoom";
	break;
		
	case "deadEnd":
		currentRoom = "deadEnd";
	break;

	case "signHall":
		currentRoom = "signHall";
	break;
		
	case "giantSnakeRoom":
		currentRoom = "giantSnakeRoom";
	break;
			
	case "falseSafeRoom":
		currentRoom = "falseSafeRoom";
	break;
		
	case "trapRoom":
		currentRoom = "trapRoom";
	break;
		
	case "choseToDieRoom":
		currentRoom = "choseToDieRoom";
	break;
		
	case "freedomHallway":
		currentRoom = "freedomHallway";
	break;
			
	case "freedom":
		currentRoom = "freedom";
	break;
		
	case "thePitt":
		currentRoom = "thePitt";
	break;		
	}
}

// These are location functions
function backToStart() {
    var message;
	
    message = "There are snakes in here you idiot. GET OUT!";
	setRoomTo("startingRoom");
	pushRoom("safeRoom");
	disableButton("east");
	disableButton("south");
	enableButton("west");
	enableButton("north");
    return message;
}

function safeRoom() {
 	var message;

	message = "You are in a safe room.<br>" +
	"There are no snakes in the room, but the" +
	"snakes will follow you if you dawdle for too long.<br>" +
	"You spot a note on the ground";
	setRoomTo("safeRoom");
	pointsSafeRoom();
	pushRoom("startingRoom");
	disableButton("south");
	disableButton("west");
	enableButton("north");
	enableButton("east");
	return message;
}

function backToSafeRoom(){
    var message;
	
    message = "You are back in the safe room.<br>" + 
	"You have to leave this place eventually...";
	setRoomTo("safeRoom");
	pushRoom("ratHall");
	disableButton("west");
	disableButton("south");
	enableButton("north");
	enableButton("east");
    return message;
}

function ratHall(){
    var message;
	
    message = "This is a long hallway with two giant statues of rats.<br>" +
	"The pitt is to the east.<br>" + 
	"Next to one of the statues is a mini figurine of the same rat";
	setRoomTo("ratHall");
	pointsRatHall();
	pushRoom("safeRoom");
	disableButton("west");
	enableButton("south");
    return message;
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

function redMarkedRoom(){
    var message;
	
    message = "This room has two directions you can take.<br>" + 
	"There appears to be red marks all over the the path toward" +
	"the west path.<br>" + "West or East, choose wisely...";
	setRoomTo("redMarkedRoom");
	pointsRedRoom();
	pushRoom("ratHall");
	disableButton("north");
	enableButton("west");
    return message;
}

function backToRedRoom(){
    var message;
    
	message = "You are back in the room with red marks toward" + 	 	 "the west.";
    setRoomTo("redMarkedRoom");
	pushRoom("signHall");
	enableAllButtons();
	disableButton("north");
	return message;
}

function deadEnd(){
    var message;
	
    message = "Dead end...<br>" + 
	"The snakes caught up to you and had you for dinnner.";
	setRoomTo("deadEnd");
	pushRoom("redMarkedRoom");
	disableAllButtons();
	return message;
}

function signHall(){
    var message;
	
    message = "This room has a sign that states 'Freedom is South.'<br>" + 
	"Seems legit...";
	setRoomTo("signHall");
	pointsSignHall();
	pushRoom("redMarkedRoom");
	enableAllButtons();
	disableButton("north");
    return message;
}

function signDeath(){
    var message;
    message = "It was not freedom...<br>" + 
	"You walked into the pitt which means you are dead.";
    return message;
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

function giantSnakeRoom(){
    var message;
	
    message = "THERE'S A 30 FOOT SNAKE NEAR THE NORTH WALL FACING EAST.<br>" +
	"DONT DISTURB IT!<br>" + "You can escape by heading East or South.";
	setRoomTo("giantSnakeRoom");
	pointsSnakeRoom();
	pushRoom("signHall");
	enableAllButtons();
    return message;
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

function choseToDieRoom(){
    var message;
	
    message = "For some reason you decided to wake the snake.<br>" + 
	"It goes without saying, you were eaten...";
	setRoomTo("choseToDieRoom");
	pushRoom("giantSnakeRoom");
	disableAllButtons();
    return message;
}

function falseSafeRoom(){
    var message;
	
    message = "You escaped that huge snake, atleast for now.<br>" +
	"This room is a long corridor that only goes one way.<br>" +
	"On one wall there is a piece of paper that seems faded.<br>"
	setRoomTo("falseSafeRoom");
	pointsFalseSafe();
	pushRoom("giantSnakeRoom");
	disableButton("north");
	disableButton("south");
	enableButton("west");
	enableButton("east");
    return message;
}

function trapRoom(){
    var message;
	
    message = "There's no where to go...<br>" + 
	"The giant snake slithered to you and ate you whole with its massive mouth.";
	setRoomTo("trapRoom");
	pushRoom("falseSafeRoom");
	disableAllButtons();
    return message;
}

function freedomHallway(){
    var message;
	
    message = "You entered another room with statues of giant rats," + 
	"and the pitt is to the west.<br>" +
	"This time however, there appears to be greenerie in the ground.<br>" 
	"That is a good sign.<br>" +
	"In a patch of weeds you spot something golden.";
	setRoomTo("freedomHallway");
	pointsFreedomHall();
	pushRoom("giantSnakeRoom");
	enableAllButtons();
	disableButton("east");
    return message;
}

function freedom(){
    var message;
	
    message = "You've escaped this wretched place. No more snakes!<br> FREEDOM!";
	setRoomTo("freedom");
	pushRoom("freedomHallway");
	disableAllButtons();
    return message;
}

function thePittNorth(){
    var message;
	
    message = "You somehow fell into the pitt that is in clear sight.<br>" + 
	"You are dead.";
	setRoomTo("thePitt");
	pushRoom("startingRoom");
	disableAllButtons();
    return message;
}

function thePittSouth(){
    var message;
	
    message = "You somehow fell into the pitt that is in clear sight.<br>" + 		"You are dead.";
	setRoomTo("thePitt");
	pushRoom("signHall");
	disableAllButtons();
    return message;
}

function thePittEast(){
    var message;
	
    message = "You somehow fell into the pitt that is in clear sight.<br>" + 	 	"You are dead.";
	setRoomTo("thePitt");
	pushRoom("ratHall");
	disableAllButtons();
    return message;
}

function thePittWest(){
    var message;
	
    message = "You somehow fell into the pitt that is in clear sight.<br>" + 	 	 "You are dead.";
	setRoomTo("thePitt");
	pushRoom("freedomHallway")
	disableAllButtons();
    return message;
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

function hitWall(){
    var message;
    message = "You bumped into a wall, and fell hilariously.<br>" + 
	"Choose a different direction.";
    return message;
}