#About

This documentation is based off the developer guide on docs.angularjs.org

#Directives

In Angular, the only place where an application should access the DOM is within directives. This is important because artifacts that access the DOM are hard to test. If you need to access the DOM directly you should write a custom directive for this. The directives guide explains how to do this.


#Expressions

`{{expression}}` : Angular expressions are like javascript expressions with [some exceptions](https://docs.angularjs.org/guide/expression)

##Filters

A filter formats the value of an expression for display to the user.  Can be used in expressions with the following sytnax:

```angular.js
{{ expression | filter }}
```


#Controllers

The purpose of controllers is to expose variables and functionality to expressions and directives.

`ng-controller` directive tells Angular that the controller is responsible for the element with the directive and all of the element's children. The syntax `controllerName as variableName` tells Angular to instantiate the controller and save it in the `variableName` in the current scope.

Angular will instantiate a new Controller object, using the specified Controller's constructor function. A new child scope will be available as an injectable parameter to the Controller's constructor function as $scope.

Use controllers to:

- Set up the initial state of the $scope object.
- Add behavior to the $scope object.

Do not use controllers to:

- Manipulate DOM — Controllers should contain only business logic. Putting any presentation logic into Controllers significantly affects its testability. Angular has databinding for most cases and directives to encapsulate manual DOM manipulation.
- Format input — Use angular form controls instead.
- Filter output — Use angular filters instead.
- Share code or state across controllers — Use angular services instead.
- Manage the life-cycle of other components (for example, to create service instances).

##$scope is the viewModel

Unlike services, there can be many instances of the same type of controller in an application.

##inline injection annotation

Inline injection annotation is a means of dependency injection that uses an array syntax of the form:

```javascript
var myApp = angular.module('myApp',[]);

myApp.controller('GreetingController', ['$scope', function($scope) {
  $scope.greeting = 'Hola!';
}]);
```

##Angular expressions

Angular Expressions are of them form `{{ double(num) }}`

Here I call a method defined in the controller and attached via:

```javascript
var myApp = angular.module('myApp',[]);

myApp.controller('DoubleController', ['$scope', function($scope) {
  $scope.double = function(value) { return value * 2; };
}]);
```
