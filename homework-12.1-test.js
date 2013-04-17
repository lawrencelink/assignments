var assert = require("assert"),
    hundredDoors = require("./homework-12.1-code.js");
    

// test: do we have a Hallway?

assert( hundredDoors.hallway);

// test: do we have Doors in our Hallway?

assert( hundredDoors.hallway.doors);

// test: do we have 100 Doors?

assert( hundredDoors.hallway.doors.length === 10);

// test: are all the Doors "closed"?

hundredDoors.hallway.doors.forEach(function(door) {
    
    assert(hundredDoors.hallway.doors[door] === 0);
    
    });

// do: PASS 1 -- take a walk down the hallway, change the state of the doors

assert.equal( hundredDoors.hallway.toggle(), 1);
// test: are all the Doors "open"?

assert.equal( hundredDoors.hallway.passes(1),1);

// do: PASS 2 -- take a walk down the hallway, change the state of the doors

hundredDoors.hallway.passes(2);

// test: is every EVEN Door "closed"? is every ODD Door "open"?

for (var i = 0; i < hundredDoors.hallway.doors.length; i+=2) {
    
    assert.equal(hundredDoors.hallway.passes(1),0);
    
}

for (var i = 1; i < hundredDoors.hallway.doors.length; i+=2) {

    assert.equal( hundredDoors.hallway.passes(1),1);
    
}
// do: PASS 3 -- take a walk down the hallway, change the state of the doors



// test: does the Hallway match our expected state?