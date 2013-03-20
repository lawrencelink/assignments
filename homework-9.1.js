var assert = require("assert");

/**
 * testing subtraction():
 * one | two | out
 * ====+=====+====
 *  +1 | +1  | 0
 *  +1 | +0  | 1
 *  +1 | -1  | 2
 *  -1 | +1  | -2
 *  -1 | +0  | -1
 *  -1 | -1  | 0
 *  +0 | +1  | -1
 *  +0 | +0  | +0
 *  +0 | -1  | 0
 */
 
function subtraction(x,y) {
    z = x - y;
    return z;
}

assert(subtraction(1,1)===0,"1-1 does equal 0");
assert(subtraction(1,0)===1,"1-0 does equal 1");
assert(subtraction(1,-1)===2,"1+(-1) does equal 2");
assert(subtraction(-1,1)===-2,"-1-1 does equal -2");
assert(subtraction(-1,0)===-1,"-1+0 does equal -1");
assert(subtraction(-1,-1)===0,"-1+(-1) does equal 0");
assert(subtraction(0,1)===-1,"0-1 does equal 1");
assert(subtraction(0,0)===0,"0-0 does equal 0");
assert(subtraction(0,-1),"0-1 does equal -1");
