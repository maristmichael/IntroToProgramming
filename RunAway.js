var currentRoom = 1; // room where you start in

function showScene(descrip) {
    document.getElementById("scene").innerHTML = descrip;
}       
function moveNorth() {
    var notice;
    if (currentRoom === 1) {
        currentRoom = 12;
        notice = "You somehow fell into the pitt that is in clear sight.<br>You are dead.";
    } else if (currentRoom === 12) {
        notice = "You are still dead.";
    } else if (currentRoom === 2) {
        currentRoom = 3;
        notice = "This is a long hallway, with statues of giant rats.<br>The pitt is to the east.";
    } else if (currentRoom === 3) {
        currentRoom = 4;
        notice = "This room has two directions you can take.<br> There appears to be red marks toward the west path.<br>West or East, choose wisely...";
    } else if (currentRoom === 10) {
        currentRoom = 7; 
        notice = "You went back into the room with the Giant Snake.<br>Great decision...";
    } else if (currentRoom === 11) {
        currentRoom = 10;
        notice = "REALLY!?! Freedom is up ahead!";
    } else if (currentRoom === 5) {
        notice = "You have been eaten.";
    } else {
        notice = "You bumped into a wall, and fell hilariously.<br>Choose a different direction.";
    }
    showScene(notice);
}     
function moveWest() {
    var notice;
    if (currentRoom === 1) {
        currentRoom = 2;
        notice = "You escaped to a room in heading west.<br>There are no snakes in the room, but the snakes will soon follow you.";
    } else if (currentRoom === 4) {
        currentRoom = 5
        notice = "Dead end...<br>The snakes caught up to you and had you for dinnner.";
    } else if (currentRoom === 5) {
        notice = "You have been eaten.";
    } else if (currentRoom === 12) {
        notice = "You are still dead.";
    } else if (currentRoom === 6) {
        currentRoom = 4;
        notice = "You are back in the room with red marks toward the east.";
    } else if (currentRoom = 7) {
        currentRoom = 6;
        notice = "This is the room with pitt toward the south. Once again, don't jump in.";
    } else if (currentRoom === 8) {
        currentRoom = 7;
        notice = "You are back in the room with the giant snake.<br>Don't disturb it!";
    } else if (currentRoom === 9) {
        notice = "You were devoured.";
    } else if (currentRoom === 10) {
        currentRoom = 12;
        notice = "You somehow fell into the pitt that is in clear sight.<br>You are dead."
    } else {
        notice = "You bumped into a wall, and fell hilariously.<br>Choose a different direction.";
    }
    showScene(notice);
}