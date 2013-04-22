var assert = require("assert"),
    hundredDoors = require("./homework-13.1-code.js");
    

// test: do we have a Hallway?

assert(hundredDoors.hallway);

// test: do we have Doors in our Hallway?

assert( hundredDoors.hallway.doors);

// test: do we have 10 Doors?

assert( hundredDoors.hallway.doors.length === 10);

// test: are all the Doors "closed"?

hundredDoors.hallway.doors.forEach( function(door) {

    assert( hundredDoors.hallway.doors[door] === 0);

});

// do: PASS 1 -- take a walk down the hallway, change the state of the doors

assert( hundredDoors.hallway.passes);

// test: are all the Doors "open"?

hundredDoors.hallway.passes().forEach( function(door) {
    
   assert.equal( door, 1); 
    
});

// do: PASS 2 -- take a walk down the hallway, change the state of the doors

assert( hundredDoors.hallway.passes());

// test: is every EVEN Door "closed"? is every ODD Door "open"?
var test;

test = hundredDoors.hallway.passes(2);

console.log(test);

for (var i = 0; i < test.length; i+=2) {
    
    assert( test[i] === 0);
    
}

for (var i = 1; i < hundredDoors.hallway.doors.length; i+=2) {
    assert( test[i] === 1);
    
}

// do: PASS 3 -- take a walk down the hallway, change the state of the doors

console.log( hundredDoors.hallway.passes(3));

// test: does the Hallway match our expected state?

