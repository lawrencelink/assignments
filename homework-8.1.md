# Homework 8.1 - Classes and Objects

`src/event.js:18`
```javascript
    event = new jQuery.Event( originalEvent );
```
* function: event
* arguments: originalEvent
* called on event.js 497

`src/callbacks.js:35`
```javascript
    jQuery.Callbacks = function( options ) {
```
* constructor function: Callbacks
* arguments: options
* has a method named 'fire'
* has a property named 'self' that itself has many methods
* called on ajax.js to be placed into a variable named completeDeferred on line 343, 424 and 678