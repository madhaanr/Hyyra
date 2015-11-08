(function () {
    'use strict';
    angular.module('Hyyra')
        .controller('SelectedRestaurantsController', SelectedRestaurantsController);

    SelectedRestaurantsController.$inject = ['$scope', '$ionicLoading', 'cafeApiService'];

    function SelectedRestaurantsController($scope, $ionicLoading, cafeApiService) {
        $ionicLoading.show({
            content: 'Loading',
            animation: 'fade-in',
            showBackdrop: true,
            maxWidth: 200,
            showDelay: 0
        });
        var promise = cafeApiService.getSelectedRestaurants();
        promise.then(function (restaurants) {
            $ionicLoading.hide();
            $scope.restaurants = restaurants;
        });
    }
})();