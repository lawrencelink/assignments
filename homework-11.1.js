var assert = require("assert");

var doors = new Array();

//function createDoors(doors) {
    
    var iMax = 100;
    var jMax = 100;
    var i;
    var j;
    
    for (i=0;i<iMax;i++) {
     doors[i]=new Array();
     for (j=0;j<jMax;j++) {
      doors[i][j]=0;
     }
    }
//}

var hallway = { 
        door: doors   
};

            
assert( hallway.door[99]);
assert( doors[99]);
