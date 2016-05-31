/**
 * 
 */

var MyModule = angular.module("myModule", []).controller("myController",
		function($scope) {
			$scope.message = "message: Hello World!!";
		});

MyModule.controller("compController", function($scope) {

	var student = {
		fname : "Sharad",
		lname : "Ahire",
		gender : "Male"
	};
	$scope.student = student;
});
