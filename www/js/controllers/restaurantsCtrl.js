(function () {
    'use strict';
    angular
        .module('Hyyra')
        .controller('RestaurantsController', RestaurantsController);

    RestaurantsController.$inject = ['restaurants', '$scope'];

    function RestaurantsController(restaurants, $scope) {
        $scope.restaurants = restaurants;
        $scope.checkboxModel = {};
    }
})();