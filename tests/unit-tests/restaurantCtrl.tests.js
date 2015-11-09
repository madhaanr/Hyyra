describe("RestaurantController tests", function () {

    var $scope, ctrl, $timeout, $ionicLoading;

    beforeEach(function () {

        module("Hyyra");

        inject(function ($rootScope, $controller, $q, _$timeout_, _$ionicLoading_) {

            $scope = $rootScope.$new();

            $timeout = _$timeout_;
            $ionicLoading = _$ionicLoading_;

            ctrl = $controller("RestaurantController", {
                $scope: $scope,
                $ionicLoading: $ionicLoading
            });
        });
    });

    it("should have a $scope variable", function() {
        expect($scope).toBeDefined();
    });
    
    it("should have a $ionicLoading.show() function", function() {
         expect($ionicLoading.show()).toBeDefined();
    });

});

/*describe('RestaurantController', function() {
	var controller, 
        cafeApiServiceMock,
        stateParamsMock,
        ionicLoadingMock;

    // TODO: Load the App Module
    beforeEach(module('Hyyra'));
    // TODO: Instantiate the Controller and Mocks
    beforeEach(inject(function($controller,$q) {  
        deferred = $q.defer();
    // mock dinnerService
    cafeApiServiceMock = {
        getRestaurant: jasmine.createSpy('getRestaurant spy')
                      .and.returnValue(deferred.promise)           
    };

    // mock $state
    stateParamsMock = jasmine.createSpyObj('$stateParams spy', ['1']);

    // mock $ionicPopup
    ionicLoadingMock = jasmine.createSpyObj('$ionicLoading spy', ['Loading']);

    // instantiate LoginController
    controller = $controller('LoginController', { 
                    '$ionicLoading': ionicLoadingMock, 
                    '$stateParams': stateParamsMock, 
                    'cafeApiServiceService': cafeApiServiceMock }
                 );
    }));

    describe('getRestaurant', function() {

        beforeEach(inject(function(_$rootScope_) {  
            $rootScope = _$rootScope_;
            controller.getRestaurant();
        }));
        // TODO: Call doLogin on the Controller

        it('should call getRestaurant on cafeApiService', function() {
            expect(cafeApiServiceMock.getRestaurant).toHaveBeenCalledWith(stateParamsMock.restaurantId); 
        });

        describe('when the getRestaurant is executed,', function() {
            it('if successful, should get the Menu', function() {

                // TODO: Mock the login response from DinnerService

                expect(ionicLoadingMock.go).toHaveBeenCalledWith('my-dinners');
            });

        });
    })
});*/