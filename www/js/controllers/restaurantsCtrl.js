(function () {
    'use strict';
    angular
        .module('Hyyra')
        .controller('RestaurantsController', RestaurantsController);

    RestaurantsController.$inject = ['$scope', 'restaurants','storageService'];

    function RestaurantsController($scope, restaurants,storageService) {
        $scope.restaurants = restaurants;
        $scope.storage = storageService.storedRestaurants();
    }
})();