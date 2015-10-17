Hyy.controller('RestaurantsController', function ($scope, restaurants) {
  //cafeApiService.getRestaurants(function (data) {
    $scope.restaurants = restaurants;
  //});
});
Hyy.controller('RestaurantController', function ($scope, restaurant) {
  //cafeApiService.getRestaurant(function (data,restaurantId) {
    $scope.restaurant = restaurant;
  //});
});
Hyy.controller('RestaurantsInAreaController', function ($scope, cafeApiService) {
  cafeApiService.getRestaurantsInArea(function (data,id) {
    $scope.restaurantsInArea = data;
  });
});