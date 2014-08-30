(function() {
    var animalforexApp = angular.module('animalforexApp', []);

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
