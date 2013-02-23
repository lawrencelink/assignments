```javascript
`three_js / build/ three.js:278`
//the name of the function is setRGB
//there are three arguments named r and g and b
//the return is the variable 'this'
setRGB: function ( r, g, b ) {

    	this.r = r;
		this.g = g;
		this.b = b;

		return this;

	},
```

`three_js / build/ three.js:621`
return new THREE.Color().setRGB( this.r, this.g, this.b );

`three_js / build/ three.js:9639`
color.setRGB( srcColors[ c ], srcColors[ c + 1 ], srcColors[ c + 2 ] );

`three_js / build/ three.js:10426`
fog.color.setRGB( color[0], color[1], color[2] );

```javascript
`three_js / build/ three.js:858`
//the name of the function is 'normalize'
//there are not any arguments for this function
//the return of the function is 'this'
//the function is invoked on line 1249 and line 1739 and line 2398
normalize: function () {

    	var l = this.length();

		if ( l === 0 ) {

			this.x = 0;
			this.y = 0;
			this.z = 0;
			this.w = 1;

		} else {

			l = 1 / l;

			this.x = this.x * l;
			this.y = this.y * l;
			this.z = this.z * l;
			this.w = this.w * l;

		}

		return this;

	},
    
```
