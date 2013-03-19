var assert = require("assert");

/**
 * testing subtraction():
 * one | two | out
 * ====+=====+====
 *  +1 | +1  | +2
 *  +1 | +0  | +1
 *  +1 | -1  | +0
 *  -1 | +1  | +0
 *  -1 | +0  | -1
 *  -1 | -1  | -2
 *  +0 | +1  | +1
 *  +0 | +0  | +0
 *  +0 | -1  | -1
 */
 
function addition(x,y) {
    return 2;
}

assert(addition(1,1)===2, '1+1 does equal 2');
assert(addition(1,0)===1, '1+0 does equal 1');
