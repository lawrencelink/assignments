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

'''javascript
`flight / lib / utils.js:125`
//A dictionary named u is created that has 0 keys
//An array named a is created that has 0 indexes

uniqueArray: function(array) {
        var u = {}, a = [];

        for (var i = 0, l = array.length; i < l; ++i) {
          if (u.hasOwnProperty(array[i])) {
            continue;
          }

          a.push(array[i]);
          u[array[i]] = 1;
        }

        return a;
      }, 
'''

'''javascript
`discourse / lib / headless-ember.js:1`
//A dictionary named Element is created that has 0 keys
//properties of the element are assigned to functions

// DOM
var Element = {};
Element.firstChild = function () { return Element; };
Element.innerHTML = function () { return Element; };

//A document dictrionary is created with 2 keys - createRange and createElement
var document = { createRange: false, createElement: function() { return Element; } };
var window = this;
this.document = document;

}
'''