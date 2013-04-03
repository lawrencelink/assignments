var assert = require("assert");

/**
 * testing multiplication():
 * one | two | out
 * ====+=====+====
 *  +1 | +1  | +1
 *  +1 | +0  | +0
 *  +1 | -1  | -1
 *  -1 | +1  | -1
 *  -1 | +0  | +0
 *  -1 | -1  | +1
 *  +0 | +1  | +0
 *  +0 | +0  | +0
 *  +0 | -1  | -0
 */
 

assert.equal( multiplication( +1,+1), +1, " +1 * +1= +1");
assert.equal( multiplication( +1,+0), +0, " +1 * +1= +1");

function multiplication( a, b) {
    return +0;
    
}