var currentRoom = "startingRoom";

function showScene(descrip) {
    document.getElementById("scene").innerHTML = descrip;
}
function showPoints(descrip) {
    document.getElementById("points").innerHTML = descrip;
}

function score() {
    var Points
    var currentPoints = 100
    var Points = currentPoints
    showPoints(points)
}

function moveNorth() {
    var notice;
    if (currentRoom === "startingRoom") {
        currentRoom = "thePitt";
        notice = "You somehow fell into the pitt that is in clear sight.<br>You are dead.";
    } else if (currentRoom === "thePitt") {
        notice = "You are still dead.";
    } else if (currentRoom === "safeRoom") {
        currentRoom = "ratHall";
        notice = "This is a long hallway, with statues of giant rats.<br>The pitt is to the east.";
    } else if (currentRoom === "ratHall") {
        currentRoom = "redMarkedRoom";
        notice = "This room has two directions you can take.<br> There appears to be red marks all over the the path toward the west path.<br>West or East, choose wisely...";
    } else if (currentRoom === "freedomHallway") {
        currentRoom = "giantSnakeRoom"; 
        notice = "You went back into the room with the Giant Snake.<br>Great decision...";
    } else if (currentRoom === "giantSnakeRoom") {
        currentRoom = "choseToDieRoom";
        notice = "For some reason you decided to wake the snake.<br>It goes without saying, you were eaten...";
    } else if (currentRoom === "choseToDieRoom") {
        notice = "You were devoured.";
    } else if (currentRoom === "deadEnd") {
        notice = "You have been eaten.";
    } else if (currentRoom === "trapRoom") {
        notice = "You were devoured.";
    } else if (currentRoom === "freedom") {
        notice = "You've escaped this wretched place. No more snakes!<br>FREEDOM!";
    } else {
        notice = "You bumped into a wall, and fell hilariously.<br>Choose a different direction.";
    }
    showScene(notice);
}     

function moveWest() {
    var notice;
    var points;
    var currentPoints = 100;
    if (currentRoom === "startingRoom") {
        currentRoom = "safeRoom";
        notice = "You escaped to a safe room.<br>There are no snakes in the room, but the snakes will follow you if you dawdle for too long.";
    } else if (currentRoom === "redMarkedRoom") {
        currentRoom = "deadEnd";
        notice = "Dead end...<br>The snakes caught up to you and had you for dinnner.";
    } else if (currentRoom === "deadEnd") {
        notice = "You have been eaten.";
    } else if (currentRoom === "thePitt") {
        notice = "You are still dead.";
    } else if (currentRoom === "signHall") {
        currentRoom = "redMarkedRoom";
        notice = "You are back in the room with red marks toward the west.";
    } else if (currentRoom === "giantSnakeRoom") {
        currentRoom = "signHall";
        notice = "This is the room with the sign.<br>Are you going to follow the sign south?";
    } else if (currentRoom === "falseSafeRoom") {
        currentRoom = "giantSnakeRoom";
        notice = "You are back in the room with the giant snake.<br>Don't disturb it!";
    } else if (currentRoom === "trapRoom") {
        notice = "You were devoured.";
    } else if (currentRoom === "freedomHallway") {
        currentRoom = "thePitt";
        notice = "You somehow fell into the pitt that is in clear sight.<br>You are dead.";
    } else if (currentRoom === "choseToDieRoom") {
        notice = "You were devoured.";
    } else if (currentRoom === "freedom") {
        notice = "You've escaped this wretched place. No more snakes!<br>FREEDOM!";
    } else {
        notice = "You bumped into a wall, and fell hilariously.<br>Choose a different direction.";
    }
    showScene(notice);
    
    if (currentRoom === "safeRoom"){
        points = "You have " + currentPoints + 5 ;
    showPoints(points);
    }
}

function moveEast() {
    var notice;
    if (currentRoom === "safeRoom") {
        currentRoom = "startingRoom";
        notice = "There are snakes in here you idiot. GET OUT!";
    } else if (currentRoom === "ratHall") {
        currentRoom = "thePitt";
        notice = "You somehow fell into the pitt that is in clear sight.<br>You are dead.";
    } else if (currentRoom === "thePitt") {
        notice = "You are still dead.";
    } else if (currentRoom === "deadEnd") {
        notice = "You have been eaten.";
    } else if (currentRoom === "redMarkedRoom") {
        currentRoom = "signHall";
        notice = "This room has a sign that states 'Freedom is South.'<br> Seems legit...";
    } else if (currentRoom === "signHall") {
        currentRoom = "giantSnakeRoom";
        notice = "THERE IS A 30 FOOT SNAKE NEAR THE NORTH WALL FACING EASTWARD. DONT DISTURB IT!<br>You can escape by heading East or South.";
    } else if (currentRoom === "giantSnakeRoom") {
        currentRoom = "falseSafeRoom";
        notice = "You escaped that huge snake, atleast for now.<br>Continue onwards.";
    } else if (currentRoom === "falseSafeRoom") {
        currentRoom = "trapRoom";
        notice = "There's no where to go...<br> The giant snake slithered to your location and ate you whole with its massive mouth.";
    } else if (currentRoom === "trapRoom") {
        notice = "You were devoured.";
    } else if (currentRoom === "choseToDieRoom") {
        notice = "You were devoured.";
    } else if (currentRoom === "freedom") {
        notice = "You've escaped this wretched place. No more snakes!<br>FREEDOM!";
    } else {
        notice = "You bumped into a wall, and fell hilariously.<br>Choose a different direction.";
    }
    showScene(notice);
}

function moveSouth() {
    var notice;
    if (currentRoom === "ratHall") {
        currentRoom = "safeRoom";
        notice = "You are back in the safe room. You have to leave this place eventually...";
    } else if (currentRoom === "redMarkedRoom") {
        currentRoom = "ratHall";
        notice = "This is the room with the rat statues and pitt to the east.";
    } else if (currentRoom === "signHall") {
        currentRoom = "thePitt";
        notice = "It was not freedom...<br>You walked into the pitt which means you are dead.";
    } else if (currentRoom === "thePitt") {
        notice = "You are still dead.";
    } else if (currentRoom === "deadEnd") {
        notice = "You have been eaten."; 
    } else if (currentRoom === "trapRoom") {
        notice = "You were devoured.";
    } else if (currentRoom === "choseToDieRoom") {
        notice = "You were devoured.";
    } else if (currentRoom === "giantSnakeRoom") {
        currentRoom = "freedomHallway";
        notice = "You entered another room with statues of giant rats, and the pitt is to the west.<br> This time however, there appears to be greenerie in the ground. That is a good sign.";
    } else if (currentRoom === "freedomHallway") {
        currentRoom = "freedom";
        notice = "You've escaped this wretched place. No more snakes!<br>FREEDOM!";
    } else if (currentRoom === "freedom") {
        notice = "You've escaped this wretched place. No more snakes!<br>FREEDOM!";
    } else {
        notice = "You bumped into a wall, and fell hilariously.<br>Choose a different direction.";
    }
    showScene(notice);
}