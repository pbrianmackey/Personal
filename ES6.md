#ES6

- Aurilight?  new project Eisenburg is working on.
- Lots of new features in ES6 (roughly 20 displayed)
- Function level scope is corrected with "let" (creates block scoping). (use let instead of var now)
- const has same forcing rules as let.  Allows constants.
- Modules : Exports and Imports.  This is asynchronous.  Runs in browser and node.
  - To me Export looks like #import in CPP or somewhat like using statements in C#

 ###Classes now exist in JS.  Simple implementation.  
  - extends is pretty flexible in what it allows.  "mixin models", dynamic inheritance.
  - No multiple inheritance.  You can have function call that takes other classes and merges them.
 - In terms of modules in defaults to private.  Modules encapsulate things.  You can't see them without export.

###Arrow Functions
//Expression bodies
var odds = evens.map(v => v + i);

var nums = evens.map((v, i_) => v * i);

//Statement bodies
nums.foreach(v => {
	if(v % 5 === 0)
	fives.push(v);
});

//Lexical this
var bob = {
	name: "Bob",
	friends: [],
	printFriends(){
	  this.friends.forEach(f => console.log(this.name + " knows " + f));
	}
}

###Promises

"evented IO" on node was mentioned.
- Promises are like the task in C#.
- default parameters also exist now
- 
```JavaScript
###Iterators and for ofs
let powersOfTwo = {
	[Symbol.iterator]() {
	let power = -1;
	return {
	next() {
	return {done: false, value: Math.pow(2, ++power)}
}
}

}
}
- for (var n of powersOfTwo) {
	if (n > 1024)
	break;
}

console.log(n);
````

- Lazy iterator evaluation.
- Allows depth first traversal of trees through iterators

###Generators
- yield.  function*() syntax.  Use the star so you can yield values.  You can push values back into the generator asynch.
- Code Routines:  Allow you to yield async results.  Sequential code. It will be asynchronous because you will yield promises up.  

"Transpilers": Takes ES6 code and moves it to ES5 code
- http://babeljs.io (recommended)
- githug.com/google/traceur-compiler (he does not recommend it)
- typescriptlang.org
- IE9 and above

####Polyfills
- https://github.com/zloirock/core-js
- Load plugins for modular loadin and put it in.  
- es6-module-loader (used for ES5 browsers I think)

####Tools
- http://atom.io/ (his favorite tool)
- http://www.jetbrains.com/webstorm

####EcmaScript Next
- New Release Cadence.  ES7 is already in development.  ES2015 is the official name for (ES6).  There will be ES2016.  
- Whatever is done goes into the release!  
- async/await is coming.  (usable now in babel)
- decorators.  Python influence.  JavaGrass.  Similar to Attributes, but more powerful.  Allows you to rewrite the thing you decorated.  
- Object.observe will be builtin.

rob@bluespire.com


