(function () {
    'use strict';
    angular
        .module('Hyyra')
        .controller('SelectedRestaurantsController', SelectedRestaurantsController);

    SelectedRestaurantsController.$inject = ['$scope','cafeApiService'];

    function SelectedRestaurantsController($scope,cafeApiService) {
         var promise=cafeApiService.getSelectedRestaurants();
         promise.then(function(restaurants) {
            console.log(restaurants);
            $scope.restaurants=restaurants;
         });
    }
})();