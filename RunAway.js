var currentRoom = 1; // room where you start in

function showScene(descrip) {
    document.getElementById("scene").innerHTML = descrip;
}       
function moveNorth() {
    var notice;
    if (currentRoom === 1) {
        currentRoom = 12;
        notice = "You somehow fell into the pitt that is in clear sight. You are dead.";
   
    } else if (currentRoom === 12) {
        notice = "You are still dead.";
    
    } else if (currentRoom === 2) {
        currentRoom = 3;
        notice = "This is a long hallway, with statues of giant rats. The pitt is to the east.";
    }
    showScene(notice);
}     
function moveWest() {
    var notice;
    if (currentRoom === 1) {
        currentRoom = 2;
        notice = "You escaped to the room to your left. There are no snakes in the room, but the snakes will soon follow you.";
    
    } else if (currentRoom === 2) {
        notice = "That is a wall.";
    }
    showScene(notice);
}