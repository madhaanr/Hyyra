(function () {
    'use strict';
    angular.module('Hyyra')
           .controller('RestaurantController', RestaurantController);

    RestaurantController.$inject = ['$scope','$ionicLoading','$stateParams','cafeApiService'];

    function RestaurantController($scope,$ionicLoading,$stateParams,cafeApiService) {
        $ionicLoading.show({
            content: 'Loading',
            animation: 'fade-in',
            showBackdrop: true,
            maxWidth: 200,
            showDelay: 0
        });
        var promise = cafeApiService.getRestaurant($stateParams.restaurantId);
        promise.then(function (restaurant) {
            $ionicLoading.hide()
            $scope.restaurant = restaurant;
        });

    }
})();