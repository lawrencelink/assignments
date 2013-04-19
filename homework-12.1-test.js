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

assert.equal( hundredDoors.hallway.toggle(0), 1);

// test: are all the Doors "open"?

for (var i = 0; i < hundredDoors.hallway.doors.length; i++) {
    assert.equal( hundredDoors.hallway.toggle(0), 1);
}

// do: PASS 2 -- take a walk down the hallway, change the state of the doors

assert( hundredDoors.hallway.passes()); 

// test: is every EVEN Door "closed"? is every ODD Door "open"?



// do: PASS 3 -- take a walk down the hallway, change the state of the doors



// test: does the Hallway match our expected state?