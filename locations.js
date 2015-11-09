// The function below sets the players locations.

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
			
		default:
			alert("wow");
		break;
			
	}
}

// The functions below are location descriptions.

function backToStart() {
    var message;
    message = "There are snakes in here you idiot. GET OUT!";
    return message;
}

function safeRoom() {
    var message;
    message = "You are in a safe room.<br>" +
"There are no snakes in the room, but the snakes will follow you if you dawdle for too long.";
    return message;
}

function backToSafeRoom(){
    var message;
    message = "You are back in the safe room.<br>" + 
"You have to leave this place eventually...";
    return message;
}

function ratHall(){
    var message;
    message = "This is a long hallway, with statues of giant rats.<br>" +
"The pitt is to the east.";
    return message;
}

function backToRatHall(){
    var message;
    message = "This is the room with the rat statues and pitt to the east.";
    return message;
}

function redMarkedRoom(){
    var message;
    message = "This room has two directions you can take.<br>" + 
"There appears to be red marks all over the the path toward the west path.<br>" + "West or East, choose wisely...";
    return message;
}

function backToRedRoom(){
    var message;
    message = "You are back in the room with red marks toward the west.";
    return message;
}

function deadEnd(){
    var message;
    message = "Dead end...<br>" + 
"The snakes caught up to you and had you for dinnner.";
    return message;
}

function signHall(){
    var message;
    message = "This room has a sign that states 'Freedom is South.'<br>" + "Seems legit...";
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
    message = "This is the room with the sign.<br>Are you going to follow the sign south?";
    return message;
}

function giantSnakeRoom(){
    var message;
    message = "THERE IS A 30 FOOT SNAKE NEAR THE NORTH WALL FACING EASTWARD.<br>" + "DONT DISTURB IT!<br>" + "You can escape by heading East or South.";
    return message;
}

function backToGiantSnake(){
    var message;
    message = "You went back into the room with the Giant Snake.<br>" + "Great decision...<br>" + "South or East...";
    return message;
}

function choseToDieRoom(){
    var message;
    message = "For some reason you decided to wake the snake.<br>" + 
"It goes without saying, you were eaten...";
    return message;
}

function falseSafeRoom(){
    var message;
    message = "You escaped that huge snake, atleast for now.<br>Continue onwards.";
    return message;
}

function trapRoom(){
    var message;
    message = "There's no where to go...<br>" + 
"The giant snake slithered to your location and ate you whole with its massive mouth.";
    return message;
}

function freedomHallway(){
    var message;
    message = "You entered another room with statues of giant rats, and the pitt is to the west.<br>" +
"This time however, there appears to be greenerie in the ground.<br>" 
"That is a good sign.";
    return message;
}

function freedom(){
    var message;
    message = "You've escaped this wretched place. No more snakes!<br> FREEDOM!";
    return message;
}

function dumbDeath(){
    var message;
    message = "You somehow fell into the pitt that is in clear sight.<br>You are dead.";
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
