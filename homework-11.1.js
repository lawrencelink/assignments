var assert = require("assert");

var door = new Array;
var maxDoor = 100;
var i;

for(i=0;i<maxDoor;i++) {
    door[i] = 0;   
}

var hallway = {
    doors: door, 
    
    pass: [1]
}


assert(hallway.doors[99]===0);
assert(hallway.pass);
console.log(hallway.doors);