var studentMod = angular.module("studentmod", []);

var StudentObject = {
	fname : "Sharad",
	lname : "Ahire",
	location : "USA"
};

studentMod.controller("mycontroller", function($scope) {
	$scope.student = StudentObject;
});