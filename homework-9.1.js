var assert = require("assert");

/**
 * testing subtraction():
 * one | two | out
 * ====+=====+====
 *  +1 | +1  | 0
 *  +1 | +0  | 1
 *  +1 | -1  | 2
 *  -1 | +1  | -2
 *  -1 | +0  | -2
 *  -1 | -1  | 0
 *  +0 | +1  | -1
 *  +0 | +0  | +0
 *  +0 | -1  | 0
 */
 
function subtraction(x,y) {
    z = x - y;
    return z;
}


