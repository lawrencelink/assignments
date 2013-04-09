//0 denotes that the door is closed
//1 denotes taht the door is open

var assert = require("assert");

var door = new Array();
var iMax = 100;
var i;

//create the closed doors
for (i=0;i<iMax;i++) {
    door[i]= new Array();
    door[i]=0;
}

//open the doors
for (i=0;i<iMax;i++) {
    door[i]=1;
}

//close every other door
for (i=0;i<iMax;i+=2) {
    door[i]=0;
}

//Examine every third door
for (i=0;i<iMax;i+=3) {
    if (door[i]===0) {
        //door[i]===1
        console.log(door[i]);
    }
}

var hallway = {
    doors: door
}

//assert( hallway.doors[2]===1);

//console.log( hallway.doors);