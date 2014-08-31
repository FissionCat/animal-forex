(function() {
    var animalforexApp = angular.module('animalforexApp', ['ngRoute']);

    animalforexApp.config(function($routeProvider) {
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
    });

    animalforexApp.controller('ItemTableCtrl', ['$scope', function($scope) {
        $scope.items = [{
            id: 1,
            name: 'amber'
        }, {
            id: 2,
            name: 'ammonite'
        }, {
            id: 3,
            name: 'modern wood chair'
        }];
    }]);
})();
