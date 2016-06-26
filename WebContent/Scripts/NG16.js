/**
 * 
 */

var AngularJS15 = angular.module("AngularJS16Module", []);

var AngularJS15Controller = AngularJS15.controller("getAllEmployees", function(
		$scope) {
	var employees = [ {
		fname : "AAA",
		cname : "A1 Systems",
		salary : 10000,
	}, {
		fname : "BBB",
		cname : "B1 Systems",
		salary : 20000
	}, {
		fname : "CCC",
		cname : "C1 Systems",
		salary : 30000
	}, {
		fname : "DDD",
		cname : "D1 Systems",
		salary : 40000
	} ];

	$scope.employees = employees;

});
