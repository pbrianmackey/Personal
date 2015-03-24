#Node.js

- Built on native code.  Executes javascript.
- All JS executed on Google V8 Engine.
- Visual Studio Plugin: http://nodejstools.codeplex.com/
- JS is compiled and cached like .NET code is.  So performance is similar.
  - In .NET JIT compiles code as needed and caches the machine language.
 - Out of the box node.js is just a wrapper around the Google V8 engine to execute code.
- Express creates a singleton web object

###Dependency Management
 - require("./whatever.js"), this is based on an idea called "commonjs".  Similar to requirejs, but different.
 - module.exports (aka exports): exports.first = "This is the first message."
  - Its better to use module.exports instead of just exports because js can get confused if assigning a function to just "exports" (don't know why)
 - var msgs = require("./msgs.js");
   - This example shows how require runs js and returns an object you can use.  Encapsulation.
   - Marrying require and modules exports allows you to create modular applications.
 - var msgs2 - require("./folderName")
   - If the folder contains a "index.js" file this file will be loaded as a starting point.  This is a naming convention that helps to hide depencies down lower in the chain.  E.G. ./foldername/index.js may have its own set of require() files.
 - require("./filename") first looks for a filename.js then looks for a filename/ folder.

###View Engines
 - layout.jade (master page)
 - EJS : embedded javascript (another view engine like jade. web forms like)
   - "npm install ejc-locals"
  - Vash : MVC (razor) like syntax "@model.item"

 ###Packages.json

 - Contains the current package information
 - Contains Optional (--save-optional), required (--save) and development (--save-dev) dependencies
 - npm install --save puts the item into package.json as a dependency.
 - npm init creates a package.json file.  Package.json sample:

 {
   "name": "FunWithNode",
   "version": "0.0.0",
   "description": "FunWithNode",
   "main": "app.js",
   "author": {
     "name": "Brian",
     "email": "asdf@asdf.local"
   },
   "dependencies": {
   	"underscore": "~1.6.0"
   }
 }

##Data Access

 JavaScript objects are typeless.  Greenfield vs Brownfield issue.  If you are brownfield bound to SQL then use a driver.  Use NoSQL or MongoDB on greenfield (document databases over relational DBMS).  

 Objects in the DB are weakly typed.  

####Drivers
 - massisve-js: MySQL, PostgreSQL
 - msnodesql: MS-SQL
   - difficult to build on windows, use (prebuilt version on windows)[https://github.com/jorgeazevedo/node-sqlserver-unofficial]
 - tedious: pure JS SQL.  slow
 - edge: ScriptCS and node.js interop
   - C# script

##NoSQL data stores

- Document or data structure storage.
- New way of querying.  Not relational.
- Hierarchical.
- built to run in parallel (sharding)
- Examples: MongoDB, RavenDB, Cassandra, Neo4j, Redis, CouchDB

###MongoDB

- Install MongoDB
- cd to installation path (all the way to /bin)
- md data
- mongod -dbpath data --httpinterface --rest (./data on Mac) (starts service)
- http://localhost:28017/ => Access MongoDB via HTTP
- local DB is akin to master in SQL
