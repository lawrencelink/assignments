# Homework 6.1 - Loops

* looking for some Looping examples to comment on

```javascript
jquery / src / data.js:256
//for loop, variable not initialized, loop for each while i < attrs.length, increment by 1 on each iteration
    for ( ; i < attrs.length; i++ ) {
        	name = attrs[i].name;
    
    		if ( name.indexOf( "data-" ) === 0 ) {
    		name = jQuery.camelCase( name.substring(5) );
    		dataAttr( elem, name, data[ name ] );
    		}
    }
```

```javascript
jquery / src / data.js:256
//while loop, cur is set to equal the i index of the eventPath array and not event.isPropogationStopped
    i = 0;
	while ( (cur = eventPath[i++]) && !event.isPropagationStopped() ) {

		event.type = i > 1 ?
			bubbleType :
			special.bindType || type;

		// jQuery handler
		handle = ( jQuery._data( cur, "events" ) || {} )[ event.type ] && jQuery._data( cur, "handle" );
		if ( handle ) {
			handle.apply( cur, data );
		}

		// Native handler
		handle = ontype && cur[ ontype ];
		if ( handle && jQuery.acceptData( cur ) && handle.apply && handle.apply( cur, data ) === false ) {
			event.preventDefault();
		}
	}
```