/**
 * 
 */

var AngularJS07 = angular.module("AngularJS07Module", []).controller(
		"getCount", function($scope) {
			$scope.count = 0;
			$scope.incrementCount = function() {
				$scope.count++;
			}
		}

);