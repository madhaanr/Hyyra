Hyy.controller('RestaurantsController', function ($scope, restaurants) {
    $scope.restaurants = restaurants;
    $scope.checkBoxModel = [];
});
Hyy.controller('RestaurantController', function ($scope, restaurant) {
    $scope.restaurant = restaurant;
});