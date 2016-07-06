/**
 * 
 */

var ngmodule = angular.module("NGModule", []);

var ngcontroller = ngmodule.controller("NGController", function($scope, $log , MathService) {
	$scope.addNumbers = function (number1,number2) {
		$scope.output = MathService.addition(number1, number2)
	}
});
