/**
 * 
 */

var AngularJS08 = angular.module("AngularJS12Module", []).controller(
		"getAllEmployees", function($scope) {
			var employees = [ {
				fname : "AA",
				dob : new Date("January 1, 1990"),
				gender : "Male",
				city : "Nashik",
			}, {
				fname : "AB",
				dob : new Date("June 23, 1984"),
				gender : "Female",
				city: "Pune"
			}, {
				fname : "AAB",
				dob : new Date("February 10, 1990"),
				gender : "Female",
				city : "Malegaon"
			}, {
				fname : "AAAA",
				dob : new Date("March 1, 2000"),
				gender : "Male",
				city : "Solapur"
			}, {
				fname : "ZA",
				dob : new Date("July 7, 1994"),
				gender : "Female",
				city : "Kolhapur"
			}, {
				fname : "xAx",
				dob : new Date("November 25, 1985"),
				gender : "Male",
				city : "Nagpur"
			}, {
				fname : "ssA",
				dob : new Date("January 11, 1989"),
				gender : "Male",
				city : "AhmedNager"
			} ];

			$scope.employees = employees;

		});