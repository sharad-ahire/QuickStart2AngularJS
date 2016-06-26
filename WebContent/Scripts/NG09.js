/**
 * 
 */

var AngularJS08 = angular.module("AngularJS09Module", []).controller(
		"getAllEmployees", function($scope) {
			var employees = [ {
				fname : "AA",
				dob : new Date("January 1, 1990"),
				gender : "Male",
				salary : "10000",
			}, {
				fname : "AB",
				dob : new Date("June 23, 1984"),
				gender : "Female",
				salary : "20000"
			}, {
				fname : "AAB",
				dob : new Date("February 10, 1990"),
				gender : "Female",
				salary : "25000"
			}, {
				fname : "AAAA",
				dob : new Date("March 1, 2000"),
				gender : "Male",
				salary : "50000"
			}, {
				fname : "ZA",
				dob : new Date("July 7, 1994"),
				gender : "Female",
				salary : "5000"
			}, {
				fname : "xAx",
				dob : new Date("November 25, 1985"),
				gender : "Male",
				salary : "70000"
			}, {
				fname : "ssA",
				dob : new Date("January 11, 1989"),
				gender : "Male",
				salary : "65000"
			} ];

			$scope.employees = employees;
			$scope.sortColumn = 'fname';
});