describe("RestaurantController tests", function () {

    var $scope, ctrl, $timeout, $ionicLoading,$stateParams,cafeApiService;

    beforeEach(function () {
        module("Hyyra");

        inject(function ($rootScope, $controller, $q, _$timeout_, _$ionicLoading_,_$stateParams_,_cafeApiService_) {
            $scope = $rootScope.$new();

            $timeout = _$timeout_;
            $ionicLoading = _$ionicLoading_;
            $stateParams = _$stateParams_;
            cafeApiService=_cafeApiService_;
            
            cafeApiService.getRestaurant = function() {
                var deferred = $q.defer();
                deferred.resolve('Remote call result');
                return deferred.promise;   
            };
            
            ctrl = $controller("RestaurantController", {
                $scope: $scope,
                $ionicLoading: $ionicLoading,
                $stateParams: $stateParams,
                cafeApiService: cafeApiService
            });
        });
    });

    it("should have a $scope variable", function() {
        expect($scope).toBeDefined();
    });
    
    it("should have a $ionicLoading.show() function", function() {
         expect($ionicLoading.show()).toBeDefined();
    });
    it('can do remote call', inject(function() {
        cafeApiService.getRestaurant(11)
            .then(function(data) {
            console.log("success");
        });
    }));
});