/**
 * 
 */

var AngularJS08 = angular.module("AngularJS08Module", []).controller(
		"getAllEmployees", function($scope) {
			var employees = [ {
				fname : "sbasbas",
				dob : new Date("January 1, 1990"),
				gender : "Male",
				Salary : "2323.239",
			}, {
				fname : "ewrer",
				dob : new Date("June 23, 1984"),
				gender : "Female",
				Salary : "32434.25"
			}, {
				fname : "lajaja",
				dob : new Date("February 10, 1990"),
				gender : "Female",
				Salary : "7237.98"
			}, {
				fname : "weiiei",
				dob : new Date("March 1, 2000"),
				gender : "Male",
				Salary : "9898.78"
			}, {
				fname : "asww",
				dob : new Date("July 7, 1994"),
				gender : "Female",
				Salary : "2323.364"
			}, {
				fname : "vbvb",
				dob : new Date("November 25, 1985"),
				gender : "Male",
				Salary : "78788.786"
			}, {
				fname : "erer",
				dob : new Date("January 11, 1989"),
				gender : "Male",
				Salary : "2323.364"
			} ];

			$scope.employees = employees;
			$scope.rowLimit = 3;

});