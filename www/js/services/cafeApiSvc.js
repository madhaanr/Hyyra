(function () {
	'use strict';
	angular
		.module('Hyyra')
		.factory('cafeApiService', cafeApiService);

	cafeApiService.$inject = ['$http', '$q', 'storageService'];

	function cafeApiService($http, $q, storageService) {
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

		function getSelectedRestaurants() {
			var paths = [];
			for (var id in storageService.storedRestaurants().restaurant) {
				if (storageService.storedRestaurants().restaurant[id]) {
					paths.push($http.get(basePath + 'restaurant/' + id));
				}
				else {
					storageService.removeRestaurant(id);
				}
			}
			return $q.all(paths).then(function (response) {
				return response;
			});
		}
	};
})();