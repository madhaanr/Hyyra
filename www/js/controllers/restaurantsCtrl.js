(function () {
    'use strict';
    angular
        .module('Hyyra')
        .controller('RestaurantsController', RestaurantsController);

    RestaurantsController.$inject = ['$scope','$localStorage','restaurants'];

    function RestaurantsController($scope,$localStorage,restaurants) {
        $scope.restaurants = restaurants;
        $scope.$storage = $localStorage;
    }
})();