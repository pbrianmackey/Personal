#Setup Process

- "Transpiler" : Translates ES6 into ES5
- Babel
- "Try it out"
- recommend running: npm install -g karma-cli (global accessibility of Karma)
- also recommend: npm install karma-jasmine karma-chrome-launcher --save-dev

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

- Destructuring comes from other languages.  It's a powerful feature.
- It may be one of the more difficult ones to grasp at first.
- Demo

##Default parameter values

- Same syntax as C# function(name="Brian")
- Null will not 
