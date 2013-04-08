var assert = require("assert");

var doors = new Array();

//function createDoors(doors) {
    
    var iMax = 100;
    var jMax = 100;
    var i;
    
    for (i=0;i<iMax;i++) {
     doors[i]=new Array();
     doors[i]=0;
    }
//}

var hallway = { 
        door: doors   
};

            
assert( hallway.door[99]===0);
console.log(doors[99]);
