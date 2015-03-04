# AngularIntro
Angular thinks of HTML as if it had been designed to build applications instead of documents.  Angular supports unit tests and end to end tests.  Angular is an MV* framework consisting of controllers, views and services.

###https://docs.angularjs.org/tutorial

- npm start (starts a local web server)
- http://localhost:8000/app/ (local test server for angular demo on angularjs.org)
- http://jasmine.github.io/1.3/introduction.html#section-Setup_and_Teardown
- Angular uses spinal-case for its custom attributes and camelCase for the corresponding directives which implement them
- angular.js registers a callback that will be executed by the browser when the containing HTML page is fully downloaded.  Angular looks for the nGApp directive and if it is found it bootstraps the page.
  - In Angular, the view is a projection of the model through the HTML template. This means that whenever the model changes, Angular refreshes the appropriate binding points, which updates the view.
  - ng directives : https://docs.angularjs.org/api/ng/directive/ngRepeat
  - Scope: https://docs.angularjs.org/api/ng/type/$rootScope.Scope
 - beforeEach(module('phonecatApp')); : useful for loading modules before a test.
###Node.js
- inject(function($controller) is a function used for DI.  $controller is a service for retrieving a controller by name

- Jade is a view engine for node.
- layout.jade is a master page.
- 

There are 3 important things that happen during the app bootstrap:

1. The injector that will be used for dependency injection is created.

2. The injector will then create the root scope that will become the context for the model of our application.

3. Angular will then "compile" the DOM starting at the ngApp root element, processing any directives and bindings found along the way.

- https://docs.angularjs.org/guide/expression

- A module has a collection of controllers which has a collection of models.
- Jade is a node view.

###John Papa course
- https://github.com/johnpapa/ng-demos
- http://docs.mongodb.org/manual/tutorial/install-mongodb-on-os-x/
- cc-bmean : code camper, breeze, mongo express, angular, node
 (larger app sample)
 - npm install -g (global intall so things are available system wide)
 - gulp : Task automation system. Simplifies running apps.
 - bower : Package Manager.
 - karma : unit testing
 - nodemon : restarts node when you make changes on server
 - run npm install to intall everything in package.json
 - gulp serve-dev (starts server)
 - Ran into errors

###Modules 

- Modules: basic building blocks of angular.  Everything exists inside a module. 
- Small applications should use 1 module.  Shared pieces or testability are reasons to split into multiple modules.
- Modules can depend on other modules.
- The scope is not the module

- Angular Seed gives you a starting point for creating your own applications.
- Server that angular seed comes with does not store data so not really useable.
- Downloading:  https://github.com/angular/angular-seed (click Download ZIP in right sidebar)
- Running angular seed:  
  - npm install
  - npm start (starts server on port 8000)


###Notes
- Directives work in many browsers vs HTML5 which only supports later browsers.
- Unit Testing done with Karma (aka Testacular).  
- End To End Testing done with Protractor.
- Extends HTML with Directives
- Web Components allow you to make encapulated components and widgets.  Encapsulates 
HTML, JS, CSS
- ng-controller="HelloWorldCtrl" binds an HTML element with {{content}} to a controller
- Supports Object.Observe (I think this is a form of two-way binding)
- Supports Dirty Binding (E.G. just change JS and the bound textbox also updates)
- Supports Dependency Injection
- Pluralsight uses custom web-server that is lightweight and OS portable.
- Run server.sh or server.bat to start the web-server.
- web-server is powered by node.

####Documentation
- Developer Documentation: https://docs.angularjs.org/guide

####Git notes
- https://help.github.com/articles/changing-a-remote-s-url/
- https://help.github.com/articles/creating-releases/

