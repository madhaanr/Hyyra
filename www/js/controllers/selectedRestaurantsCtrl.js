(function () {
    'use strict';
    angular
        .module('Hyyra')
        .controller('SelectedRestaurantsController', SelectedRestaurantsController);

    SelectedRestaurantsController.$inject = ['selectedRestaurants', '$scope'];

    function SelectedRestaurantsController(selectedRestaurants, $scope) {
        $scope.selectedRestaurants = selectedRestaurants;
        $scope.checkboxModel = {};
    }
})();