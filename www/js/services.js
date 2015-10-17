Hyy.factory('cafeApiService', function ($http) {
    var basePath = "http://messi.hyyravintolat.fi/publicapi/";
    
    this.getRestaurants = function (callback) {
        $http({
            method: 'GET',
            url: basePath + "restaurants",
        }).success(function (data) {
            callback(data);
        }).error(function () {
            return false;
        });
    }

    this.getRestaurant = function (callback, id) {
        $http({
            method: 'GET',
            url: basePath + "restaurant/" + id,
        }).success(function (data,id) {
            callback(data);
        }).error(function () {
            return false
        });
    }

    this.getRestaurantsInArea = function (callback, id) {
        id = 1;
        $http({
            method: 'GET',
            url: basePath + "restaurants/" + id,
        }).success(function (data) {
            if (callback) callback(data);
            else return data;
        }).error(function () {
            alert("error");
        });
    }
});