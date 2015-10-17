var Hyy = angular.module('Hyyra', ['ionic']);
Hyy.run(function ($ionicPlatform) {
  $ionicPlatform.ready(function () {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
Hyy.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/')
  $stateProvider
    .state('restaurants', {
      url: '/',
      controller: 'RestaurantsController',
      templateUrl: 'templates/restaurants.html',
      resolve: {
        restaurants: function (cafeApiService) {
          return cafeApiService.getRestaurants();
        }
      }
    })
    .state('restaurant', {
      url: '/restaurant/:restaurantId',
      controller: 'SingleRestaurantController',
      templateUrl: 'templates/restaurant.html',
      resolve: {
        restaurant: function ($stateParams, cafeApiService) {
          return cafeApiService.getRestaurant($stateParams.restaurantId);
        }
      }
    })
});