# Homework 2.1 - Ever wonder what all these signs say?

For Homework 1.1, you found a nice project on Github, forked it into your own account, and cloned it into your Cloud 9 IDE account. For this assignment, pick one or more Javascript files from your project (you DID pick a Javascript project, didn't you?) and identify some of the following items of Javascript grammar and vocabulary that we talked about in class, including but not limited to:

* Variables: `$name`
* Constants: `E_USER_WARNING`, `MY_AWESOME_CONSTANT`
* Arithmetic operators: addition (+), subtraction (-)
* Functions: `array_slice()`, `do_something_amazing()`

When you find one, identify the file and line number in this file, below the instrcutions per the example below. Try to make the indentation match the original file (yes, copy and paste), even if that means there's NO indentation. Crazy Javascript-ers.

You don't have to identify EVERYTHING in a given line or even in a single file, but you may get extra points if you're thorough or make a survey of more than one file... And you might get docked if you make too much work for me. I at least want to see about 50 lines of code.

When you're done editing this file, save it, commit it, and push it to your "assignments" repo, called "origin". You remember how to push, right?

## Your work should look like this...

`path/to/file.js:3`
```javascript
    if ( true )
    // Boolean: true
```

`path/to/file.js:42`
```javascript
    var name = do_something_amazing() + 1;
    // Variable: name
    // Function: do_something_amazing()
    // Integer: 1
```

## Now get to it!
`index.js:9`
```javascript
    //exports object is created without a var
// If no var statement is found, that variable is assumed to be global
//does that make exports a global variable?
//according to http://blog.davidpadbury.com/2011/08/21/javascript-modules/
//Modules are evaluated in their own context and have a global exports variable made available to them
//This exports variable is just a plain old JavaScript object which you can attach things to
// To access a module you call a global require function and give an identifier for the package you are requesting
//so the exports object is a way to allow functions to be used in other files
//Does a file = a module???
//What module is requiring the index.js file/module?
//I only see "var mysql      = require('mysql');"

//.createConnection method defined
//per stackoverflow http://stackoverflow.com/questions/5311334/what-is-the-purpose-of-nodejs-module-exports-and-how-do-you-use-it
//module.exports is the object that's actually returned as the result of a require call.
//The exports variable is initially set to that same object (i.e. it's a shorthand "alias"), so in the module code you would usually write something like this:
//var myFunc1 = function() { ... };
//var myFunc2 = function() { ... };
//exports.myFunc1 = myFunc1;
//exports.myFunc2 = myFunc2;

//when utilizing the create connection the mysql.createconnection is created with host, user and password parameters
//Does this mean that config passes these parameters?
//I find it really confusing how config is used 3 times below!
//The ConnectionConfig module returns config
exports.createConnection = function(config) {
  return new Connection({config: new ConnectionConfig(config)});
};

//.createQuery function uses the Connection.createQuery function
exports.createQuery = Connection.createQuery;

//exports parameters defined
exports.Types    = Types;
exports.escape   = SqlString.escape;
exports.escapeId = SqlString.escapeId;

```

`node-mysql/lib/Connection.js:58`
```javascript
    Connection.prototype.connect = function(cb) {
  if (!this._connectCalled) {
    this._connectCalled = true;

    this._socket = (this.config.socketPath)
      ? Net.createConnection(this.config.socketPath)
      : Net.createConnection(this.config.port, this.config.host);

    this._socket.pipe(this._protocol);
    this._protocol.pipe(this._socket);

    this._socket.on('error', this._handleNetworkError.bind(this));
    this._protocol.on('unhandledError', this._handleProtocolError.bind(this));
    this._protocol.on('drain', this._handleProtocolDrain.bind(this));
    this._protocol.on('end', this._handleProtocolEnd.bind(this));
  }

  this._protocol.handshake(cb);
};
    //I tried to understand prototype per website "http://helephant.com/2009/01/18/javascript-object-prototype/"
//Any property or method that’s added to the constructor’s prototype automatically becomes part of every object created by that function.
//The prototype property is basically a template for the objects created by the constructor.
//I see that the Connect method is referenced in the 'Connection.connect(); command when the node-mysql is being used
```
