(function () {
    'use strict';
    angular
        .module('Hyyra')
        .controller('RestaurantController', RestaurantController);

    RestaurantController.$inject = ['$scope','$ionicLoading','restaurant'];

    function RestaurantController($scope,$ionicLoading,restaurant) {
        $scope.restaurant = restaurant;
    }
})();