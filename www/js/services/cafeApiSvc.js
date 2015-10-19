"use strict";
Hyy.factory('cafeApiService', function ($http,$q) {
    var basePath = "http://messi.hyyravintolat.fi/publicapi/";
    var restaurants = {};
    var restaurant = {};
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
			$http.get(basePath+'restaurant/'+id).then(function(response){
				restaurant = response.data;
				dfd.resolve(restaurant);
			});
            return dfd.promise;
		}
	}
});