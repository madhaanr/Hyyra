Hyy.controller('HyyraController', function ($scope) {
  $scope.testing = "testing";
});
Hyy.controller('RestaurantsController', function ($scope, cafeApiService) {
  cafeApiService.getRestaurants(function (data) {
    $scope.restaurants = data;
  });
});
Hyy.controller('RestaurantController', function($scope, cafeApiService) {
  cafeApiService.getRestaurant(function(data) {
    $scope.restaurant = data;
  });
});
Hyy.controller('RestaurantsInAreaController', function($scope, cafeApiService) {
  cafeApiService.getRestaurantsInArea(function(data) {
    $scope.restaurantsInArea = data;
  });
});