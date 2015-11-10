describe('storageService', function () {
	var storageSvcMock;
	beforeEach(module('Hyyra'));

	beforeEach(angular.mock.inject(function (storageService,$injector) {
		storageSvcMock = $injector.get('storageService');
	}));
	it('localstorage remove method should be defined', function () {
		expect(storageSvcMock.removeRestaurant).toBeDefined();
	});
	it('localstorage get all restaurants method should be defined', function () {
		expect(storageSvcMock.storedRestaurants()).toBeDefined();
	});
});