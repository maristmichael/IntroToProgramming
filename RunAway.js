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
    document.getElementById("scene").innerHTML = message;
}
function showPoints(message) {
    document.getElementById("points").innerHTML = message;
}

function moveNorth() {
    var notice;
    var points;
    
    if (currentRoom === "startingRoom") {
        currentRoom = "thePitt";
        notice = "You somehow fell into the pitt that is in clear sight.<br>You are dead.";
        points = "Points: " + 0;
    } else if (currentRoom === "thePitt") {
        notice = "You are still dead.";
        points = "Points: " + 0;
    } else if (currentRoom === "safeRoom") {
        currentRoom = "ratHall";
        notice = "This is a long hallway, with statues of giant rats.<br>The pitt is to the east.";
        ratHallVisit = true;
        points = "Points: "
    } else if (currentRoom === "ratHall") {
        currentRoom = "redMarkedRoom";
        notice = "This room has two directions you can take.<br>" + 
                 "There appears to be red marks all over the the path toward the west path.<br>" + 
                 "West or East, choose wisely...";
        points = "Points: " 
        redRoomVisit = true;
    } else if (currentRoom === "freedomHallway") {
        currentRoom = "giantSnakeRoom";
        notice = "You went back into the room with the Giant Snake.<br>Great decision...";
        points = "Points: "
    } else if (currentRoom === "giantSnakeRoom") {
        currentRoom = "choseToDieRoom";
        notice = "For some reason you decided to wake the snake.<br>It goes without saying, you were eaten...";
        points = "Points: " + 0;
    } else if (currentRoom === "choseToDieRoom") {
        notice = "You were devoured.";
        points = "Points: " + 0;
    } else if (currentRoom === "deadEnd") {
        notice = "You have been eaten.";
        points = "Points: " + 0;
    } else if (currentRoom === "trapRoom") {
        notice = "You were devoured.";
        points = "Points: " + 0;
    } else if (currentRoom === "freedom") {
        notice = "You've escaped this wretched place. No more snakes!<br>FREEDOM!";
        points = "Points: " 
    } else {
        notice = "You bumped into a wall, and fell hilariously.<br>Choose a different direction.";
        points = "Points: " 
    }
    showScene(notice);
    showPoints(points);
}

function moveWest() {
    var notice;
    var points;
    
    if (currentRoom === "startingRoom") {
        currentRoom = "safeRoom";
        notice = "You escaped to a safe room.<br>" + 
                 "There are no snakes in the room, but the snakes will follow you if you dawdle for too long.";
        points = "Points: " 
        safeRoomVisit = true
    } else if (currentRoom === "redMarkedRoom") {
        currentRoom = "deadEnd";
        notice = "Dead end...<br>The snakes caught up to you and had you for dinnner.";
        points = "Points: " + 0;
    } else if (currentRoom === "deadEnd") {
        notice = "You have been eaten.";
        points = "Points: " + 0;
    } else if (currentRoom === "thePitt") {
        notice = "You are still dead.";
        points = "Points: " + 0;
    } else if (currentRoom === "signHall") {
        currentRoom = "redMarkedRoom";
        notice = "You are back in the room with red marks toward the west.";
        points = "Points: "
    } else if (currentRoom === "giantSnakeRoom") {
        currentRoom = "signHall";
        notice = "This is the room with the sign.<br>Are you going to follow the sign south?";
        points = "Points: " 
    } else if (currentRoom === "falseSafeRoom") {
        currentRoom = "giantSnakeRoom";
        notice = "You are back in the room with the giant snake.<br>Don't disturb it!";
        points = "Points: " 
    } else if (currentRoom === "trapRoom") {
        notice = "You were devoured.";
        points = "Points: " + 0;
    } else if (currentRoom === "freedomHallway") {
        currentRoom = "thePitt";
        notice = "You somehow fell into the pitt that is in clear sight.<br>You are dead.";
        points = "Points: " + 0;
    } else if (currentRoom === "choseToDieRoom") {
        notice = "You were devoured.";
        points = "Points: " + 0;
    } else if (currentRoom === "freedom") {
        notice = "You've escaped this wretched place. No more snakes!<br>FREEDOM!";
        points = "Points: "
    } else {
        notice = "You bumped into a wall, and fell hilariously.<br>Choose a different direction.";
        points = "Points: " 
    }
    showScene(notice);
    showPoints(points);
}

function moveEast() {
    var notice;
    var points;
    
    if (currentRoom === "safeRoom") {
        currentRoom = "startingRoom";
        notice = "There are snakes in here you idiot. GET OUT!";
        points = "Points: " 
        safeRoomVisit = true;
    } else if (currentRoom === "ratHall") {
        currentRoom = "thePitt";
        notice = "You somehow fell into the pitt that is in clear sight.<br>You are dead.";
        points = "Points: " + 0;
    } else if (currentRoom === "thePitt") {
        notice = "You are still dead.";
        points = "Points: " + 0;
    } else if (currentRoom === "deadEnd") {
        notice = "You have been eaten.";
        points = "Points: " + 0;
    } else if (currentRoom === "redMarkedRoom") {
        currentRoom = "signHall";
        notice = "This room has a sign that states 'Freedom is South.'<br> Seems legit...";
        points = "Points: " 
        signHallVisit = true;
    } else if (currentRoom === "signHall") {
        currentRoom = "giantSnakeRoom";
        notice = "THERE IS A 30 FOOT SNAKE NEAR THE NORTH WALL FACING EASTWARD. DONT DISTURB IT!<br>" + 
                 "You can escape by heading East or South.";
        points = "Points: " 
        snakeRoomVisit = true;
    } else if (currentRoom === "giantSnakeRoom") {
        currentRoom = "falseSafeRoom";
        notice = "You escaped that huge snake, atleast for now.<br>Continue onwards.";
        points = "Points: " 
        falseSafeVisit = true;
    } else if (currentRoom === "falseSafeRoom") {
        currentRoom = "trapRoom";
        notice = "There's no where to go...<br>" + 
                 "The giant snake slithered to your location and ate you whole with its massive mouth.";
        points = "Points: " + 0;
    } else if (currentRoom === "trapRoom") {
        notice = "You were devoured.";
        points = "Points: " + 0;
    } else if (currentRoom === "choseToDieRoom") {
        notice = "You were devoured.";
        points = "Points: " + 0;
    } else if (currentRoom === "freedom") {
        notice = "You've escaped this wretched place. No more snakes!<br>FREEDOM!";
        points = "Points: " 
    } else {
        notice = "You bumped into a wall, and fell hilariously.<br>Choose a different direction.";
        points = "Points: " 
    }
    showScene(notice);
    showPoints(points);
}

function moveSouth() {
    var notice;
    var points;
    
    if (currentRoom === "ratHall") {
        currentRoom = "safeRoom";
        notice = "You are back in the safe room. You have to leave this place eventually...";
        points = "Points: " 
    } else if (currentRoom === "redMarkedRoom") {
        currentRoom = "ratHall";
        notice = "This is the room with the rat statues and pitt to the east.";
        points = "Points: " 
    } else if (currentRoom === "signHall") {
        currentRoom = "thePitt";
        notice = "It was not freedom...<br>You walked into the pitt which means you are dead.";
        points = "Points: " + 0;
    } else if (currentRoom === "thePitt") {
        notice = "You are still dead.";
        points = "Points: " + 0;
    } else if (currentRoom === "deadEnd") {
        notice = "You have been eaten.";
        points = "Points: " + 0;
    } else if (currentRoom === "trapRoom") {
        notice = "You were devoured.";
        points = "Points: " + 0;
    } else if (currentRoom === "choseToDieRoom") {
        notice = "You were devoured.";
        points = "Points: " + 0;
    } else if (currentRoom === "giantSnakeRoom") {
        currentRoom = "freedomHallway";
        notice = "You entered another room with statues of giant rats, and the pitt is to the west.<br>" +
                 "This time however, there appears to be greenerie in the ground. That is a good sign.";
        points = "Points: " 
    } else if (currentRoom === "freedomHallway") {
        currentRoom = "freedom";
        notice = "You've escaped this wretched place. No more snakes!<br>FREEDOM!";
        points = "Points: "
        freedomHallVisit = true;
    } else if (currentRoom === "freedom") {
        notice = "You've escaped this wretched place. No more snakes!<br>FREEDOM!";
        points = "Points: " 
    } else {
        notice = "You bumped into a wall, and fell hilariously.<br>Choose a different direction.";
        points = "Points: " 
    }
    showScene(notice);
    showPoints(points);
}

