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
 
 autoAssert( +1, +0, +1);
 autoAssert( +1, -1, +0);
 autoAssert( -1, +1, +0);
 
 function autoAssert(a,b,c) {
     
    assert.equal( c, addition(a,b), " +1 +0 = +1");    
    
 }
 
 function addition(a,b) {
     
     return (a + b);
     
}