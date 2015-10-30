(function () {
	'use strict';
	angular
		.module('Hyyra')
		.factory('cafeApiService', cafeApiService);
		
		cafeApiService.$inject = ['$http','$q'];
			
		function cafeApiService($http,$q) {	
			var basePath = "http://messi.hyyravintolat.fi/publicapi/";
			var restaurants = {};
			var restaurant = {};
			return {
				getRestaurants: getRestaurants,
				getRestaurant: getRestaurant
			}
			function getRestaurants() {
					var dfd = $q.defer();
					$http.get(basePath + 'restaurants').then(function (response) {
						restaurants = response.data;
						dfd.resolve(restaurants);
					});
					return dfd.promise;	
			}
			function getRestaurant(id) {
					var dfd = $q.defer();
					$http.get(basePath + 'restaurant/' + id).then(function (response) {
						restaurant = response.data;
						dfd.resolve(restaurant);
					});
					return dfd.promise;
			}
		};
})();