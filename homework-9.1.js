var assert = require("assert");

/**
 * testing addition():
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
 
var addition = function(a, b) {
     return (a+b);
}
 
assert(addition(1,1) === 2, '1 + 1 does equal 2');
assert(addition(1,0) === 1, '1 + 1 does equal 2');
assert(addition(1,-1)===0, '1 - 1 does equal 0');
assert(addition(-1,1)===0,'-1+1 does equal 0');
assert(addition(-1,0)===-1,'-1+0 does equal -1');
assert(addition(-1,-1)===-2,'-1-1 does equal -2');
assert(addition(0,1)===1,'0+1 does equal 1');
assert(addition(0,0)===0,'0+0 does equal 0');
assert(addition(0,-1)===-1, '0-1 does equal -1');
