(function (exports) {
'use strict';

// You can import external modules into your bundle –
// it doesn't matter if they're ES2015 or legacy
//import $ from 'jquery';



//$( 'body' ).html( '<h1>Hello world!</h1>' );
console.log("test23");
var a = ['test','test2'];
for (var i = 0; i < a.length; i++) {
	var x = a[i];
	console.log(x);
}
var MyClass = function MyClass () {};

MyClass.prototype.getName = function getName () {
	return this.name;
};

}((this.LaravelElixirBundle = this.LaravelElixirBundle || {})));
//# sourceMappingURL=app.js.map
