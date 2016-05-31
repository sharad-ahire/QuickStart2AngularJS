/**
 * 
 */

var MyModule = angular.module("mymodule", []);

var countryObject = {
	name : "India",
	currency : "INR",
	flag : "Images/India_Flag.jpg",
	description : "The National Flag of India is a horizontal rectangular tricolour of deep saffron, white and India green; with the Ashoka Chakra, a 24-spoke wheel, in navy blue at its centre."
}

var countryController = function($scope) {
	$scope.country = countryObject;
}

MyModule.controller("mycontroller", countryController);
