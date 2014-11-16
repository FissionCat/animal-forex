(function() {
    var animalforexApp = angular.module('animalforexApp', ['ngRoute']);

    animalforexApp.config(function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'pages/home.html'
            })
            .when('/list', {
                templateUrl: 'pages/list.html',
                controller: 'ItemTableCtrl'
            })
            .when('/offers', {
                templateUrl: 'pages/offers.html'
            });

        $locationProvider.html5Mode(true);
    });

    animalforexApp.controller('ItemTableCtrl', ['$http', '$scope', function($http, $scope) {
        $scope.items = [];
        $http.get('/inventory.json')
            .success(function(data) {
                $scope.items = data;
            }).error(function(data, status) {
                // TODO: show an error message
                console.log('Error', data, status);
            });
    }]);
})();
