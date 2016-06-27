/**
 * 
 */

var AngularJS18 = angular.module("AngularJS18Module", []);

var AngularJS18Controller = AngularJS18.controller("getCountries", function(
		$scope) {

	var countries = [ 
	                {name : "India", cities : [ { name : "Nashik"}, { name : "Pune"} ] },
	                {name : "US", cities : [ { name : "Chicago"}, { name : "California"} ] }	                
	              ];

	$scope.countries = countries;

});
