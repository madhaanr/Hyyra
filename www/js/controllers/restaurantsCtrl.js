(function () {
    'use strict';
    angular.module('Hyyra')
           .controller('RestaurantsController', RestaurantsController);

    RestaurantsController.$inject = ['$scope','$ionicLoading','cafeApiService','storageService'];

    function RestaurantsController($scope,$ionicLoading,cafeApiService,storageService) {
        $ionicLoading.show({
            content: 'Loading',
            animation: 'fade-in',
            showBackdrop: true,
            maxWidth: 200,
            showDelay: 0
        });
        var promise = cafeApiService.getRestaurants();
        promise.then(function (restaurants) {
            $ionicLoading.hide()
            $scope.restaurants = restaurants;
        });
        $scope.storage = storageService.storedRestaurants();
    }
})();