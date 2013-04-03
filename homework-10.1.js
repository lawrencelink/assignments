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
 

assert.equal( +1, multiplication(+1,+1), " +1 * +1= +1");
assert.equal( +0, multiplication(+1,+0), " +1 * +1= +0");

function multiplication( a, b) {
    return a*b;
    
}