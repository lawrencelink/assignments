# Homework 5.1 - Conditionals

* looking for some nested conditional statements examples to comment on

```javascript
`jquery / src / data.js:71
//if else statement with a sub if else statement

       	// If typeof data in variable named data literally is a "string" then
		if ( typeof data === "string" ) {
			cache[ data ] = value;

		// else condition if the variable does not contain "string"
		} else {
			// [*] In the case where there was actually no "owner" entry and
			// this.locker( owner ) was called to create one, there will be
			// a corresponding empty plain object in the cache.
			//
			// Note, this will kill the reference between
			// "this.cache[ unlock ]" and "cache"
			
            //if the jQuery.isEmptyObject function with cache argument is not empty then
            if ( jQuery.isEmptyObject( cache ) ) {
				cache = data;
			// Otherwise, copy the properties one-by-one to the cache object
			} else {
				for ( prop in data ) {
					cache[ prop ] = data[ prop ];
				}
			}
		}

		// [*] This is required to support an expectation made possible by the old                     
```

```javascript
`jquery / src / data.js:249
// Gets all values
        //if the variable named key is strictly undefined
    	if ( key === undefined ) {
			
            // if this has a length
            if ( this.length ) {
				data = data_user.get( elem );
                
                //if the elem.nodeType literally equals 1 and not data_priv.get
				if ( elem.nodeType === 1 && !data_priv.get( elem, "hasDataAttrs" ) ) {
					attrs = elem.attributes;
					for ( ; i < attrs.length; i++ ) {
						name = attrs[i].name;
                        
                        //if  name.indexOf function with "data-" argument literally equals 0
						if ( name.indexOf( "data-" ) === 0 ) {
							name = jQuery.camelCase( name.substring(5) );
							dataAttr( elem, name, data[ name ] );
						}
					}
					data_priv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}
```