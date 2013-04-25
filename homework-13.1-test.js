var assert = require("assert"),
    hundredDoors = require("./homework-13.1-code.js");
    
//do we have a hallway?
assert( hundredDoors.hallway);

//do we have doors in the hallway?
assert( hundredDoors.hallway.doors);

//do we have 10 doors?
assert( hundredDoors.hallway.doors.length === 10);

//are all the doors closed?
hundredDoors.hallway.doors.forEach( function(door) {
    assert.equal( door,0);    
});

//can we change the state of a door(create toggle function)?
assert( hundredDoors.hallway.toggle);

// can we change closed to open?
assert( hundredDoors.hallway.toggle(0)===1);

// can we change open to closed?
assert( hundredDoors.hallway.toggle(1)===0);

//are all doors in the correct state after first pass?
assert( hundredDoors.hallway.pass);

//hundredDoors.hallway.pass().forEach( function(door) {
    
  // assert.equal( door, 1); 
       
//});

//hundredDoors.hallway.doors.forEach( function(door) {
    
  //  assert.equal(door, 1);
     
//});

//can we tell which pass we are on?

assert.equal( hundredDoors.hallway.passes, 1);

//are all the doors in the correct state after each pass?
console.log( hundredDoors.hallway.pass());
