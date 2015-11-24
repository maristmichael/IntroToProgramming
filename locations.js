/* 
 * Michael Gutierrez
 * Matthew Johnson
 * CMPT 120L-115
 * November 24, 2015
 * Project 5
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

// This Array holds the locations
locations = ["startingRoom", "safeRoom", "ratHall", "redMarkedRoom", "deadEnd", "signHall", "giantSnakeRoom", "choseToDieRoom", "falseSafeRoom", "trapRoom", "freedomHallway", "freedom", "thePitt"]

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

function backToSafeRoom(){

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

function thePittSouth(){
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

// Location Prototype and locationinstances
function Location(name, description, visitCount, item) {
	this.name = name;
	this.description = description;
	this.visitCount = visitCount;
	this.item = item;
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

// This is function serves for convenience 
function locationDescrip(location) {
	switch (location) {
	case "safeRoom":
		return "You are in a safe room.<br>" +
		"There are no snakes in the room, but the " +
		"snakes will follow you if you dawdle for too long.<br>" +
		"You spot a note on the ground";
	break;
			
	case "ratHall":
		return "This is a long hallway, with two statues of giant rats.<br>" +
		"The pitt is to the east.<br>" + 
		"Next to one of the statues is a mini figurine of the same rats";
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
		"This room is a long corridor that only goes one way.<br>" +
		"On one wall there is a piece of paper that seems faded.<br>";
	break;
	
	case "trapRoom":
		return "There's no where to go...<br>" + 
		"The giant snake slithered to you and ate you whole with its massive mouth.";
	break;
			
	case "freedomHallway":
		return "You entered another room with statues of giant rats, " + 
		"and the pitt is to the west.<br>" +
		"This time however, there appears to be greenerie in the ground.<br>" 
		"That is a good sign.<br>" +
		"In a patch of weeds you spot something golden.";
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