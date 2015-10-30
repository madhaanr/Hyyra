(function () {
    'use strict';
    angular
        .module('Hyyra')
        .controller('RestaurantController', RestaurantController);

    RestaurantController.$inject = ['restaurant','$scope','$ionicLoading'];

    function RestaurantController(restaurant,$scope) {
        //var vm=this;
        $scope.restaurant = restaurant;
    }
})();