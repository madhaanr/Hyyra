(function () {
	'use strict';
	angular
		.module('Hyyra')
		.factory('cafeApiService', cafeApiService);

	cafeApiService.$inject = ['$http'];

	function cafeApiService($http) {
		var basePath = "http://messi.hyyravintolat.fi/publicapi/";
		return {
			getRestaurants: getRestaurants,
			getRestaurant: getRestaurant
		}
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
	};
})();