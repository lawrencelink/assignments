var assert = require("assert");

var door = new Array;
var maxDoor = 100;
var i;

function walk (pass) {
    if (pass === 0) {
        for(i=0;i<maxDoor;i++) {
            door[i] = 0;   
        }
    }
    if (pass === 1) {
        for(i=0;i<maxDoor;i++) {
            door[i] = 1;   
        }
    }
    if (pass===2) {
        for(i=0;i<maxDoor;i+=2) {
            door[i] = 0
        }
    }
}
var hallway = {
    doors: door, 
    
    pass: [0]
}

walk(0)
walk(1)
walk(2)
walk(3)
//assert(hallway.doors[99]===1);
assert(hallway.pass);
console.log(hallway.doors);