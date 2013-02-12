# Homework 5.1 - Conditionals

* looking for some nested conditional statements examples to comment on

```javascript
jquery / src / data.js
ig.js:71`
//if else statement with a sub if else statement

       	// Handle: [ owner, key, value ] args
		if ( typeof data === "string" ) {
			cache[ data ] = value;

		// Handle: [ owner, { properties } ] args
		} else {
			// [*] In the case where there was actually no "owner" entry and
			// this.locker( owner ) was called to create one, there will be
			// a corresponding empty plain object in the cache.
			//
			// Note, this will kill the reference between
			// "this.cache[ unlock ]" and "cache"
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