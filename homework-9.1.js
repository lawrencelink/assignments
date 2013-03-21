var assert = require("assert");

/**
 * testing division():
 * one | two | out
 * ====+=====+====
 *  +1 | +1  | 1
 *  +1 | +0  | NaN
 *  +1 | -1  | -1
 *  -1 | +1  | -1
 *  -1 | +0  | NaN
 *  -1 | -1  | 1
 *  +0 | +1  | 0
 *  +0 | +0  | NaN
 *  +0 | -1  | 0
 */
 
function division(x,y) {
    z = (x/y);
    return z;
}

assert(division(1,1)===1,"1/1 does equal 1");
assert(division(1,0)===NaN,"1/0 does equal NaN");



