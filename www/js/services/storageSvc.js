(function () {
	'use strict';
	angular
		.module('Hyyra')
		.factory('storageService', storageService);

	storageService.$inject = ['$localStorage'];

	function storageService($localStorage) {

		return {
			storedRestaurants: storedRestaurants
		}

		function storedRestaurants() {
			return $localStorage;
		}
	}
})();