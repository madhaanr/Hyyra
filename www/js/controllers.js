Hyy.controller('HyyraController', function($scope) {
    $scope.testing="testing";
});
Hyy.controller('cafeApiController', function($scope,cafeApiService) {
  cafeApiService.getRestaurants(function(data){
    $scope.restaurants = data;
  });
});