(function () {
    'use strict';
    angular
        .module('Hyyra')
        .controller('SelectedRestaurantsController', SelectedRestaurantsController);

    SelectedRestaurantsController.$inject = ['$scope','cafeApiService'];

    function SelectedRestaurantsController($scope,cafeApiService) {
         var promise=cafeApiService.getSelectedRestaurants();
         console.log($scope.selected);
         promise.then(function(v) {
            console.log(v);
            $scope.selected=v;
         });
         //console.log($scope.selected.data);
    }
})();