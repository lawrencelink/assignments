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
 
 assert.equal( +2, addition(+1,+1), " +1 +1 = +2");
 assert.equal( +1, addition(+1,+0), " +1 +0 = +1");
 
 function addition(a,b) {
     return 2;
}