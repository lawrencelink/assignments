var assert = require("assert"),
    hundredDoors = require("./homework-12.1-code.js");
    

// test: do we have a Hallway?

assert( hundredDoors.hallway);

// test: do we have Doors in our Hallway?

assert( hundredDoors.hallway.doors);

// test: do we have 10 Doors?

assert( hundredDoors.hallway.doors.length === 10);


// test: are all the Doors "closed"?

hundredDoors.hallway.doors.forEach( function(door) {
 
    assert( hundredDoors.hallway.doors[door] === 0);
    
});

// do: PASS 1 -- take a walk down the hallway, change the state of the doors

assert.equal( hundredDoors.hallway.toggle(0, "open"), 1);

// test: are all the Doors "open"?

for (var i = 0; i < hundredDoors.hallway.doors.length; i++) {
    assert.equal( hundredDoors.hallway.toggle(i, "open"), 1);
}

// do: PASS 2 -- take a walk down the hallway, change the state of the doors
var pass = [];

//for (var i = 0; i < hundredDoors.hallway.doors.length; i++) {
    //pass = hundredDoors.hallway.passes(pass);
    //assert.equal( hundredDoors.hallway.passes(pass[i]), 1);     
//}



// test: is every EVEN Door "closed"? is every ODD Door "open"?
var walk;

for (var i = 0; i < hundredDoors.hallway.doors.length; i+=2) {
    pass = hundredDoors.hallway.passes(pass, 2);
    assert.equal( hundredDoors.hallway.passes(pass[i]), 0);     
}

for (var i = 1; i < hundredDoors.hallway.doors.length; i+=2) {
    pass = hundredDoors.hallway.passes(pass, 2);
    assert.equal( hundredDoors.hallway.passes(pass[i]), 1);     
}

console.log(hundredDoors.hallway.passes(pass));

// do: PASS 3 -- take a walk down the hallway, change the state of the doors

walk = [1,2,3];

walk.forEach( function (walking) {
   
    pass = hundredDoors.hallway.passes(pass, walking);
    
});

console.log(hundredDoors.hallway.passes(pass));

// test: does the Hallway match our expected state?

