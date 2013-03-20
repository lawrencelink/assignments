var assert = require("assert");

/**
 * testing multiplication():
 * one | two | out
 * ====+=====+====
 *  +1 | +1  | 1
 *  +1 | +0  | 0
 *  +1 | -1  | -1
 *  -1 | +1  | -1
 *  -1 | +0  | 0
 *  -1 | -1  | 1
 *  +0 | +1  | 0
 *  +0 | +0  | 0
 *  +0 | -1  | 0
 */
 
function multiplication(x,y) {
    z = (x*y);
    return z;
}

assert(multiplication(1,1)===1,"1*1 does equal 1");
assert(multiplication(1,0)===0,"1*0 does equal 0");
assert(multiplication(1,-1===-1,"1*-1 does equal -1"));
assert(multiplication(-1,1)===-1,"-1*1 does equal 1");
assert(multiplication(-1,0)===0,"-1*0 does equal 0");
assert(multiplication(-1,-1)===1,"-1*-1 does equal 1");
assert(multiplication(0,1)===0,"0*1 does equal 0");
assert(multiplication(0,0)===0,"0*0 does equal 0");
assert(multiplication(0,-1)===0, "0*-1 does equal 0");

