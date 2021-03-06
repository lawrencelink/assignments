var assert = require("assert");
//var print as print;
/**
 * testing division():
 * one | two | out
 * ====+=====+====
 *  +1 | +1  | 1
 *  +1 | +0  | Infinity
 *  +1 | -1  | -1
 *  -1 | +1  | -1
 *  -1 | +0  | Number.NEGATIVE_INFINITY
 *  -1 | -1  | 1
 *  +0 | +1  | 0
 *  +0 | +0  | ??
 *  +0 | -1  | 0
 */
 
function division(x,y) {
    z = (x/y);
    return z;
}

assert(division(1,1)===1,"1/1 does equal 1");
assert(division(1,0)===Infinity,"1/0 does equal NaN");
assert (division(1,-1)===-1,"1/-1 does equal -1");
assert(division(-1,1)===-1, "-1/1 does equal 1");
assert(division(-1,0)===Number.NEGATIVE_INFINITY, "-1/0 does equal Infinity");
assert(division(-1,-1)===1,"-1/-1 does equal 1");
assert(division(0,1)===0,"0/1 does equal 0");
assert(division(0,0)===0, "0/0 does equal 0");





