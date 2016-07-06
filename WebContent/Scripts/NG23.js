/**
 * 
 */

var anchorApp = angular.module("AnchorApplication", []);

var ngcontroller = anchorApp.controller("AnchorController", function($scope, $location, $anchorScroll, $http) {

					$http.get("http://localhost:8080/QuickStart2AngularJS/rest/EmployeeService/listBU")
						 .then(function(response) {
							 $scope.businessUnits = response.data;
						});

					$http.get("http://localhost:8080/QuickStart2AngularJS/rest/EmployeeService/employees")
					 .then(function(response) {
						 $scope.employees = response.data;
					});

					$scope.navigate = function(location) {
						$location.hash(location)
						$anchorScroll();
					}

});
