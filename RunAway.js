/*
 * Michael Gutierrez
 * Matthew Johnson
 * CMPT 120L-115
 * December 11, 2015
 * Version 1.0
*/

// This is the item constructer, it has name, a check if it was obversved, and a description
function Item(name, observed, description) {
	this.name = name;
	this.observed = observed;
	this.description = description;
}

// Item instantiations
var note = new Item(
	"Note",
	"You spot a note on the ground.",
	"You pick up the note, it reads:<br>"
	 + "'You can never escape the Pitt'"
);

var miniRatFigurine = new Item(
	"Rat Figurine",
	"There's a mini figurine of a rat behind one of the statues.",
	"This is a rat figurine, possibly a good luck charm."
);

var fadedPaper = new Item(
	"Faded Paper",
	"You notice a paper is on the wall.",
	"You pick up the note on the wall, it reads:<br>"
	 + "'The risk is worth the reward.'"
);

var goldenSnake = new Item(
	"Golden Snake",
	"There's something shiny in the grass.",
	"You found a snake carved out of pure gold.<br>"
	 + "It has been sitting there for quite some time so "
	 + "it'll probably sell for a pretty penny. <br>"
	 + "Engraved in the bottom is 'Yell the danger you're running from.'"
);

//These are the integer direction constants
const NORTH = 0;
const SOUTH = 1;
const WEST = 2;
const EAST = 3;

// Location constructor and prototype
function Location(name, description, visitCount, item) {
	this.name = name;
	this.description = description;
	this.visitCount = visitCount;
	this.item = item;
}

// A toString method for the locations
Location.prototype.toString = function() {
    return this.descrip;
}

// These are all of the locations
var locations = [
/*0*/	new Location("Starting Room", descriptionOf("startingRoom"), 1, null),
/*1*/	new Location("Safe Room", descriptionOf("safeRoom"), 0, note),
/*2*/	new Location("Rat Hall", descriptionOf("ratHall"), 0, miniRatFigurine),
/*3*/	new Location("Red Marked Room", descriptionOf("redMarkedRoom"), 0, null),
/*4*/	new Location("Dead End", descriptionOf("deadEnd"), 0, null),
/*5*/	new Location("Sign Hall", descriptionOf("signHall"), 0,null),
/*6*/	new Location("Giant Snake Room", descriptionOf("giantSnakeRoom"), 0, null),
/*7*/	new Location("Chose To Die Room", descriptionOf("choseToDieRoom"), 0, null),
/*8*/	new Location("False Safe Room", descriptionOf("falseSafeRoom"), 0, fadedPaper),
/*9*/	new Location("Trap Room", descriptionOf("trapRoom"), 0, null),
/*10*/	new Location("Freedom Hallway", descriptionOf("freedomHallway"), 0, goldenSnake),
/*11*/	new Location("Freedom", descriptionOf("freedom"), 0, null),
/*12*/	new Location("The Pitt", descriptionOf("thePitt"), 0, null),
];

// This is the navigation matrix
var map = [
	/* [North, South, West, East] */
	[ locations[12], null, locations[1], null ],         // from Starting Room --> Safe Room(west), The Pitt(north)
    	[ locations[2], null, null, locations[0] ],          // from Safe Room --> Rat Hall(north), Starting Room(east)
	[ locations[3], locations[1], null, locations[12] ], // from Rat Hall --> R.M. Room(north), The Pitt(east), Safe Room(south)
	[ null, locations[2], locations[4], locations[5] ],  // from Red Marked Room --> Dead End(west), Sign Hall(east), Rat Hall(south) 
	[ null, null, null, null ],                          // from Dead End --> Nowhere
	[ null, locations[12], locations[3], locations[6] ], // from Sign Hall --> R.M. Room(west), G.S. Room(east), The Pitt(south)
	[ locations[7], locations[10], locations[5], locations[8] ], // from Giant Snake Room --> C.T.D. Room(north), Sign Hall(west), False Safe Room(east), Freedom Hall(south)
	[ null, null, null, null ],                          // from Choose To Die Room --> Nowhere
	[ null, null, locations[6], locations[9] ],          // from False Safe Room --> G.S. Room(west), Trap Room(east)
	[ null, null, null, null ],                          // from Trap Room --> Nowhere
	[ locations[6], null, locations[12], null ],         // from Freedom Hallway --> G.S. Room(north), The Pitt(west)
	[ null, null, null, null ],                          // from Freedom --> Nowhere
	[ null, null, null, null ],                          // from The Pitt --> Nowhere
	
];

// This is the Global Player Object
var player = {
	currentRoom: locations[0],
	currentPoints: 0,
	inventory: [],
	breadcrumbTrail: []
};

// Funtion that returns a the room description based on the location number
function descriptionOf(location) {
	switch (location) {
	case "safeRoom":
		return "You are in a safe room.<br>" +
		"There are no snakes in the room, but the " +
		"snakes will follow you if you dawdle for too long.";
	break;
			
	case "ratHall":
		return "This is a long hallway, with two statues of giant rats.<br>" +
		"The pitt is to the east.<br>";
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
		"This room is a long corridor that only goes one way.<br>";
	break;
	
	case "trapRoom":
		return "There's no where to go...<br>" + 
		"The giant snake slithered to you and ate you whole with its massive mouth.";
	break;
			
	case "freedomHallway":
		return "You entered another room with statues of giant rats, " + 
		"and the pitt is to the west.<br>" +
		"This time however, there appears to be greenerie in the ground.<br>" +
		"That is a good sign.<br>";
	break;
			
	case "freedom":
		return "You woke up from your nightmare.<br>" +
		"You've been having snake nightmares since going to college.<br>" +
		"You truly thought that you were trapped in a weird location escaping from snakes...";
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
			
	case "startingRoom":
		return "You wake up to find that you are in a room filled with snakes.<br>" +
		"Your are terrified of snakes, so you look for a way to escape.<br>" +
		"Infront of you, to the north, there is a bottomless pitt.<br>" +
		"(It might be a good idea to not fall in...)";
	break;
	}
}

// Sets up conditions when game is loaded
window.onload = function(){
	console.log(locations[0].description);
	player.currentRoom = locations[0];
	disableButton();
	showScene(player.currentRoom);
	listInventory();
};
