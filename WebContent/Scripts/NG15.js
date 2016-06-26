/**
 * 
 */

var AngularJS15 = angular.module("AngularJS15Module", []);

var AngularJS15Controller = AngularJS15.controller("getAllEmployees", function(
		$scope) {
	var employees = [ {
		fname : "AAA",
		cname : "A1 Systems",
		accessLevel : 1,
	}, {
		fname : "BBB",
		cname : "B1 Systems",
		accessLevel : 2
	}, {
		fname : "CCC",
		cname : "C1 Systems",
		accessLevel : 3
	}, {
		fname : "DDD",
		cname : "D1 Systems",
		accessLevel : 4
	} ];

	$scope.employees = employees;

});

var AngularJS15Filter = AngularJS15.filter("convertToAL", function() {

	return function(level) {

		switch (level) {
		case 1:
			return "Employee";
		case 2:
			return "Consultant";
		case 3:
			return "Temp Employee";
		case 4:
			return "Guest";
		default:
			return "Unauthorized";
		}

	}

});