Hyy.service('cafeApiService', function ($http) {
    var basePath = "http://messi.hyyravintolat.fi/publicapi/";
    this.getRestaurants = function (callback) {
        $http({
            method: 'GET',
            url: basePath+"restaurants",
        }).success(function (data) {
            callback(data);
        }).error(function () {
            alert("error");
        });
    }
    
    this.getRestaurant = function(callback,id) {
        id=11;
        $http({
            method: 'GET',
            url: basePath+"restaurant/"+id,
        }).success(function (data) {
            callback(data);
        }).error(function () {
            alert("error");
        });
    }
    
    this.getRestaurantsInArea = function(callback,id) {
        id=1;
        $http({
            method: 'GET',
            url: basePath+"restaurants/"+id,
        }).success(function (data) {
            callback(data);
        }).error(function () {
            alert("error");
        });
    }
});