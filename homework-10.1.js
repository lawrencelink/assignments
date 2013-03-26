var assert = require("assert");

/**
 * testing subtraction():
 * one | two | out
 * ====+=====+====
 *  +1 | +1  | +0
 *  +1 | +0  | +1
 *  +1 | -1  | +2
 *  -1 | +1  | -2
 *  -1 | +0  | -1
 *  -1 | -1  | -0
 *  +0 | +1  | -1
 *  +0 | +0  | +0
 *  +0 | -1  | +1
 */

assert.equal( +0, subtraction(+1,+1), " +1 - +1 = +0");
assert.equal( +1, subtraction(+1,+0), " +1 - +0 = +1");
autoAssert( +1, -1, +2);
autoAssert( -1, +1, -2);
autoAssert( -1, +0, -1);
autoAssert( -1, -1, +0);
autoAssert( +0, +1, -1);
autoAssert( +0, +0, +0);
autoAssert( +0, -1, +1);

function autoAssert( a, b, c) {
    
    assert.equal(c, subtraction( a, b), " +1 - -1 = +2");
    
}

function subtraction(a, b) {
    
    return (a - b);
    
}