/**
 * 
 */

var ngmodule = angular.module("NGModule", []);

var AngularJS18Controller = ngmodule.controller("NGController", function(
		$scope) {
	var employees = [ 
	                {ename : "AAA", ecomp:"C1",esalary:10000},
	                {ename : "BBB", ecomp:"C2",esalary:20000},
	                {ename : "CCC", ecomp:"C3",esalary:30000},
	                {ename : "DDD", ecomp:"C4",esalary:40000},
	                {ename : "EEE", ecomp:"C5",esalary:50000}
	              ];
	$scope.employees= employees;
	$scope.empdatafile = "EmpTableData.html"
});
