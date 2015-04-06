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
