#Setup Process

- "Transpiler" : Translates ES6 into ES5
- Babel
- "Try it out"

###let

let allows us to define variables.  var only has two scopes:  global and function (0 or 100).  let gives us block scope!

**always use let over var to avoid variable hoisting in functions**

####Demo (powered by jasmine and Karma)

- cd ~/Programming/Personal/ES6BrownBag/
- babel src --watch --out-dir tests
- karma start

###const

- const will have block scoping just like the let keyword.  

##Destructuring

