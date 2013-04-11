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
    if (pass === 2) {
        for(i=0;i<maxDoor;i+=2) {
            door[i] = 0;
        }
    }
    if (pass === 3) {
        for (i=0;i<maxDoor;i+=pass) {
            if (door[i]===0) {
                door[i]=1;
            }  
            if (door[i]===1) {
                door[i]=0;
            }
            
        }
        
    }
    
    
}
var hallway = {
    doors: door, 
    
    //pass: [0]
}

//for (var i = 0; i < 4; i++) {
    //walk(i)
    //console.log(i)
//}
walk(0)
walk(1)
walk(2)
walk(3)
walk(4)
//assert(hallway.doors[99]===1);
//assert(hallway.doors[3]===1);
//console.log(door[3]);