# Homework 7.1 - Functions

`jquery / src / data.js:16-20`

* The name of the function is Data, it has no arguments
* There are not any in-scope variables
* The return value of the function is a dictionary called this.cache


`jquery / src / data.js:25-50`

* The function is anonymous that is set to the 'locker' key in the prototype dictionary
* The argument is 'owner'
* The in-scope variable is 'ovalueOf' 
* The variable 'unlock' is not an in-scope variable, it is declared on line 62 in the set key
* The return value of the function is a variable called 'unlock'

`jquery / src / core.js:446`

* The function is anonymous that is set to the 'isEmptyObject' key in the jQuery.extend dictionary
* The argument is 'obj'
* The in-scope variable is 'name' 
* The return value of the function is either true or false depending whether 'name' is in 'obj'??

`jquery / src / core.js:796`

* The function is named 'isArraylike'
* The argument is 'obj'
* The in-scope variable is 'length'
* The variable 'type' is not an in-scope variable, it is a key declared on line 410 that has a function assigned to it
* The return value of the function is false if jQuery.isWindow( obj ) is truthy
* The return value of the function is true if obj.nodeType === 1 && length
* The funtion also returns 'type' as strictly an array or not a function and length as zero or length as a number greater than zero in the obj variable