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

```javascript
jquery / src / attribute.js:343
//while loop below
removeAttr: function( elem, value ) {
    	var name, propName,
			i = 0,
			attrNames = value && value.match( core_rnotwhite );

		if ( attrNames && elem.nodeType === 1 ) {
            //perfom loop while name equals the i index of attrNames, increment i by 1
            //I'm guessing while loop will stop when the i index of attrNames equals undefined
			while ( (name = attrNames[i++]) ) {
				propName = jQuery.propFix[ name ] || name;

				// Boolean attributes get special treatment (#10870)
				// Set corresponding property to false for boolean attributes
				if ( rboolean.test( name ) ) {
					elem[ propName ] = false;
				}

				elem.removeAttribute( name );
			}
		}
	},
```

```javascript
jquery / src / core.js:666
//for each index in elems index
//this for doesn't have an initialization of the variable or and incrementer

for ( i in elems ) {
    			value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret[ ret.length ] = value;
				}
			}
```

```javascript
jquery / speed / benchmarker.js:147
function count() {
//initialize the counter at 3
//loop for each i while it is less than or equal to jQuery.benchmarker.libraries.length + 2
//increment i by 1 on each iteration
   for(i = 3; i <= jQuery.benchmarker.libraries.length + 2 ; i++) {
     var fails = jQuery("td:nth-child(" + i + ").fail").length;
     var wins = jQuery("td:nth-child(" + i + ").winner").length;
     jQuery("tfoot tr:first th:eq(" + (i - 1) + ")")
      .html("<span class='wins'>" + wins + "</span> / <span class='fails'>" + fails + "</span>");
   }
 }
 '''
 
 ```javascript
jquery / speed / jquery-basis.js:2485
//loop for each index in types as long as it is not null
 while ( (type = types[ i++ ]) != null ) {
    		match = rnamespaces.exec( type );
			namespaces = "";
```

```javascript
jquery / speed / jquery-basis.js:1746
//declare j as pos or 0; loop while j is less than or equal to eventType.length; increment j by one on each loop
for ( var j = pos || 0; j < eventType.length; j++ ) {
    			handleObj = eventType[ j ];

				if ( handler.guid === handleObj.guid ) {
					// remove the given handler for the given type
					if ( all || namespace.test( handleObj.namespace ) ) {
						if ( pos == null ) {
							eventType.splice( j--, 1 );
						}

						if ( special.remove ) {
							special.remove.call( elem, handleObj );
						}
					}

					if ( pos != null ) {
						break;
					}
				}
			}
```