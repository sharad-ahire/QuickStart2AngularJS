/**
 * 
 */

var anchorApp = angular.module("AnchorApplication", []);

var ngcontroller = anchorApp.controller("AnchorController", function($scope,
		$location, $anchorScroll) {
	$scope.goTo = function(location) {
		$location.hash(location)
		$anchorScroll();
	}
});
