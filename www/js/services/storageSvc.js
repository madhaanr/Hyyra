(function () {
	'use strict';
	angular.module('Hyyra')
		   .factory('storageService', storageService);

	storageService.$inject = ['$localStorage'];

	function storageService($localStorage) {
		return {
			storedRestaurants: storedRestaurants,
			removeRestaurant: removeRestaurant
		}
		function storedRestaurants() {
			return $localStorage;
		}
		function removeRestaurant(id) {
			delete $localStorage.restaurant[id];
		}
	}
})();