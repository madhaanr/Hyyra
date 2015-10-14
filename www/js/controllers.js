Hyy.controller('HyyraController', function($scope,HyyraService) {
  $scope.title = "Hyyra";
  HyyraService.getData(function(data){
    $scope.restaurants = data;
  }); 
});