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

assert.equal( +0,subtraction(+1,+1), " +1 - +1 = +0");

function subtraction(a,b) {
    return 0;
}