// You can import external modules into your bundle –
// it doesn't matter if they're ES2015 or legacy
//import $ from 'jquery';
import * as d3 from 'modernizr';


//$( 'body' ).html( '<h1>Hello world!</h1>' );
console.log("test23");
var a = ['test','test2'];
for (let i = 0; i < a.length; i++) {
	let x = a[i]
	console.log(x);
}
var test = 'zeadf';
class MyClass {
	getName() {
		return this.name;
	}
}

class Rectangle extends MyClass {
	getName2() {
		return this.name;
	}
}

