// Michael Gutierrez
var currentRoom = "startingRoom";
var currentPoints = 0;

// The variables below keep track if a room was visited.

var safeRoomVisit = false;
var ratHallVisit = false;
var redRoomVisit = false; 
var signHallVisit = false; 
var snakeRoomVisit = false;
var falseSafeVisit = false;
var freedomHallVisit = false;

function showScene(message) {
    document.getElementById("message").innerHTML = message;
}
function showPoints(message) {
    document.getElementById("points").innerHTML = message;
}


function safeRoom() {
    var message;
    message = "You are in a safe room.<br>" +
        "There are no snakes in the room, but the snakes will follow you if you dawdle for too long.";
    /*if (safeRoomVisit === false) {
        currentPoints += 5;
        safeRoomVisit = true;
        points = "Points: " + currentPoints;
        return currentPoints;
    } /*/
    return message;
}


function ratHall(){
    var message;
    message = "This is a long hallway, with statues of giant rats.<br>The pitt is to the east.";
    return message;
}
function redMarkedRoom(){
    var message;
    message = "This room has two directions you can take.<br>" + 
                 "There appears to be red marks all over the the path toward the west path.<br>" + 
                 "West or East, choose wisely...";
    return message;
}

function deadEnd(){
    var message;
    message = "Dead end...<br>The snakes caught up to you and had you for dinnner.";
    return message;
}

function signHall(){
    var message;
    message = "This room has a sign that states 'Freedom is South.'<br> Seems legit...";
    
}
function giantSnakeRoom(){}
function choseToDieRoom(){}
function trapRoom(){}
function freedomHallway(){}
function freedom(){}

function moveNorth() {
    var message;
    var points;
    
    if (currentRoom === "startingRoom") {
        currentRoom = "thePitt";
        message = "You somehow fell into the pitt that is in clear sight.<br>You are dead.";
        points = "Points: " + 0;
    } else if (currentRoom === "thePitt") {
        message = "You are still dead.";
        points = "Points: " + 0;
    } else if (currentRoom === "safeRoom") {
        currentRoom = "ratHall";
        message = ratHall();
        ratHallVisit = true;
        points = "Points: "
    } else if (currentRoom === "ratHall") {
        currentRoom = "redMarkedRoom";
        message = redMarkedRoom();
        points = "Points: " 
        redRoomVisit = true;
    } else if (currentRoom === "freedomHallway") {
        currentRoom = "giantSnakeRoom";
        message = "You went back into the room with the Giant Snake.<br>Great decision...";
        points = "Points: "
    } else if (currentRoom === "giantSnakeRoom") {
        currentRoom = "choseToDieRoom";
        message = "For some reason you decided to wake the snake.<br>It goes without saying, you were eaten...";
        points = "Points: " + 0;
    } else if (currentRoom === "choseToDieRoom") {
        message = "You were devoured.";
        points = "Points: " + 0;
    } else if (currentRoom === "deadEnd") {
        message = "You have been eaten.";
        points = "Points: " + 0;
    } else if (currentRoom === "trapRoom") {
        message = "You were devoured.";
        points = "Points: " + 0;
    } else if (currentRoom === "freedom") {
        message = "You've escaped this wretched place. No more snakes!<br>FREEDOM!";
        points = "Points: " 
    } else {
        message = "You bumped into a wall, and fell hilariously.<br>Choose a different direction.";
        points = "Points: " 
    }
    showScene(message);
    showPoints(points);
}

function moveWest() {
    var message;
    var points;
    
    if (currentRoom === "startingRoom") {
        currentRoom = "safeRoom";
        message = safeRoom();
    } else if (currentRoom === "redMarkedRoom") {
        currentRoom = "deadEnd";
        message = deadEnd();
        points = "Points: " + 0;
    } else if (currentRoom === "deadEnd") {
        message = "You have been eaten.";
        points = "Points: " + 0;
    } else if (currentRoom === "thePitt") {
        message = "You are still dead.";
        points = "Points: " + 0;
    } else if (currentRoom === "signHall") {
        currentRoom = "redMarkedRoom";
        message = "You are back in the room with red marks toward the west.";
        points = "Points: "
    } else if (currentRoom === "giantSnakeRoom") {
        currentRoom = "signHall";
        message = "This is the room with the sign.<br>Are you going to follow the sign south?";
        points = "Points: " 
    } else if (currentRoom === "falseSafeRoom") {
        currentRoom = "giantSnakeRoom";
        message = "You are back in the room with the giant snake.<br>Don't disturb it!";
        points = "Points: " 
    } else if (currentRoom === "trapRoom") {
        message = "You were devoured.";
        points = "Points: " + 0;
    } else if (currentRoom === "freedomHallway") {
        currentRoom = "thePitt";
        message = "You somehow fell into the pitt that is in clear sight.<br>You are dead.";
        points = "Points: " + 0;
    } else if (currentRoom === "choseToDieRoom") {
        message = "You were devoured.";
        points = "Points: " + 0;
    } else if (currentRoom === "freedom") {
        message = "You've escaped this wretched place. No more snakes!<br>FREEDOM!";
        points = "Points: "
    } else {
        message = "You bumped into a wall, and fell hilariously.<br>Choose a different direction.";
        points = "Points: " 
    }
    showScene(message);
    showPoints(points);
}

function moveEast() {
    var message;
    var points;
    
    if (currentRoom === "safeRoom") {
        currentRoom = "startingRoom";
        message = "There are snakes in here you idiot. GET OUT!";
        points = "Points: " 
        safeRoomVisit = true;
    } else if (currentRoom === "ratHall") {
        currentRoom = "thePitt";
        message = "You somehow fell into the pitt that is in clear sight.<br>You are dead.";
        points = "Points: " + 0;
    } else if (currentRoom === "thePitt") {
        message = "You are still dead.";
        points = "Points: " + 0;
    } else if (currentRoom === "deadEnd") {
        message = "You have been eaten.";
        points = "Points: " + 0;
    } else if (currentRoom === "redMarkedRoom") {
        currentRoom = "signHall";
        message = redMarkedRoom();
        points = "Points: " 
        signHallVisit = true;
    } else if (currentRoom === "signHall") {
        currentRoom = "giantSnakeRoom";
        message = "THERE IS A 30 FOOT SNAKE NEAR THE NORTH WALL FACING EASTWARD. DONT DISTURB IT!<br>" + 
                 "You can escape by heading East or South.";
        points = "Points: " 
        snakeRoomVisit = true;
    } else if (currentRoom === "giantSnakeRoom") {
        currentRoom = "falseSafeRoom";
        message = "You escaped that huge snake, atleast for now.<br>Continue onwards.";
        points = "Points: " 
        falseSafeVisit = true;
    } else if (currentRoom === "falseSafeRoom") {
        currentRoom = "trapRoom";
        message = "There's no where to go...<br>" + 
                 "The giant snake slithered to your location and ate you whole with its massive mouth.";
        points = "Points: " + 0;
    } else if (currentRoom === "trapRoom") {
        message = "You were devoured.";
        points = "Points: " + 0;
    } else if (currentRoom === "choseToDieRoom") {
        message = "You were devoured.";
        points = "Points: " + 0;
    } else if (currentRoom === "freedom") {
        message = "You've escaped this wretched place. No more snakes!<br>FREEDOM!";
        points = "Points: " 
    } else {
        message = "You bumped into a wall, and fell hilariously.<br>Choose a different direction.";
        points = "Points: " 
    }
    showScene(message);
    showPoints(points);
}

function moveSouth() {
    var message;
    var points;
    
    if (currentRoom === "ratHall") {
        currentRoom = "safeRoom";
        message = "You are back in the safe room. You have to leave this place eventually...";
        points = "Points: " 
    } else if (currentRoom === "redMarkedRoom") {
        currentRoom = "ratHall";
        message = "This is the room with the rat statues and pitt to the east.";
        points = "Points: " 
    } else if (currentRoom === "signHall") {
        currentRoom = "thePitt";
        message = "It was not freedom...<br>You walked into the pitt which means you are dead.";
        points = "Points: " + 0;
    } else if (currentRoom === "thePitt") {
        message = "You are still dead.";
        points = "Points: " + 0;
    } else if (currentRoom === "deadEnd") {
        message = "You have been eaten.";
        points = "Points: " + 0;
    } else if (currentRoom === "trapRoom") {
        message = "You were devoured.";
        points = "Points: " + 0;
    } else if (currentRoom === "choseToDieRoom") {
        message = "You were devoured.";
        points = "Points: " + 0;
    } else if (currentRoom === "giantSnakeRoom") {
        currentRoom = "freedomHallway";
        message = "You entered another room with statues of giant rats, and the pitt is to the west.<br>" +
                 "This time however, there appears to be greenerie in the ground. That is a good sign.";
        points = "Points: " 
    } else if (currentRoom === "freedomHallway") {
        currentRoom = "freedom";
        message = "You've escaped this wretched place. No more snakes!<br>FREEDOM!";
        points = "Points: "
        freedomHallVisit = true;
    } else if (currentRoom === "freedom") {
        message = "You've escaped this wretched place. No more snakes!<br>FREEDOM!";
        points = "Points: " 
    } else {
        message = "You bumped into a wall, and fell hilariously.<br>Choose a different direction.";
        points = "Points: " 
    }
    showScene(message);
    showPoints(points);
}

