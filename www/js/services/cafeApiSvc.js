(function () {
	'use strict';
	angular
		.module('Hyyra')
		.factory('cafeApiService', cafeApiService);

	cafeApiService.$inject = ['$http','$q'];

	function cafeApiService($http) {
		var basePath = "http://messi.hyyravintolat.fi/publicapi/";
		
		return {
			getRestaurants: getRestaurants,
			getRestaurant: getRestaurant,
			getSelectedRestaurants: getSelectedRestaurants
		};
		
		function getRestaurants() {
			return $http.get(basePath + 'restaurants').then(function (response) {
				return response.data;
			});
		};
		
		function getRestaurant(id) {
			return $http.get(basePath + 'restaurant/' + id).then(function (response) {
				return response.data;
			});
		};
		
		function getSelectedRestaurants(restaurantIds,$q) {
			var paths = [];
			restaurantIds.forEach(function(id) {
				paths.push($http.get(basePath+'restaurant/'+id));
			});
			
			$q.all(paths).then(function(response) {
				return response.data;
			});
		}
	};
})();