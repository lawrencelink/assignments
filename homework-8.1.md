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
* method: 'fire'
* property: 'self' that itself has many methods
* called on ajax.js to be placed into a variable named completeDeferred on line 343, 424 and 678

`src/core.js:713`
```javascript
    access: function( elems, fn, key, value, chainable, emptyGet, raw ) {
```
* constructor function: access
* arguments: elems, fn, key, value, chainable, emptyGet, raw
* method: 
* property: 'now' 
* called on attributes.js returned by the attr: and prop: objects on line 10 and 20

`src/attributes.js:19`
```javascript
    prop: function( name, value ) {
```
* constructor function: prop
* arguments: name, value
* method: 
* property: 
* called on attributes.js returned by the attr: objects on line 300