(function () {
    'use strict';
    angular
        .module('Hyyra')
        .controller('SelectedRestaurantsController', SelectedRestaurantsController);

    SelectedRestaurantsController.$inject = ['$scope','cafeApiService'];

    function SelectedRestaurantsController($scope,cafeApiService) {
         $scope.selected=cafeApiService.getSelectedRestaurants();
         console.log($scope.selected);
    }
})();