# Homework 4.1 - Arrays and Dictionaries

* looking for some array and dictionary examples to comment on

'''javascript
`node-mysql / lib / ConnectionConfig.js:71`
//A list named defaultFlags is defined

var defaultFlags = [ "LONG_PASSWORD", "FOUND_ROWS", "LONG_FLAG",
                        "CONNECT_WITH_DB", "ODBC", "LOCAL_FILES",
                        "IGNORE_SPACE", "PROTOCOL_41", "IGNORE_SIGPIPE",
                        "TRANSACTIONS", "RESERVED", "SECURE_CONNECTION",
                        "MULTI_RESULTS" ];
                        
'''
  
'''javascript
`node-mysql / lib / ConnectionConfig.js:90`
//A dictionary named options is defined with 3 keys host, port and database

var options = {
    host     : url.hostname,
    port     : url.port,
    database : url.pathname.substr(1),
  };
  
'''

'''javascript
`flight / lib / advice.js:18`
//A dictionary named advice is created that has a key called around
// the dictionary contains a function that returns a args variable
//I think that the .toArray function is interesting

var advice = {

      around: function(base, wrapped) {
        return function() {
          var args = util.toArray(arguments);
          return wrapped.apply(this, [base.bind(this)].concat(args));
        }
      },
      
'''

'''javascript
`sassaparilla / assets / js / hashgrid.js:68`
//A dictionary named options is created that has 9 keys 

var options = {
    		id: 'grid',             // id for the grid container
			modifierKey: null,      // optional 'ctrl', 'alt' or 'shift'
			showGridKey: 'g',       // key to show the grid
			holdGridKey: 'h',       // key to hold the grid in place
			foregroundKey: 'f',     // key to toggle foreground/background
			jumpGridsKey: 'j',      // key to cycle through the grid classes
			numberOfGrids: 1,       // number of grid classes used
			classPrefix: 'grid-',   // prefix for the grid classes
			cookiePrefix: 'hashgrid'// prefix for the cookie name
		}
      
'''