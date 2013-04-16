var assert = require("assert"),
    hundredDoors = require("./homework-12.1-code.js");
    

// test: do we have a Hallway?

assert( hundredDoors.hallway);

// test: do we have Doors in our Hallway?

assert( hundredDoors.hallway.doors);

// test: do we have 100 Doors?

assert( hundredDoors.hallway.doors.length === 100);

// test: are all the Doors "closed"?



// do: PASS 1 -- take a walk down the hallway, change the state of the doors



// test: are all the Doors "open"?



// do: PASS 2 -- take a walk down the hallway, change the state of the doors



// test: is every EVEN Door "closed"? is every ODD Door "open"?



// do: PASS 3 -- take a walk down the hallway, change the state of the doors



// test: does the Hallway match our expected state?