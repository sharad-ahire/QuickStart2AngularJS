var demoapp = angular.module("demoapp", [ "ngRoute" ]);

demoapp.config(function($routeProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl : 'templates/home.html',
            controller  : 'mainController'
        })
        
        .when('/home', {
            templateUrl : 'templates/home.html',
            controller  : 'mainController'
        })

        // route for the about page
        .when('/about', {
            templateUrl : 'templates/about.html',
            controller  : 'aboutController'
        })

        // route for the contact page
        .when('/contact', {
            templateUrl : 'templates/contact.html',
            controller  : 'contactController'
        });
});


//create the controller and inject Angular's $scope
demoapp.controller('mainController', function($scope) {
    // create a message to display in our view
    $scope.message = 'Everyone come and see how good I look!';
});

demoapp.controller('aboutController', function($scope) {
    $scope.message = 'Look! I am an about page.';
});

demoapp.controller('contactController', function($scope) {
    $scope.message = 'Contact us!!. This is just a demo.';
});