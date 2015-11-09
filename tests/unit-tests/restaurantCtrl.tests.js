describe('RestaurantController', function() {
	var controller, 
        cafeApiServiceMock,
        stateParamsMock,
        ionicLoadingMock;

    // TODO: Load the App Module

    // TODO: Instantiate the Controller and Mocks

    describe('getRestaurant', function() {

        // TODO: Call doLogin on the Controller

        it('should call getRestaurant on cafeApiService', function() {
            expect(cafeApiServiceMock.getRestaurant).toHaveBeenCalledWith(stateParamsMock.restaurantId); 
        });

        describe('when the getRestaurant is executed,', function() {
            it('if successful, should get the Menu', function() {

                // TODO: Mock the login response from DinnerService

                expect(stateMock.go).toHaveBeenCalledWith('my-dinners');
            });

        });
    })
});