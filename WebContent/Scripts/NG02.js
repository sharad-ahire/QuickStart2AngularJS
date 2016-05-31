var myModule = angular.module("mymodule", []);

var myController = function($scope) {
	$scope.message = "Hello from AngularJS controller";
}

myModule.controller("mycontroller", myController);