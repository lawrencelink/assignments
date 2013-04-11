var assert = require("assert");

var door = new Array;
var maxDoor = 100;
var i;

for(i=0;i<maxDoor;i++) {
    door[i] = 0;   
}

var hallway = {
    doors: door 
    
}


assert(hallway.doors[99]===0);
assert(pass);