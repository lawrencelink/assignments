/**
 * Imagine a hallway with 100 doors. All of them are closed.
 * Take a walk down the hallway. Open every door.
 * Take another walk down the hallway. Close every other door.
 * Take another walk down the hallway. Examine every third door, if the door is open, close it. If it is closed, open it.
 * On the fourth pass of the hallway, examine every fourth door. If the door is open, close it. If it is closed, open it.
 * Repeat in kind for 100 passes of the hallway.
 * What is the state of the hallway?
 * 
 * A Hallway has:
 *  - a list of Number 1 (open) or 0 (closed): doors (Array)
 *  - a method of changing the state of a single door: toggle (Function)
 *  - a method of walking down the hallway to change the state: pass (Function)
 *      - example: on 10th pass(), toggle() every 10th item in doors
 *      - psuedo: on Nth pass(), toggle() every Nth item in doors
 *  - the number of the passes taken so far: passes (Number) = 0
 *  - a method of walking down the hallway for 100 passes: allPasses (Function)
 */
 
 
 module.exports = {
     
    hallway: {
        
        doors: [0,0,0,0,0,0,0,0,0,0],
        
        toggle: function ( door) {
            
            if (door === 0) {
                return 1;
            }
            
            if (door === 1) {
                return 0;
            }
        },
        
        passes: function ( pass) {
            var temp;
            this.doors = this.doors.map( this.toggle);
            temp = this.doors;        
            
            if (pass === 2) {
            
                for (var i = 0; i < this.doors.length; i+=pass) {
                    this.doors[i] = this.toggle(temp[i]);
                }
                
            }
            
            if (pass === 3) {
            
                for (var i2 = 0; i2 < this.doors.length; i2+=pass) {
                    this.doors[i2] = this.toggle(temp[i2]);
                }
                
            }
            
            return this.doors;
            
        }
        
    }
 
};