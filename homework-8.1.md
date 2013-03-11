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

`src/data.js:16`
```javascript
    function Data() {
```
* constructor function: Data
* arguments: 
* method: 
* property: 
* called on data.js assigned to data_user variable on line 199

`src/event.js:588`
```javascript
    jQuery.Event = function( src, props ) {
```
* constructor function: Event
* arguments: src, props
* method: 
* property: 
* called on event.js assigned to event variable on line 497

`src/event.js:582`
```javascript
    jQuery.removeEvent = function( elem, type, handle ) {
```
* constructor function: removeEvent
* arguments: elem, type, handle
* method: 
* property: 
* called on event.js on line 184

`src/serialize.js:40`
```javascript
    jQuery.param = function( a, traditional ) {
```
* constructor function: param
* arguments: a
* method: add
* property: prefix, s
* called on serialize.js on line 8
