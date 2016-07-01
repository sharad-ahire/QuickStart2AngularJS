/**
 * 
 */

var ngmodule = angular.module("NGModule", []);

var AngularJS18Controller = ngmodule.controller("NGController",function($scope, $http, $log) {
			
			var successCallback = function(response) {
				$scope.respStatus = response.status;
				$scope.respMessage = 'Success';
				$scope.employees = response.data;
				$log.info(response);
			};
			
			var errorCallback = function(reason) {
				$scope.respStatus = reason.status;
				$scope.respMessage = reason.data;
				$log.info(reason);
			};					
			
			$http.get('http://localhost:8080/QuickStart2AngularJS/rest/EmployeeService/employees').then(successCallback, errorCallback);
});



