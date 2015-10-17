Hyy.factory('cafeApiService', function ($http,$q) {
    var basePath = "http://messi.hyyravintolat.fi/publicapi/";
    var restaurants = {};
    var restaurant = [];
    return {
		getRestaurants: function(){
            var dfd=$q.defer();
			$http.get(basePath+'restaurants').then(function(response) {
				restaurants = response.data;
                dfd.resolve(restaurants);
			});
            return dfd.promise;
		},
		getRestaurant: function(id){
            var dfd=$q.defer();
			return $http.get(basePath+'restaurant/'+id).then(function(response){
				restaurant = response.data;
				dfd.resolve(restaurant);
			});
            return dfd.promise;
		}
	}
    /*
    this.getRestaurants = function (callback) {
        $http({
            method: 'GET',
            url: basePath + "restaurants",
        }).success(function (data) {
            callback(data);
        }).error(function () {
            return false;
        });
    }*/
/*
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
    } */
});