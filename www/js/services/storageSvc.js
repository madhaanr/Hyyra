(function () {
	'use strict';
	angular
		.module('Hyyra')
		.factory('storageService', storageService); 
	
	storageService.$inject = ['$localStorage'];
	
	function storageService($localStorage) {
		
		return {
			getStoredRestaurants: getStoredRestaurants,
			storeRestaurants: storeRestaurants
		}
		
		function getStoredRestaurants() {
			return $localStorage;
		}
		
		function storeRestaurants(selectedRestaurants) {
	 	
		}
		
	}
});