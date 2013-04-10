var assert = require("assert");

var doors = new Array;
var i;
var doorMax = 100;
var hallway;
var pass = new Array;

hallway = {
    passes: pass,
    door: doors
}
//create the closed doors
for (i=0;i<doorMax;i++) {
    
    doors[i] = 0;
}

//open every door
for (i=0;i<doorMax;i++) {
    
    doors[i]=1
}

//close every other door
for (i=0;i<doorMax;i+=2) {
    doors[i] = 0
}

//examine every other door
for (i=0;i<doorMax;i+=3) {
    if( doors[i]===0) {
        doors[i]=1;
    } else {
        doors[i]=0;
    }
}

//assert(doors[0]===1);
console.log(doors)
