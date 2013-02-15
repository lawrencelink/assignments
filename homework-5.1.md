# Homework 5.1 - Conditionals

* looking for some nested conditional statements examples to comment on

```javascript
jquery / src / data.js:71
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
			
            //if the jQuery.isEmptyObject function with cache argument is true then
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
jquery / src / data.js:249
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


```javascript
jquery / src / event.js:711
    //if variable types is literally an object
    	if ( typeof types === "object" ) {
			// ( types-Object, selector, data )
            
            //if selector variable is not a string
			if ( typeof selector !== "string" ) {
				// ( types-Object, data )
				data = data || selector;
				selector = undefined;
			}
			for ( type in types ) {
				this.on( type, selector, data, types[ type ], one );
			}
			return this;
		}
```
```javascript
jquery / src / event.js:397
    //if delegateCount and cur.nodeType and (event.button or event.type are not litterally click)
    if ( delegateCount && cur.nodeType && (!event.button || event.type !== "click") ) {

			for ( ; cur != this; cur = cur.parentNode || this ) {

				//if cur.disable is not literally true or event.type is not literally click
				if ( cur.disabled !== true || event.type !== "click" ) {
					matches = [];
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";
                        
                        //if matches array on the sel index is literally undefined
						if ( matches[ sel ] === undefined ) {
							matches[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) >= 0 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
                        //if matches array on the sel index
						if ( matches[ sel ] ) {
							matches.push( handleObj );
						}
					}
                    //if matches.length
					if ( matches.length ) {
						handlerQueue.push({ elem: cur, handlers: matches });
					}
				}
			}
		}
```

```javascript
jquery / src / effect.js:349

for ( index = 0 ; index < length ; index++ ) {
    		prop = handled[ index ];
			tween = anim.createTween( prop, hidden ? dataShow[ prop ] : 0 );
			orig[ prop ] = dataShow[ prop ] || jQuery.style( elem, prop );
            
            //if prop in dataShow evaulates to false
			if ( !( prop in dataShow ) ) {
				dataShow[ prop ] = tween.start;
                if hidden variable evaluates to true
				if ( hidden ) {
					tween.end = tween.start;
					tween.start = prop === "width" || prop === "height" ? 1 : 0;
				}
			}
		}
```

```javascript
jquery / src / manipulation.js:49
//if the first index in 'this' variable evaluates to true then
if ( this[ 0 ] ) {

    		// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );
            //if the first index in 'this' variables parentnode property evaluates to true then
			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}
```

```javascript
jquery / src / css.js:142
return this.each(function() {
            //TERNARY CONDITIONAL OPERATOR!!!!!
            //if bool is true return state if bool is false return isHidden(this)
    		if ( bool ? state : isHidden( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
```