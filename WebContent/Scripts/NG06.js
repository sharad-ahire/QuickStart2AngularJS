/**
 * 
 */

var AngularJS06 = angular.module("AngularJS06Module", []).controller(
		"getEmpInformation", function($scope) {
			var empObject = [ {
				fname : "emp1",
				lname : "sdksd",
				salary : "$10000"
			}, {
				fname : "emp2",
				lname : "smcl",
				salary : "$20000"
			}, {
				fname : "emp3",
				lname : "turutut",
				salary : "$30000"
			} ];

			$scope.employees = empObject;

		});

AngularJS06.controller("getCountryInformation", function($scope) {

	var countryObject = [
	                     { 
	                    	 name:"Maharashtra",
	                    	 cities:[
	                    	         {name:"Mumbai"},
	                    	         {name:"Pune"},
	                    	         {name:"Nashik"}
	                    	        ]
	                     },
	                     { 
	                    	 name:"Rajasthan",
	                    	 cities:[
	                    	         {name:"Jaipur"},
	                    	         {name:"Jodhpur"},
	                    	         {name:"Udaipur"}
	                    	        ]
	                     },
	                     { 
	                    	 name:"Uttar Pradesh",
	                    	 cities:[
	                    	         {name:"Lucknow"},
	                    	         {name:"Allahabad"},
	                    	         {name:"Varanasi"}
	                    	        ]
	                     }
	                   ];

	$scope.contryInfo = countryObject;
});