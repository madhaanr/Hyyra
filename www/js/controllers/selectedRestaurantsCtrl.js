(function () {
    'use strict';
    angular
        .module('Hyyra')
        .controller('SelectedRestaurantsController', SelectedRestaurantsController);

    SelectedRestaurantsController.$inject = ['$localStorage', '$scope','selectedRestaurants'];

    function SelectedRestaurantsController($localStorage, $scope, selectedRestaurants) {
        $scope.selectedRestaurants = selectedRestaurants;
    }
})();